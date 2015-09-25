/**
 * Implements hook_field_widget_form().
 */
function telephone_field_widget_form(form, form_state, field, instance, langcode, items, delta, element) {
  try {
    // Set the input type to a telephone.
    items[delta].type = 'tel';
  }
  catch (error) { console.log('telephone_field_widget_form - ' + error); }
}

/**
 * Implements hook_field_formatter_view().
 */
function telephone_field_formatter_view(entity_type, entity, field, instance, langcode, items, display) {
  try {
    
    /*dpm(entity_type);
    dpm(entity);
    dpm(field);
    dpm(instance);
    dpm(langcode);
    dpm(items);
    dpm(display);*/
    
    // Iterate over each item, and place a widget onto the render array.
    var content = {};
    $.each(items, function(delta, item) {
        // Grab the text to display, then display it is a telephone link or
        // plain text.
        var text = item.value;
        if (display.type == 'telephone_link') {
          if (!empty(display.settings.title)) { text = display.settings.title; }
          content[delta] = {
            theme: 'telephone_link',
            text: text,
            path: null,
            attributes: {
              href: 'tel:+' + item.value.replace('+', '')
            }
          };
        }
        else { content[delta] = { markup: text }; }
    });
    return content;
  }
  catch (error) { console.log('telephone_field_formatter_view - ' + error); }
}

/**
 *
 */
function theme_telephone_link(variables) {
  try {
    if (!variables.attributes['data-icon']) {
      variables.attributes['data-icon'] = 'phone';
    }
    return theme('button_link', variables);
  }
  catch (error) { console.log('theme_telephone_link - ' + error); }
}
