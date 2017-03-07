/**
 * Implements hook_menu().
 */
function get_med_lokasi_menu() {
  try {
    var items = {};
    items['getmedlokasi'] = {
      title: 'Lokasi',
      page_callback: 'get_med_lokasi_list_page'
    };
    return items;
  }
  catch (error) {
    console.log('get_med_lokasi_menu - ' + error);
  }
}

function get_med_lokasi_list_page() {
  try {
    var content = {};
    content['my_menu_list'] = {
      theme: 'view',
      format: 'ul',
      path: 'merchants-lokasijson/',
      row_callback: 'get_med_lokasi_list_page_row',
      empty_callback: 'get_med_lokasi_list_page_empty'
    };
    return content;
  }
  catch (error) { console.log('get_med_lokasi_list_page - ' + error); }
}

function get_med_lokasi_list_page_row(view, row) {
  try {
    var title = '<h2>' + row.nama + '</h2>';
    var html = l(title, 'kategori_get_med' + row.nama);
    return html;
  }
  catch (error) { console.log('get_med_lokasi_list_page_row - ' + error); }
}

function get_med_lokasi_list_page_empty(view) {
  try {
    return "Maaf, tidak ada lokasi.";
  }
  catch (error) { console.log('get_med_lokasi_list_page_empty - ' + error); }
}