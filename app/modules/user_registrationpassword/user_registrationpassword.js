/**
 * Implements hook_form_alter().
 */
function user_registrationpassword_form_alter(form, form_state, form_id) {
  try {
    if (form_id == 'user_register_form') {
      // 2 - Require a verification e-mail, but let users set their password
      //     directly on the registration form. This means we only collect one
      //     e-mail address, and two password fields.
      switch (drupalgap.site_settings.user_registrationpassword_registration) {
        case '2':
          if (form.elements.conf_mail) {
            form.elements.conf_mail.access = false;
            form.elements.conf_mail.required = false;
            form.auto_user_login = false;
          }
          break;
      }
    }
  }
  catch (error) { console.log('user_registrationpassword_form_alter - ' + error); }
}

