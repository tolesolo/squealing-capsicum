/**
 * Implements hook_form_alter().
 */
function email_registration_form_alter(form, form_state, form_id) {
  try {
    if (form_id == 'user_login_form') {
      form.elements['name'].type = 'email';
      form.elements['name'].title = 'E-mail';
    }
    else if (form_id == 'user_register_form') {
      form.elements['name'].type = 'hidden';
      form.elements['name'].default_value = 'email_registration_' + user_password();
      form.elements['mail'].title = 'E-mail';
      // Override DrupalGap core's user register form submit handler
      for(var i=0; i < form.submit.length; i++) {
        form.submit[i] = form.submit[i].replace(/user_register_form_submit/g, 'email_registration_user_register_form_submit');
      }
    }
  }
  catch (error) { console.log('email_registration_form_alter - ' + error); }
}

/**
 * Override for user_register_form_submit().
 */
function email_registration_user_register_form_submit(form, form_state) {
  try {
    // When a user registers an account, this module on the Drupal site creates
    // a random user name. Since we'll have the user id after registration, we
    // need to load that user to retrieve their name, then use that name to
    // auto login. Note, this function is an exact copy of DrupalGap core's
    // user_register_form_submit(), except we load the user account after
    // registration to retrieve their name, then login. Anonymous users need
    // the permission to view user accounts for this to work.
    var account = drupalgap_entity_build_from_form_state(form, form_state);
    user_register(account, {
      success: function(data) {
        var config = form.user_register;
        var options = {
          title: t('Registered')
        };
        var destination = typeof form.action !== 'undefined' ?
            form.action : drupalgap.settings.front;
        // Check if e-mail verification is required or not..
        if (!drupalgap.site_settings.user_email_verification) {
          // E-mail verification not needed, if administrator approval is
          // needed, notify the user, otherwise log them in.
          if (drupalgap.site_settings.user_register == '2') {
            drupalgap_alert(
              config.user_mail_register_pending_approval_required_body,
              options
            );
            drupalgap_goto(destination);
          }
          else {
            drupalgap_alert(
              config.user_mail_register_no_approval_required_body,
              options
            );
            // If we're automatically logging in do it, otherwise just go to
            // the front page.
            if (form.auto_user_login) {
              user_load(data.uid, {
                  success: function(registered_account) {
                    user_login(registered_account.name, account.pass, {
                        success: function(result) {
                          drupalgap_goto(destination);
                        }
                    });
                  }
              });
              
            }
            else { drupalgap_goto(destination); }
          }
        }
        else {
          // E-mail verification needed... notify the user.
          drupalgap_alert(
            config.user_mail_register_email_verification_body,
            options
          );
          drupalgap_goto(destination);
        }
      },
      error: function(xhr, status, message) {
        // If there were any form errors, display them.
        var msg = _drupalgap_form_submit_response_errors(form, form_state, xhr,
          status, message);
        if (msg) { drupalgap_alert(msg); }
      }
    });
  }
  catch (error) { console.log('email_registration_user_register_form_submit - ' + error); }
}
