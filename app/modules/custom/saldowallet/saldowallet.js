/**
 * Implements hook_menu().
 */
function saldowallet_menu() {
  var items = {};
  items['saldo'] = {
    title: 'Saldo Wallet',
    page_callback: 'saldowallet_page',
    options:{
      }
  };
  return items;
}

/**
 * The page callback to display the view.
 */
function saldowallet_page() {
  try {
    var content = {};
    content['saldowalet'] = {
      theme: 'view',
      pager_pos: 'bottom',
      format: 'table',
      format_attributes: {
      	/*  border: 0,*/
      	  width:300,
      	  'cellpadding': 10,
      	  'cellspacing':10,
      	  },
      path: 'json-wallet-total', /* the path to the view in Drupal */
      row_callback: 'saldowallet_page_row',
      empty_callback: 'saldowallet_page_empty',
      attributes: {
        id: 'posisi_view'
      }
    };
    return content;
  }
  catch (error) { console.log('saldowallet_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function saldowallet_page_row(view, row) {
  try {
    var content = {};
    var tanggal = new Date();
    var jam = tanggal.getHours();
    var menit = tanggal.getMinutes();
    if ((jam>8 && menit>=0) && (jam<=17 && menit<=59)) {
  	var html =
  '<td align="center" width="100%" class="saldo"><br><br><h2>' + row.username +
  '<hr align="center" width="60%">' + 
  '</h2><b>SALDO<br>' + 
  row.totalwallet +
  '</b><br><br><br><br><br>' + 
  bl('+ Tambah Saldo', 'http://www.gettranz.com/gtwallet/top-up', { InAppBrowser: true }) + 
  bl('- Tarik Saldo', 'http://www.gettranz.com/tarikdana', { InAppBrowser: true }) +
    '</td>';
    } else {
  	var html =
  '<td align="center" width="100%" class="saldo"><br><br><h2>' + row.username +
  '<hr align="center" width="60%">' + 
  '</h2><b>SALDO<br>' + 
  row.totalwallet +
  '</b><br><br><br><br><br>' + 
  bl('+ Tambah Saldo', 'saldo', { attributes: {'class': 'buttonmati'}}) + 
  'Penambahan saldo dimulai jam 8.00 s/d jam 17.00 setiap hari.<br>' + 
  bl('- Tarik Saldo', 'http://www.gettranz.com/tarikdana', { InAppBrowser: true }) +
    '</td>';
    }
return html;
  } 
  catch (error) { console.log('saldowallet_page_row - ' + error); }
}

/**
 *
 */
function saldowallet_page_empty(view) {
  try {
    return 'Maaf, server kami tidak bisa mengambil data, anda bisa melihatnya melalui website.';
  }
  catch (error) { console.log('saldowallet_page_empty - ' + error); }
}