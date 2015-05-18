  $(document).ready(function(){

    var inputs = $("input").not("[type='submit']");
    inputs.each(function(key,element){
        $(element).watermark($(element).attr("placeholder"));
    });
    
    inputs.focus(function (e) {
         $('html, body').animate({
          scrollTop: $("label[for='" + $(e.target).attr("name") + "']") .offset().top
         }, 500);
    });
     
      
      
      
      
      /*some validation*/    
    
      $('input[type="text"]').keypress(function(e) {
         var keyCode = e.which || e.keyCode;
         var input=$(this).attr("name");
         var allowed;
         var oldString = $(this).val()||"";
         //# check for the sign #
         //backspace tab enter esc delete end home arrows
         if ( ~$.inArray( keyCode.toString(),['8','9','13','27','46','35','36','37','38','39','40']) && (!e.shiftKey) ){
              return 1;
         }
         else{
             e.preventDefault();
             if (input==='sex'){
              oldString = "";
              allowed = /[^fm]{1}$/i;
             }else{
               if (input==='emailI' || input==='emailP'){
                 allowed = /[-_a-z\.0-9@]+$/i;
               }
               else if (input==='cel' || input==='tel' || input==='telExt'){
                 allowed = /[-0-9\s]+$/i;
               }
               else if(input ==='rcea' || input==='dirDep' || input==='cvu'){
                 allowed = /[-_a-z#0-9ÑñáéíóúÁÉÍÓÚ\.\s]+$/i           
               }
               else{
                  allowed = /[-_a-zÑñáéíóúÁÉÍÓÚ\.\s]+$/i           
               }
             };
             
             var char = String.fromCharCode(e.charCode|e.keyCode);
             if(char.match(allowed)){
              $(this).val(oldString+char);
             };
         };
      });
      
     $('input[name="tel"],input[name="telExt"],*[name="cel"],*[name="emailI"],*[name="emailP"]').blur(function(e){
     
         var input = $(e.target).attr("name"), allowed , msgFormat;
         if(/\btel\b|\bcel\b/.test(input)){
           allowed = /^[0-9]{10}$/;       
           msgFormat = "p.e. 4113459007"  
         }
         else if(/\btelExt\b/.test(input)){
           allowed = /^[-0-9]+$/;       
           msgFormat = "p.e. 123"  
         }
         else{
           allowed =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;           
           msgFormat = "p.e. myemail@hotmail.com"
         }
         if (allowed.test( $(e.target).val() )){
             $(e.target).removeClass("errorInput");
             $(".errorMsg")
             .removeClass("fade-in")
             .attr("hidden",1);
         }
         else{
             e.preventDefault();
             e.stopPropagation();
             if(!!__IE__)
              $(e.target).addClass("errorInput")
             else
              $(e.target).addClass("errorInput").focus();
              
             $(e.target).before(
                 $(".errorMsg")
                 .addClass("fade-in")
                 .removeAttr("hidden")
                 .html(msgFormat)
              );
          }
     }); 
      
      
     $("input[type='submit']").click(function(e){
          e.preventDefault();
          var goToElement;
	  var wasError = $('.errorInput').filter(':first').filter(':visible');

	  if( wasError.trigger('focus').length ) return;

          var validateFilled = inputs.not("input[name='rcea']");
          var isCompleted = !0;
          validateFilled.each(function(key,element){
              if ( $(element).val().trim().length );
              else{
                 isCompleted = !1;
                 $(element).before(
                 $(".errorMsg")
                  .addClass("fade-in")
                  .removeAttr("hidden")
                  //.html( $(".genericFillError").html() )
                  .html( "Complete la informaci&oacute;n" )
                 );
                 $(element).focus();
                 return false;
              }    
          });
          
          if (isCompleted){
              
              var answer = window.confirm("¿Listo?");
              if (!!answer){
                  $("#recordForm").submit();
              }
              else{
                  return;
              }
          }
     });
     
  }); /*.ready jQuery*/

  function attachEventApart(object, cB, event, onEvent){
    if (object.addEventListener){
      object.addEventListener(event, cB, false);
    }
    else if (window.attachEvent){
      object.attachEvent(onEvent, cB);
    }
    else
      object[onEvent] = cB;
  }
   
  attachEventApart(window,callBack, "load", "onload");

  function callBack(){
   
    $( 'input[name="typeT"]' ).autocomplete({
      lookup: __DATA_typeT,
      lookupLimit: '5',
      onSelect: function (suggestion) {
      }
    });
    
    $( 'input[name="grade"]' ).autocomplete({
      lookup: __DATA_grade,
      lookupLimit: '5',
      onSelect: function (suggestion) {
      }
    });
    
    $( 'input[name="sni"]' ).autocomplete({
      lookup: __DATA_sni,
      lookupLimit: '5',
      onSelect: function(suggestion) {
          var toUC =  $(this).val().toUpperCase();
          $(this).val( toUC );
      }
    });
      
    $( 'input[name="first"]' ).autocomplete({
      lookup: __DATA_first,
      lookupLimit: '5',
      onSelect: function (suggestion) {
      }
    });
    
    $( 'input[name="second"]' ).autocomplete({
      lookup: __DATA_second,
      lookupLimit: '5',
      onSelect: function (suggestion) {
      }
    });
    
    $('input[name="names"]' ).autocomplete({
      lookup: __DATA_names,
      lookupLimit: '5',
      onSelect: function (suggestion) {
      }
    });
    
    $('input[name="sex"]' ).autocomplete({
      lookup: __DATA_sex,
      onSelect: function (suggestion) {
      }
    });
    
    $('input[name="ent"]' ).autocomplete({
      lookup: __DATA_ents,
      lookupLimit: '5',
      onSelect: function(suggestion) {
          var toUC =  $(this).val().toUpperCase();
          $(this).val( toUC );
      }
    });

    $(".title").css("font-family",'Dosis');

}
