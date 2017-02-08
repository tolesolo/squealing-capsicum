/**
 * Implements hook_menu().
 */
function kategori_get_snackSurabaya_menu() {
  try {
    var items = {};
    items['kategori_get_snackSurabaya'] = {
      title: 'Kategori Get Snack',
      page_callback: 'kategori_get_snackSurabaya_page'
    };
    return items;
  }
  catch (error) { console.log('kategori_get_snackSurabaya_menu - ' + error); }
}

function  kategori_get_snackSurabaya_page() {
  try {
    var content = {};
    content.icon = {
      markup:  '<h2 style="text-align: center;">' +
      '<img src="app/modules/custom/kategori_get_snackSurabaya/images/kategori-snack-header.png" width="100%"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'snackmakansurabaya\');"><img src="app/modules/custom/kategori_get_snackSurabaya/images/kategori-snack-makanan.png" width="100%"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'snackminumsurabaya\');"><img src="app/modules/custom/kategori_get_snackSurabaya/images/kategori-snack-minuman.png" width="100%"></a>' +
      '</h2>'
    };
    return content;
  }
  catch (error) { console.log('kategori_get_snackSurabaya_page - ' + error); }
}
