/**
 * Implements hook_menu().
 */
function my_saran_menu() {
  var items = {};
  items['mysaran'] = {
    title: 'After Service',
    page_callback: 'my_saran_page',
    options:{
        reloadPage:true
      }
  };
  return items;
}

/**
 * The page callback to display the view.
 */
function my_saran_page() {
  try {
    var content = {};
    content['addsaran_link'] = {
		theme: 'button_link',
		text: 'Kirim saran & keluhan, beri driver rating',
		path: 'node/add/report_page',
		options: {
        	attributes:{
          		'data-icon': 'plus'
        	}
		}
    };
    content['line_break'] = {
      markup: '<br>'
    };
    content['mysaran'] = {
      theme: 'view',
      pager_pos: 'bottom',
      format: 'ul',
      path: 'json-myreport', /* the path to the view in Drupal */
      row_callback: 'my_saran_page_row',
      empty_callback: 'my_saran_page_empty',
      attributes: {
        id: 'mysaran_view'
      }
    };
    return content;
  }
  catch (error) { console.log('my_saran_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function my_saran_page_row(view, row) {
  try {
    return l(row.Isi, 'node/' + row.nid);
  }
  catch (error) { console.log('my_saran_page_row - ' + error); }
}

/**
 *
 */
function my_saran_page_empty(view) {
  try {
    return 'Maaf, anda belum pernah memesan layanan.';
  }
  catch (error) { console.log('my_saran_page_empty - ' + error); }
}