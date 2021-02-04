/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.oira_theme = {
    attach: function (context, settings) {

    }
  };

})(jQuery, Drupal);




jQuery(document).ready(function($){
  //Menu responsive
  $(function(){
    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
  });
});


