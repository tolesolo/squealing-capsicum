/**
 * Implements hook_block_info().
 */
function custom_block_block_info() {
  try {
    var blocks = {};
    blocks['my_custom_block'] = {
      delta: 'my_custom_block',
      module: 'custom_block'
    };
    return blocks;
  }
  catch (error) { console.log('custom_block_block_info - ' + error); }
}
/**
 * Implements hook_block_view().
 */
function custom_block_block_view(delta, region) {
  try {
    var content = '';
    if (delta == 'my_custom_block') {
      // Show today's date for the block's content.
      var d = new Date();
      content = '<h2><center>' + d.toDateString() + '</center></h2>';
    }
    return content;
  }
  catch (error) { console.log('custom_block_block_view - ' + error); }
}