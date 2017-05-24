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
	
    CheckGPS.check(function(){
    //GPS is enabled!
  },
  function(){
    //GPS is disabled!
    drupalgap_alert('Aktifkan Lokasi Terlebih Dulu.');
    cordova.plugins.diagnostic.switchToLocationSettings();
  });
  //setTimeout(cordova.plugins.diagnostic.isGpsLocationEnabled(locationOn,locationOff),500);
  

  catch (error) { console.log('dashboardv2_pageshow - ' + error); }
}

function dashboardv2_page() {
  try {    
    var content = {};
    content.icon = {
      markup:  '<div class="center">' +
      '<img src="app/modules/custom/dashboardv2/images/GetSnack_Web.png" width="100%">' +
      '</br><h2 class="home">Layanan Get Tranz <span class="miring judul-orange">Jasa</span></h2>' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_transport\');"><img src="app/modules/custom/dashboardv2/images/UI_ICON_SERVICE-14.png" width="100" height="134"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_courier\');"><img src="app/modules/custom/dashboardv2/images/UI_ICON_SERVICE-15.png" width="100" height="134"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'node/add/order_get_shop\');"><img src="app/modules/custom/dashboardv2/images/UI_ICON_SERVICE-11.png" width="100" height="134"></a>' +
      '<hr class="tall"><h2 class="home">Layanan Get Tranz <span class="miring judul-biru">Toko+Gerai</span</h2></br>' +
      '<a onclick="javascript:drupalgap_goto(\'eat_nearest\', {reloadPage:true});"><img src="app/modules/custom/dashboardv2/images/UI_ICON_SERVICE-17.png" width="100" height="134"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'snack_nearest\', {reloadPage:true});"><img src="app/modules/custom/dashboardv2/images/UI_ICON_SERVICE-12.png" width="100" height="134"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'med_nearest\', {reloadPage:true});"><img src="app/modules/custom/dashboardv2/images/UI_ICON_SERVICE-13.png" width="100" height="134"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'toys_nearest\', {reloadPage:true});"><img src="app/modules/custom/dashboardv2/images/UI_ICON_SERVICE-16.png" width="100" height="134"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'music_nearest\', {reloadPage:true});"><img src="app/modules/custom/dashboardv2/images/UI_ICON_SERVICE-18.png" width="100" height="134"></a>' +
      '</div>'
    };
    return content;
  }
  catch (error) { console.log('dashboardv2_page - ' + error); }
}
