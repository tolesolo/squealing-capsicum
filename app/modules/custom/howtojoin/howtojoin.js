/**
* Implements hook_menu().
*/
function howtojoin_menu() {
  var items = {};
  items['how_to_join'] = {
    title: 'Menjadi Driver Get Tranz',
    page_callback: 'howtojoin_page'
  };
  return items;
}

/**
* The callback for the "howtojoin" page.
*/
function howtojoin_page() {
  try {
  var content = {};
    content.icon = {
      markup:  '<h2 style="text-align: center;">' +
      '<img src="images/icon-signing.png">' +
      '</h2>' +
      
		'<strong><h2>Langkah 1 - Persyaratan:</h2></strong>' +
		'<ol>' +
		'<li>Fotokopi KTP, SIM C, STNK, KK yang masih berlaku</li>' +
		'<li>Usia maksimal 55 thn</li>' +
		'<li>Pendidikan terakhir SMP</li>' +
		'<li>Membawa uang Rp.50.000 untuk top-up saldo wallet</li>' +
		'<li>Wajib mempunyai rekening ponsel CIMB Niaga</li>' +
		'<li>Wajib menghadirkan motor saat seleksi</li>' +
		'<li>Wajib memakai Sepatu</li>' +
		'<li>Wajib mempunyai Ponsel Android</li>' +
		'<li>Wajib mempunyai email</li>' +
		'<li>TANPA TITIP JAMINAN</li>' +
		'</ol>' +

		'<strong><h2>Langkah 2 - Pendaftaran</h2></strong>' +
		'<ol>' + 
		'<li>Cara 1. Online, klik tombol di bawah ini</li>' +
		'<li>Cara 2. Datang langsung dengan membawa pesyaratan ke alamat Jalan Sutorejo Utara E5-11, Surabaya</li>' +
		'</ol>'
    };
    content.driver_kami = {
      theme: 'button_link',
      text: t('Ke halaman top-up'),
      path: 'www.gettranz.com/pendaftarandriver',
      options: {InAppBrowser: true}
    };
  return content;
}
  catch (error) { console.log('howtojoin_page - ' + error); }
}
