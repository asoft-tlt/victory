var islogins= false;
var sid = false;
var access_token= false;//Authorization 
var token_type= false;
var tocken='Bearer ';
var serverpath="http://victrack.ru/api/";
var myMap=false;
var vicFunc = new victoryExchangeFunc();
var userProfileData=false;
var login='';
var password='';
var opendopinfo=true;
var cityIsSearched=0;
var loading = 0;
var last_page=0;
var pagelistload=0; 
var openRoute=0; //маршрут открытый на карте

var car_types={1:"пухтовоз", 2:"реф. с перегородкой",3:"реф. мультирежимный",4:"ломовоз",5:"скотовоз",6:"автобус",7:"трал",8:"газовоз",9:"низкорамный",10:"цельнометалл.",11:"все закр.+изотерм",12:"все открытые",13:"седельный тягач",14:"лесовоз",15:"цистерна",16:"автотранспортер",17:"кран",18:"конт.площадка",19:"самосвал",20:"микроавтобус",21:"фургон",22:"изотермический",23:"рефрижератор",24:"тентованный",25:"контейнер",26:"бортовой",27:"цементовоз",28:"муковоз",29:"автовоз",30:"трубовоз",31:"шаланда",32:"манипулятор",33:"панелевоз",34:"зерновоз",35:"стекловоз",36:"бетоновоз",37:"кормовоз",38:"автовышка",39:"открытый конт.",40:"щеповоз",41:"коневоз",42:"эвакуатор",43:"низкорам.платф.",44:"пикап",45:"бензовоз",46:"вездеход",47:"негабарит",48:"телескопический",49:"битумовоз",50:"реф.-тушевоз",51:"пирамида",52:"балковоз(негабарит)",53:"рулоновоз",54:"площадка без бортов",55:"реф.+изотерм"};
var cargo_types={1:"Автошины",2:"Алкогольные напитки",3:"Безалкогольные напитки",4:"Бумага",5:"Бытовая техника",6:"Грибы",7:"Древесина",8:"Древесный уголь",9:"Зерно и семена (в упаковк",10:"Изделия из кожи",11:"Изделия из металла",12:"Казеин",13:"Канц. товары",14:"Ковры",15:"Компьютеры",16:"Консервы",17:"Контейнер 40фут",18:"Макулатура",19:"Мебель",20:"Медикаменты",21:"Металл",22:"Металлолом",23:"Молоко сухое",24:"Мороженое",25:"Мясо",26:"Нефтепродукты",27:"Оборудование и запчасти",28:"Обувь",29:"Овощи",30:"Одежда",31:"Парфюмерия и косметика",32:"Пиво",33:"Пластик",34:"Продукты питания",35:"Птица ",36:"Изделия из резины",37:"Рыба (неживая)",38:"Сантехника",39:"Сахар",40:"Сборный груз",41:"Стекло и фарфор",42:"Стройматериалы",43:"Табачные изделия",44:"Тара и упаковка",45:"Текстиль",46:"ТНП",47:"Торф",50:"Транспортные средства",51:"Удобрения",52:"Фрукты",53:"Хим. продукты опасные",54:"Хим. продукты неопасные",55:"Хозтовары",56:"Шкуры мокросоленые",57:"Электроника",58:"Ягоды",59:"Другой",60:"ДСП",61:"Утеплитель",62:"Кирпич",63:"Трубы",64:"ЛДСП",65:"Фанера",66:"Минвата",67:"Пенопласт",68:"Гофрокартон",70:"Стеклотара (бутылки и др.",71:"Мука",73:"Поддоны",74:"Чипсы",75:"Соки",76:"Цемент",77:"Кондитерские изделия",78:"Кабель",79:"Холодильное оборудование",80:"Доски",81:"Пиломатериалы",82:"Бытовая химия",83:"ДВП",84:"Контейнер 20фут",85:"Крупа",86:"Металлопрокат",87:"Вагонка",88:"Ферросплавы",89:"Кормовые/пищевые добавки",90:"Игрушки",91:"Оборудование медицинское",92:"Зерно и семена (насыпью)",93:"Цветы",94:"Шпалы",95:"ЖБИ",96:"Гипс",97:"Газосиликатные блоки",98:"Арматура",100:"Сэндвич-панели",101:"Двери",102:"Домашний переезд",103:"Огнеупорная продукция",105:"Инструмент",106:"Люди"};
var payment_types={1:"100% по ОТТН безнал. с НДС",2:"100% по ОТТН безнал. без НДС",3:"100% по ФТТН",4:"100% по ФТТН без НДС",5:"100% по ФТТН + квиток",6:"50% по ФТТН, 50% по ОТТН безнал. с НДС",7:"50/50 по ФТТН без НДС",8:"Наличка на выгрузке",9:"Наличка на карту",10:"Наличка на погрузке",11:"Предоплата",12:"50/50 по ФТТН с НДС"};
var loading_types={1:"верхняя",2:"боковая",4:"задняя",8:"с полной растентовкой",32:"со снятием поперечных пер",64:"со снятием стоек",128:"без ворот",256:"гидроборт",512:"аппарели",1024:"с обрешеткой",2048:"с бортами",4096:"боковая с 2-х сторон"};
var subscriptionsfrom='';
var subscriptionsto='';
var map_Routes_Detail='';
// Initialize app
var myApp = new Framework7({
});
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
   /* dynamicNavbar: true*/
});

// Logins
$$(document).on('deviceready', function () {    
    if (!vicFunc.isLogin()) {
        myApp.loginScreen();
    } else {
        mainView.router.loadPage('pages/map.html');
    }    
 $$('#activation-form').attr('action', serverpath+'activation/');    
//Авторизация пользователя    
 $$('#login-form').attr('action', serverpath+'login/');
 //Если не удалась авторизация
 $$('form#login-form').on('submitError', function (data) {
  if(data.detail.xhr.status==422){
    msg=JSON.parse(decodeURI(data.detail.xhr.responseText));            
    var html='';
      for (var i in msg) {
        html=html+'<br>'+msg[i][0];
       }
        $$('#entererror').html(html);
      }     
    myApp.popup('.popup-wrongpass');
   myApp.loginScreen();
  });
 //авторизация удалась 
  $$('form#login-form').on('submitted', function (data,status, xhr) {
   password=$$('form#login-form input[name=password]').val();
   login=$$('form#login-form input[name=phone]').val().replace('+7', 8);
   msg=JSON.parse(decodeURI(data.detail.xhr.responseText)); 
   islogins=true;
   access_token='Bearer '+msg.access_token;//data.detail.xhr.getResponseHeader('Authorization').replace('Bearer ', ''); 
   token_type='Bearer';
   vicFunc.getdataserver('firstperson','');
  });

//Логика восстановления пароля 
  $$('#newpasswordstep1').on('click', function () {
   myApp.popup('.popup-newpasswordphone');
  });
  $$('#newpasswordstep2').on('click', function () {
   myApp.closeModal('.popup-newpasswordphone');
   myApp.popup('.popup-newpasswordsms');
  });
  $$('#newpasswordstep3').on('click', function () {
   myApp.closeModal('.popup-newpasswordsms');
   myApp.popup('.popup-newpasswordconfirm');
  });
  $$('#newpasswordstep4').on('click', function () {
   alert('Пароль изменен');
   myApp.closeModal('.popup-newpasswordconfirm');
  });
  
  /*поиск города*/
  $$('.city_search').keyup( function () {    
    var value_seach = $$(this).val();
    if(value_seach.length > 3 && cityIsSearched===0){
       vicFunc.activeCitySearch=$$(this);
       cityIsSearched=1;
       vicFunc.getdataserver('cities_search','', value_seach);
       
    }
  });
});

myApp.onPageInit('routes', function (page) {vicFunc.getdataserver('orders','{}');});

myApp.onPageInit('list', function (page) {vicFunc.getdataserver('list','{}');
                 
                 $$('.infinite-scroll').on('infinite', function () {                   
                 if(loading===0 && last_page>=pagelistload){
                   loading=1;
                   var data={page: pagelistload};
                   vicFunc.getdataserver('list',data);                 
                  }
                 });
});

myApp.onPageInit('map', function (page) {
vicFunc.getdataserver('map_points','');
myApp.addView('.view-right', {
    name: 'right',
    domCache:true,
});


 $$('#dispetcher').on('click', function () {
	myApp.popup('.popup-dispetcher');
 });
 $$('#reload').on('click', function () {
   vicFunc.getdataserver('map_points','');
 });

 $$('#close-action').on('click', function () {
	myApp.closeModal('.popup-action');
 }); 
 
 $$('#subscribe-action').on('click', function () {
    if(openRoute!==0){
    vicFunc.getdataserver('addtosubscriptions','', openRoute);
    }
    myApp.closeModal('.popup-action');
 });  
  if(userProfileData.role_id==7){
 $$('#get-route-action').on('click', function () {
    if(openRoute!==0){
    vicFunc.getdataserver('routerequest','', openRoute);
    }
    myApp.closeModal('.popup-action');
 });  
   $$('#rate-action').on('click', function () {
    if(openRoute!==0){
    myApp.popup('.popup-rateorder');
    }
 });
  $$('#saverate').on('click', function () {
    if(openRoute!==0){
     var per_km=0;
    if($$('#per_km').prop('checked')===true){ per_km=1;}
    var data={per_km: per_km, rate: $$('#ratecount').val()};
    console.log(data);
    vicFunc.getdataserver('rateoffer',data, openRoute);
    }
    myApp.closeModal('.popup-rateorder');
    myApp.closeModal('.popup-action');
 });  
  
  $$('#call-action').on('click', function () {
    if(openRoute!==0){
    vicFunc.getdataserver('callback','', openRoute);
    }
    myApp.closeModal('.popup-action');
 });  
 $$('#question-action').on('click', function () {
    if(openRoute!==0){
   // vicFunc.getdataserver('callback','', openRoute);
    }
    myApp.closeModal('.popup-action');
 });
  $$('#question-action').remove();
  }else{
   $$('#question-action').remove();
   $$('#call-action').remove();
    $$('#get-route-action').remove();
      $$('#rate-action').remove();
        $$('#saverate').remove();
  }
 var myCalendar_search_from = myApp.calendar({
    input: '#calendar_date_from',
    dateFormat: 'dd.mm.yyyy',
    closeOnSelect: true,
    monthNames:['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август' , 'Сентябрь' , 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort:['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг' , 'Сен' , 'Окт', 'Ноя', 'Дек'],
    dayNames: 	['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: 	['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
});   
  var myCalendar_search_to  = myApp.calendar({
    input: '#calendar_date_to',
    dateFormat: 'dd.mm.yyyy',
    closeOnSelect: true,
    monthNames:['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август' , 'Сентябрь' , 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort:['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг' , 'Сен' , 'Окт', 'Ноя', 'Дек'],
    dayNames: 	['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: 	['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
});
});

myApp.onPageInit('map-routes', function (page) {
    	var html='';
   for (var i in map_Routes_Detail){    
    var subscribecss='ico-star-white';//если в подписках класс должен быть ico-star-yellow
      	for (var v in userProfileData.subscriptions) {
            if(userProfileData.subscriptions[v].city_from.CityName==map_Routes_Detail[i].startpoint[0] && userProfileData.subscriptions[v].city_to.CityName==map_Routes_Detail[i].endpoint[0] ){
               var subscribecss='ico-star-yellow';  
            }
        }
    var denger='';//'<i class="ico ico-danger-white"></i>';//если нужно показать знак опастности
    var cars='<i class="ico ico-cars-white"></i>';//если нужно показать знак машинки
     var price=Math.round(map_Routes_Detail[i].carrier_rate /map_Routes_Detail[i].route_length);//расчет цены за км
     var publicprice='';
     if(price>0){publicprice=price+'RUB/KM';}
 html = html+'<div class="swiper-slide blok">'+
'<img class="fon" src="/images/pages/top_routemodal.jpg" /><div class="head">'+
'<div class="head2">'+
'<p class="zvezd"><a><i class="ico '+subscribecss+'"></i></a></p>'+
'<p class="zvezd"><a>'+denger+'</a><a>'+cars+'</a></p>'+
'</div>'+
'<div class="head3"><p><span class="ico icon-dates"></span><span>'+vicFunc.getmyDateFormat(map_Routes_Detail[i]['loading'])+'</span> - <span>'+vicFunc.getmyDateFormat(map_Routes_Detail[i]['unloading'])+'</span></p></div>'+
'<div class="head4"><a class="add_dispatch" name="'+map_Routes_Detail[i].id+'"><img src="/images/pages/dispether2.png" /></a></div>'+
'</div>'+
'<div class="mesto">'+
'<span class="icon_map_routes "></span>'+
'<p class="mesto2">'+
'<span class="gorod">'+map_Routes_Detail[i].startpoint[0]+'</span>'+
'<span class="gorod2">'+map_Routes_Detail[i].startpoint[1]+'</span>'+
'</p>'+
'<p class="mesto2">'+
'<span class="gorod">'+map_Routes_Detail[i].endpoint[0]+'</span>'+
'<span class="gorod2">'+map_Routes_Detail[i].endpoint[0]+'</span>'+
'</p>'+
'</div>'+
'<div class="rastoyan">'+
'<p class="mesto3">'+
'<span class="gorod2">Расстояние</span>'+
'<span class="gorod">'+map_Routes_Detail[i].route_length+' км</span>'+
'</p>'+
'<p><div class="border showinmap" from="'+map_Routes_Detail[i].startpoint[0]+'" to="'+map_Routes_Detail[i].endpoint[0]+'"><img src="/images/pages/ic_explore_blue.svg" /></div></p>'+
'</div>'+
'<div class="cena">'+
'<p class="mesto3">'+
'<span class="gorod2">Cтавка</span>'+
'<span class="gorod">'+map_Routes_Detail[i].carrier_rate+' RUB <i>'+publicprice+'</i></span>'+
'</p>'+
'</div>'+
'<div class="podrob">';
var class1=''; var class2='';
if(opendopinfo){class1='podrinfoclose'; class2='active';}
html=html+'<a class="podrinfo '+class1+'" name="'+map_Routes_Detail[i].id+'">ПОДРОБНАЯ ИНФОРМАЦИЯ</a>'+
'<div class="detailinfo'+map_Routes_Detail[i].id+' '+class2+'"><div class="info">'+
'<p class="variant">Варианты оплаты</p>'+
'<p class="variant1"><i>-</i>'+map_Routes_Detail[i].payment_type_id+'</p>'+
'</div>'+
'<div class="gruz">'+
'<p class="variant">Тип груза</p>'+
'<p class="variant2 ska">'+map_Routes_Detail[i].cargo_type_txt+'</p>'+
'<p class="ves">'+
'<span class="qaz">Вес</span>'+
'<span class="qaz">Объем</span>'+
'</p>'+
'<p class="ves">'+
'<span class="qaz2">'+map_Routes_Detail[i].cargo_weight+'</span>'+
'<span class="qaz2">'+map_Routes_Detail[i].cargo_volume+'</span>'+
'</p>'+
'<p class="variant ska">Габариты</p>';
var cargo_length='';
if(map_Routes_Detail[i].cargo_length>0){cargo_length=map_Routes_Detail[i].cargo_length+' м';}
var cargo_width='';
if(map_Routes_Detail[i].cargo_width>0){cargo_width=map_Routes_Detail[i].cargo_width+' м';}
var cargo_height='';
if(map_Routes_Detail[i].cargo_height>0){cargo_height=map_Routes_Detail[i].cargo_height+' м';}

html=html+'<p class="variant2">'+cargo_length+'&nbsp;<i>x</i>&nbsp;'+cargo_width+'&nbsp;<i>x</i>&nbsp;'+cargo_height+'</p>'+
/* //раздел про авто. данные не передаются, поэтому закомментирован
 '<p class="alarm"><img src="/images/pages/ic_danger_red.svg"/><span>Опасный груз</span></p>'+
'</div>'+
'<div class="tip">'+
'<p class="variant">Тип кузова</p>'+
'<p class="variant2 ska">'+car_types[map_Routes_Detail[i].cargo_type_id]+'</p>'+
'<p class="variant">Загрузка</p>'+
'<p class="variant2 ska">Боковая</p>'+
'<p class="variant">Разгрузка</p>'+
'<p class="variant2 ska">Задняя</p>'+
'<p class="variant">Минимальные габариты</p>'+
'<p class="ves">'+
'<span class="qaz10">Длина</span>'+
'<span class="qaz10">Ширина</span>'+
'<span class="qaz10">Высота</span>'+
'</p>'+
'<p class="ves">'+
'<span class="qaz11">'+map_Routes_Detail[i].cargo_length+' м</span>'+
'<span class="qaz11">'+map_Routes_Detail[i].cargo_width+' м</span>'+
'<span class="qaz11">'+map_Routes_Detail[i].cargo_height+' м</span>'+
'</p>'+*/
'</div></div></div>';
    html=html+'</div>'; 
   }

$$('#maproutesblocks .swiper-wrapper').html(html);
$$('.add_dispatch').on('click', function(){
    myApp.popup('.popup-action');
    openRoute=$$(this).attr('name');
    });   
 $$('.podrinfo').on('click', function () {
    $$('.detailinfo'+$$(this).attr('name')).toggleClass('active');;
    $$(this).toggleClass('podrinfoclose');
    if(opendopinfo){opendopinfo=false;}else{opendopinfo=true;}
    });
 
  $$('.showinmap').on('click', function () {
        subscriptionsfrom=$$(this).attr('from');
        subscriptionsto=$$(this).attr('to');
         mainView.router.loadPage('pages/map.html');
        });   
    
 var mySwiper = myApp.swiper('#maproutesblocks .swiper-container', { 
  spaceBetween: 16
  });
	});
myApp.onPageInit('person', function (page) {
	if(userProfileData!==false){
	vicFunc.setUserProfile(userProfileData, '.person-block');
	}else{	
	vicFunc.getdataserver('person','');
    }
	});
myApp.onPageInit('personedit', function (page) {
	if(userProfileData!==false){
	vicFunc.setUserProfileEdit();
	}else{	
	mainView.router.loadPage('pages/person.html');
    }
	});
myApp.onPageInit('subscribe', function (page) {
    var html='';
    var dummyMap = new ymaps.Map("mapdummy", {
        center: [55.751574, 37.573856],
        zoom: 9
        });
      var mynewroute=[];
  	for (var i in userProfileData.subscriptions) {
     mynewroute[userProfileData.subscriptions[i].id]=new ymaps.route([userProfileData.subscriptions[i].city_from.CityName, userProfileData.subscriptions[i].city_to.CityName]);   
      mynewroute[userProfileData.subscriptions[i].id].then(
       function (route) {
         var routeLength = route.getLength();
         for(var t in mynewroute){
            if(mynewroute[t]._value==route){
            $$('#longcount'+t).html(routeLength+' км');    
            }
         }
       }
     );
        html=html+'<div class="subscribeblock" id="subsc'+userProfileData.subscriptions[i].id+'">'+
				'<div class="begin">'+
					'<span class="icon_map_routes"></span>'+
					'<div class="address-name">'+
						'<div class="city">'+userProfileData.subscriptions[i].city_from.CityName+'</div>'+
						'<div class="region">'+userProfileData.subscriptions[i].city_from.RegionName+'</div>'+
					'</div>'+
					'<div class="address-name">'+
						'<div class="city">'+userProfileData.subscriptions[i].city_to.CityName+'</div>'+
						'<div class="region">'+userProfileData.subscriptions[i].city_to.RegionName+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="itog">'+
					'<div class="long"><span class="ico icon-dist"></span><span id="longcount'+userProfileData.subscriptions[i].id+'"> </span></div>'+
					'<div class="compass showinmap" to="'+userProfileData.subscriptions[i].city_to.CityName+'" from="'+userProfileData.subscriptions[i].city_from.CityName+'"><span class="ico icon-compass"></span></div>'+
				'</div>'+
				'<div class="stat">'+
					'<div class="label" id="enabled'+userProfileData.subscriptions[i].id+'">';
                if(userProfileData.subscriptions[i].enabled==1){html=html+'Включена'; var check='checked="checked"';
                }else{html=html+'Выключена';var check='';}
                 html=html+'</div>'+
					'<label class="label-switch"><input type="checkbox" class="enabled_subscribe" '+check+' name="'+userProfileData.subscriptions[i].id+'"><div class="checkbox"></div></label>'+
				'</div>'+
				'<div class="button-container">'+
					'<!--div class="change_subscribe btn-lite" changeid="'+userProfileData.subscriptions[i].id+'">ИЗМЕНИТЬ</div-->'+
					'<div class="delete_subscribe btn-lite" deleteid="'+userProfileData.subscriptions[i].id+'">УДАЛИТЬ</div>'+
				'</div>'+
		 '</div>';
        }
    /*		  */
   $$('#subscribeblocks').html(html);

   $$('.showinmap').on('click', function () {
        subscriptionsfrom=$$(this).attr('from');
        subscriptionsto=$$(this).attr('to');
         mainView.router.loadPage('pages/map.html');

        });
     $$('.delete_subscribe').on('click', function () {
          var delete_id=$$(this).attr('deleteid');
          vicFunc.getdataserver('delete_subscriptions', {}, delete_id);
          $$('#subsc'+delete_id).remove();
          
        });
     $$('.enabled_subscribe').on('change', function () {
       var enabled_id=$$(this).attr('name');
       if($$(this).prop('checked')===true){  
        vicFunc.getdataserver('enable_subscriptions', {enabled: true}, enabled_id);
       }else{
        vicFunc.getdataserver('enable_subscriptions', {}, enabled_id);
        
       }
        });

    
     $$('.addsubscribe').on('click', function () {	
      myApp.popup('.popup-addsubscribe');            
    });
     
      $$('.save_subscribe').on('click', function () {
         var data={city_from_id: $$('#begin_id').val(), city_to_id: $$('#end_id').val()};
         vicFunc.getdataserver('create_subscriptions', data);
          myApp.closeModal('.popup-addsubscribe');
        });
    
    
    });


myApp.onPageInit('message', function (page) {
    vicFunc.getdataserver('tickets','');
    $$('.theme-tab').on('click', function () {
          vicFunc.getdataserver('tickets','');
        });
    
    
    $$('button.sendMsg').on('click', function () {
        var theme=$$('#themeid').val();
        var msg=$$('#themenewmsg').val();
        if(theme!=='' && msg!==''){
        vicFunc.getdataserver('ticket_message', $$.serializeObject({message:msg}), theme);
        }
    });
    
    });

myApp.onPageInit('cars', function (page) {
	
if(car_types===false){	
vicFunc.getdataserver('car_types',''); 
}else{
vicFunc.carsshow();
}
  
    $$('.addcar').on('click', function () {	
      myApp.popup('.popup-addcars');      
    });

	 $$('#saveNewCar').on('click', function () {
	   data =  $$.serializeObject(myApp.formToJSON($$('form#add-car')));
	    vicFunc.getdataserver('car_create', data);
        myApp.closeModal('.popup-addcars');
	 });
     
});

var pageRegistration;
// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    myApp.closePanel();
    if (!vicFunc.isLogin() && (page.name !== 'registration') && (page.name.indexOf('smart-select-radio') === -1)) {
        myApp.loginScreen();
    } else {
        myApp.closeModal('.login-screen');
    }
    $$('#search_save').on('click', function(){
           // vicFunc.getdataserver('car_create', data);	
        } );
     if (vicFunc.isLogin()) { 
    $$('.smart-select-popup').on('close', function(){ 
        myApp.openPanel('right');      
     });
     }

});
$$(document).on('pageBack', function (e) {
    var page = e.detail.page;
    if (!vicFunc.isLogin()) {
        myApp.loginScreen();
    }
});


/*popup окна*/
    $$('#per_km').on('change', function(){
        if($$(this).prop('checked')===true){
            $$('#perkm').html('RUB/КМ');
        }else{
            $$('#perkm').html('RUB');
        }
        });
$$('#search_save').on('click', function(){
   // $('#region_begin').val();
   // $('#region_end').val();
   /*	'loading_date_from' => 'date_format:'.config('app.dateFormat'), // +
			'loading_date_to' => 'date_format:'.config('app.dateFormat'), // +
			'only_my_cars' => '', // +
			'only_my_subscriptions' => '', // +
			'weight_from' => 'integer', // + float?
			'weight_to' => 'integer', // + float?
			'volume_from' => 'integer', // + float?
			'volume_to' => 'integer', // + float?
			'length_from' => 'integer', // + float?
			'length_to' => 'integer', // + float?
			'width_from' => 'integer', // + float?
			'width_to' => 'integer', // + float?
			'height_from' => 'integer', // + float?
			'height_to' => 'integer', // + float?
			'cargo_type' => 'array', //array IN +
			'car_type' => 'array', //array HAS +
			'loading_way' => 'array', //array HAS +
			'carrier_rate' => 'integer', // + float?
			'carrier_rate_type' => 'required|in:0,1', //
			'payment_type' => 'array', //array IN +*/
   
    var data={};
    data['from_city']=$$('#search_begin_id').val();
    data['to_city']=$$('#search_end_id').val();
    data['loading_date_from']=$$('#calendar_date_from').val();
    data['loading_date_to']=$$('#calendar_date_to').val();
    var only_cars=0;
    if($$('#only_cars').prop('checked')===true){only_cars=1;}    
    data['only_my_cars']=only_cars;
    var only_my_subscriptions=0;
    if($$('#only_my_subscriptions').prop('checked')===true){only_my_subscriptions=1;}        
    data['only_my_subscriptions']=only_my_subscriptions;
    data['weight_from']=$$('#weight_from').val();   
    data['weight_to']=$$('#weight_to').val();
    data['length_from']=$$('#length_from').val();   
    data['length_to']=$$('#length_to').val();
    data['volume_from']=$$('#volume_from').val();   
    data['volume_to']=$$('#volume_to').val();
    data['height_from']=$$('#height_from').val();   
    data['height_to']=$$('#height_to').val();       
    data['carrier_rate']=$$('#rate_search').val();
    var carrier_rate_type=0;
    if($$('#carrier_rate_type').prop('checked')===true){carrier_rate_type=1;}    
    data['carrier_rate_type']=carrier_rate_type;    
    data['cargo_type']=$$('#cargo_type').val();
    
    data['car_type']=$$('#car_type').val();
      console.log($$('#cargo_type').val());
      
    //   vicFunc.getdataserver('map', data);
    });


    