/**
 * Implements hook_menu().
 */
function my_orders_menu() {
  var items = {};
  items['myorders'] = {
    title: 'Pesanan saya',
    page_callback: 'my_orders_page',
    options:{
      }
  };
  return items;
}

/**
 * The page callback to display the view.
 */
function my_orders_page() {
  try {
    var content = {};
    content['addreload_button'] = {
		theme: 'button_link',
		text: 'Reload',
		path:'myorders',
		options: {
        	reloadPage:true,
        	reset:false,
        	attributes:{
          		'data-icon': 'refresh'
        	}
		}
    };
    content['line_break'] = {
      markup: '<br>'
    };
    content['myorders'] = {
      theme: 'view',
      pager_pos: 'bottom',
      format: 'ul',
      path: 'json-myorder', /* the path to the view in Drupal */
      row_callback: 'my_orders_page_row',
      empty_callback: 'my_orders_page_empty',
      attributes: {
        id: 'myorders_view'
      }
    };
    return content;
  }
  catch (error) { console.log('my_orders_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function my_orders_page_row(view, row) {
  try {
    var title = '<h2>' + row.oid + '</h2>' + 
     		  '<p>' + row.date + row.batal + '</p>' +
                '<p>' + row.Isi + '</p>' +
                '<p>' + row.posisi + '</p>';
    return l(title, 'node/' + row.nid);
  }
  catch (error) { console.log('my_orders_page_row - ' + error); }
}

/**
 *
 */
function my_orders_page_empty(view) {
  try {
    return 'Maaf, anda belum pernah memesan layanan.';
  }
  catch (error) { console.log('my_orders_page_empty - ' + error); }
}