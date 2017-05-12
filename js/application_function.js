function victoryExchangeFunc() {
	var _this=this;
	var lastrequest='';
	var lastrequestdata='';
	var lastrequestvariable=undefined;
	var requestnow=0; //есть ли сейчас запрос
	var tryes=0; //количество попыток подключения к серверу
//функция проверки есть авториирован ли пользователь Если нет, выводим форму авторизации
	var activeCitySearch='';//объект последнего поиска города. 
    this.isLogin = function () {
        return islogins;
    };

//функция распределения данных с параметром type = getpath, и получения нужного пути с параметром type = setdata
//responseData - может принимать значение ID
this.route = function(type, data, responseData){
 if(data=='list'){if(type=='getpath'){ return {path:'list', method:'GET'}; }else { _this.routesshow(responseData,'#listblocks');} }
 if(data=='map_points'){if(type=='getpath'){ return {path:'map/points', method:'POST'}; }else{ _this.createMap(responseData);/* _this.getdataserver('cargo_types'); */ } }
 if(data=='person'){if(type=='getpath'){ return {path:'settings/profile/edit', method:'GET'}; }else{ _this.setUserProfile(responseData);} }
 if(data=='firstperson'){if(type=='getpath'){ return {path:'settings/profile/edit', method:'GET'}; }else{ _this.openfirst(responseData);} }

 if(data=='orders'){if(type=='getpath'){ return {path:'orders', method:'GET'}; }else{ _this.routesshow(responseData,'#routesblocks');} }
 if(data=='map_detail'){if(type=='getpath'){ return {path:'map/points/info', method:'POST'}; }else{map_Routes_Detail=responseData; _this.mapRoutesDetail(responseData);} } 
 
 if(data=='login'){if(type=='getpath'){ return {path:'login/', method:'POST'}; }else{ console.log(responseData);}  } 
 
  if(data=='cities_search'){if(type=='getpath'){ return {path:'cities/'+responseData, method:'GET'}; }else{cityIsSearched=0; _this.createDivCity(responseData);}  } 
 
 
 if(data=='person_edit'){if(type=='getpath'){ return {path:'settings/profile/edit', method:'POST'}; }else{ console.log(responseData);} }/*редактирование пользователя*/
 if(data=='map'){if(type=='getpath'){ return {path: 'map', method:'POST'}; }else{ _this.createMap(responseData);} }  
 if(data=='car_types'){if(type=='getpath'){ return {path:'settings/cars/types', method:'GET'}; }else{ car_types=responseData; vicFunc.carsshow();}}
 
 if(data=='cargo_types'){if(type=='getpath'){return {path:'settings/cargo/types', method:'GET'};}else{cargo_types=responseData; /*console.log(responseData);_this.getdataserver('payment_types');*/}}
 
 if(data=='payment_types'){if(type=='getpath'){return {path:'settings/payment/types', method:'GET'};}else{payment_types=responseData; /*console.log(responseData);_this.getdataserver('loading_types');*/}}
 
 if(data=='loading_types'){if(type=='getpath'){return {path:'settings/loading/types', method:'GET'};}else{loading_types=responseData; /*console.log(responseData);*/}}

 if(data=='car_create'){if(type=='getpath'){ return {path:'settings/cars/create', method:'POST'}; }else{ _this.savecardata(responseData); vicFunc.carsshow();} } 
 if(data=='tickets'){if(type=='getpath'){ return {path:'tickets-list', method:'GET'}; }else{ _this.ticketThemeCreate(responseData);} }
  if(data=='create_subscriptions'){if(type=='getpath'){ return {path:'settings/subscriptions/create', method:'POST'}; }else{ _this.addSubscriptions(responseData);} } 
 
 
  if(responseData!==undefined){
 if(data=='rateoffer'){if(type=='getpath'){ return {path: responseData+'/rateoffer', method:'POST'}; }else{ console.log(responseData);} } 
 if(data=='routerequest'){if(type=='getpath'){ return {path: responseData+'/routerequest', method:'POST'}; }else{ console.log(responseData);} } 
 if(data=='addtosubscriptions'){if(type=='getpath'){ return {path: responseData+'/addtosubscriptions', method:'POST'}; }else{ console.log(responseData);} } 
 if(data=='callback'){if(type=='getpath'){ return {path: responseData+'/callback', method:'POST'}; }else{ console.log(responseData);} }  
 if(data=='orders_nextstate'){if(type=='getpath'){ return {path: 'orders/'+responseData+'/nextstate', method:'POST'}; }else{ console.log(responseData);} } 
 if(data=='ticket_view'){if(type=='getpath'){ return {path:'tickets-list/'+responseData+'/view', method:'GET'}; }else{ _this.ticketThemeView(responseData);} } 
 if(data=='ticket_message'){if(type=='getpath'){ return {path:'tickets-list/'+responseData+'/message', method:'POST'}; }else{ console.log(responseData);} } 
 if(data=='ticket_close'){if(type=='getpath'){ return {path:'tickets-list/'+responseData+'/close', method:'POST'}; }else{ console.log(responseData);} } 
 if(data=='ticket_order'){if(type=='getpath'){ return {path: responseData+'/ticket', method:'POST'}; }else{ console.log(responseData);} } 
 if(data=='delete_subscriptions'){if(type=='getpath'){ return {path:'settings/subscriptions/'+responseData+'/delete', method:'DELETE'}; }else{ }} 
  if(data=='enable_subscriptions'){if(type=='getpath'){ return {path:'settings/subscriptions/'+responseData+'/enable', method:'POST'}; }else{ }}

 if(data=='car_delete'){if(type=='getpath'){return {path:'settings/cars/'+responseData+'/delete', method:'DELETE'};}else{}}  
 if(data=='enable_cars'){if(type=='getpath'){return {path:'settings/cars/'+responseData+'/enable', method:'POST'};}else{}}    
 if(data=='car_edit'){if(type=='getpath'){ return {path:'settings/cars/'+responseData+'/edit', method:'POST'}; }else{ console.log(responseData);} }
 if(data=='get_car_edit'){if(type=='getpath'){ return {path:'settings/cars/'+responseData+'/edit', method:'GET'}; }else{ _this.changeCar(responseData);} }    
  if(data=='addtosubscriptions'){if(type=='getpath'){ return {path: responseData+'/addtosubscriptions', method:'POST'}; }else{console.log(responseData);} }
if(data=='rateoffer'){if(type=='getpath'){ return {path: responseData+'/rateoffer', method:'POST'}; }else{console.log(responseData);} } 
if(data=='routerequest'){if(type=='getpath'){ return {path: responseData+'/routerequest', method:'POST'}; }else{console.log(responseData);} }
if(data=='callback'){if(type=='getpath'){ return {path: responseData+'/callback', method:'POST'}; }else{console.log(responseData);} } 
 }
};


//функция получения данных с сервера
this.getdataserver=function(parent, data, variable){
if(requestnow==1 && parent!=='login'){
	console.log(parent);
	_this.tryes=_this.tryes+1;
	if(_this.tryes>3){
		requestnow=0;
	}
 setTimeout(function() { _this.getdataserver(parent, data, variable) }, 2000);
}else{
requestnow=1;
 var t = _this.route('getpath', parent, variable);
 if (data === undefined) {data = '';}
 if(parent!=='login'){
	lastrequest=parent;
	lastrequestdata=data;
	lastrequestvariable=variable;
 var header = {Authorization:access_token, 'Accept':'application/json', 'X-Requested-With':'XMLHttpRequest'};
 }else{	
  var header = {'Accept':'application/json', 'X-Requested-With':'XMLHttpRequest'};
 }

 var xhr = $$.ajax({
  method: t.method,
  url: serverpath+t.path,
  crossDomain: true,
  dataType: 'json',
  headers: header,
  contentType: 'application/x-www-form-urlencoded', // 'application/json',
  data: data,
  error: function (xhr) {
	console.log(_this.tryes, requestnow);

   if(xhr.status==200){
   var responseData = JSON.parse(xhr.responseText);	
	_this.route('setdata',parent,responseData);
   if(parent!=='login'){
	_this.tryes=0;
	 }
   }else if(xhr.status==0 && _this.tryes<2){
	var data={phone: login, password:  password};
	_this.getdataserver('login', data);
	//console.log(data);
	_this.tryes=_this.tryes+1;
   }else if(xhr.status==422 && parent!='login'){
	 msg=JSON.parse(decodeURI(xhr.responseText));            
	 var html='';	 
      for (var i in msg) {html=html+'<br>'+msg[i][0];}
        $$('#entererror').html(html);
		//console.log(html);
        myApp.popup('.popup-wrongpass');
   }
 
    if(xhr.status!=0){
		if(parent=='login' && lastrequest!=='' && xhr.status==200){			
			msg=JSON.parse(decodeURI(xhr.responseText)); 
  			access_token='Bearer '+msg['access_token'];
			requestnow=0;
			_this.getdataserver(lastrequest,lastrequestdata,lastrequestvariable);
		}else{
  access_token=xhr.getResponseHeader('Authorization');
  requestnow=0;
		}
	}
  }, 
 success: function (data) {
  var responseData = JSON.parse(data.detail.xhr.responseText);
  access_token=xhr.getResponseHeader('Authorization');
  requestnow=0;
  _this.route('setdata',parent,responseData);
  
  }
 });
  if(t.method=='DELETE'){requestnow=0;}
	}
};

this.ticketThemeView = function (responseData){
	var html='';
	var messages=responseData.messages;
	  for (var theme in messages) {
		var className='';
		if(messages[theme].operator_id !== null){ className='operator'; }
		if(messages[theme].user_id !== null){ className='user'; }
		//if(theme % 2 == 1 ){className='user'; }else{className='operator'; }
		html=html+'<div class="baloon-block '+className+'" id="baloon'+messages[theme].id+'">'+
		'<div class="messages">'+messages[theme].message+'</div>'+
		'<div class="time">'+_this.getmyDateFormat(messages[theme].created_at)+'</div>'+
		'</div>';
	  }
	$$('#themeid').val(responseData.id);
	 $$('#message-container').html(html);
	 $$('#theme-screen').hide();
	 $$('#messages-screen').show();
	 var sh=0;
	 $$('#message-container').children().each(function(indx, element){
		sh=sh+$$(element).outerHeight();
		} ); 
	$$('#message-container').scrollTop(sh); 
	$$('.theme-tab').removeClass('active');
	$$('.messages-tab').addClass('active');
	
};

/* подсказка города */
this.createDivCity = function (responseData){
	var html='';
	for (var key in responseData.items){
	 html=html+'<div class="cityBlock" id="cityID'+responseData.items[key].id+'">'+
		'<div class="namecity" id="namecity'+responseData.items[key].id+'">'+responseData.items[key].CityName+'</div>'+
		'<div class="nameregion" id="nameregion'+responseData.items[key].id+'">'+responseData.items[key].RegionName+'</div>'+
		'</div>';
		if(_this.activeCitySearch.val() == responseData.items[key].CityName){
			var tid=_this.activeCitySearch.attr('id');
			$$('#'+tid+'_id').val(responseData.items[key].id);
			$$('#'+tid).val(responseData.items[key].CityName);
			$$('.region_'+tid).text(responseData.items[key].RegionName);
			$$('#cities').css({display: 'none', zIndex: '-1'}); 
		}
	}
	$$('#cities').html(html);
	var coords=_this.activeCitySearch[0].getBoundingClientRect();
	//console.log(coords);
	$$('.cityBlock').click(function(){
		var tid=_this.activeCitySearch.attr('id');
		var idcity=$$(this).attr('id').replace('cityID', "");
		var name=$$('#namecity'+idcity).text();
		var region=$$('#nameregion'+idcity).text();
		$$('#'+tid+'_id').val(idcity);
		$$('#'+tid).val(name);
		$$('.region_'+tid).text(region);
		$$('#cities').css({display: 'none', zIndex: '-1'}); 
		});
	 $$('#cities').css({left: coords.left + "px", top: coords.bottom + "px", display: 'block', zIndex: '12510'}); 
};

this.ticketThemeCreate = function (responseData){
	var html='';
	var className= new Array('close', 'new', 'answered');
	  for (var theme in responseData) {
		html=html+'<div class="theme-block" id="theme'+responseData[theme].id+'">'+
		'<div class="themeico '+className[responseData[theme].state_id]+'">0</div><div class="themesubject">'+responseData[theme].subject.substr(0,28)+'<span>'+responseData[theme].subject.substr(0,30)+'</span></div>'+
		'</div>';
	  }
	
	 $$('#theme-screen').html(html);
	 $$('#messages-screen').hide();
	 $$('#theme-screen').show();
	$$('.messages-tab').removeClass('active');
	$$('.theme-tab').addClass('active');
	
	  $$('.theme-block').on('click', function () {
	     var theme_id=$$(this).attr('id').replace('theme', '');		
		 if(theme_id!==undefined){			
		 _this.getdataserver('ticket_view','', theme_id);
		 }
		});
};
 
this.createMap = function (responseData) {
    var rdata=responseData;
    if(responseData!==undefined){
	ymaps.geolocation.get().then(function (res) {
        // Предполагается, что на странице подключен jQuery

        myMap = new ymaps.Map("map", {
            center: [res.geoObjects.position[0],res.geoObjects.position[1]],
            zoom: 9
        });
	  selfPosition = new ymaps.GeoObject({
        geometry: {
          type: "Point",
		  preset:'islands#blueCircleDotIcon',
          coordinates: [res.geoObjects.position[0],res.geoObjects.position[1]] // координаты точки
       }
       });
	myMap.geoObjects.add(selfPosition); 
      var myGeoObject = new ymaps.GeoObject({options:{fillColor:'00000000'}});
      myMap.geoObjects.add(myGeoObject);
      var myObjectManager = new ymaps.ObjectManager({ clusterize: true });

myObjectManager.objects.options.set({
    preset: 'islands#darkOrangeCircleDotIconWithCaption',
    hasBalloon: false,
    zIndex: 500
});

    if(subscriptionsfrom!==''){
	    var mynewroute=new ymaps.route([subscriptionsfrom, subscriptionsto]);           
           mynewroute.then(
                function (route) {
                   route.options.set("mapStateAutoApply", true);
				    myMap.geoObjects.add(route);
                   
                  },
                function (error) {
                    console.log(error.message);
                }
            );
        }

      var myObjects = [];
    if(responseData.length>0){        
        for (var i = 0, l = responseData.length; i < l; i++) {
            myObjects.push({
                type: 'Feature',
                id: responseData[i].orders_id,
                geometry: {
                    type: 'Point',
                    coordinates: [responseData[i].Latitude, responseData[i].Longitude]
                }
            });
        }
    }
	


	
	
	
    myObjectManager.options.set('geoObjectOpenBalloonOnClick', false);
	myObjectManager.clusters.options.set({
    preset: 'islands#invertedDarkOrangeClusterIcons',
    hasBalloon: false,
    zIndex: 500
});	

	
  myObjectManager.clusters.events.add('click', function (e) {
	var objects =  e.get('target')._overlaysById[e.get('objectId')]._data.features;
	var objArr=[];
	for(var i in objects){
	objArr.push(objects[i].id);		
	}
    vicFunc.getdataserver('map_detail', {orders_ids:objArr} );    
});
  myObjectManager.objects.events.add('click', function (e) {
    vicFunc.getdataserver('map_detail', {orders_ids:[e.get('objectId')]} ); 
});  
  
  
        myObjectManager.add(myObjects);        
        myMap.geoObjects.add(myObjectManager);  
     	
		
		}, function (e) {
			console.log(e);
		});
    
    }
	
 }; 

/*преобразование даты*/
    this.getmyDateFormat = function (str_date) {
		var time = new Date(str_date);
		var month=["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
		formateddate=time.getDate()+ ' '+month[time.getMonth()];
		return formateddate;
	};
/*добавление в массив новой машины */
this.savecardata=function(responseData){
	var car=myApp.formToJSON($$('form#add-car'));
	car.id=responseData.id;
	car.enabled=1;
	userProfileData.cars.push(car);
	};	
	
/*отображение машин */
 this.carsshow = function(){
	  var carList = [];
    if(userProfileData!==false){
        carList = userProfileData.cars;
    }
    var carHtml = '';
    var enablesname=new Array('Выключена', 'Включена');
	 var classname=new Array('disabled', 'enabled');
    for (var car in carList) {

        carHtml = carHtml + '<div class="carblock ' + classname + '" id="car' + carList[car].id + '">'+
        '<div class="header">'+
         '<div class="carNumber car_code">' + carList[car].car_code + '</div>'+
         '<div class="region region_code">' + carList[car].region_code + '</div>'+
         '<div class="status"><div class="label" id="enabled">' + enablesname[ carList[car].enabled ] +'</div>'+
          '<div class="item-input">' +
                '<label class="label-switch"><input type="checkbox" class="enabled_cars" name="' + carList[car].id + '" ';
                if( carList[car].enabled ==1){carHtml = carHtml +   'checked="checked"';}
                 carHtml = carHtml + '><div class="checkbox"></div></label>' +     
         '</div></div>' +
        '</div>'+
        '<div class="body">'+ 
          '<div class="bodyType-name type-name">Tип кузова</div><div class="bodyType type-value car_type_id">' + car_types[carList[car].car_type_id] + '</div>'+ 
        '</div>'  +
        '<div class="body block2">'+ 
         '<div><div class="tonnage-name type-name">Грузоподъемность</div><div class="tonnage type-value carrying">' + carList[car]['carrying'] + '</div></div>'+
         '<div><div class="bodyVolume-name type-name">Объем кузова</div><div class="bodyVolume type-value volume">' + carList[car]['volume'] + '</div></div>'+
          '</div>'+
           '<div class="body block2">'+
                 '<div><div class="length-name type-name">Длина</div><div class="carlength type-value length">' + carList[car]['length'] + '</div></div>'+
                 '<div><div class="width-name type-name">Ширина</div><div class="carwidth type-value width">' + carList[car]['width'] + '</div></div>'+
                 '<div><div class="height-name type-name">Высота</div><div class="carheight type-value height">' + carList[car]['height'] + '</div></div>'+
                 '</div>'+
         '<div class="body">'+
                 '<div class="bodyType-name type-name">Номер ПТС</div><div class="bodyType type-value pts_number">' + carList[car]['pts_number'] + '</div>'+
          '</div>'+            
                 '<div class="end">'+
                 '<div class="change"><a class="changecar" changeid="'+carList[car].id+'">ИЗМЕНИТЬ</a></div>'+
                 '<div class="delete"><a class="deletecar" deleteid="'+carList[car].id+'">УДАЛИТЬ</a></div>'+
                '</div>' +
        '</div>';

    }
    $$('#carsblocks').html(carHtml);

	$$('.enabled_cars').on('change', function () {
       var enabled_id=$$(this).attr('name');
       if($$(this).prop('checked')==true){  
        vicFunc.getdataserver('enable_cars', {enabled: true}, enabled_id);
       }else{
        vicFunc.getdataserver('enable_cars', {}, enabled_id);        
       }
        });
    
	$$('.changecar').on('click', function () {
	 var car_id=$$(this).attr('changeid');
     vicFunc.getdataserver('get_car_edit', {}, car_id);      
    });
	
    $$('.deletecar').on('click', function () {
	 var car_id=$$(this).attr('deleteid');
     vicFunc.getdataserver('car_delete', {}, car_id);
	 	$$('#car'+car_id).remove();
    });
	
		var htmloption="";
	 for (var type in car_types) {
		 if(car_types[type]!=''){
		htmloption=htmloption+'<option value="'+type+'">'+car_types[type]+'</option>';
		 }
	 }
 

	$$('.bodyType_option').html(htmloption);

 };
 
 this.mapRoutesDetail= function(responseData){
	mainView.router.loadPage('pages/map_route.html');

 };
 /*изменение данных об автомобиле*/
 this.changeCar=function(responseData){
	$$('.popup-editcars #car_code').val(responseData.car_code);
	$$('.popup-editcars #region_code').val(responseData.region_code);
	$$('.popup-editcars #pts_number').val(responseData.pts_number);
	$$('.popup-editcars #carrying').val(responseData.carrying);
	$$('.popup-editcars #car_type_id').val(responseData.car_type_id);//
	$$('.popup-editcars #volume').val(responseData.volume);
	$$('.popup-editcars #length').val(responseData.length);
	$$('.popup-editcars #width').val(responseData.width);
	$$('.popup-editcars #height').val(responseData.height);
	myApp.popup('.popup-editcars');      
  

	$$('#saveCar').on('click', function () {
	data =  $$.serializeObject(myApp.formToJSON($$('form#edit-car')));
	$$('#car'+responseData.id+' .car_code').html($$('.popup-editcars #car_code').val());
	$$('#car'+responseData.id+' .region_code').html($$('.popup-editcars #region_code').val());
	$$('#car'+responseData.id+' .pts_number').html($$('.popup-editcars #pts_number').val());
	$$('#car'+responseData.id+' .carrying').html($$('.popup-editcars #carrying').val());
	$$('#car'+responseData.id+' .volume').html($$('.popup-editcars #volume').val());
	$$('#car'+responseData.id+' .length').html($$('.popup-editcars #length').val());
	$$('#car'+responseData.id+' .width').html($$('.popup-editcars #width').val());
	$$('#car'+responseData.id+' .height').html($$('.popup-editcars #height').val());
	$$('#car'+responseData.id+' .car_type_id').html( car_types[$$('.popup-editcars #car_type_id').val()] );

	    vicFunc.getdataserver('car_edit', data, responseData.id);
        myApp.closeModal('.popup-editcars');
	 });
     
};
 /*добавляем подписку после сохранения*/
 this.addSubscriptions= function(responseData){
	var html= $$('#subscribeblocks').html();
	  html=html+'<div class="subscribeblock" id="subsc'+responseData.id+'">'+
				'<div class="begin">'+
					'<span class="icon_map_routes"></span>'+
					'<div class="address-name">'+
						'<div class="city">'+responseData.city_from_city+'</div>'+
						'<div class="region">'+responseData.city_from_region+'</div>'+
					'</div>'+
					'<div class="address-name">'+
						'<div class="city">'+responseData.city_to_city+'</div>'+
						'<div class="region">'+responseData.city_to_region+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="itog">'+
					'<div class="long"><span class="ico icon-dist"></span><span id="longcount'+responseData.id+'"> </span></div>'+
					'<div class="compass showinmap" to="'+responseData.city_to_city+'" from="'+responseData.city_from_city+'"><span class="ico icon-compass"></span></div>'+
				'</div>'+
				'<div class="stat">'+
					'<div class="label" id="enabled'+responseData.id+'">';
             html=html+'Включена'; var check='checked="checked"';             
                 html=html+'</div>'+
					'<label class="label-switch"><input type="checkbox" class="enabled_subscribe" '+check+' name="'+responseData.id+'"><div class="checkbox"></div></label>'+
				'</div>'+
				'<div class="button-container">'+
					'<div class="delete_subscribe btn-lite" deleteid="'+responseData.id+'">УДАЛИТЬ</div>'+
				'</div>'+
		 '</div>';
  $$('#subscribeblocks').html(html);
   $$('.showinmap').on('click', function () {
        subscriptionsfrom=$$(this).attr('from');
        subscriptionsto=$$(this).attr('to');
         mainView.router.loadPage('pages/map.html');

        });
   new ymaps.route([responseData.city_from_city, responseData.city_to_city]).then(
    function (route) {
    var routeLength = route.getLength();
     $$('#longcount'+responseData.id).html(routeLength+' км');    
   }
  );
 };
/*отображение данных маршрута*/
 this.routesshow = function(responseData, parent){
  routesList=responseData.data;
  var routeHtml = '';
  for (var route in routesList) {
	  price=Math.round(routesList[route]['route_length']/routesList[route]['carrier_rate']);
    routeHtml = routeHtml + '<div class="routeblock" id="' + routesList[route]['id'] + '">'
    + '<div class="header">'
    + '<div class="item-media"><span class="ico icon-dates"></span></div>'
    + '<div class="item-title">' +  vicFunc.getmyDateFormat(routesList[route]['loading']) + '-' +vicFunc.getmyDateFormat(routesList[route]['unloading']) + '</div>';
    if(routesList[route]['status'] !==null && routesList[route]['status'] !==undefined){
	 routeHtml = routeHtml+ '<div class="item-status">' + routesList[route]['status'] + '</div>';
	}
   routeHtml = routeHtml  + '</div>'

    + '<div class="begin">'
    + '<span class="icon_map_routes"></span>'
    + '<div class="address-name"><div class="city">' + routesList[route]['startpoint'][0] + '</div>'
    + '<div class="region">' + routesList[route]['startpoint'][1] + '</div>'

    + '</div>'
    + '<div class="address-name"><div class="city">' + routesList[route]['endpoint'][0] + '</div>'
    + '<div class="region">' + routesList[route]['endpoint'][1] + '</div>'

    + '</div></div>'

    + '<div class="itog">';
	if(routesList[route]['carrier_rate']!==null && routesList[route]['carrier_rate']>0){
    routeHtml = routeHtml+ '<div class="cost"><span class="ico icon-rub"></span> ' + routesList[route]['carrier_rate'] + ' руб</div>';
	}
	if(price!==null && price>0){
   routeHtml = routeHtml + '<div class="price">' + price + ' руб/км</div>';
	}
		if(routesList[route]['route_length']!==null && routesList[route]['route_length'] > 0){
   routeHtml = routeHtml + '<div class="long"><span class="ico icon-dist"></span>' + routesList[route]['route_length'] + ' км</div>';
		}
  routeHtml = routeHtml  + '</div>'
    + '</div>';

    }
	if(routeHtml==''){
	routeHtml='<div class="routeblock"><div class="nodata">Маршрутов не обнаружено</div></div>';
	}
	//routesshow
	if(parent=='#listblocks'){
	 pagelistload=responseData.current_page+1;
	 last_page=responseData.last_page;
 	 routeHtml=$$(parent).html()+routeHtml;
	 loading=0;
	}
    $$(parent).html(routeHtml);
  }; 

this.setUserProfile = function(responseData){
	userProfileData=responseData;
	$$('.person-block #tel').html(userProfileData.phone);
    $$('.person-block #group').html( userProfileData.roles.label);
	if(userProfileData.data!==null){
	$$('.person-block #bank_account').html(userProfileData.data.bank_account);
	$$('.person-block #bank_bik').html(userProfileData.data.bank_bik);
	$$('.person-block #bank_korr').html(userProfileData.data.bank_korr);
	$$('.person-block #bank_name').html(userProfileData.data.bank_name);
	$$('.person-block #cont_email').html(userProfileData.data.cont_email);
	$$('.person-block #cont_name').html(userProfileData.data.cont_name);
	$$('.person-block #cont_phone').html(userProfileData.data.cont_phone);
	$$('.person-block #org_email').html(userProfileData.data.org_email);
	$$('.person-block #org_head_name').html(userProfileData.data.org_head_name);
	$$('.person-block #org_inn').html(userProfileData.data.org_inn);
	$$('.person-block #org_kpp').html(userProfileData.data.org_kpp);
	$$('.person-block #org_name').html(userProfileData.data.org_name);
	$$('.person-block #org_phone').html(userProfileData.data.org_phone);
	$$('.person-block #org_ogrn').html(userProfileData.data.org_ogrn);
	$$('.person-block #org_post_address').html(userProfileData.data.org_post_address);
	}
	
}
this.setUserProfileEdit = function(){
	$$('.person-block-edit #phone').val(userProfileData.phone);
   
	$$('.person-block-edit #name').val(userProfileData.name);
	$$('.person-block-edit #password').val(password);
	$$('.person-block-edit #password_confirmation').val(password);
	if(userProfileData.data!==null){
	$$('.person-block-edit #bank_account').val(userProfileData.data.bank_account);
	$$('.person-block-edit #bank_bik').val(userProfileData.data.bank_bik);
	$$('.person-block-edit #bank_korr').val(userProfileData.data.bank_korr);
	$$('.person-block-edit #bank_name').val(userProfileData.data.bank_name);
	$$('.person-block-edit #cont_email').val(userProfileData.data.cont_email);
	$$('.person-block-edit #cont_name').val(userProfileData.data.cont_name);
	$$('.person-block-edit #cont_phone').val(userProfileData.data.cont_phone);
	$$('.person-block-edit #org_email').val(userProfileData.data.org_email);
	$$('.person-block-edit #org_head_name').val(userProfileData.data.org_head_name);
	$$('.person-block-edit #org_inn').val(userProfileData.data.org_inn);
	$$('.person-block-edit #org_kpp').val(userProfileData.data.org_kpp);
	$$('.person-block-edit #org_name').val(userProfileData.data.org_name);
	$$('.person-block-edit #org_phone').val(userProfileData.data.org_phone);
	$$('.person-block-edit #org_ogrn').val(userProfileData.data.org_ogrn);
	$$('.person-block-edit #org_post_address').val(userProfileData.data.org_post_address);
	}
	
	
	if(userProfileData.roles.id==7){$$('.forUr').show();}else{$$('.forUr').hide();}
	$$('#save').on('click', function () {
		  data =  myApp.formToJSON($$('#edit-profile-form'));
		 _this.getdataserver('person_edit', data);		 
	});
}
/*открываем страницу в первый раз*/
this.openfirst = function(responseData){
	userProfileData=responseData;
	$$('.personal_name').text(responseData.name);
	$$('.personal_type').text(responseData.roles.label);
	$$('#exit_icon').on('click', function () {
		access_token= false;
		islogins= false;
		login='';
		password='';
		myApp.loginScreen();
		});
	
	 $$('#menumap').on('click', function () {	
	mainView.router.loadPage("/pages/map.html");
	myApp.closeModal('.picker-modal.modal-in');
	});
	$$('#menulist').on('click', function () {
	   mainView.router.loadPage("/pages/list.html");
	   myApp.closeModal('.picker-modal.modal-in');
	});
	if(userProfileData.role_id==7){
	$$('#menuroutes').on('click', function () {
	   mainView.router.loadPage("/pages/routes.html");
	   myApp.closeModal('.picker-modal.modal-in');
	});
	$$('#menutiket').on('click', function () {
	   mainView.router.loadPage("/pages/message.html");
	   myApp.closeModal('.picker-modal.modal-in');
	});
	$$('#menusubscribe').on('click', function () {
	   mainView.router.loadPage("/pages/subscribe.html");
	   myApp.closeModal('.picker-modal.modal-in');
	});
	$$('#menucars').on('click', function () {
	   mainView.router.loadPage("/pages/cars.html");
	   myApp.closeModal('.picker-modal.modal-in');
	});
	if(responseData.cars.length==0){
	myApp.pickerModal(
    '<div class="picker-modal addcars-modal">' +
      '<div class="picker-modal-inner">' +
        '<div class="content-block">' +
          '<p>Чтобы начать пользоваться сервисом, необходимо добавить  хотя бы один автомобиль.</p>' +
		  '<div class="button-container"><a id="addcar">ДОБАВИТЬ</a></div>'+
        '</div>' +
      '</div>' +
    '</div>'
  );
	
	$$('#addcar').on('click', function () {
	   mainView.router.loadPage("/pages/cars.html");
	    myApp.popup('.popup-addcars');
		 myApp.closeModal('.picker-modal.modal-in');
	});
	}
	}else{
	 $$('#menuroutes').remove();
	$$('#menutiket').remove();
	$$('#menusubscribe').remove();
	$$('#menucars').remove();		
	}
	$$('#menuperson').on('click', function () {
	   mainView.router.loadPage("/pages/person.html");
	   myApp.closeModal('.picker-modal.modal-in');
	});
	
	
	mainView.router.loadPage('pages/map.html');   
}
}