votingapi
=========

The Voting API module for DrupalGap.

Installation
============

1. Enable this module on your Drupal site:

     https://drupal.org/project/services_votingapi

2. On your Drupal site, go to:

     admin/structure/services/list/drupalgap/resources
     
   Then enable the following resources under the 'votingapi' service:
   
     select_votes
     set_votes
     delete_votes

3. Then on your Drupal site, go to:

     admin/people/permissions
   
   And enable the following permissions under 'Services Voting API' for your
   desired user roles:
   
     Retrieve votes
     Set votes
     Delete votes

