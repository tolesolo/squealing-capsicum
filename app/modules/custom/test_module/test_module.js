/**
* Implements hook_menu().
*/
function test_module_menu() {
  var items = {};
  items['hello_world'] = {
    title: 'Get Tranz',
    page_callback: 'test_module_hello_world_page'
  };
  return items;
}

/**
* The callback for the "Hello World" page.
*/
function test_module_hello_world_page() {
  var content = {};
  content['my_button'] = {
    theme: 'button',
    text: 'Hello World',
    attributes: {
      onclick: "drupalgap_alert('Hi!')"
    }
  };
  return content;
}