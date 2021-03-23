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

  //Add display block
  if ($(".page-view-oira-ws")[0]) {
    setTimeout(function () {
      $("#sidebar_first aside h2").click(function () {
        $(this).toggleClass("active");
        $(this).parent().toggleClass("active");
        $(this).parent().children('.content').slideToggle();
      });
    }, 200);
  }


    windowWidth= jQuery(window).width();

    if(windowWidth <= 992){
      //search header al hacer click
      $("#edit-actions").click(function(){
        $('#block-oira-theme-search .form-search').stop().show({direction: 'left'}, 500);
        $('#block-oira-theme-search .btn-primary').css("pointer-events" , "auto");
      });
      $(".search-block-form").mouseleave(function(){
        $('#block-oira-theme-search .form-search').stop().hide({direction: 'right'}, 500);
        $('#block-oira-theme-search .btn-primary').css("pointer-events" , "none");
      });
    }

    // See more - less
    $('.view-display-id-block_1 .views-col .see-more').click(function(){
      $(this).toggleClass('expanded');
      $(this).siblings('.partners-wrapper').slideToggle('slow');
      $(this).siblings('.partners-wrapper').toggleClass('expanded-wrapper');
    });
    $('.view-promotional-materials.view-display-id-block .more-link').click(function(){
      $(this).toggleClass('expanded');
      $(this).siblings('.partners-wrapper').toggleClass('expanded-wrapper');
      $(this).siblings('.partners-wrapper').slideToggle('slow');
    });

    $('.view-tools.view-display-id-block_2 .views-col .more-link').click(function(){
      $(this).toggleClass('expanded');
      $(this).siblings('.partners-wrapper').slideToggle('slow');
      $(this).siblings('.partners-wrapper').toggleClass('expanded-wrapper');
    });

    //See more less, Oira Tools
    $('.view-display-id-tools_ws h2').click(function(){
      $(this).toggleClass('expanded');
      $(this).parents('.group-right').find('.expandible').fadeToggle('fast');
    });

});




