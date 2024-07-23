$(document).ready(function(){

 $('.buy-buttons').on('click', function(event) {
    event.preventDefault();
    alert('hjdjdkd');
    var variantId = $('.shopify-product-form input[name=id]').val();
    var sellingPlanId = $('#selling-plan-select').val();
    var quantity = 1; 

    var data = {
      id: variantId,
      quantity: quantity,
      selling_plan: sellingPlanId
    };

    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: data,
      dataType: 'json',
      success: function(response) {
        console.log('Product added to cart:', response);
        // Optionally, update the cart UI or redirect to the cart page
      },
      error: function(error) {
        console.error('Error adding product to cart:', error);
      }
    });
  });
    
});
