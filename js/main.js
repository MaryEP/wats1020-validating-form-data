//Custom JS goes here. //
   
    // 1. Create a document ready handler.
$(document).on("ready", function (){  
  
    // Define a validation object for use on your page.
$("#order-form").validate({
  submitHandler: function(form) {
  form.submit();  
    // 3. Connect the validation object to an event handler tied to the submit button.
  },
  
  rules: {
  "your-name": {
  required: true,
  minlength: 3,
  maxlength: 128,
  //digits: false //doesn't appear to work
  nonum: true
  },
    
  "your-zip": {
  required: true,
  minlength: 5,
  maxlength: 9,
  digits: true
  }, 
    
 "your-address": {
  required: true,
  minlength: 5
  },

  "your-address2": {
   required: false
   },
     
   "your-city": {
   required: true,
   minlength: 3,
   nonum: true
   },
    
  "your-state": {
   required: true
   },
    
  "card-holder-name": {
   required: true,
   nonum: true,
   minlength: 3,
   maxlength: 50
    },
    
  "card-number": {
    required: true,
    digits: true,
    creditcard: true,
    maxlength: 16,
    minlength: 16
  },
    
   "expiry-month": {
      required: true
    },
    
    "expiry-year": {
    required: true
  },
    
    "cvv": {
    required: true,
    digits: true,
    minlength: 3,
    maxlength: 3
  },
    
    "shipping-method": {
      required: true
    },
    
    "comments": {
      required: true,
      maxlength: 500
    },
  }  
  
  });
  
    $('label span.glyphicon').tooltip();
});
   
  
  $.validator.methods.nonum = function( value, element ) { // or $validator.addMethod()
   return this.optional( element ) || /[^0-9]/.test( value );
 }

jQuery.extend(jQuery.validator.messages, {
   nonum: "Please remove any numbers."
   
});
                  

