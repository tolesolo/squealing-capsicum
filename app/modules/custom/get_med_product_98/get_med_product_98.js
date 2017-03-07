/**
 * Implements hook_menu().
 */
function get_med_product_98_menu() {
  try {
    var items = {};
    items['medlist98'] = {
      title: 'Alat Kesehatan',
      page_callback: 'get_med_product_98_list_page'
    };
    return items;
  }
  catch (error) {
    console.log('get_med_product_98_menu - ' + error);
  }
}

function get_med_product_98_list_page() {
  try {
    var content = {};
    content['my_menu_list'] = {
      theme: 'view',
      format: 'ul',
      path: 'medsbyjson98/',
      row_callback: 'get_med_product_98_list_page_row',
      empty_callback: 'get_med_product_98_list_page_empty'
    };
    return content;
  }
  catch (error) { console.log('get_med_product_98_list_page - ' + error); }
}

function get_med_product_98_list_page_row(view, row) {
  try {
    var image = theme('image', { path: row.photo.src });
    var title = '<h2>' + row.nama + '</h2>';
    var html = l(image + title, 'node/' + row.nid);
    return html;
  }
  catch (error) { console.log('get_med_product_98_list_page_row - ' + error); }
}

function get_med_product_98_list_page_empty(view) {
  try {
    return "Maaf, obat tidak tersedia saat ini.";
  }
  catch (error) { console.log('get_med_product_98_list_page_empty - ' + error); }
}