jQuery(document).ready(function() {
  jQuery('#product-variants input[type=radio]').click(function (event) {
    var vid = this.value;
    var text = $(this).siblings(".variant-description").html();

    jQuery("#variant-thumbnails").empty();
    jQuery("#variant-images span").html(text);

    if (images[vid].length > 0) {
      $.each(images[vid], function(i, link) {
        jQuery("#variant-thumbnails").append('<li>' + link + '</li>');
      });
      jQuery("#variant-images").show();
    } else {
      jQuery("#variant-images").hide();

      if (mainImage != "undefined") {
        jQuery("#main-image img").attr({src: mainImage[0]});
        jQuery(".overlay_container .large_image img").attr({src: mainImage[1]});
        jQuery("#main-image a").attr({href: mainImage[1]});
      }
    }

    add_image_handlers();

    var link = jQuery("#variant-thumbnails a")[0];

    jQuery("#main-image img").attr({src: jQuery(link).attr('href')});
    jQuery(".overlay_container .large_image img").attr({src: jQuery(link).attr('large')});
    jQuery("#main-image a").attr({href: jQuery(link).attr('large')});
    jQuery('ul.thumbnails li').removeClass('selected');
    jQuery(link).parent('li').addClass('selected');
  });

  var selectedRadio = jQuery('#product-variants input[type=radio]:checked');
  if (selectedRadio[0]) {

    var vid = selectedRadio[0].value;
    var text = selectedRadio.siblings(".variant-description").html();

    jQuery("#variant-thumbnails").empty();
    jQuery("#variant-images span").html(text);

    if (images[vid].length > 0) {
      $.each(images[vid], function(i, link) {
        jQuery("#variant-thumbnails").append('<li>' + link + '</li>');
      });

      jQuery("#variant-images").show();
    } else {
      jQuery("#variant-images").hide();
    }

    add_image_handlers();

    var link = jQuery("#variant-thumbnails a")[0];

    jQuery("#main-image img").attr({src: jQuery(link).attr('href')});
    jQuery(".overlay_container .large_image img").attr({src: jQuery(link).attr('large')});
    jQuery("#main-image a").attr({href: jQuery(link).attr('large')});
    jQuery('ul.thumbnails li').removeClass('selected');
    jQuery(link).parent('li').addClass('selected');
  }
});

