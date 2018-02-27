$(document).ready(function() {
 $('#signup').validate({
   
   rules: {
     email: {
        required: true,
        email: true
     },
}, //koniec literału obiektowego rules
   messages: {
      email: {
         required: "Podaj adres e-mail.",
         email: "To nie jest prawidłowy adres e-mail."
       },
},
 });