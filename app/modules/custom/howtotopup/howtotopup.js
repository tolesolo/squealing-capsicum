/**
 * Implements hook_menu().
 */
function howtotopup_menu() {
  try {
    var items = {};
    items['topup'] = {
      title: 'How to top up?',
      page_callback: 'howtotopup_page'
    };
    return items;
  }
  catch (error) { console.log('howtotopup_menu - ' + error); }
}

function howtotopup_page() {
  try {
    var content = {};
    content.icon = {
      markup:  '<h2 style="text-align: center;"><img src="images/icon-wallet.png"></h2>'
    };
    content.isi = {
      markup: '<h2 style="text-align: center;">' + t('How to top up GT Wallet?') + '</h2>' +
      t('Prasyarat:') + '</br><ol>' +
		'<li>Siapkan ibanking, mbanking atau rekening ponsel anda</li>' +
		'<li>Layanan penambahkan saldo hanya tersedia selama jam kerja (jam 8 pagi s/d 5 sore)</li>' +
		'<li>Setelah anda melakukan transfer, silahkan memberikan kami konfirmasi untuk mendapatkan respon yang cepat melalui call center 08-123456-OJEG(0736)</li>' +
		'</ol>' + 
      t('Bagaimana cara menambah saldo GT Wallet:') + '</br><ol>' +
		'<li>Masuk ke http://www.gettranz.com/gtwallet/top-up (harus login terlebih dahulu)</li>' +
		'<li>Pilih dari nominal yang tersedia dan ikuti tahapannya hingga akhir</li>' +
		'<li>Silahkan transfer ke rekening di bawah ini:</br>Bank : CIMB Niaga</br>Nama Rekening: CV. Berkat Bersama</br>Nomor Rekening: 800-13475-6000</li>' +
		'</ol>'
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
  catch (error) { console.log('howtotopup_page - ' + error); }
}
