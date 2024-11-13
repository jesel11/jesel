/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });


    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);



    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);



function toggleReadMore() {

    const content = document.getElementById('read-more-content');
    const button = document.querySelector('.load-more');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'See More';
    } else {
        content.style.display = 'none';
        button.textContent = 'See More';
    }
}


function togglePortfolioPart2() {
    const content = document.getElementById('portfolio-part2');
    const button = document.querySelector('.load-more');


    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; 
        button.textContent = 'See Less';
    } else {
        content.style.display = 'none'; 
        button.textContent = 'See More'; 
    }
}

function togglePortfolioPart4() {
    const content = document.getElementById('portfolio-part4');
    const button = document.querySelector('.load-more');

   
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';  
        button.textContent = 'See Less';  
    } else {
        content.style.display = 'none'; 
        button.textContent = 'See More'; 
    }
}



function togglePortfolioPart3() {
    const content = document.getElementById('portfolio-part3');
    const button = document.querySelector('.load-more');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';  
        button.textContent = 'See Less'; 
    } else {
        content.style.display = 'none';  
        button.textContent = 'See More';  
    }
}


const btn = document.getElementById('button');

document.getElementById('contactForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_yajiv23';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});