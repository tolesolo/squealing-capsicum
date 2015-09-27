/**
* Implements hook_menu().
*/
function faq_page_menu() {
  var items = {};
  items['faqpage'] = {
    title: 'FAQ',
    page_callback: 'faq_page_page'
  };
  return items;
}

/**
* The callback for the "faq_page" page.
*/
function faq_page_page() {
  var content = {};
	content['my_collapsibleset'] = {
	  theme: 'collapsibleset',
	  items: [
	    { header: 'Dimana bisa mengetahui keberadaan driver di dekat saya?', content: '<p>Demi menjaga privasi dan keamanan driver itu sendiri, posisi driver hanya bisa diakses oleh managemen internal kami. Anda bisa langsung melakukan pesanan tanpa harus melihat ada atau tidaknya dirver di sekitar/dekat anda. Kami akan memulai proses penempatan order anda dengan posisi driver yang terdekat.</p>', 
	    	attributes: {
	    		'data-collapsed-icon': 'arrow-r',
	    		'data-expanded-icon': 'arrow-d' 
	    	}
	    },
	    { header: 'Bagaimana cara membatalkan pesanan saya?', content: '<p>Hubungi call center kami. Klik nomor ini <a onclick="javascript:window.open(\'tel:+6281234805101\', \'_system\', \'location=yes\');">08-1234-805-101</a>.</p>', 
	    	attributes: {
	    		'data-collapsed-icon': 'arrow-r',
	    		'data-expanded-icon': 'arrow-d' 
	    	} 
	    },
	    { header: 'Ada driver Get Tranz yang menggunakan telpon saya di luar order!', content: '<p>Hubungi call center kami. Klik nomor ini <a onclick="javascript:window.open(\'tel:+6281234805101\', \'_system\', \'location=yes\');">08-1234-805-101</a>. Atau masukan keluhan di halaman keluhan, kami akan memberikan surat peringatan, jika perlu kami akan bawa ke pihak berwajib.</p>', 
	    	attributes: {
	    		'data-collapsed-icon': 'arrow-r',
	    		'data-expanded-icon': 'arrow-d' 
	    	} 
	    },
	    { header: 'Saya takut keluhan saya tidak ditanggapi', content: '<p>Keluhan anda akan langsung masuk ke para direksi Get Tranz, para direksi Get Tranz sendiri yang akan menelusuri dan memberikan jawaban di halaman keluhan anda, agar anda bisa mengikuti proses atas keluhan anda.</p>', 
	    	attributes: {
	    		'data-collapsed-icon': 'arrow-r',
	    		'data-expanded-icon': 'arrow-d' 
	    	} 
	    },
	    { header: 'Jam berapa layanan Get Tranz?', content: '<p>Jam layanan normal dimulai dari pukul 07:00 s/d 17:00. Khusus untuk layanan Get Transport dan Get Courier sampai dengan pukul 22:30. Dari Senin sampai Minggu, kecuali ada hari libur yang akan kami beritahukan lebih lanjut.</p>', 
	    	attributes: {
	    		'data-collapsed-icon': 'arrow-r',
	    		'data-expanded-icon': 'arrow-d' 
	    	} 
	    },
	    { header: 'Kenapa saya ditagih untuk biaya parkir?', content: '<p>Biaya layanan kami belum termasuk biaya parkir (jika ada). Apabila alamat pengambilan, penjemputan, pengantaran, toko belanja ada biaya parkir maka biaya parkir akan ditagihkan oleh driver kami.</p>', 
	    	attributes: {
	    		'data-collapsed-icon': 'arrow-r',
	    		'data-expanded-icon': 'arrow-d' 
	    	} 
	    },
	    { header: 'Apa saya boleh memberikan tips ke driver?', content: '<p>Silahkan, itu adalah hak anda untuk memberikan tips ke driver.</p>', 
	    	attributes: {
	    		'data-collapsed-icon': 'arrow-r',
	    		'data-expanded-icon': 'arrow-d' 
	    	} 
	    }
	  ]
	};
  return content;
}