
 $(document).ready(function() {


////******************************* FUNC*/
var stat = 0; // Var for å laste inn levehytter slide på nytt ved klikk fra "Levehytter knapp"
var hasChan = 0;// Var for å registre om levehytter slide  er begynt

if ($(window).width() < 1395)
var inval = 1440;
else
var inval = 1920;

 /*
$(window).bind('resize',function(){
     window.location.href = window.location.href;
});
*/

function leveHytterSlide(slide)	{
//	Funksjon for LeveHytter slide, brukt for #hash change



	if (slide < 5)
		var neste = slide+1;
	else
		var neste = 1;

	if (slide > 1)
		var forrige = slide-1;
	else
		var forrige = 5;
	
	$('#box_modell').hide();
	$('#box_serie').hide();
	$('.dropdown').hide();
	
    /*
	$.get('ajax/levehytter/next.php?nxID='+slide, function(data) {
		$('#levehytter').empty().append(data);
	});
    */
    $('#levehytter').empty().append("<h1>未来</h1><span>我们是认真的</span><br/><br/><br/> <!--<div id='knapper'> <img src='graphic/1920/prikk_full.png' /> <a href='#levehytter_2'><img src='graphic/1920/prikk_tom.png' /></a> <a href='#levehytter_3'><img src='graphic/1920/prikk_tom.png' /></a> <a href='#levehytter_4'><img src='graphic/1920/prikk_tom.png' /></a> <a href='#levehytter_5'><img src='graphic/1920/prikk_tom.png' /></a> </div>-->");
	
	api.options.transition = 6;	

	api.goTo(slide+1);

     	$('#pil_h').fadeIn(200);
     	$('#pil_v').fadeIn(200);


	$('#btn_pil_h').attr({href: '#levehytter_'+neste}).show();
	$('#btn_pil_v').attr({href: '#levehytter_'+forrige}).show();

		$('#levehytter').show('fade', 400);

	if (inval == 1440)	
		$("#linje").animate({"width": "413px", "top": "50%"}, 700);
	else
		$("#linje").animate({"width": "444px", "top": "50%"}, 700);


}


$('a').click(function () {
    if ($(':animated').length) {
        return false;
    }
});





function frontslide(start_slide)	{
	
		$("#supersized").remove()
		$('body').append('<div id="supersized-loader"></div><ul id="supersized"></ul>');

		$.supersized({
				slideshow:1,
				autoplay:0,
				new_window:0 ,
				start_slide:start_slide,
				random:0,
				slide_interval:99999,
				transition:1,
				transition_speed:500,
				pause_hover:0,
				keyboard_nav:0,
				performance:2,
				image_protect:1,
				min_width:0,   
				min_height:0,
				vertical_center:1,
				horizontal_center:1,
				fit_portrait:1,
				fit_landscape:0,
				navigation:0,
				thumbnail_navigation:0,
				slide_counter:0,
				slide_captions:0,
				slides:  	[			// Slideshow Images
																{image : 'graphic/1920/forside.jpg'},		/*1FORSIDE*/
																{image : 'graphic/1920/levehytter/1.jpg'},	/*2Levehytter1*/
																{image : 'graphic/1920/levehytter/2.jpg'},	/*3Levehytter2*/
																{image : 'graphic/1920/levehytter/3.jpg'},	/*4Levehytter3*/
																{image : 'graphic/1920/levehytter/4.jpg'},	/*5Levehytter4*/
																{image : 'graphic/1920/levehytter/5.jpg'},	/*6Levehytter5*/
																{image : 'graphic/1920/kontakt.jpg'},		/*7Kontakt*/
																{image : 'graphic/1920/lun.jpg'},		/*8Lun*/
																{image : 'graphic/1920/lys.jpg'},		/*9Lys*/
																{image : 'graphic/1920/lunp.jpg'},		/*0Lunp*/
																{image : 'graphic/1920/lysp.jpg'},		/*1Lysp*/
																{image : 'graphic/1920/serie_.jpg'},		/*2Seriebilde*/
																]
			    });

}


/** // FUNC****/

var stat = 0;
var levehytter_slide = 0;
var isSlideLoaded = 0;
var hasVisitedModule = 0;

	var state;
	var serie;
	var modell;
	var option;
	var serieF; 	// Serienavn formatert	



$.address.change(function(event) {  


	var arr = jQuery.makeArray(event.pathNames);
	var state = arr[0];
	var serie = arr[1];
	var modell = arr[2];
	var option = arr[3];
	var modell_ = modell;
	if (modell <= 9)	{
		modell = '0'+(modell*1);
	}

	if (serie == 'vy')	{
		serie = 'lunp';
	}
	if (serie == 'lun') serieF = 'Lun';
	else if (serie == 'lys') serieF = 'Lys';
	else if (serie == 'lunp') serieF = 'Vy';
	else if (serie == 'lysp') serieF = 'Vy';

  	$("#wrapper").hide();
  	$("#wrapper2").hide();
	

	switch(state)	{

	case '':
	$("#frontmenu").animate({"top": "50%"}, 700);
 	$('#box').hide();
     	$('#box_back').hide();
 	$('#seriene').hide();
 	$('#levehytter').hide();
 	$('#kontakt').hide();
 	$("#linje").animate({"width": "0px", "top": "50%"}, 700);
 	$('#box_modell').hide();
	$('#box_serie').hide();
	$('.dropdown').hide();
	break;

	case 'neste':							
	stat = 1;
	break;

	case 'kontakt':
/*******************************************************************************
	KONTAKT
*******************************************************************************/


	
 	$('#frontmenu_block').show();
 	$('#box_modell').hide();
	$('#box_serie').hide();
	$('#levehytter').hide();
	$('.dropdown').hide();

if (inval == 1440)	
	$("#linje").animate({"width": "416px", "top": "50%"}, 700, postkontakt);
else
	$("#linje").animate({"width": "444px", "top": "50%"}, 700, postkontakt);


   	$('#frontmenu a').removeClass("selected");
   	$('#btn_kontakt').addClass("selected");

 	$('#box').hide();
     	$('#box_back').hide();
     	$('#pil_h').hide();
     	$('#pil_v').hide();
 	$('#levehytter').hide();
 	$('#modellene').hide();
 	$('#seriene').hide();
 	
 
	
	$("#frontmenu").animate({"top": "50%"}, 700);
	$("#btn_logo").animate({"top": "50%","margin-top":"-70px"}, 700); 




/********************** NESTE *********************************************/
		if (stat == 1)	{
		stat = 0;
		frontslide(8);

}
 	api.options.transition = 1;
		api.goTo(7);

/********************** //NESTE *********************************************/


	break;

	case 'hyttene':

    	$('#frontmenu a').removeClass("selected");
   	$('#btn_hyttene').addClass("selected");

   	$('#box_modell').hide();
/*
	$("#btn_logo").animate({"top": "60px","margin-top":"0px"}, 700);  
	$("#frontmenu").animate({"top": "130px"}, 700);  
	$("#linje").animate({"top": "130px","width": "220px"}, 700, callback); 
*/


if (inval == 1920)	{
		$("#linje").animate({"top": "130px","width": "220px"}, 700);
		$("#btn_logo").animate({"top": "60px","margin-top":"0px"}, 700);  
		$("#frontmenu").animate({"top": "130px"}, 700,callback); 
}
else	{
		$("#linje").animate({"top": "110px","width": "220px"}, 700);
		$("#btn_logo").animate({"top": "40px","margin-top":"0px"}, 700);  
		$("#frontmenu").animate({"top": "110px"}, 700,callback); 
}

     	$('#pil_h').hide();
     	$('#pil_v').hide();
   	$('#levehytter').hide('fade',500);
   	$('#kontakt').hide('fade',500);

 
 	$('#modellene').hide();

   	$('#seriene a').removeClass("selected");
   	$('#box_serie').hide();
   	$('.dropdown').hide();

	api.goTo(12);
 	
	break;

	case 'levehytter_1':


   	$('#frontmenu a').removeClass("selected");
   	$('#btn_levehytter').addClass("selected");


 	$('#box').hide();
     	$('#box_back').hide();
 	$('#seriene').hide();
 	$('#modellene').hide();
 	$('#levehytter').hide();
 	$('#kontakt').hide();
	


	$("#btn_logo").animate({"top": "50%","margin-top":"-70px"}, 700,visLevehytter); 
	$("#frontmenu").animate({"top": "50%"}, 700);

if (inval == 1440)	
	$("#linje").animate({"width": "413px", "top": "50%"}, 700);
else
	$("#linje").animate({"width": "444px", "top": "50%"}, 700);
	
/*
		if (stat == 1)	{
			stat = 0;
		 	api.options.transition = 1;
			frontslide(2);
}

 	api.options.transition = 1;
		api.goTo(2);

*/



		leveHytterSlide(1);
	break;

	case 'levehytter_2':

		hasChan = 1;
		leveHytterSlide(2);

	break;

	case 'levehytter_3':

		hasChan = 1;
		leveHytterSlide(3);

	break;

	case 'levehytter_4':
	
		hasChan = 1;
		leveHytterSlide(4);

	break;

	case 'levehytter_5':

		hasChan = 1;
		leveHytterSlide(5);

	break;

	case 'hytte':							
     	$('#seriene').show('fade', 500);
     	$('#modellene').show('fade', 500);

 		$("#wrapper").css({"background": "none')"});
 		$("#wrapper").hide();

 		$("#wrapper2").css({"background": "none')"});
 		$("#wrapper2").hide();

	if (serie && !modell)
		{

/*
 if ($.browser.webkit) {
 		if (serie == 'lun' || serie == 'lys')
			$("#box_serie span").css({"position": "relative", "top": "0px"});
		else
			$("#box_serie span").css({"position": "relative", "top": "-5px"});
  }
 */
/* if ($.browser.ie)	{
 		if (serie == 'lunp' || serie == 'lysp')
			$("#box_serie span").css({"position": "relative", "top": "-6px"});

 }
*/			

		if (hasVisitedModule == 1)	{

			if (serie == 'lun')
				frontslide(8);
			if (serie == 'lys')
				frontslide(9);
			if (serie == 'lunp')
				frontslide(10);
			if (serie == 'lysp')
				frontslide(11);


			hasVisitedModule = 0;
		}

		if (serie == 'lunp')	{
			$.get('ajax/first_model.php?serie='+serie, function(data) {
				$('#se_hyttene_a').attr({href: '#hytte/vy/'+data});
			});
		}
		else	{
			$.get('ajax/first_model.php?serie='+serie, function(data) {
				$('#se_hyttene_a').attr({href: '#hytte/'+serie+'/'+data});
			});

		}

		   	$('#frontmenu a').removeClass("selected");
		   	$('#btn_hyttene').addClass("selected");


		   	$('#modellene a').removeClass("selected");
		   	$('#seriene a').removeClass("selected");
		   	$('#btn_'+serie).addClass("selected");

			$('#box_serie').show();	$('#box_modell').hide();
			$('#box_serie_tekst').load('hytter/serie/'+serie+'.txt');
		     	$('#modellene').hide();

		     	$('#modellene').show('fade', 500);



 if (inval == 1920)	{
		$("#linje").animate({"top": "130px","width": "754px"}, 700);
		$("#btn_logo").animate({"top": "60px","margin-top":"0px"}, 700);  
		$("#frontmenu").animate({"top": "130px"}, 700); 
}
else	{
		$("#linje").animate({"top": "110px","width": "654px"}, 700);
		$("#btn_logo").animate({"top": "40px","margin-top":"0px"}, 700);  
		$("#frontmenu").animate({"top": "110px"}, 700); 
}

		

     		$('#box').show('fade', 500);

		$('#dropdown_nedlastninger').hide();
		$('#dropdown_tegninger').hide();
		$('#dropdown_del').hide();

/*
		if (serie == 'lun' || serie == 'lys')	{
			$('#nedlastninger_btn_serie').show();
			$("#box_serie_label").removeClass('serieP');
		}
		else	{
			$('#nedlastninger_btn_serie').hide();
			$("#box_serie_label").addClass('serieP');
		}
*/

		$('.modellene_cont').hide();
		$('#modellene_cont_'+serie).show();
		$("#box_serie_label").empty().append(serieF);



isSlideLoaded = 0;

			if (serie == 'lun')
				api.goTo(8);
			if (serie == 'lys')
				api.goTo(9);
			if (serie == 'lunp')
				api.goTo(10);
			if (serie == 'lysp')
				api.goTo(11);
		}

	if (modell)
		{
		   	$('#modellene a').removeClass("selected");
		   	$('#btn_'+serie+'_'+modell_).addClass("selected");
		     	$('#modellene').hide();

		}

	if (serie && modell)	{

   			hasChan = 1;
			hasVisitedModule = 1;

		/******************************/
/*			$("#btn_logo").animate({"top": "60px","margin-top":"0px"}, 700);  
			$("#frontmenu").animate({"top": "130px"}, 700);  
			$("#linje").animate({"top": "130px","width": "750px"}, 700); 
*/
if (inval == 1920)	{
		$("#linje").animate({"top": "130px","width": "754px"}, 700);
		$("#btn_logo").animate({"top": "60px","margin-top":"0px"}, 700);  
		$("#frontmenu").animate({"top": "130px"}, 700); 
}
else	{
		$("#linje").animate({"top": "110px","width": "654px"}, 700);
		$("#btn_logo").animate({"top": "40px","margin-top":"0px"}, 700);  
		$("#frontmenu").animate({"top": "110px"}, 700); 
}

		     	$('#pil_h').hide();
		     	$('#pil_v').hide();

		   	$('#levehytter').hide('fade',500);
		   	$('#kontakt').hide('fade',500);

		/*****************/


		     	$('#modellene').show();

		   	$('#frontmenu a').removeClass("selected");
		   	$('#btn_hyttene').addClass("selected");


			$('.modellene_cont').hide();
			$('#modellene_cont_'+serie).show();

		   	$('#seriene a').removeClass("selected");
		   	$('#btn_'+serie).addClass("selected");

		   	$('#modellene a').removeClass("selected");
		   	$('#btn_'+serie+'_'+modell_).addClass("selected");	


			$('#box_serie').hide();	$('#box_modell').show();
			$('#box_modell_cont').empty();
			$('#box_modell_cont').load('hytter/info/info.php?serie='+serie+'&modell='+modell);

			$('#dropdown_nedlastninger_serie').hide();

			$.get('hytter/nedlastninger/nedlastninger.php?serie='+serie+'&modell='+modell, function(data) {
				$('#dropdown_nedlastninger').empty();
				$('#dropdown_nedlastninger').append(data);
			});

		/*	$('#facebook').attr({href: 'http://www.facebook.com/sharer.php?&p[title]=Lun 5&u=http://www.levehytter.no#hytte/'+serie+'/'+modell_});*/

	/*		$('#facebook').attr({href: 'http://www.facebook.com/sharer.php?u=http://www.levehytter.no/'+serie+''+modell_});			
			
		
			$('#epost').attr({href: 'mailto:?Subject=Sjekk ut '+serieF+' '+modell_+' fra LeveHytter&body=http://www.levehytter.no#hytte/'+serie+'/'+modell_});
*/
/*test*/

			if(serie == 'lunp')	{

				$.get('ajax/nextprev.php?serie='+serie+'&modell='+modell+'&dir=next', function(data) {
				$('#pil_liten_h_a').attr({href: '#hytte/vy/'+data});
				});

	
				$.get('ajax/nextprev.php?serie='+serie+'&modell='+modell+'&dir=prev', function(data) {
				$('#pil_liten_v_a').attr({href: '#hytte/vy/'+data});
				});


				// Setter riktig link til plantegning- og fasadeknapper.
				$('#plantegning_a').attr({href: '#hytte/vy/'+modell_+'/plantegning'});
				$('#fasade_a').attr({href: '#hytte/vy/'+modell_+'/fasade'});

				$('#facebook').attr({href: 'http://www.facebook.com/sharer.php?u=http://www.levehytter.no/vy'+modell_});				
				$('#epost').attr({href: 'mailto:?Subject=Sjekk ut Vy '+modell_+' fra LeveHytter&body=http://www.levehytter.no#hytte/vy/'+(modell_*1)});


			}
			else	{
				$.get('ajax/nextprev.php?serie='+serie+'&modell='+modell+'&dir=next', function(data) {
				$('#pil_liten_h_a').attr({href: '#hytte/'+serie+'/'+data});
				});

	
				$.get('ajax/nextprev.php?serie='+serie+'&modell='+modell+'&dir=prev', function(data) {
				$('#pil_liten_v_a').attr({href: '#hytte/'+serie+'/'+data});
				});

				// Setter riktig link til plantegning- og fasadeknapper.
				$('#plantegning_a').attr({href: '#hytte/'+serie+'/'+modell_+'/plantegning'});
				$('#fasade_a').attr({href: '#hytte/'+serie+'/'+modell_+'/fasade'});

				$('#facebook').attr({href: 'http://www.facebook.com/sharer.php?u=http://www.levehytter.no/'+serie+''+modell_});				
				$('#epost').attr({href: 'mailto:?Subject=Sjekk ut '+serieF+' '+modell_+' fra LeveHytter&body=http://www.levehytter.no#hytte/vy/'+(modell_*1)});


			}



			

			if (isSlideLoaded == 0)	{
				if (serie == 'lun')	
					viewLunSlide();
				else if (serie == 'lys')
					viewLysSlide(); 
				else if (serie == 'lunp')
					viewLunpSlide();
				else if (serie == 'lysp')
					viewLyspSlide(); 
																																
				isSlideLoaded = 1;
			}

		     	$('#supersized-loader').hide();

			if (serie && modell && option == 'fasade')	{
 		$("#wrapper2").css({"background-image": "url('hytter/fasader/1920/"+serie+"_"+modell+".jpg')"});
  		$("#wrapper").hide();
 		$("#wrapper2").show();
		$('#btn_avbryt_wrapper2').attr({href: '#hytte/'+serie+'/'+modell_});
 	/*	$("#frontmenu").hide();
 		$("#btn_logo").hide();
 		$("#linje").hide();
 		$("#seriene").hide();
 		$("#modellene").hide();*/
 		
			}

			if (serie && modell && option == 'plantegning')	{
 		$("#wrapper").css({"background-image": "url('hytter/plantegninger/1920/"+serie+"_"+modell+".jpg')"});
 		$("#wrapper2").hide();
 		$("#wrapper").show();
		$('#btn_avbryt_wrapper').attr({href: '#hytte/'+serie+'/'+modell_});

 		
			}

			    

	}



	api.goTo(modell);

	stat = 1;
	break;
	}



});  


   $("#btn_levehytter").click(function() {

		
		if (hasChan == 1)	{
		hasChan = 0;
		frontslide(2);
		}
		
		if (stat == 1)	{
			stat = 0;
		 	api.options.transition = 1;
		}

     	$('#levehytter').show('fade', 500);

 	api.options.transition = 1;
		api.goTo(2);

	
	});
	
	function visLevehytter()	{
			$("#levehytter").show('fade', 700); 

	} 

	function callback()	{
     	$('#seriene').show('fade', 500);
     
	}
   $("#btn_hyttene").click(function() {





	api.options.transition = 1;


/********************** NESTE *********************************************/
		if (stat == 1)	{
		stat = 0;
		frontslide(12);

}

/********************** //NESTE *********************************************/
	

	});




   $("#pil_liten_v").mouseover(function() {
 		$(this).css({"background-image": "url('graphic/"+inval+"/pil_liten_v_h.png')"});
	});

   $("#pil_liten_h").mouseover(function() {
 		$(this).css({"background-image": "url('graphic/"+inval+"/pil_liten_h_h.png')"});	
	});

   $("#pil_liten_v").mouseout(function() {
 		$(this).css({"background-image": "url('graphic/"+inval+"/pil_liten_v.png')"});	
	});

   $("#pil_liten_h").mouseout(function() {
 		$(this).css({"background-image": "url('graphic/"+inval+"/pil_liten_h.png')"});
	});




/*
   $("#btn_logo").click(function() {
	$("#linje").animate({"width": "0px"}, 700);
   	$('#levehytter').hide('fade',500);
   	$('#wrapper').hide('fade',500);
      	$('#wrapper2').hide('fade',500);
   	$('#kontakt').hide('fade',500);
	});
*/


   $("#btn_kontakt").click(function() {

	});

	function postkontakt()	{
   	$('#kontakt').show('fade',500);	
 	$('#frontmenu_block').hide('fade',500);
	}



/*	$('#nedlastninger_btn_serie').click( function()	{

		if ($('#dropdown_nedlastninger_serie').is(":visible"))	{
			$('#dropdown_nedlastninger_serie').hide('slide', { direction: "down"}, function()	{
				$('#nedlastninger_btn_serie').css("background-image", "url('../graphic/"+inval+"/se_hyttene.png')");
				});
		}else{
			$('#dropdown_nedlastninger_serie').show('slide', { direction: "down"},200, function()	{
				$('#nedlastninger_btn_serie').css("background-image", "url('../graphic/"+inval+"/se_hyttene_h.png')");
				});
		}

	});
*/

	$('#nedlastninger_btn_serie').mouseover( function()	{
			$( this ).css("background-image", "url('../graphic/"+inval+"/se_hyttene_h.png')");
	});
	
	$('#nedlastninger_btn_serie').mouseout( function()	{
		if ($('#dropdown_nedlastninger_serie').is(":visible"))	{
			$( this ).css("background-image", "url('../graphic/"+inval+"/se_hyttene_h.png')");
		}
		else	{
			$( this ).css("background-image", "url('../graphic/"+inval+"/se_hyttene.png')");
		}

	});



/*			KNAPP MED TRYKK
	$('#nedlastninger_btn').click( function()	{
		if ($('#dropdown_nedlastninger').is(":visible"))	{
			$('#dropdown_nedlastninger').hide('slide', { direction: "down"},200);
		}else{
			$('.dropdown').hide();
			$('.dropdown').removeClass('selected');
			$('#dropdown_nedlastninger').effect('slide', { direction: "down"},200);
		}
		$('#tegninger_btn').css("background-image", "url('../graphic/"+inval+"/tegninger.png')");
		$('#del_btn').css("background-image", "url('../graphic/"+inval+"/del.png')");
	});

	$('#nedlastninger_btn').mouseover( function()	{
			$( this ).css("background-image", "url('../graphic/"+inval+"/nedlastninger_h.png')");
	});
	
	$('#nedlastninger_btn').mouseout( function()	{
		if ($('#dropdown_nedlastninger').is(":visible"))	{
			$( this ).css("background-image", "url('../graphic/"+inval+"/nedlastninger_h.png')");
		}
		else	{
			$( this ).css("background-image", "url('../graphic/"+inval+"/nedlastninger.png')");
		}

	});
*/	//	vvv KNAPP KUN HOVER vvv


	$('#nedlastninger_btn').mouseover( function()	{
		$( this ).css("background-image", "url('../graphic/"+inval+"/nedlastninger_h.png')");		
		$('#dropdown_nedlastninger').show();
	});
	$('#dropdown_nedlastninger').mouseover( function()	{
		$('#nedlastninger_btn').css("background-image", "url('../graphic/"+inval+"/nedlastninger_h.png')");		
		$('#dropdown_nedlastninger').show();
	});

	$('#dropdown_nedlastninger').mouseout( function()	{
		$('#dropdown_nedlastninger').hide();
		$('.dropdown').hide();
		$('.dropdown').removeClass('selected');
		$('#nedlastninger_btn').css("background-image", "url('../graphic/"+inval+"/nedlastninger.png')");
	});	
	$('#nedlastninger_btn').mouseout( function()	{
		$('#dropdown_nedlastninger').hide();
		$('.dropdown').hide();
		$('.dropdown').removeClass('selected');
		$('#nedlastninger_btn').css("background-image", "url('../graphic/"+inval+"/nedlastninger.png')");
	});

	$('#tegninger_btn').mouseover( function()	{
		$( this ).css("background-image", "url('../graphic/"+inval+"/tegninger_h.png')");		
		$('#dropdown_tegninger').show();
	});
	$('#dropdown_tegninger').mouseover( function()	{
		$('#tegninger_btn').css("background-image", "url('../graphic/"+inval+"/tegninger_h.png')");		
		$('#dropdown_tegninger').show();
	});

	$('#dropdown_tegninger').mouseout( function()	{
		$('#dropdown_tegninger').hide();
		$('.dropdown').hide();
		$('.dropdown').removeClass('selected');
		$('#tegninger_btn').css("background-image", "url('../graphic/"+inval+"/tegninger.png')");
	});	
	$('#tegninger_btn').mouseout( function()	{
		$('#dropdown_tegninger').hide();
		$('.dropdown').hide();
		$('.dropdown').removeClass('selected');
		$('#tegninger_btn').css("background-image", "url('../graphic/"+inval+"/tegninger.png')");
	});

	$('#del_btn').mouseover( function()	{
		$( this ).css("background-image", "url('../graphic/"+inval+"/del_h.png')");		
		$('#dropdown_del').show();
	});
	$('#dropdown_del').mouseover( function()	{
		$('#del_btn').css("background-image", "url('../graphic/"+inval+"/del_h.png')");		
		$('#dropdown_del').show();
	});

	$('#dropdown_del').mouseout( function()	{
		$('#dropdown_del').hide();
		$('.dropdown').hide();
		$('.dropdown').removeClass('selected');
		$('#del_btn').css("background-image", "url('../graphic/"+inval+"/del.png')");
	});	
	$('#del_btn').mouseout( function()	{
		$('#dropdown_del').hide();
		$('.dropdown').hide();
		$('.dropdown').removeClass('selected');
		$('#del_btn').css("background-image", "url('../graphic/"+inval+"/del.png')");
	});




/*
	$('#tegninger_btn').click( function()	{
		if ($('#dropdown_tegninger').is(":visible"))	{
			$('#dropdown_tegninger').hide('slide', { direction: "down"},200);
		}else{
			$('.dropdown').hide();
			$('.dropdown').removeClass('selected');
			$('#dropdown_tegninger').effect('slide', { direction: "down"},200);
/* 		$(this).css({"background-image": "url('graphic/1920/tegninger_h.png')"});*/
/*
		}
			$('#nedlastninger_btn').css("background-image", "url('../graphic/"+inval+"/nedlastninger.png')");
	});

	$('#tegninger_btn').mouseover( function()	{

			$('#tegninger_btn').css("background-image", "url('../graphic/"+inval+"/tegninger_h.png')");
	});
	
	$('#tegninger_btn').mouseout( function()	{
		if ($('#dropdown_tegninger').is(":visible"))	{
			$('#nedlastninger_btn').css("background-image", "url('../graphic/"+inval+"/nedlastninger.png')");
			$('#tegninger_btn').css("background-image", "url('../graphic/"+inval+"/tegninger_h.png')");
			$('#del_btn').css("background-image", "url('../graphic/"+inval+"/del.png')");
		}
		else	{
			$( this ).css("background-image", "url('../graphic/"+inval+"/nedlastninger.png')");
			$('#tegninger_btn').css("background-image", "url('../graphic/"+inval+"/tegninger.png')");
			$('#del_btn').css("background-image", "url('../graphic/"+inval+"/del.png')");
		}

	});


	$('#del_btn').click( function()	{
		if ($('#dropdown_del').is(":visible"))	{
			$('#dropdown_del').hide('slide', { direction: "down"},200);
		}else{
			$('.dropdown').hide();
			$('.dropdown').removeClass('selected');
			$('#dropdown_del').effect('slide', { direction: "down"},200);
		}
			$('#tegninger_btn').css("background-image", "url('../graphic/"+inval+"/tegninger.png')");
			$('#nedlastninger_btn').css("background-image", "url('../graphic/"+inval+"/nedlastninger.png')");
	});

	$('#del_btn').mouseover( function()	{
			$('#del_btn').css("background-image", "url('../graphic/"+inval+"/del_h.png')");
	});
	
	$('#del_btn').mouseout( function()	{
		if ($('#dropdown_del').is(":visible"))	{
			$( this ).css("background-image", "url('../graphic/"+inval+"/nedlastninger.png')");
			$('#tegninger_btn').css("background-image", "url('../graphic/"+inval+"/tegninger.png')");
			$('#del_btn').css("background-image", "url('../graphic/"+inval+"/del_h.png')");
		}
		else	{
			$( this ).css("background-image", "url('../graphic/"+inval+"/nedlastninger.png')");
			$('#tegninger_btn').css("background-image", "url('../graphic/"+inval+"/tegninger.png')");
			$('#del_btn').css("background-image", "url('../graphic/"+inval+"/del.png')");
		}

	});
*/



$("#btn_avbryt_wrapper").click( function()	{

 		$("#wrapper").css({"background-image": "none')"});
 		$("#wrapper").hide();
 		$("#frontmenu").show(300);
 		$("#btn_logo").show(300);
 		$("#seriene").show(300);
 		$("#modellene").show(300);
 		$("#linje").show(300);
});

$("#btn_avbryt_wrapper2").click( function()	{

 		$("#wrapper2").css({"background-image": "none')"});
 		$("#wrapper2").hide();
 		$("#frontmenu").show(300);
 		$("#btn_logo").show(300);
 		$("#seriene").show(300);
 		$("#modellene").show(300);
 		$("#linje").show(300);
});


	/*
			jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slideshow               :   1,			// Slideshow on/off
					autoplay				:	0,			// Slideshow starts playing automatically
					start_slide             :   1,			// Start slide (0 is random)
					stop_loop				:	0,			// Pauses slideshow on last slide
					random					: 	0,			// Randomize slide order (Ignores start slide)
					slide_interval          :   3000,		// Length between transitions
					transition              :   6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	600,		// Speed of transition
					new_window				:	1,			// Image links open in new window/tab
					pause_hover             :   0,			// Pause slideshow on hover
					keyboard_nav            :   1,			// Keyboard navigation on/off
					performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect			:	1,			// Disables image dragging and right click with Javascript
															   
					// Size & Position						   
					min_width		        :   0,			// Min width allowed (in pixels)
					min_height		        :   0,			// Min height allowed (in pixels)
					vertical_center         :   1,			// Vertically center background
					horizontal_center       :   1,			// Horizontally center background
					fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
					fit_portrait         	:   1,			// Portrait images will not exceed browser height
					fit_landscape			:   0,			// Landscape images will not exceed browser width
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					thumb_links				:	1,			// Individual thumb links for each slide
					thumbnail_navigation    :   0,			// Thumbnail navigation
					slides 					:  	[			// Slideshow Images
														{image : 'graphic/1920/Mann.jpg'},
														{image : 'graphic/1920/Tre.jpg'},
														{image : 'graphic/1920/Hytte-1.jpg'},
												],
												
					// Theme Options			   
					progress_bar			:	0,			// Timer for each slide							
					mouse_scrub				:	0
					
				});
		    });
		*/    
 });
