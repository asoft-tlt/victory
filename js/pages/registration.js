myApp.onPageInit('registration', function () {
 $$('#reg-form').attr('action', serverpath+'register');
 myApp.closeModal('.login-screen');
 $$('form#reg-form').on('submitError', function (data) {
  if(data.detail.xhr.status==422){
   var msg=JSON.parse(decodeURI(data.detail.xhr.responseText));
   var html='';
   for (var prop in msg) {
    html=html+'<br>'+msg[prop][0];
   }
   $$('#msgreg').html(html);
  }     
 myApp.popup('.popup-registrationerror');
 });
 $$('form#reg-form').on('submitted', function () {
  myApp.popup('.popup-registrationsms');
 });
 $$('select#group').on('keyup keydown change', function () {
  if ($$('select#group').val() === 'partner') {
   $$('.forUr').css('display', 'none');
  } else {
   $$('.forUr').css('display', 'block');
  }
 });
 $$('.open-selectgroup').on('click', function () {
  myApp.popup('.popup-selectgroup');
 });
});