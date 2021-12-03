(function ($) {
    $(function () {
      //Setting Values, change these when editing the Theme of the website
      var defaultFont = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif";

      //Customizing Shopping Cart Button CSS
      $("#BTNcart").find("strong").replaceWith("<span>Subtotal:</span>");
      $("#BTNcart").css({"height":"42px"});
      $("#BTNcart .elementor-menu-cart__toggle").find("a").css({"height":"42px"});
      $("#BTNcart .elementor-menu-cart__toggle").find(".elementor-button-text").hide();
      $("#BTNcart .elementor-menu-cart__toggle").find("a").filter(':not(:animated)').hover(function(){
        $("#BTNcart .elementor-menu-cart__toggle").find(".elementor-button-text").animate({
        width:'show',
        opacity:'1.0'
        },250);
      },
      function() {
        $("#BTNcart .elementor-menu-cart__toggle").find(".elementor-button-text").animate({
        width:'hide',
          opacity:'0.0'
        },250);
      });
      
      //Customizing Unit span CSS
      $("#TXTunit").css({"color":"var( --e-global-color-text)", "padding-bottom":"1rem"});
      
      //Customizing the products archive table
      $("#wcpt-702 *a").css({"color":"var( --e-global-color-text)", "font-family":defaultFont, "font-weight":"400"});
      $("#wcpt-702 *span").css({"color":"var( --e-global-color-text)", "font-family":defaultFont, "font-weight":"400"});
      $("#wcpt-702 *.wcpt-button-label .wcpt-text").html("Jetzt Kaufen");
      $("#wcpt-702 *.wcpt-button").css({"background-color":"var( --e-global-color-primary )", "border-style":"none", "border-radius":"30px"});
      $("#wcpt-702 *.wcpt-button .wcpt-text").css({"color":"#FFFFFF"});
      $("#wcpt-702 .wcpt-edit").hide();
      $(".wcpt-cart-widget").hide();
      
      //Customizing Brand Grid CSS
      $(".pwb-brands-cols-outer *.pwb-brands-col3").css({"color":"var( --e-global-color-text)", "font-family":defaultFont, "font-weight":"400"});
      $(".pwb-brands-cols-outer *.pwb-brands-col3 p").css({"text-align":"center"});
      $(".pwb-brands-cols-outer *.pwb-brands-col3 p small").css({"color":"var(--general-text-color)", "opacity":"0.75", "font-size":"75%"});
      
      //Customizing Product List CSS
      //$("#BOXproductlist").find("*p").remove();
      //$("#BOXproductlist").find("*.button").remove();
      $("#BOXproductlist1").css({"font-family":defaultFont});
      //$("#BOXproductlist1 *.wpcu-product__title a").css({"Display":"-webkit-box", "-webkit-line-clamp":"4", "-webkit-box-orient":"vertical", "overflow":"hidden", "text-overflow":"ellipsis"});
      //$("#BOXproductlist1 *.wpcu-product__title a").css({"max-width":"250px","white-space":"nowrap", "overflow":"hidden", "text-overflow":"ellipsis"});
      $("#BOXproductlist1 *.wpcu-product__title").css({"width":"250px", "overflow":"hidden", "height":"26px", "line-height":"19px"});
      //$("#BOXproductlist1 *.wpcu-product__title").css({"width":"250px", "height":"40px"});
      $("#BOXproductlist1 *.add_to_cart_button").css({"font-family":defaultFont, "font-weight":"500", "text-transform":"none", "border-radius":"30px"});
      $("#BOXproductlist1 *.added_to_cart").css({"font-family":defaultFont, "font-weight":"500", "text-transform":"none", "border-radius":"30px"});
      $("#BOXproductlist1 *.add_to_cart_button").html("Jetzt Kaufen");
      $("#BOXproductlist1 *.added_to_cart").html("Zum Warenkorb");
      $("#BOXproductlist1 *.wpcu-product__content").css({"background-color":"#FFFFFF"});
      $("#BOXproductlist1 *.wpcu-product__content").attr("id","BOXcol");
      
      //Customizing Search Box CSS
      //$("#INPUTsearch").find("button").css({"background-color":"var( --e-global-color-primary )", "border-width":"0rem", "color":"#FFFFFF", "border-radius":"0.5rem", "margin-top":"0.25rem"});
      $(".dgwt-wcas-suggestions-wrapp").css({"font-family":defaultFont, "color":"var(--general-text-color) !important"});
      $(".dgwt-wcas-details-wrapp").css({"font-family":defaultFont, "color":"var(--general-text-color) !important"});
      $(".dgwt-wcas-details-wrapp .add_to_cart_button").html("Jetzt Kaufen");
      
      //Customizing Product Category CSS
      //I am using the Elementor Element #8b1d260, which is the Elementor widget divider under the title, deleting this widget will cause issues. 210px divider width, best for this. 
      $("#LIcategory ul:first> li").after("<div id='LIcategoryDivider' class='elementor-element elementor-element-8b1d260 elementor-widget-divider--view-line elementor-widget elementor-widget-divider' data-id='8b1d260' data-element_type='widget' data-widget_type='divider.default'><div class='elementor-widget-container'><div class='elementor-divider'><span class='elementor-divider-separator'></span></div></div></div>");
      $("#LIcategory a").css({"color":"#7A7A7A"});
      $("#LIcategory h5").css({"color":"var( --e-global-color-primary )", "font-size":"22.4px"});
      $("*#LIcategoryDivider").css({"--divider-color":"#7A7A7A", "opacity":"0.25", "margin-bottom":"-0.25rem"});
      $("#LIcategory ul").css({"padding":"0rem"});
      $("#LIcategory .children li").css({"padding":"0rem"});
      $("#LIcategory .children li").css({"padding-left":"+1.5rem", "margin-top":"0.25rem"});
      $("#LIcategory span").css({"color":"#7A7A7A", "opacity":"0.75", "font-size":"75%"});
      //Product Category Animations
      $("#LIcategory a").filter(':not(:animated)').hover(function(){
        $(this).css({"color":"var( --e-global-color-primary )"});
        $(this).animate({
        marginLeft:'9px'
        },250);
      },
      function() {
        $(this).css({"color":"#7A7A7A"});
        $(this).animate({
        marginLeft:'0px'
        },250);
      });
      
      //Customizing Account CSS
      $("#BOXaccount .woocommerce-orders-table td a:not(.woocommerce-button)").css({"color":"var( --e-global-color-primary )"});
      
      //Shadow Effect CSS
      //box-shadow: 1px 1px 6px grey;
      var defaultShadow = '1px 1px 6px grey';
      $("#BOXcol").filter(':not(:animated)').hover(function(){
        $(this).animate({
        boxShadow:'1px 1px 6px grey'
        },250);
      },
      function() {
        $(this).animate({
        boxShadow:'0px 0px 0px grey'
        },250);
      });
      
      });
})(jQuery);