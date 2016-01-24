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
		'<li>Surat Keterangan Domisili apabila KTP dan tempat tinggal beda</li>' +
		'<li>Usia maksimal 55 thn</li>' +
		'<li>Pendidikan terakhir SMP</li>' +
		'<li>Membawa uang Rp.100.000 untuk setoran dan pembukaan rekening ponsel CIMB Niaga</li>' +
		'<li>Wajib menghadirkan motor saat seleksi</li>' +
		'<li>Wajib memakai Sepatu</li>' +
		'<li>Wajib menyerahkan BPKB asli sebagai jaminan</li>' +
		'<li>Wajib mempunyai Ponsel Android</li>' +
		'<li>Wajib mempunyai email</li>' +
		'</ol>' +

		'<strong><h2>Langkah 2 - Pendaftaran wawancara</h2></strong>' +
		'<ol>' + 
		'<li>Mengambil nomor pendaftaran. Untuk memperoleh nomor pendaftaran: <a onclick="javascript:window.open(\'sms:+62081311669328?body=NamaLengkap TglLahir NoHP\', \'_system\', \'location=yes\');">SMS ke 0813-1166-9328</a>, format: NamaLengkap[spasi]TglLahir[spasi]NoHP (Contoh: "BudiBaik 1Januari1994 08444433322"). Anda akan mendapat konfirmasi balasan: Nomor_Tanggal_Alamat.</li>' +
		'<li>Pada tanggal yang ditentukan, mohon datang ke Jalan xxxxxxxxx, antara jam 8 - 10 pagi. Bawa: Motor yang digunakan, persyaratan, dan jaminan. Tunjukkan SMS yang telah diterima.</li>' +
		'<li>Akan dilanjutkan dengan proses seleksi dan pelatihan.</li>' +
		'</ol>'
    };
  return content;
}
  catch (error) { console.log('howtojoin_page - ' + error); }
}
