/**
 * Implements hook_block_info().
 */
function block_flat_fees_block_info() {
  try {
    var blocks = {};
    blocks['flat_fees'] = {
      delta: 'flat_fees',
      module: 'block_flat_fees'
    };
    return blocks;
  }
  catch (error) { console.log('block_flat_fees_block_info - ' + error); }
}
/**
 * Implements hook_block_view().
 */
function block_flat_fees_block_view(delta, region) {
  try {
    var content = '';
    if (delta == 'flat_fees') {
      content = '<p style="text-align: right; color:black;">Ongkos : Rp. 15.000,-</p>';
    }
    return content;
  }
  catch (error) { console.log('block_flat_fees_block_view - ' + error); }
}