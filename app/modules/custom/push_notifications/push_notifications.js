// This needs to be set to your GCM Sender ID.
var GCM_SENDER_ID = "gdirection-981";

// For code examples, look here:
// https://github.com/phonegap-build/PushPlugin

/**
 * Implements hook_deviceready().
 */

function push_notifications_deviceready() {
  try {
    // When the device is connected, if the user is anonymous we don't want to register a token
 //   if (Drupal.user.uid == 0) {
//    } else {
      push_notifications_register();
 //   }
  }
  catch (error) {
    console.log('push_notifications_deviceready - ' + error);
  }
}
function push_notifications_tokenHandler(token) {
  push_notifications_register_device_token(token);
}

function push_notifications_register() {
  var pushNotification;
  pushNotification = window.plugins.pushNotification;
  if (device.platform == 'android' || device.platform == 'Android') {
    pushNotification.register(push_notifications_successHandler, push_notifications_errorHandler, {"senderID": GCM_SENDER_ID, "ecb": "onNotificationGCM"});
  } else {
    pushNotification.register(push_notifications_tokenHandler, push_notifications_errorHandler, {"badge": "false", "sound": "true", "alert": "true", "ecb": "onNotificationAPN"});
  }
}
/**
 * Implements hook_services_postprocess().
 */
function push_notifications_services_postprocess(options, result) {
  try {
    // When the user login service resource is successful store a token
    if (options.service == 'user') {
      if (options.resource == 'login') {
        push_notifications_register();
      }
      else if (options.resource == 'logout') {
        push_notifications_delete_device_token();
      }
    }
  }
  catch (error) {
    console('push_notifications_services_postprocess - ' + error);
  }
}

function push_notifications_register_device_token(token) {
  var push_token = localStorage.getItem('push_notifications_token');
  if (push_token === null || push_token != token) {
    var data = {
      'token': token,
      'type': push_notifications_platform_token(device.platform),
    };
    // give other modules a chance to react to registering a push notification
    module_invoke_all('push_notifications_register');
    push_notifications_create(data, {
      success: function(result) {
        if (result['success'] == 1) {
          localStorage.setItem("push_notifications_token", token);
        }
      }
    });
  }
}

function push_notifications_delete_device_token() {
  var push_token = localStorage.getItem('push_notifications_token');
  if (push_token != null) {
    push_notifications_delete(push_token, {
      success: function(result) {
        if (result['success'] == 1) {
          window.localStorage.removeItem("push_notifications_token");
        }
      }
    });
  }
}

function push_notifications_successHandler(result) {
//  console.log('push_notifications_successHandler - ' + result);
}

function push_notifications_errorHandler(error) {
  console.log('push_notifications_errorHandler - ' + error);
}

function onNotificationGCM(e) {
  switch (e.event)
  {
    case 'registered':
      if (e.regid.length > 0) {
        push_notifications_register_device_token(e.regid);
      }
      break;
    case 'message':
      break;
    case 'error':
        console.log('onNotificationGCM -' . e.msg);
      break;
    default:
        console.log('onNotificationGCM - unknown event received');
      break;
  }
}

function onNotificationAPN(event) {
  if (event.alert) {
  }
  if (event.sound) {
    //navigator.notification.vibrate(2000);
  }
}

function push_notifications_create(data, options) {
  try {
    options.method = 'POST';
    options.path = 'push_notifications';
    options.service = 'push_notifications';
    options.resource = 'push_notifications';
    options.data = JSON.stringify(data);
    Drupal.services.call(options);
  }
  catch (error) {
    console.log('push_notifications_create - ' + data);
  }
}
function push_notifications_delete(token, options) {
  try {
    options.method = 'DELETE';
    options.path = 'push_notifications/' + token;
    options.service = 'push_notifications';
    options.resource = 'push_notifications';
    Drupal.services.call(options);
  }
  catch (error) {
    console.log('push_notifications_delete - ' + token);
  }
}

function push_notifications_platform_token(platform) {
  var token;
  switch (platform) {
    case "iOS":
      token = 'ios';
      break;
    case "Android":
      token = 'android';
      break;
    default:
      token = null;
      break;
  }
  return token;
}
