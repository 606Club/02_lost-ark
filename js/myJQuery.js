

$(function(){
  	const loading = $('.loading');

  	$(window).on('load',function(){
  		loading.remove();
  	});
    $(window).on('pageshow',function(){
      $('html,body').css({'overflow-x':'hidden','overflow-y':'visible'});
      $('body').css('overflow','visible');
    });


    $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
	  });

	  $('.back-to-top').click(function() {
	    $('html, body').animate({
	      scrollTop: 0
	    }, 1500, 'easeOutSine');
	    return false;
	  });


  	$('#main_carousel').carousel({
  		interval : 4500
  	});

    $('#caruselClass').carousel({
      interval : false
    });


    
  	$('.navbar li:nth-child(1) a').click(function(){
  		$('#top').animatescroll({padding:115,easing:'easeOutSine'});
  	})
  	$('.navbar li:nth-child(2) a').click(function(){
  		$('#ark').animatescroll({padding:115,easing:'easeOutSine'});
  	})
  	$('.navbar li:nth-child(3) a').click(function(){
  		$('#class').animatescroll({padding:115,easing:'easeOutSine'});
  	});
  	$('.navbar li:nth-child(4) a').click(function(){
  		$('#content').animatescroll({padding:115,easing:'easeOutSine'});
  	});
  	$('.navbar li:nth-child(5) a').click(function(){
  		$('#video').animatescroll({padding:115,easing:'easeOutSine'});
  	});
  	$('.navbar li:nth-child(6) a').click(function(){
  		$('#world').animatescroll({padding:115,easing:'easeOutSine'});
  	});
  	$('.navbar li:nth-child(7) a').click(function(){
  		$('#contact').animatescroll({padding:115,easing:'easeOutSine'});
  	});

    // waypoint plugin 실행 구문

    //////////////////////////////// wp1 ////////////////////////////////////////////

    $('.wp1').waypoint(function(direction){
      if(direction==='down'){
        $('.wp1').addClass('animate__animated animate__fadeInDown');
      }
    },{
      offset:'90%'
    })
    $('.wp1').waypoint(function(direction){
      if(direction==='up'){
        $('.wp1').removeClass('animate__animated animate__fadeInDown');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp2 ////////////////////////////////////////////

    $('.wp2').waypoint(function(direction){
      if(direction==='down'){
        $('.wp2').addClass('animate__animated animate__fadeInUp');
      }
    },{
      offset:'90%'
    })
    $('.wp2').waypoint(function(direction){
      if(direction==='up'){
        $('.wp2').removeClass('animate__animated animate__fadeInUp');
      }
    },{
      offset:'90%'
    })
    //////////////////////////////// wp3 ////////////////////////////////////////////

    $('.wp3').waypoint(function(direction){
      if(direction==='down'){
        $('.wp3').addClass('animate__animated animate__fadeInLeft');
      }
    },{
      offset:'90%'
    })
    $('.wp3').waypoint(function(direction){
      if(direction==='up'){
        $('.wp3').removeClass('animate__animated animate__fadeInLeft');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp4 ////////////////////////////////////////////

    $('.wp4').waypoint(function(direction){
      if(direction==='down'){
        $('.wp4').addClass('animate__animated animate__fadeInRight');
      }
    },{
      offset:'90%'
    })
    $('.wp4').waypoint(function(direction){
      if(direction==='up'){
        $('.wp4').removeClass('animate__animated animate__fadeInRight');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp5 ////////////////////////////////////////////

    $('.wp5').waypoint(function(direction){
      if(direction==='down'){
        $('.wp5').addClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    })
    $('.wp5').waypoint(function(direction){
      if(direction==='up'){
        $('.wp5').removeClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp6 ////////////////////////////////////////////

    $('.wp6').waypoint(function(direction){
      if(direction==='down'){
        $('.wp6').addClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    })
    $('.wp6').waypoint(function(direction){
      if(direction==='up'){
        $('.wp6').removeClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp7 ////////////////////////////////////////////

    $('.wp7').waypoint(function(direction){
      if(direction==='down'){
        $('.wp7').addClass('animate__animated animate__slideInLeft');
      }
    },{
      offset:'90%'
    })
    $('.wp7').waypoint(function(direction){
      if(direction==='up'){
        $('.wp7').removeClass('animate__animated animate__slideInLeft');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp8 ////////////////////////////////////////////

    $('.wp8').waypoint(function(direction){
      if(direction==='down'){
        $('.wp8').addClass('animate__animated animate__slideInRight');
      }
    },{
      offset:'90%'
    })
    $('.wp8').waypoint(function(direction){
      if(direction==='up'){
        $('.wp8').removeClass('animate__animated animate__slideInRight');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp9 ////////////////////////////////////////////

    $('.wp9').waypoint(function(direction){
      if(direction==='down'){
        $('.wp9').addClass('animate__animated animate__zoomIn');
      }
    },{
      offset:'90%'
    })
    $('.wp9').waypoint(function(direction){
      if(direction==='up'){
        $('.wp9').removeClass('animate__animated animate__zoomIn');
      }
    },{
      offset:'90%'
    })

    // $('.wp9').waypoint(function(direction){
    //   if(direction==='down'){
    //     $('.wp9').addClass('animate__animated animate__zoomIn');
    //   }
    // },{
    //   offset:'50%'
    // })
    //  $('.wp9').waypoint(function(direction){
    //   if(direction==='down'){
    //     $('.wp9').removeClass('animate__zoomIn');
    //   }
    // },{
    //   offset:'50%'
    // })
    // $('.wp9').waypoint(function(direction){
    //   if(direction==='up'){
    //     $('.wp9').addClass('animate__zoomOut');
    //   }
    // },{
    //   offset:'80%'
    // })
    // $('.wp9').waypoint(function(direction){
    //   if(direction==='up'){
    //     $('.wp9').removeClass('animate__zoomOut');
    //   }
    // },{
    //   offset:'50%'
    // })

    //////////////////////////////// wp10 ////////////////////////////////////////////

    $('.wp10').waypoint(function(direction){
      if(direction==='down'){
        $('.wp10').addClass('animate__animated animate__fadeInDown');
      }
    },{
      offset:'50%'
    })
    $('.wp10').waypoint(function(direction){
      if(direction==='up'){
        $('.wp10').removeClass('animate__animated animate__fadeInDown');
      }
    },{
      offset:'50%'
    })

    //////////////////////////////// wp11 ////////////////////////////////////////////

    $('.wp11').waypoint(function(direction){
      if(direction==='down'){
        $('.wp11').addClass('animate__animated animate__fadeInUp');
      }
    },{
      offset:'50%'
    })
    $('.wp11').waypoint(function(direction){
      if(direction==='up'){
        $('.wp11').removeClass('animate__animated animate__fadeInUp');
      }
    },{
      offset:'50%'
    })

    //////////////////////////////// wp12 ////////////////////////////////////////////

    $('.wp12').waypoint(function(direction){
      if(direction==='down'){
        $('.wp12').addClass('animate__animated animate__fadeInDown');
      }
    },{
      offset:'50%'
    })
    $('.wp12').waypoint(function(direction){
      if(direction==='up'){
        $('.wp12').removeClass('animate__animated animate__fadeInDown');
      }
    },{
      offset:'50%'
    })

    //////////////////////////////// wp13 ////////////////////////////////////////////

    $('.wp13').waypoint(function(direction){
      if(direction==='down'){
        $('.wp13').addClass('animate__animated animate__fadeInUp');
      }
    },{
      offset:'50%'
    })
    $('.wp13').waypoint(function(direction){
      if(direction==='up'){
        $('.wp13').removeClass('animate__animated animate__fadeInUp');
      }
    },{
      offset:'50%'
    })

    //////////////////////////////// wp14 ////////////////////////////////////////////

    $('.wp14').waypoint(function(direction){
      if(direction==='down'){
        $('.wp14').addClass('animate__animated animate__swing');
      }
    },{
      offset:'60%'
    })
    $('.wp14').waypoint(function(direction){
      if(direction==='up'){
        $('.wp14').removeClass('animate__animated animate__swing');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp15 ////////////////////////////////////////////

    $('.wp15').waypoint(function(direction){
      if(direction==='down'){
        $('.wp15').addClass('animate__animated animate__backInLeft');
      }
    },{
      offset:'90%'
    })
    $('.wp15').waypoint(function(direction){
      if(direction==='up'){
        $('.wp15').removeClass('animate__animated animate__backInLeft');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp16 ////////////////////////////////////////////

    $('.wp16').waypoint(function(direction){
      if(direction==='down'){
        $('.wp16').addClass('animate__animated animate__backInRight');
      }
    },{
      offset:'90%'
    })
    $('.wp16').waypoint(function(direction){
      if(direction==='up'){
        $('.wp16').removeClass('animate__animated animate__backInRight');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp17 ////////////////////////////////////////////

    $('.wp17').waypoint(function(direction){
      if(direction==='down'){
        $('.wp17').addClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    })
    $('.wp17').waypoint(function(direction){
      if(direction==='up'){
        $('.wp17').removeClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp18 ////////////////////////////////////////////

    $('.wp18').waypoint(function(direction){
      if(direction==='down'){
        $('.wp18').addClass('animate__animated animate__flipInX');
      }
    },{
      offset:'60%'
    })
    $('.wp18').waypoint(function(direction){
      if(direction==='up'){
        $('.wp18').removeClass('animate__animated animate__flipInX');
      }
    },{
      offset:'60%'
    })

    //////////////////////////////// wp19 ////////////////////////////////////////////

    $('.wp19').waypoint(function(direction){
      if(direction==='down'){
        $('.wp19').addClass('animate__animated animate__flipInY');
      }
    },{
      offset:'90%'
    })
    $('.wp19').waypoint(function(direction){
      if(direction==='up'){
        $('.wp19').removeClass('animate__animated animate__flipInY');
      }
    },{
      offset:'90%'
    })

    //////////////////////////////// wp21 ////////////////////////////////////////////

    $('.wp21').waypoint(function(direction){
      if(direction==='down'){
        $('.wp21').addClass('animate__animated animate__flash');
      }
    },{
      offset:'60%'
    })
    $('.wp21').waypoint(function(direction){
      if(direction==='up'){
        $('.wp21').removeClass('animate__animated animate__flash');
      }
    },{
      offset:'60%'
    })

    //////////////////////////////// wp20 ////////////////////////////////////////////

    // $('.wp20').waypoint(function(direction){
    //   if(direction==='down'){
    //     $('.wp20').addClass('animate__animated animate__slideInUp');
    //   }
    // },{
    //   offset:'100%'
    // })
    // $('.wp20').waypoint(function(direction){
    //   if(direction==='up'){
    //     $('.wp20').removeClass('animate__animated animate__slideInUp');
    //   }
    // },{
    //   offset:'100%'
    // })
 })
