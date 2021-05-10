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
  $('#_biggify').on('click', function() {
    var fontSize = $('html').css('font-size');
    var newFontSize = parseInt(fontSize)+1;
    $('html').css('font-size', newFontSize+'px')
  });

  $('#_smallify').on('click', function() {
    var fontSize = $('html').css('font-size');
    var newFontSize = parseInt(fontSize)-1;
    $('html').css('font-size', newFontSize+'px')
  });

  $('#_reset').on('click', function() {
    $('html').css('font-size', '16px')
  });

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

    $('.view-promotional-resources-search .views-row .more-link').click(function(){
      $(this).toggleClass('expanded');
      $(this).siblings('.partners-wrapper').slideToggle('slow');
      $(this).siblings('.partners-wrapper').toggleClass('expanded-wrapper');
    });

    //See more less, Oira Tools
    $('.view-display-id-tools_ws h2').click(function(){
      $(this).toggleClass('expanded');
      $(this).parents('.group-right').find('.expandible').fadeToggle('fast');
    });

  //See more less, search results
  $('.result-item .more-link').click(function(){
    $(this).toggleClass('clicked');
    $(this).parents('.result-item').find('.expand').slideToggle('fast');
  });

    // See more/less, Partners node
    $('.view-country-partner-content .more-link').click(function(){
      $(this).toggleClass('clicked');
      $(this).parents('.expandible').find('.partners-wrapper').slideToggle('fast');
    });

    // Pager index
    $('.pagination').each(function () {
      let itemLength = $(this).find('.page-item').length;
      let lastItemIndex=itemLength - 1;
      $(this).find('.page-item').eq(lastItemIndex).addClass('last');

      let itemFirst = $(this).find('[title="Go to first page"]').length;
      if(itemFirst>0){
        $(this).find('[title="Go to first page"]').closest('.page-item').addClass('first');
      }

      let itemPrev = $(this).find('[title="Go to previous page"]').length;
      if(itemPrev>0){
        $(this).find('[title="Go to previous page"]').closest('.page-item').addClass('prev');
      }
    });


  //Sidebar toggle facets
  $('.block-facets h2').click(function(){
    $(this).toggleClass('clicked');
    $(this).parent('.block-facets').find('.facets-widget-checkbox').slideToggle();
  });

    //Toggle Sidebar
    $('#toggle-sidebar').click(function(){
      $(this).toggleClass('clicked');
      $('#sidebar_first').toggleClass('sidebar-expanded');
    });

    $('.sidebar_first aside').click(function(){
      $(this).toggleClass('clicked');
      $('#sidebar_first').removeClass('sidebar-expanded');
    });

    //Clear filters toggler
    $('.facets-checkbox:checked').each(function(index) {
      $(this).addClass("clicked-input").parent('aside').find('#edit-reset--2').addClass("show-me");
    });

    //Move the summary before the menu (in node 67)
    $('.page-node-67 .field--name-field-summary').insertBefore("#block-oiracommunity");
    $('.page-node-67 .field--name-field-summary').addClass(".jquery--element-moved");


  $('.menu--main .nav-link.dropdown-toggle').click(function(){
    $(this).toggleClass('clicked');
    $(this).parent('.nav-item').find('.dropdown-menu').slideToggle();
  });

  /*** Slide Toggle in Partner profile ***/
  $('.partner__address .field__label-widget').click(function(){
    $(this).toggleClass('clicked');
    $(this).parent('.partner__address').find('.field__content-wrapper').slideToggle();
  });

  $('.partner__socialprofile .field__label-widget').click(function(){
    $(this).toggleClass('clicked');
    $(this).parent('.partner__socialprofile').find('.item-list').slideToggle();
  });

});




