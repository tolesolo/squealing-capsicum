/**
 * Implements hook_menu().
 */
function kategori_get_medSurabaya_menu() {
  try {
    var items = {};
    items['kategori_get_medSurabaya'] = {
      title: 'Kategori Get Med',
      page_callback: 'kategori_get_medSurabaya_page'
    };
    return items;
  }
  catch (error) { console.log('kategori_get_medSurabaya_menu - ' + error); }
}

function  kategori_get_medSurabaya_page() {
  try {
    var content = {};
    content.icon = {
      markup:  '<h2 style="text-align: center;">' +
      '<img src="app/modules/custom/kategori_get_medSurabaya/images/kategori-med-header.png" width="100%"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'medlist97\');"><img src="app/modules/custom/kategori_get_medSurabaya/images/kategori-med97.png" width="100%"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'medlist100\');"><img src="app/modules/custom/kategori_get_medSurabaya/images/kategori-med100.png" width="100%"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'medlist101\');"><img src="app/modules/custom/kategori_get_medSurabaya/images/kategori-med101.png" width="100%"></a>' +
      '<a onclick="javascript:drupalgap_goto(\'medlist99\');"><img src="app/modules/custom/kategori_get_medSurabaya/images/kategori-med99.png" width="100%""></a>' +
      '<a onclick="javascript:drupalgap_goto(\'medlist98\');"><img src="app/modules/custom/kategori_get_medSurabaya/images/kategori-med98.png" width="100%"></a>' +
      '</h2>'
    };
    return content;
  }
  catch (error) { console.log('kategori_get_medSurabaya_page - ' + error); }
}
