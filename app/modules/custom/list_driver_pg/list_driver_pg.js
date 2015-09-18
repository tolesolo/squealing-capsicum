/**
 * Implements hook_menu().
 */
function list_driver_pg_menu() {
  var items = {};
  items['datadriver'] = {
    title: 'Data Driver',
    page_callback: 'list_driver_pg_page',
    options:{
        reloadPage:true
      }
  };
  return items;
}

/**
 * The page callback to display the view.
 */
function list_driver_pg_page() {
  try {
    var content = {};
    content['datadriver'] = {
      theme: 'view',
      format: 'ul',
      path: 'json-driver', /* the path to the view in Drupal */
      row_callback: 'list_driver_pg_page_row',
      empty_callback: 'list_driver_pg_page_empty',
      attributes: {
        id: 'datadriver_view'
      }
    };
    return content;
  }
  catch (error) { console.log('list_driver_pg_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function list_driver_pg_page_row(view, row) {
  try {
    return l(row.title, 'node/' + row.nid);
  }
  catch (error) { console.log('list_driver_pg_page_row - ' + error); }
}

/**
 *
 */
function list_driver_pg_page_empty(view) {
  try {
    return 'Sorry, no drivers data were found.';
  }
  catch (error) { console.log('list_driver_pg_page_empty - ' + error); }
}