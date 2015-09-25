/**
 *
 */
function commerce_shipping_checkout_view(form, form_state, order_id) {
  try {

    // @TODO - Need dynamic shipping info retrieval here.

    // Order ID
    form.elements['order_id'] = {
      type: 'hidden',
      default_value: order_id
    };
    
    form.elements['commerce_shipping'] = {
      title: 'Shipping Service',
      type: 'radios',
      options: {
        1: 'Express shipping: 1 business day: $15.00',
        2: 'Standard shipping: 3 - 5 business days: $8.00'
      },
      default_value: 1
    };

    // Buttons
    form.elements['submit'] = {
      type: 'submit',
      value: 'Continue to next step'
    };
    form.buttons['cancel'] = drupalgap_form_cancel_button();
    form.buttons['cancel'].title = 'Go back';

    return form;

  }
  catch (error) { console.log('commerce_shipping_checkout_view - ' + error); }
}

/**
 *
 */
function commerce_shipping_checkout_view_submit(form, form_state) {
  try {
    variable_set('commerce_checkout_shipping_form_state', form_state);
    drupalgap_goto('checkout/review/' + form_state.values['order_id']);
  }
  catch (error) { console.log('commerce_shipping_checkout_view_submit - ' + error); }
}