$(function(){
	//view 
	let checked=[];
	$('.size').click(function(){
	let val=$(this).attr('value');
	let opt=$(this).data('opt');
	$('.size_text').html(val);
	$('.money').html(opt);
	$('.opt').prop('checked',false);
	checked.splice(0,checked.length);
	$('.opt_menu').html('');
	});
	$('.opt').click(function(){
		let check=$(this).val();
		let opt1=Number($(this).data('opt'));
		let money=Number($('.money').html());
		if($(this).is(':checked')==true){
			$('.money').html(money+opt1);
			checked.push(check);
			let checkjoin=checked.join(',');
			return $('.opt_menu').html(checkjoin);
		}else{
			$('.money').html(money-opt1);
			checked.splice(checked.indexOf(check),1);
			let checkjoin=checked.join(',');
			return $('.opt_menu').html(checkjoin);
		}
	});
	//close
	$('.close').click(function(){
		$('.option_popup').hide();
	});
	//popup
	$('.option_popup').hide();
	$('.pick').click(function(){
		$('.option_popup').show();
	});
	//navbox
	var is=true;
	$('nav').click(function(){
		if(is==true){
		$('.nav').animate({left:'0px'},500);
		$('.container,header,footer').animate({left:'40%'},500);
		$('nav').html('<i class="material-icons">close</i>');
		is=false;
	}else{
		$('.nav').animate({left:'-40%'},500);
		$('.container,header,footer').animate({left:'0'},500);
		$('nav').html('<span></span><span></span><span></span>');
		is=true;
	}

	});
   //nice scroll
   	$('html').niceScroll({
	    styler: "fb",
		cursorcolor: "#ea6153",
		cursorwidth: "4",
		cursorborderradius: "10px",
		background: "#ffffff",
		spacebardnabled: false,
		cursorborder: '0',
		zindex: '1000'
	});
	/*
	$('.scrollbar1').niceScroll({
	    styler: "fb",
		cursorcolor: "#ff9554",
		cursorwidth: "4",
		cursorborderradius: "0",
		authohidemode: "false",
		background: "#ffffff",
		spacebardnabled: false,
		cursorborder: '0'
	});
	$('.scrollbar1').getNiceScroll();
	if($('body').hasClass('scrollbar1-collapsed')){
	   $('.scrollbar1').getNiceScroll().hide();
	}
	*/

   //slick slide
 $('.slide-img').slick({
	  autoplay: true,
	  autoplaySpeed: 3000,
      dots: true,
      infinite: true
   });

	 var $w=$('.slide-img>div').width();
	 $('.slide-img').css('width',$w*3);
	 //slick
	 $('.list_best').slick({
		 slidesToShow:1,
		 slidesToScroll:1,
		 centerMode:true,
		 focusOnSelect:true,
		 arrows:false,
		 dots:false,
		 mobileFirst:true,
		 autoplay:1,
		 autoplaySpeed:3000
	 });

   var cleft = 0;
   $('.categorybox').swipe({
	   swipe:function(event, direction, distance, duration, fingerCount, fingerData){
		 //category 의 전체 크기 확인
		 var categoryw = $('.categorybox').width();
		   if( direction == "left"){
			   $(this).animate({'left': '-=6rem'},'slow','swing', function(){
				 cleft = $('.categorybox').offset().left;
			  });
		   }else if( direction == "right"){
			   $(this).animate({'left': '+=6rem'},'slow', 'swing',  function(){
				 cleft = $('.categorybox').offset().left;
			  });
		   }
		   console.log(cleft);
	   }

	   /* event : 이벤트 ,  direction : 방향 (left, right, up, down)
	      distance : 터치했을때 이동거리 (0 ~)
		  duration : 터치한 시간 (0~)
		  fingerCount : 터치한 손가락 갯수 (0 ~)
		  fingerData : 터치한 손가락 좌표
		*/
   });
   /*
   $('.mycategory').slick({
	   slidesToShow: 5,
       slidesToScroll: 1,
       arrows: false,
       fade: true
   });
   */
//spinner
$('.gagein').animate({width:'100%'},1000,function(){
	$('.gagebox').css('display','none');
});

   $('.slide-img>div').click(function(){
	   window.location.href="main-menu.html";
   });

   //category
   var didscroll=false;
   var lastScrollTop = 0;
   var delta = 5;
   var navbarHeight = $('header').outerHeight();
   //console.log(navbarHeight);

   $(window).scroll(function(event){
	   didscroll = true;
   });

   setInterval(function(){
	  if(didscroll === true){
		 hasscroll();
		 didscroll = false;
	  }
   }, 250);

   function hasscroll(){
	  var st = $(this).scrollTop();
	  if(Math.abs(lastScrollTop - st) <= delta){
	     return;
      }

	  if(st> lastScrollTop && st > navbarHeight ){
		 $('header').slideUp(500);
		 $('footer').hide();

	  }else{
		 if(st + $(window).height() < $(document).height()){
		    $('header').slideDown(500);
			$('footer').show();
		 }
	  }
      lastScrollTop = st;
   }



});
