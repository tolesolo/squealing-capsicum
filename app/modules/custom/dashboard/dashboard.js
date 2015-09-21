/**
 * Implements hook_menu().
 */
function dashboard_menu() {
  try {
    var items = {};
    items['hello_dashboard'] = {
      title: 'Layanan Get-Tranz',
      page_callback: 'dashboard_page'
    };
    return items;
  }
  catch (error) { console.log('dashboard_menu - ' + error); }
}

function dashboard_page() {
  try {
    var content = {};
/*    content.site_info = {
      markup: '<h4 style="text-align: center;">' +
        Drupal.settings.site_path +
      '</h4>'
    }; */
    content.icon = {
      markup:  '<h2 style="text-align: center;">' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_transport\');"><img src="images/gettransport.png"></a>&nbsp;&nbsp;' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_courier\');"><img src="images/getcourier.png"></a>&nbsp;&nbsp;' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_shop\');"><img src="images/getshop.png"></a>&nbsp;&nbsp;' +
      '<a onclick="javascript:window.open(\'http://test.getranz.com/merchants/type/get-eat\', \'_system\', \'location=yes\');"><img src="images/geteat.png"></a>' +
      '</h2>'
    };
/*    content.welcome = {
      markup: '<h2 style="text-align: center;">' +
        t('Welcome to Get Tranz') +
      '</h2>' +
      '<p style="text-align: center;">' +
        t('Get more time today') +
      '</p>'
    };*/
    if (drupalgap.settings.logo) {
      content.logo = {
        markup: '<center>' +
                 theme('image', {path: drupalgap.settings.logo}) +
               '</center>'
      };
    }
    content.driver_kami = {
      theme: 'button_link',
      text: 'Ingin menjadi Driver?',
      path: 'how_to_join'
    };
    content.callcenter = {
      theme: 'button_link',
      text: 'Call Center 08.1234.805.101',
      path: null,
	  attributes: {
		'data-icon': 'phone',
    	href: 'tel:+6281234805101'
  	  }
    };
/*    content.link1 = {
		theme: 'link',
		text: '<img src="images/gettransport.png">&nbsp;',
		path: 'node/add/order_get_transport'
	};
   content.link2 = {
		theme: 'link',
		text: '<img src="images/getcourier.png">&nbsp;',
		path: 'node/123'
	};
   content.link3 = {
		theme: 'link',
		text: '<img src="images/getshop.png">&nbsp;',
		path: 'node/123'
	};
   content.link4 = {
		theme: 'link',
		text: '<img src="images/geteat.png">&nbsp;',
		path: 'node/123'
	};*/
    return content;
  }
  catch (error) { console.log('dashboard_page - ' + error); }
}