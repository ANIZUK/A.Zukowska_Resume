$(document).ready(function() {



/* ====================================
  SECTION-1: displaying name & surname letter by letter
  ==================================== */
const showText = function (target, message, index, interval) {    
    if (index < message.length) { 
      $(target).append(message[index++]); 
      setTimeout(function () { 
          showText(target, message, index, interval); 
        }, interval); 
    } 
  }
   
showText(".name", "Anna Żukowska", 0, 200);    

/* ====================================
  Section 1: Menu - on click - navigation slides down
  ==================================== */
const $hamburger = $('.hamburger'),
  $navigation_wrapper = $('.navigation-wrapper'),
  $nav_item_links = $('nav a'),
  $nav_column = $('nav li');


$hamburger.click(function() {
//toggling menu
$navigation_wrapper.toggleClass('menu-active');

if ($navigation_wrapper.hasClass('menu-active')) 
{
    $hamburger.css("color", "white");
    $navigation_wrapper.removeClass('menu-slide-up').addClass('menu-slide-down');

    $nav_column.each(function(){
    $(this).removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
})

} else {
    $hamburger.css("color", "black");
    $navigation_wrapper.removeClass('menu-slide-down').addClass('menu-slide-up');

    $nav_column.each(function(){
    $(this).removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
})
} 
//hiding menu after click on <a>

$('.navigation-wrapper').find('a').on('click', function(){

    $(this).data('clicked', true);
    
        if( 
            ($('.a1').data('clicked')) ||  ($('.a2').data('clicked')) ||  ($('.a3').data('clicked'))
        ){
        console.log('clicked');
        $hamburger.css("color", "black");
        $navigation_wrapper.removeClass ('menu-slide-down').addClass('menu-slide-up');
        $navigation_wrapper.removeClass('menu-active');
        
    }
  });
})


/* ====================================
  SECTION-2:
  grasping trigger element(using scroll magic) for animation
  animating img
  ==================================== */

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement:'#section-2'
})
.setClassToggle('.games_wrapper', 'show')
.addTo(controller);


  /* ====================================
 ANIMATION on mouseenter: using animate.css
  ==================================== */
  const $game1 = $('.game-1');
  const $game2 = $('.game-2');
  const $game3 = $('.game-3');
  const $game1img = $('.game-1 img');
  const $game2img = $('.game-2 img');
  const $game3img = $('.game-3 img');

function animationHover(element, element2, animation){
    element = $(element);
    element2 = $(element2);
    element.hover(
        function() {
            element2.addClass('animated ' + animation);        
        },
        function(){
     
            window.setTimeout( function(){
                element2.removeClass('animated ' + animation);
            }, 1);         
        });
}
animationHover($game1, $game1img, 'zoomIn');
animationHover($game2, $game2img, 'zoomIn');
animationHover($game3, $game3img, 'zoomIn');


/* ====================================
  SECTION-3:
  grasping trigger element(using scroll magic) for animation
  ==================================== */

const scene2 = new ScrollMagic.Scene({
    triggerElement:'#section-3'
})
.setClassToggle('.CV_wrapper', 'show')
.addTo(controller);
// animationHover($('.col-1'), $('.col-1'), 'bounce');
// animationHover($('.col-2'), $('.col-2'), 'bounce');
// animationHover($('.col-3'), $('.col-3'), 'bounce');
// animationHover($('.col-4'), $('.col-4'), 'bounce');

/* ====================================
  SECTION-3:
  Toggling classes: hiding and showing elements
  ==================================== */


function TogglingClasses(trigger, showElement, hideEle1, hideEle2, hideEle3 ){

trigger.click(function(){
    showElement.slideToggle('slow');
    hideEle1.slideToggle();
    hideEle2.slideToggle();
    hideEle3.slideToggle();

        if (trigger = $(".col-1")){
            trigger.html(trigger.html() == '<h1>Wróć do menu</h1>'
            ? '<h1>Wykształcenie</h1>' 
            : '<h1>Wróć do menu</h1>') 
        }
        if (trigger = $(".col-2")){
            trigger.html(trigger.html() == '<h1>Wróć do menu</h1>'
            ? '<h1>Doświadczenie zawodowe</h1>' 
            : '<h1>Wróć do menu</h1>') 
        }
        if (trigger = $(".col-3")){
            trigger.html(trigger.html() == '<h1>Wróć do menu</h1>'
            ? '<h1>Umiejętności</h1>' 
            : '<h1>Wróć do menu</h1>') 
        }
        if (trigger = $(".col-4")){
            trigger.html(trigger.html() == '<h1>Wróć do menu</h1>'
            ? '<h1>Zainteresowania</h1>' 
            : '<h1>Wróć do menu</h1>') 
        }
})
}


// col-1
$('.education_wrapper').hide();
TogglingClasses($(".col-1"),$('.education_wrapper'), $('.col-2'),  $('.col-3'),  $('.col-4') );

// col-2
$('.work_wrapper').hide();
TogglingClasses($(".col-2"),$('.work_wrapper'), $('.col-1'),  $('.col-3'),  $('.col-4') );

// col-3
$(".wrapper_skills").hide();
TogglingClasses($(".col-3"),$('.wrapper_skills'), $('.col-1'),  $('.col-2'),  $('.col-4') );
$('wrapper_languages').addClass('animate', 'fadeIn');

//col-4
$('.wrapper_hobby').hide();
TogglingClasses($(".col-4"),$('.wrapper_hobby'), $('.col-1'),  $('.col-2'),  $('.col-3') );
// $('.hobby').text('Najedź na obrazek, żeby dowiedzieć się więcej');



     
/* ====================================
 Section-4: Contact
  ==================================== */
const scene3 = new ScrollMagic.Scene({
    triggerElement:'#section-4'
})
.setClassToggle('.phone_wrapper', 'slide-in-right')
.addTo(controller);


const scene4 = new ScrollMagic.Scene({
    triggerElement:'#section-4'
})
.setClassToggle('.email_wrapper', 'slide-in-left')
.addTo(controller);

});

