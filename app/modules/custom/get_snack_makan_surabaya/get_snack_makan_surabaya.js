/**
 * Implements hook_menu().
 */
function get_snack_makan_surabaya_menu() {
  try {
    var items = {};
    items['snackmakansurabaya'] = {
      title: 'Snack',
      page_callback: 'get_snack_makan_surabaya_list_page'
    };
    return items;
  }
  catch (error) {
    console.log('get_snack_makan_surabaya_menu - ' + error);
  }
}

function get_snack_makan_surabaya_list_page() {
  try {
    var content = {};
    content['my_menu_list'] = {
      theme: 'view',
      format: 'ul',
      path: 'snacksbyjsonmakanan/',
      row_callback: 'get_snack_makan_surabaya_list_page_row',
      empty_callback: 'get_snack_makan_surabaya_list_page_empty'
    };
    return content;
  }
  catch (error) { console.log('get_snack_makan_surabaya_list_page - ' + error); }
}

function get_snack_makan_surabaya_list_page_row(view, row) {
  try {
    var image = theme('image', { path: row.photo.src });
    var title = '<h2>' + row.nama + '</h2>' +
                '<p>' + row.harga + '</p>';
    var html = l(image + title, 'node/' + row.nid);
    return html;
  }
  catch (error) { console.log('get_snack_makan_surabaya_list_page_row - ' + error); }
}

function get_snack_makan_surabaya_list_page_empty(view) {
  try {
    return "Maaf, barang tidak tersedia saat ini.";
  }
  catch (error) { console.log('get_snack_makan_surabaya_list_page_empty - ' + error); }
}