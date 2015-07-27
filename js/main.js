$.getScript('', function () {});

jQuery(document).ready(function() {
    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
 
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

/*
progressJs().setOptions({overlayMode: true, theme: 'blueOverlay'}).start().autoIncrease(4, 500);
      
      if(window.attachEvent) {
          window.attachEvent('onload', function(){ progressJs().end(); });
      } else {
          if(window.onload) {
              var curronload = window.onload;
              var newonload = function() {
                  curronload();
                  progressJs().end();
              };
              window.onload = newonload;
          } else {
              window.onload = function(){ progressJs().end(); };
          }
      };
*/
   // $(function(){
$(document).ready(function(){
        $("#typed").typed({
            strings: [" نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي نيان تونسي"],
            typeSpeed: 30,
            backDelay: 900,
            loop: true,
            contentType: 'text', // or text
            // defaults to false for infinite loop
            loopCount: true,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

$("#sample-4").slideReveal({
          trigger: $("#nav-toggle"),
          autoEscape: false,
          width: 60
        });
$("#sample-4").slideReveal({
          trigger: $("#nav-useravatar"),
          autoEscape: false,
          width: 60
        });

/*

 if (document.getElementById('pageloader')) {
    jQuery('#pageloader .spinner').delay(0).fadeOut(100);
    jQuery('#pageloader').delay(70).fadeOut(1000);
    jQuery('a').bind('click', function (event) {
        if (!jQuery(this).attr('href') || jQuery(this).parents('#navigation-mobile').length > 0) {
            return false;
        }
        var $href = jQuery(this).attr('href').toString();
        if ($href.indexOf('http://') >= 0 && jQuery(this).attr('target') != '_blank') {
            var Exlink = this.getAttribute('href');
            jQuery('#pageloader').fadeIn(150, function () {
                jQuery('#pageloader .spinner').fadeIn(200);
                document.location.href = Exlink;
            });
            return false;
            event.preventDefault;
        }
    });
};
*/


/*

	if(document.getElementById("pageloader")) {
		jQuery("#pageloader .spinner").delay(0).fadeOut(100);
		jQuery("#pageloader").delay(70).fadeOut(1000);
		
		jQuery('a').bind('click', function(event) {
			
			if(!jQuery(this).attr('href') || jQuery(this).parents("#navigation-mobile").length > 0) {
	//			alert('false');
				return false;
			} 
			
			var $href = jQuery(this).attr('href').toString();
	
			if($href.indexOf("http://") >= 0 && jQuery(this).attr('target') != '_blank') {
				var Exlink = this.getAttribute('href');		
				jQuery('#pageloader').fadeIn(150, function(){	
					jQuery("#pageloader .spinner").fadeIn(200);
					document.location.href = Exlink;
				});
				return false;
				event.preventDefault;
			}
			
		});
	}
	
	if(jQuery('#page-title.page-title-animated').length > 0) {
		//alert('exists!');
		jQuery("#page-title.page-title-animated").delay(400).slideDown(500,'easeOutExpo');
		jQuery("#page-title.page-title-animated h1").delay(900).animate({'opacity':1});
	}
	
	

$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(2000);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});

*/