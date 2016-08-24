/**
 * Implements hook_menu().
 */
function dashboardv2_menu() {
  try {
    var items = {};
    items['dashboardv2'] = {
      title: 'Layanan Get-Tranz',
      page_callback: 'dashboardv2_page'
    };
    return items;
  }
  catch (error) { console.log('dashboardv2_menu - ' + error); }
}

function dashboardv2_page() {
  try {
    var content = {};
    content.icon = {
      markup:  '<h2 style="text-align: center;">' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_transport\');"><img src="app/modules/custom/dashboardv2/images/icon_gettranzv2_transport.png" width="79" height="86"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_courier\');"><img src="app/modules/custom/dashboardv2/images/icon_gettranzv2_courier.png" width="79" height="86"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_shop\');"><img src="app/modules/custom/dashboardv2/images/icon_gettranzv2_shop.png" width="79" height="86"></a>' +
      '<a onclick="javascript:window.open(\'http://gettranz.com/get-eat\', \'_system\', \'location=yes\');"><img src="app/modules/custom/dashboardv2/images/icon_gettranzv2_eat.png" width="79" height="86"></a>' +
      '</h2>'
    };
    return content;
  }
  catch (error) { console.log('dashboardv2_page - ' + error); }
}
