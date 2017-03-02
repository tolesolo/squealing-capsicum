/**
* Implements hook_menu().
*/
function howtowithdraw_menu() {
  var items = {};
  items['how_to_withdraw'] = {
    title: 'Tarik Dana',
    page_callback: 'howtowithdraw_page'
  };
  return items;
}

/**
* The callback for the "howtojoin" page.
*/
function howtowithdraw_page() {
  try {
  var content = {};
    content.icon = {
      markup:  '<h2 style="text-align: center;">' +
      '<img src="images/icon-wallet.png">' +
      '</h2>' +
      
		'<strong><h2>Menarik dana wallet</h2></strong>' +
		'<ol>' +
		'<li>Klik tombol dibawah ini, kemudian anda diharuskan login terlebih dahulu</li>' +
		'<li>Isilah memo dengan ID atau nama atau email untuk memudahkan kami memverifikasi</li>' +
		'<li>Setelah itu isilah nominal berapa dana yang akan anda tarik</li>' +
		'<li>Pilihlah bank anda, Nomor rekening bank (Account number) dan Nama pemilik rekening bank (Account name)</li>' +
		'<li>Tekan Save</li>' +
		'<li>Untuk proses lebih cepat, silahkan konfirmasi ke call center 08-123456-0736</li>' +
		'</ol>' 
    };
    content.tarikdana = {
      theme: 'button_link',
      text: t('Tarik dana'),
      path: 'www.gettranz.com/tarikdana',
      options: {InAppBrowser: true}
    };
    content.callcenter = {
      theme: 'button_link',
      text: 'Call Center 08.123456.OJEG(0736)',
      path: null,
	  attributes: {
		'data-icon': 'phone',
    	href: 'tel:+6281234560736'
  	  }
    };
  return content;
}
  catch (error) { console.log('howtowithdraw_page - ' + error); }
}
