/**
 * Implements hook_block_info().
 */
function block_copyright_block_info() {
  try {
    var blocks = {};
    blocks['copyrightgt'] = {
      delta: 'copyrightgt',
      module: 'block_copyright'
    };
    return blocks;
  }
  catch (error) { console.log('block_copyright_block_info - ' + error); }
}
/**
 * Implements hook_block_view().
 */
function block_copyright_block_view(delta, region) {
  try {
    var content = '';
    if (delta == 'copyrightgt') {
      content = '<p style="text-align: center; color:#333333;">' + t('&copy; Copyright 2015 - ') + 
          l('Get Tranz', 'http://www.gettranz.co.id', {InAppBrowser: true}) +
        '</p>';
    }
    return content;
  }
  catch (error) { console.log('block_copyright_block_view - ' + error); }
}