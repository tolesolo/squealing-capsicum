/**
 * Implements hook_menu().
 */
function my_job_menu() {
  var items = {};
  items['myjob'] = {
    title: 'Posisi Order',
    page_callback: 'my_job_page',
    options:{
      }
  };
  return items;
}

/**
 * The page callback to display the view.
 */
function my_job_page() {
  try {
    var content = {};
    content['addreload_button'] = {
		theme: 'button_link',
		text: 'Reload',
		path:'myjob',
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
    content['posisi'] = {
      theme: 'view',
      pager_pos: 'bottom',
      format: 'ul',
      path: 'json-posisiorder', /* the path to the view in Drupal */
      row_callback: 'my_job_page_row',
      empty_callback: 'my_job_page_empty',
      attributes: {
        id: 'posisi_view'
      }
    };
    return content;
  }
  catch (error) { console.log('my_job_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function my_job_page_row(view, row) {
  try {
    if (row.posisi=='Terima') {
    var title = '<h2>' + row.oid + '</h2>' + 
     		  '<p>' + row.date + ', Status: ' + row.posisi + '</p>' +
     		  '<p>Tipe: ' + row.ordertype + ', ' + row.payment + '</p>' +
     		  '<h3>Alamat ambil</h3>' +
     		  '<p>' + row.namaasal + '</p>' +
     		  '<p>' + row.hpasal + '  ' + row.teleponasal + '</p>' +
     		  '<p>' + row.alamatasal + '</p>' +
     		  '<p>' + row.barang + '</p>' +
     		  '<p>' + row.estimasibiaya + '</p>' +
                '<p>' + row.belanja + '</p>';
    return l(title, 'http://www.gettranz.com/orders/driver/srcaddress/' + row.nid, { InAppBrowser:true }); //link jika status terima
} else if (row.posisi=='Sampai di lokasi pertama') {
    var title = '<h2>' + row.oid + '</h2>' + 
     		  '<p>' + row.date + ', Status: ' + row.posisi + '</p>' +
     		  '<p>Tipe: ' + row.ordertype + ', ' + row.payment + '</p>' +
     		  '<h3>Alamat antar</h3>' +
     		  '<p>' + row.alamatantar + '</p>' +
     		  '<p>' + row.namatujuan + '</p>' +
                '<p>' + row.handphonetujuan + '</p>';
    return l(title, 'http://www.gettranz.com/orders/driver/completed/' + row.nid, { InAppBrowser:true }); //link jika status sampai dilokasi pertama
}
   
  } 
  catch (error) { console.log('my_job_page_row - ' + error); }
}

/**
 *
 */
function my_job_page_empty(view) {
  try {
    return 'Maaf, anda sedang tidak menerima pesanan.';
  }
  catch (error) { console.log('my_job_page_empty - ' + error); }
}