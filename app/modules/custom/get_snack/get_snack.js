/**
 * Implements hook_menu().
 */
function get_snack_menu() {
  try {
    var items = {};
    items['snackjson/%'] = {
      title: 'Snack',
    page_callback: 'get_snack_page',
    pageshow: 'get_snack_pageshow',
    page_arguments: [1]
    };
    return items;
  }
  catch (error) {
    console.log('get_snack_menu - ' + error);
  }
}

function get_snack_page(uid) {
  // make an empty jQM item list with a unique ID
  // the ID should contain the company name for uniqness
  return {
    'produk_list':{
      'theme':'jqm_item_list',
   //   'title':'Snack',
      'items':[],
      'attributes':{'id':'produk_snack' + uid},
    }
  };
}

function get_snack_pageshow(uid) {
  drupalgap.views_datasource.call({
  'path':'snackjson/' + uid,
  'success':function(data){
        if (data.nodes.length > 0) {
          var items = [];
          $.each(data.nodes, function(index, object){
              var node = object.node;
              var foto = theme('image', { path: node.image.src });
              if (node.diskon=='') {
              	var isi = '<h2>' + node.nama + '</h2>' +
              	 '<p>' + node.harga + '</p>';
              	} else {
              		var isi = '<h2>' + node.nama + '</h2>' +
              		'<p><del>' + node.hargaasli + '</del></p>' +
              		'<p>' + node.harga + ' ' + '<b>-' + node.diskon + '</b></p>';
              	}
              items.push(l(foto + isi, 'node/' + node.nid));
          });
          drupalgap_item_list_populate("#produk_snack" + uid, items);
        }
      }
  });
}