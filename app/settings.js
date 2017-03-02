/**************|
 * Development |
 **************/

// Uncomment to clear the app's local storage cache each time the app loads.
//window.localStorage.clear();

// Set to true to see console.log() messages. Set to false when publishing app.
Drupal.settings.debug = false;

/****************************************|
 * Drupal Settings (provided by jDrupal) |
 ****************************************/

/* DRUPAL PATHS */
 
// Site Path (do not use a trailing slash)
Drupal.settings.site_path = 'http://www.gettranz.com'; // e.g. http://www.example.com

// Default Services Endpoint Path
Drupal.settings.endpoint = 'drupalgap';

// Files Directory Paths (use one or the other)
Drupal.settings.file_public_path = 'sites/default/files';
//Drupal.settings.file_private_path = 'system/files';

// The Default Language Code
Drupal.settings.language_default = 'und';

/* CACHING AND PERFORMANCE */

// Entity Caching
Drupal.settings.cache.entity = {

  /* Globals (will be used if not overwritten below) */
  enabled: false,
  expiration: 3600, // # of seconds to cache, set to 0 to cache forever

  /* Entity types */
  entity_types: {

    /* Comments */
    /*comment: {
     bundles: {}
     },*/

    /* Files */
    /*file: {
     bundles: {}
     },*/

    // Nodes
    /*node: {

      // Node Globals (will be used if not overwritten below)
      enabled: true,
      expiration: 120,

      // Content types (aka bundles)
      bundles: {

        article: {
          expiration: 3600
        },
        page: {
          enabled: false
        }

      }
    },*/

    /* Terms */
    /*taxonomy_term: {
     bundles: {}
     },*/

    /* Vocabularies */
    /*taxonomy_vocabulary: {
     bundles: {}
     },*/

    /* Users */
    /*user: {
     bundles: {}
     }*/

  }

};

/* Views Caching */

Drupal.settings.cache.views = {
  enabled: false,
  expiration: 3600
};

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
drupalgap.settings.front = 'hello_dashboard';

// Theme
drupalgap.settings.theme = 'gettranzv2';

// Logo
drupalgap.settings.logo = 'app/themes/gettranzv2/images/logogettranz-small.png';

// Offline Warning Message. Set to false to hide message.
drupalgap.settings.offline_message = 'Tidak ada koneksi!';

// Exit app message.
drupalgap.settings.exit_message = 'Keluar ' + drupalgap.settings.title + '?';

// Loader Animations - http://demos.jquerymobile.com/1.4.0/loader/
drupalgap.settings.loader = {
  loading: {
    text: 'Loading...',
    textVisible: true,
    theme: 'a'
  },
  saving: {
    text: 'Menyimpan...',
    textVisible: true,
    theme: 'a'
  },
  deleting: {
    text: 'Menghapus...',
    textVisible: true,
    theme: 'a'
  }
};

/*****************************************|
 * Modules - http://drupalgap.org/node/74 |
 *****************************************/

/** Contributed Modules - www/app/modules **/

//Drupal.modules.contrib['example'] = {};
//Drupal.modules.contrib['commerce_drupalgap_stripe'] = {};
//Drupal.modules.contrib['commerce_shipping'] = {};
Drupal.modules.contrib['telephone'] = {};
Drupal.modules.contrib['title'] = {};
Drupal.modules.contrib['pathfix'] = {};
Drupal.modules.contrib['link'] = {};
Drupal.modules.contrib['views_litepager'] = {};
Drupal.modules.contrib['geofield'] = {};
Drupal.modules.contrib['geofield_gmap'] = {};
Drupal.modules.contrib['force_authentication'] = {};
Drupal.modules.contrib['user_registrationpassword'] = {};

/** Custom Modules - www/app/modules/custom **/

//Drupal.modules.custom['my_module'] = {};
Drupal.modules.custom['dashboard'] = {};
Drupal.modules.custom['my_job'] = {};
Drupal.modules.custom['block_copyright'] = {};
Drupal.modules.custom['my_saran'] = {};
Drupal.modules.custom['howtotopup'] = {};
Drupal.modules.custom['howtowithdraw'] = {};
Drupal.modules.custom['howtojoin'] = {};
Drupal.modules.custom['faq_page'] = {};
Drupal.modules.custom['push_notifications'] = {};
Drupal.modules.custom['saldowallet'] = {};

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
          'data-icon': 'lock',
          'class': 'ui-btn ui-btn-icon-right'
        }
      }
    },
    {
      title: 'Buat akaun baru',
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
      title:'Posisi Pesanan',
      path:'myjob',
      options:{
        reloadPage:true,
        attributes:{
          'data-icon':'star'
        }
      }
    },
    {
      title:'Saldo Wallet',
      path:'saldo',
      options:{
        reloadPage:true,
        attributes:{
          'data-icon':'shop'
        }
      }
    },
    {
      title:'Keluhan',
      path:'mysaran',
      options:{
        reloadPage:true,
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
      title: 'Top-Up Wallet',
      path: 'topup',
      options: {
        attributes: {
          'data-icon': 'plus'
        }
      }
    },
    {
      title: 'Tarik dana',
      path: 'how_to_withdraw',
      options: {
        attributes: {
          'data-icon': 'minus'
        }
      }
    },
    {
      title: 'Gabung menjadi mitra kami',
      path: 'how_to_join',
      options: {
        attributes: {
          'data-icon': 'check'
        }
      }
    },
    {
      title: 'FAQ',
      path: 'faqpage',
      options: {
        attributes: {
          'data-icon': 'info'
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
drupalgap.settings.blocks.gettranzv2 = {
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
    title: { }
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
        reloadPage:true,
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
    }
  ]
};

// Footer Region Links
drupalgap.settings.menus.regions['footer'] = {
  links: [
    /* Back Button */
    {
      options: {
        reloadPage:true,
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
  quality: 90
};

/***********************|
 * Performance Settings |
 ***********************/
drupalgap.settings.cache = {}; // Do not remove this line.

// Theme Registry - Set to true to load the page.tpl.html contents from cache.
drupalgap.settings.cache.theme_registry = true;

