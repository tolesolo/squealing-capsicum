/**
 * Implements hook_menu()
 */
function saldowalletjqm_menu() {
  var items = {};
  items['saldowalletjqm'] = {
    title: 'My Custom Page',
    page_callback: 'saldowalletjqm_articles_page',
    pageshow: 'saldowalletjqm_articles_pageshow'
  };
  return items;
}

/**
 * Page callback.
 */
function saldowalletjqm_articles_page() {
  var header = [];
  header.push({data: 'id'});
  header.push({data: 'Subject'});
  var rows = [];
  var content = {};
  content['my_saldo'] = {
    theme: 'table',
    header: header,
    rows: rows,
    attributes: {
      id: 'my_saldo'
    }
  };
  return content;
}

/**
 * Pageshow callback.
 */
function saldowalletjqm_articles_pageshow() {
  var path_to_view = 'saldo';
  views_datasource_get_view_result(path_to_view, {
      success: function(data) {
        if (data.nodes.length == 0) { return; }
        var items = [];
        $.each(data.nodes, function(index, object){
            var node = object.node;
            items.push(node.id, l(node.title, 'node/' + node.nid));
        });
        drupalgap_table_populate("#my_saldo", items);
      }
  });
}