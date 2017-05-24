/**
 * Implements hook_menu().
 */
function get_toys_menu() {
  try {
    var items = {};
    items['toyjson/%'] = {
      title: 'Mainan',
    page_callback: 'get_toys_page',
    pageshow: 'get_toys_pageshow',
    page_arguments: [1]
    };
    return items;
  }
  catch (error) {
    console.log('get_toys_menu - ' + error);
  }
}

function get_toys_page(uid) {
  // make an empty jQM item list with a unique ID
  // the ID should contain the company name for uniqness
  return {
    'produk_list':{
      'theme':'jqm_item_list',
   //   'title':'Mainan',
      'items':[],
      'attributes':{'id':'produk_toys' + uid},
    }
  };
}

function get_toys_pageshow(uid) {
  drupalgap.views_datasource.call({
  'path':'toyjson/' + uid,
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
          drupalgap_item_list_populate("#produk_toys" + uid, items);
        }
      }
  });
}