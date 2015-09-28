/**************|
 * Development |
 **************/

// Uncomment to clear the app's local storage cache each time the app loads.
//window.localStorage.clear();

// Set to true to see console.log() messages. Set to false when publishing app.
Drupal.settings.debug = true;

/****************************************|
 * Drupal Settings (provided by jDrupal) |
 ****************************************/
 
/* Drupal Paths */
 
// Site Path (do not use a trailing slash)
Drupal.settings.site_path = 'http://test.getranz.com'; // e.g. http://www.example.com

// Default Services Endpoint Path
Drupal.settings.endpoint = 'drupalgap';

// Files Directory Paths (use one or the other)
Drupal.settings.file_public_path = 'sites/default/files';
//Drupal.settings.file_private_path = 'system/files';

// The Default Language Code
Drupal.settings.language_default = 'und';

/* Drupal Caching */

// Set to true to enable local storage caching.
Drupal.settings.cache.entity.enabled = false;
Drupal.settings.cache.views.enabled = false;

// Number of seconds before cached copy expires. Set to 0 to cache forever, set
// to 60 for one minute, etc.
Drupal.settings.cache.entity.expiration = 3600;
Drupal.settings.cache.views.expiration = 3600;

/*********************|
 * DrupalGap Settings |
 *********************/

// DrupalGap Mode (defaults to 'web-app')
//  'web-app' - use this mode to build a web application for a browser window
//  'phonegap' - use this mode to build a mobile application with phonegap
drupalgap.settings.mode = 'web-app';

// Language Files - locale/[language-code].json
drupalgap.settings.locale = {
/* es: { } */
};

/*************|
 * Appearance |
 *************/

// App Title
drupalgap.settings.title = 'Get Tranz';
 
// App Front Page
//drupalgap.settings.front = 'hello_world';
drupalgap.settings.front = 'hello_dashboard';

// Theme
drupalgap.settings.theme = 'easystreet3';

// Logo
drupalgap.settings.logo = 'themes/easystreet3/images/logogettranz-small.png';

// Offline Warning Message. Set to false to hide message.
drupalgap.settings.offline_message = 'No connection found!';

// Exit app message.
drupalgap.settings.exit_message = 'Exit ' + drupalgap.settings.title + '?';

// Loader Animations - http://demos.jquerymobile.com/1.4.0/loader/
drupalgap.settings.loader = {
  loading: {
    text: 'Loading...',
    textVisible: true,
    theme: 'b'
  },
  saving: {
    text: 'Saving...',
    textVisible: true,
    theme: 'b'
  },
  deleting: {
    text: 'Deleting...',
    textVisible: true,
    theme: 'b'
  }
};

/*****************************************|
 * Modules - http://drupalgap.org/node/74 |
 *****************************************/

/** Contributed Modules - www/app/modules **/

//Drupal.modules.contrib['example'] = {};

/** Custom Modules - www/app/modules/custom **/

Drupal.modules.custom['my_orders'] = {};
Drupal.modules.custom['block_flat_fees'] = {};
Drupal.modules.custom['block_copyright'] = {};
Drupal.modules.custom['my_saran'] = {};
Drupal.modules.custom['dashboard'] = {};
Drupal.modules.custom['howtotopup'] = {};
Drupal.modules.custom['howtojoin'] = {};
Drupal.modules.custom['faq_page'] = {};
Drupal.modules.contrib['commerce_drupalgap_stripe'] = {};
Drupal.modules.contrib['commerce_shipping'] = {};
Drupal.modules.contrib['telephone'] = {};
Drupal.modules.contrib['title'] = {};
Drupal.modules.contrib['pathfix'] = {};
Drupal.modules.contrib['link'] = {};
Drupal.modules.contrib['commerce'] = {};
Drupal.modules.contrib['views_litepager'] = {};
Drupal.modules.contrib['geofield'] = {};
Drupal.modules.contrib['geofield_gmap'] = {};
Drupal.modules.contrib['addressfield'] = {};
Drupal.modules.contrib['rate'] = {};
Drupal.modules.contrib['force_authentication'] = {};
Drupal.modules.contrib['entityreference'] = {};
Drupal.modules.contrib['votingapi'] = {};
Drupal.modules.contrib['user_registrationpassword'] = {};
Drupal.modules.custom['push_notifications'] = {};

/***************************************|
 * Menus - http://drupalgap.org/node/85 |
 ***************************************/
drupalgap.settings.menus = {}; // Do not remove this line.

// User Menu Anonymous
drupalgap.settings.menus['user_menu_anonymous'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title: 'Login',
      path: 'user/login',
      options: {
        attributes: {
          'data-icon': 'lock'
        }
      }
    },
    {
      title: 'Create new account',
      path: 'user/register',
      options: {
        attributes: {
          'data-icon': 'plus'
        }
      }
    }
  ]
};

// User Menu Authenticated
drupalgap.settings.menus['user_menu_authenticated'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title:'Pesanan',
      path:'myorders',
      options:{
        attributes:{
          'data-icon':'star'
        }
      }
    },
    {
      title:'Keluhan',
      path:'mysaran',
      options:{
        attributes:{
          'data-icon':'info'
        }
      }
    },
    {
      title: 'Logout',
      path: 'user/logout',
      options: {
        attributes: {
          'data-icon': 'delete'
        }
      }
    }
  ]
};

// Main Menu
drupalgap.settings.menus['main_menu'] = {
  options: menu_popup_get_default_options(),
  links: [
    {
      title:'Get Transport',
      path:'node/add/order_get_transport',
      options:{
        attributes:{
          'data-icon':'navigation'
        }
      }
    },
    {
      title:'Get Courier',
      path:'node/add/order_get_courier',
      options:{
        attributes:{
          'data-icon':'recycle'
        }
      }
    },
    {
      title:'Get Shop',
      path:'node/add/order_get_shop',
      options:{
        attributes:{
          'data-icon':'shop'
        }
      }
    },
    {
      title:'Get Eat',
      path:null,
      options:{
        attributes:{
          'data-icon':'location',
          onclick: "window.open('http://test.getranz.com/merchants/type/get-eat', '_system', 'location=yes')"
        }
      }
    },
    {
      title: 'How to top-up',
      path: 'topup',
      options: {
        attributes: {
          'data-icon': 'plus'
        }
      }
    }
  ]
};

/****************************************|
 * Blocks - http://drupalgap.org/node/83 |
 ****************************************/
drupalgap.settings.blocks = {}; // Do not remove this line.

// Easy Street 3 Theme Blocks
drupalgap.settings.blocks.easystreet3 = {
  header: {
    user_menu_anonymous: {
      roles: {
        value: ['anonymous user'],
        mode: 'include',
      }
    },
    user_menu_authenticated: {
      roles: {
        value: ['authenticated user'],
        mode: 'include',
      }
    },
    logo: { },
    main_menu: { }
  },
  sub_header: {
    title: { 
		pages: {
			value: ['node/*'],
			mode: 'exclude',
		}
    }
  },
  navigation: {
    primary_local_tasks: { }
  },
  content: {
    messages: { },
    main: { }
  },
  footer: {
    copyrightgt: {
       pages: {
        value: ['user/login', 'user/register'],
        mode: 'include'
      }
    },
    flat_fees: {
       pages: {
        value: ['node/add/order_get_courier', 'node/add/order_get_transport', 'node/add/order_get_shop'],
        mode: 'include'
      }
    }
  }
};

/****************************************************|
 * Region Menu Links - http://drupalgap.org/node/173 |
 ****************************************************/
drupalgap.settings.menus.regions = {}; // Do not remove this line.

// Header Region Links
drupalgap.settings.menus.regions['header'] = {
  links:[
    /* Main Menu Popup Menu Button */
    {
      options: {
        popup: true,
        popup_delta: 'main_menu',
        attributes: {
          'class': 'ui-btn-left',
          'data-icon': 'bars'
        }
      },
      roles: {
        value: ['anonymous user'],
        mode: 'exclude',
      }
    },
    /* Home Button */
    {
      path: '',
      options: {
        attributes: {
          'data-icon': 'home',
          'data-iconpos': 'notext',
          'class': 'ui-btn-left'
        }
      },
      pages: {
        value: [''],
        mode: 'exclude'
      }
    },
    /* Anonymous User Popup Menu Button */
    {
      options: {
        popup: true,
        popup_delta: 'user_menu_anonymous',
        attributes: {
          'class': 'ui-btn-right',
          'data-icon': 'user'
        }
      },
      roles: {
        value: ['anonymous user'],
        mode: 'include',
      }
    },
    /* Authenticated User Popup Menu Button */
    {
      options: {
        popup: true,
        popup_delta: 'user_menu_authenticated',
        attributes: {
          'class': 'ui-btn-right',
          'data-icon': 'user'
        }
      },
      roles: {
        value: ['authenticated user'],
        mode: 'include',
      }
    },
  ]
};

// Footer Region Links
drupalgap.settings.menus.regions['footer'] = {
  links: [
    /* Back Button */
    {
      title:'Back',
      options: {
        attributes: {
          'data-icon': 'back',
          'data-iconpos': 'notext',
          'class': 'ui-btn-left',
          'onclick': 'javascript:drupalgap_back();'
        }
      },
      pages: {
        value: [''],
        mode: 'exclude'
      }
    }
  ]
};

/*********|
 * Camera |
 **********/
drupalgap.settings.camera = {
  quality: 80
};

/***********************|
 * Performance Settings |
 ***********************/
drupalgap.settings.cache = {}; // Do not remove this line.

// Theme Registry - Set to true to load the page.tpl.html contents from cache.
drupalgap.settings.cache.theme_registry = true;

