/**
 * Implements hook_form_alter().
 */
 var user_registrationpassword_timeout=null;
 var total_prev_order = 0;
 var user_registrationpassword_current_position = '';
 var user_registrationpassword_submit = false;
 
function user_registrationpassword_form_alter(form, form_state, form_id) {
  try {
    if (form_id == 'user_register_form') {
      // 2 - Require a verification e-mail, but let users set their password
      //     directly on the registration form. This means we only collect one
      //     e-mail address, and two password fields.
      switch (drupalgap.site_settings.user_registrationpassword_registration) {
        case '2':
          if (form.elements.conf_mail) {
            form.elements.conf_mail.access = false;
            form.elements.conf_mail.required = false;
            form.auto_user_login = false;
          }
          break;
      }
    }
  }
  catch (error) { console.log('user_registrationpassword_form_alter - ' + error); }
}


function user_registrationpassword_timeout_process(){
    if(drupalgap.loading){
        drupalgap_loading_message_hide();
    }
    user_registrationpassword_submit = false;
    user_registrationpassword_timeout = null;
    user_registrationpassword_connect = false;
    
    switch(user_registrationpassword_current_position){
        case 'node/add/order_get_courier':
        case 'node/add/order_get_transport':
        case 'node/add/order_get_shop':
            if(user_registrationpassword_submit){
                user_registrationpassword_current_position = '';
                drupalgap_goto('myorders');          
            }      
        break;
        default:
        user_registrationpassword_current_position = '';        
    }         
}

function user_registrationpassword_drupalgap_back(from, to){
    console.log("BACK FROM :" + from + " to : " + to);
    switch(from){
        case 'node/add/order_get_courier':
        case 'node/add/order_get_transport':
        case 'node/add/order_get_shop':
        //check orderan
        clearTimeout(user_registrationpassword_timeout);
        user_registrationpassword_timeout = null;
        user_registrationpassword_current_position = '';
    }    
    if(user_registrationpassword_timeout!=null){
        clearTimeout(user_registrationpassword_timeout);
        user_registrationpassword_timeout = null;
        user_registrationpassword_current_position = '';
    }
}
function user_registrationpassword_drupalgap_goto_preprocess(path){
   
    switch(path){
        case 'node/add/order_get_courier':
        case 'node/add/order_get_transport':
        case 'node/add/order_get_shop':
        //check orderan
        user_registrationpassword_current_position = path;
        break;
        default:
        if(user_registrationpassword_timeout!=null){
            clearTimeout(user_registrationpassword_timeout);
            user_registrationpassword_timeout = null;
            user_registrationpassword_current_position = '';
        }
    }    
}

function user_registrationpassword_services_postprocess(options, result){
    clearTimeout(user_registrationpassword_timeout);
    user_registrationpassword_timeout = null;
    
    drupalgap_loading_message_hide();
    user_registrationpassword_submit = false;

    if(options.path == 'node.json'){

        switch(options.bundle){
            case 'order_get_transport':
            case 'order_get_courier':
            case 'order_get_shop':
            if(options.method=='POST'){
                if(result.nid){
                    drupalgap_alert("Terima Kasih Atas Order Anda.");
                    user_registrationpassword_current_position = '';
                    drupalgap_goto('myorders'); 
                    result = {};  
                }
            }
        }
    }
    
}

function user_registrationpassword_services_preprocess(options){
    
    if(user_registrationpassword_timeout==null){
        user_registrationpassword_timeout = setTimeout(function(){user_registrationpassword_timeout_process();},40000);
    }
    
    if(options.path == 'node.json'){

        switch(options.bundle){
            case 'order_get_transport':
            case 'order_get_courier':
            case 'order_get_shop':
            if(options.method=='POST'){
                console.log("OPTION PRE PROCESS");
                options.test = 'test1';
                user_registrationpassword_submit = true;                
            }
        }
    }
}

