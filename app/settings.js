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
  expiration: 60, // # of seconds to cache, set to 0 to cache forever

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
drupalgap.settings.mode = 'phonegap';

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
drupalgap.settings.front = 'dashboardv2';

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
Drupal.modules.contrib['date'] = {};
Drupal.modules.contrib['force_authentication'] = {};
Drupal.modules.contrib['geofield'] = {};
Drupal.modules.contrib['link'] = {};
Drupal.modules.contrib['telephone'] = {};
Drupal.modules.contrib['title'] = {};
Drupal.modules.contrib['views_litepager'] = {};
Drupal.modules.contrib['commerce'] = {};
Drupal.modules.contrib['geofield_gmap'] = {};
Drupal.modules.contrib['email_registration'] = {};
Drupal.modules.contrib['addressfield'] = {
  minified: true
};

//Drupal.modules.contrib['example'] = {};

/** Custom Modules - www/app/modules/custom **/

//Drupal.modules.custom['my_module'] = {};

Drupal.modules.custom['my_orders'] = {};
Drupal.modules.custom['block_flat_fees'] = {};
Drupal.modules.custom['block_copyright'] = {};
Drupal.modules.custom['my_saran'] = {};
Drupal.modules.custom['howtotopup'] = {};
Drupal.modules.custom['howtowithdraw'] = {};
Drupal.modules.custom['saldowallet'] = {};
Drupal.modules.custom['saldowalletblock'] = {};
Drupal.modules.custom['saldowalletjqm'] = {};
Drupal.modules.custom['faq_page'] = {};
Drupal.modules.custom['push_notifications'] = {};
Drupal.modules.custom['dashboardv2'] = {};

//menampilkan halaman toko terdekat
Drupal.modules.custom['find_eat_nearest'] = {};
Drupal.modules.custom['find_med_nearest'] = {};
Drupal.modules.custom['find_musicgear_nearest'] = {};
Drupal.modules.custom['find_toys_nearest'] = {};
Drupal.modules.custom['find_snack_nearest'] = {};

//menampilkan produk-produk dari toko tersebut menurut user id (uid)
Drupal.modules.custom['get_eat'] = {};
Drupal.modules.custom['get_med'] = {};
Drupal.modules.custom['get_musicgear'] = {};
Drupal.modules.custom['get_snack'] = {};
Drupal.modules.custom['get_toys'] = {};

Drupal.modules.custom['commerce_pembayaran'] = {};
Drupal.modules.custom['commerce_thankyou'] = {};
Drupal.modules.contrib['commerce'] = {};
drupalgap.settings.commerce = {
  bundles: {
    get_eat: {
      product_reference_field_name: 'field_product'
    },
    get_monsters: {
      product_reference_field_name: 'field_product'
    },
    get_courier: {
      product_reference_field_name: 'field_product'
    },
    get_shop: {
      product_reference_field_name: 'field_product'
    },
    get_beer: {
      product_reference_field_name: 'field_product'
    },
    get_med: {
      product_reference_field_name: 'field_product'
    },
    get_snack: {
      product_reference_field_name: 'field_product'
    },
    get_toys: {
      product_reference_field_name: 'field_product'
    },
    get_transport: {
      product_reference_field_name: 'field_product'
    }
  }
};

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
      title:'Pesanan',
      path:'myorders',
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
      title:'Saldo test',
      path:'saldowalletjqm',
      options:{
        reloadPage:true,
        attributes:{
          'data-icon':'shop'
        }
      }
    },
    {
      title: 'Cara TopUp',
      path: 'topup',
      options: {
        attributes: {
          'data-icon': 'plus'
        }
      }
    },
    {
      title: 'Cara Tarik dana',
      path: 'how_to_withdraw',
      options: {
        attributes: {
          'data-icon': 'minus'
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
      title: 'How to top-up',
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
    commerce_cart: {
  	pages: {
    	mode: 'exclude',
    	value: ['cart', 'checkout/*', 'checkout/shipping/*', 'checkout/review/*']
  	}
    },
    main_menu: { }
  },
  sub_header: {
  //  title: { }
    saldoblock: { 
       pages: {
        value: ['saldo', 'user/login', 'user/register'],
        mode: 'exclude'
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
    /* Back Button */
    {
      options: {
        attributes: {
          'data-icon': 'back',
          'data-iconpos': 'notext',
          'class': 'ui-btn-left',
          'onclick': 'javascript:drupalgap_back();'
        }
      },
      pages: {
        value: ['','node/*','myorders', 'checkout/complete/*'],
        mode: 'exclude'
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
        value: ['', 'user/login', 'user/register'],
        mode: 'exclude'
      }
    },
    /* Authenticated User Popup Menu Button */
    {
      options: {
        popup: true,
        popup_delta: 'user_menu_authenticated',
        attributes: {
          'class': 'ui-btn-right',
          'data-icon': 'bars'
        }
      },
      roles: {
        value: ['authenticated user'],
        mode: 'include',
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

