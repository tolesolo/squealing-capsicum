/**
 * Implements hook_deviceready().
 */
function commerce_thankyou_deviceready() {

  // Take over the rendering of the checkout complete page.
  drupalgap.menu_links['checkout/complete/%'].pageshow = 'commerce_thankyou_checkout_complete_pageshow';

}

function commerce_thankyou_checkout_complete_pageshow(order_id) {
  // Load the order, build our thank you message, then inject it into the page.
  commerce_order_load(order_id, {
    success: function(order) {
      var content = {};
      content['thanks'] = {
        markup: '<div class="messages status">' +
            t('Thank you for your order!') + ' (#' + order_id + ')' +
          '</div>'
      };
      $('#' + commerce_checkout_complete_container_id(order_id)).html(
        drupalgap_render(content)
      ).trigger('create');
    }
  });
}