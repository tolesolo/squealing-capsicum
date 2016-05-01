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
      content = '<p style="text-align: center; color:#666666;">' + t('&copy; Copyright 2016 - ') + 
          '<a onclick="javascript:window.open(\'http://www.gettranz.co.id\', \'_system\', \'location=yes\');">Get Tranz</a></p>';
    }
    return content;
  }
  catch (error) { console.log('block_copyright_block_view - ' + error); }
}