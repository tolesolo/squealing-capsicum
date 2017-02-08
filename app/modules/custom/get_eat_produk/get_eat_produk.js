/**
 * Implements hook_menu().
 */
function get_eat_produk_menu() {
  try {
    var items = {};
    items['menu-list'] = {
      title: 'Menu',
      page_callback: 'get_eat_produk_list_page'
    };
    return items;
  }
  catch (error) {
    console.log('get_eat_produk_menu - ' + error);
  }
}

function get_eat_produk_list_page() {
  try {
    var content = {};
    content['my_menu_list'] = {
      theme: 'view',
      format: 'ul',
      path: 'menueat/',
      row_callback: 'get_eat_produk_list_page_row',
      empty_callback: 'get_eat_produk_list_page_empty'
    };
    return content;
  }
  catch (error) { console.log('get_eat_produk_list_page - ' + error); }
}

function get_eat_produk_list_page_row(view, row) {
  try {
    var image = theme('image', { path: row.photo.src });
    var title = '<h2>' + row.nama + '</h2>';
    var html = l(image + title, 'node/' + row.nid);
    return html;
  }
  catch (error) { console.log('get_eat_produk_list_page_row - ' + error); }
}

function get_eat_produk_list_page_empty(view) {
  try {
    return "Maaf, tidak ada menunya.";
  }
  catch (error) { console.log('get_eat_produk_list_page_empty - ' + error); }
}