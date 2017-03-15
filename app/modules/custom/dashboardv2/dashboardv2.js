/**
 * Implements hook_menu().
 */
function dashboardv2_menu() {
  try {
    var items = {};
    items['dashboardv2'] = {
      title: 'Layanan Get-Tranz',
      page_callback: 'dashboardv2_page',
      pageshow: 'dashboardv2_pageshow'
    };
    return items;
  }
  catch (error) { console.log('dashboardv2_menu - ' + error); }
}
function locationOn(){
    drupalgap_alert('GPS ON');
}
        
function locationOff(){
    drupalgap_alert('GPS OFF');
    cordova.plugins.diagnostic.switchToLocationSettings();
}
function dashboardv2_pageshow(){    
    //setTimeout(cordova.plugins.diagnostic.isGpsLocationEnabled(locationOn,locationOff),500);
    console.log("Masuk MASUK");
    drupalgap_alert("MAsuk PAGE SHOW");
    
    CheckGPS.check(function(){
    //GPS is enabled!
drupalgap_alert('GPS ON');
  },
  function(){
    //GPS is disabled!
drupalgap_alert('GPS OFF');
cordova.plugins.diagnostic.switchToLocationSettings();
  });
  //setTimeout(cordova.plugins.diagnostic.isGpsLocationEnabled(locationOn,locationOff),500);
}
function dashboardv2_page() {
  try {
    //setTimeout(cordova.plugins.diagnostic.isGpsLocationEnabled(locationOn,locationOff),500);
    var content = {};
    content.icon = {
      markup:  '<h2 style="text-align: center;">' +
      '<img src="app/modules/custom/dashboardv2/images/GetSnack_Web.png" width="100%">' +
      '</br>' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_transport\');"><img src="app/modules/custom/dashboardv2/images/icon_gettranzv2_transport.png" width="79" height="86"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_courier\');"><img src="app/modules/custom/dashboardv2/images/icon_gettranzv2_courier.png" width="79" height="86"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_shop\');"><img src="app/modules/custom/dashboardv2/images/icon_gettranzv2_shop.png" width="79" height="86"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'eat_nearest\', {reloadPage:true});"><img src="app/modules/custom/dashboardv2/images/icon_gettranzv2_eat.png" width="79" height="86"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'getsnacklokasi\', {reloadPage:true});"><img src="app/modules/custom/dashboardv2/images/icon-gettranzv2-snack.png" width="79" height="86"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'getmedlokasi\', {reloadPage:true});"><img src="app/modules/custom/dashboardv2/images/icon-gettranzv2-med.png" width="79" height="86"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'gettoyslokasi\', {reloadPage:true});"><img src="app/modules/custom/dashboardv2/images/icon-gettranzv2-toys.png" width="79" height="86"></a>' +
      '</h2>'
    };
    return content;
  }
  catch (error) { console.log('dashboardv2_page - ' + error); }
}
