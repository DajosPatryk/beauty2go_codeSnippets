//Removing the add to cart message
add_filter( 'wc_add_to_cart_message', 'remove_add_to_cart_message' );

function remove_add_to_cart_message() {
    return;
}


//Redirecting user to the thank you page
function my_custom_add_to_cart_redirect( $url ) {

	$url = home_url( 'thank-you/' );

	return $url;

}
add_filter( 'add_to_cart_redirect', 'my_custom_add_to_cart_redirect' );

//woocommerce_before_add_to_cart_form
//woocommerce_single_product_summary
//
//Adding Units to the single product page
add_action("woocommerce_before_add_to_cart_form", "add_units", 25);
function add_units(){
	$product = wc_get_product();
	$meta_data = $product->get_meta('_unit');
	echo '<span id="TXTunit">' . $meta_data . '</span>';
}

//Adding table in products archive
function get_archive_table_shortcode( $atts ) 
  {
	global $wp_query;
	echo do_shortcode('[product_table id="702" category="' . $wp_query->get_queried_object()->slug . '"]');
  }
add_shortcode( 'add_archive_table', 'get_archive_table_shortcode' );