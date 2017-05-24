/**
 * Implements hook_block_info().
 */
function saldowalletblock_block_info() {
  try {
    var blocks = {};
    blocks['saldoblock'] = {
      delta: 'saldoblock',
      module: 'saldowalletblock'
    };
    return blocks;
  }
  catch (error) { console.log('saldowalletblock_block_info - ' + error); }
}
/**
 * Implements hook_block_view().
 */
function saldowalletblock_block_view(delta, region) {
  try {
var html = '<p id="my_saldo">Saldo sekarang : Loading...</p>';
for (var i = 0; i < 2; i++) {
html += drupalgap_jqm_page_event_script_code({
    page_id: drupalgap_get_page_id(),
    jqm_page_event: 'pageshow',
    jqm_page_event_callback: 'saldowalletblock_pageshow',
    jqm_page_event_args: JSON.stringify({
        total: 'Saldo sekarang : <span class="saldo_besar">Rp 80000</span>'
    })
},  '' + i
    );
}
return html;
  }
  catch (error) { console.log('saldowalletblock_block_view - ' + error); }
}


function saldowalletblock_pageshow(options) {
  $('#my_saldo').html(options.total).trigger('create');
}