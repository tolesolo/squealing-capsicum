/**
 * Implements DrupalGap's template_info() hook.
 */
function gettranzv2_info() {
  try {
    var theme = {
      name: 'gettranzv2',
      regions: {
        header: {
          attributes: {
            'data-role': 'header',
            'data-theme': 'b',
            'data-position': 'fixed'
          }
        },
        sub_header: {
          attributes: {
            'data-role': 'header'
          }
        },
        content: {
          attributes: {
            'class': 'ui-content',
            'role': 'main'
          }
        },
        navigation: {
          attributes: {
            'data-role': 'navbar'
          }
        },
        footer: {
          attributes: {
            'data-role': 'footer',
            'data-theme': 'b',
            'data-position': 'fixed'
          }
        }
      }
    };
    return theme;
  }
  catch (error) { drupalgap_error(error); }
}

