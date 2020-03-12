
const buttons = document.querySelectorAll('.tabs button');
const familyBtn = document.getElementById('family');
const fashionBtn = document.getElementById('fashion');


let familyGallery = document.getElementById('family-gallery');
let loveGallery = document.getElementById('love-gallery');
let lifestyleGallery = document.getElementById('lifestyle-gallery');
let fashionGallery = document.getElementById('fashion-gallery');
let glamourGallery = document.getElementById('glamour-gallery');

familyGallery.classList.add('visible');
familyBtn.classList.add('btn-active');
let last = familyGallery;
let lastSlider = $('#family-gallery');
$(document).ready(function(){
  $('#family-gallery').slick({
 infinite: true,
 slidesToShow: 2,
 slideToScroll: 1,
 variableWidth: true,
 prevArrow: "<img src='images/prev.png' class='prev' alt='1'>",
 nextArrow: "<img src='images/next.png' class='next' alt='2'>"
  });
});

for(let i of buttons){
  i.addEventListener('click', ()=>{
    document.querySelector('.tabs button.btn-active').classList.remove("btn-active");
    document.querySelector('.gallery-slider').classList.remove("visible");
    $('#family-gallery').slick('unslick');
    i.classList.add('btn-active');
    if(i===document.getElementById('family')){
      $(document).ready(function(){
        $('#family-gallery').slick({
       infinite: true,
       slidesToShow: 2,
       slideToScroll: 1,
       variableWidth: true,
        });
      });
        last.classList.remove('visible');
        familyGallery.classList.add('visible');
        last = familyGallery;
        lastSlider.slick('unslick');
        lastSlider = $('#family-gallery');
    }
    else if(i===document.getElementById('love')){
      $(document).ready(function(){
        $('#love-gallery').slick({
       infinite: true,
       slidesToShow: 2,
       slideToScroll: 1,
       variableWidth: true,
        });
      });
        last.classList.remove('visible');
        loveGallery.classList.add('visible');
        last = loveGallery;
        lastSlider.slick('unslick');
        lastSlider = $('#love-gallery');
    }
    else if(i===document.getElementById('lifestyle')){
      $(document).ready(function(){
        $('#lifestyle-gallery').slick({
       infinite: true,
       slidesToShow: 2,
       slideToScroll: 1,
       variableWidth: true,
        });
      });
        last.classList.remove('visible');
        lifestyleGallery.classList.add('visible');
        last = lifestyleGallery;
        lastSlider.slick('unslick');
        lastSlider = $('#lifestyle-gallery');
    }
    else if(i===document.getElementById('fashion')){
      $(document).ready(function(){
        $('#fashion-gallery').slick({
       infinite: true,
       slidesToShow: 2,
       slideToScroll: 1,
       variableWidth: true,
        });
      });
        last.classList.remove('visible');
        fashionGallery.classList.add('visible');
        last = fashionGallery;
        lastSlider.slick('unslick');
        lastSlider = $('#fashion-gallery');
    }
    else{
      $(document).ready(function(){
        $('#glamour-gallery').slick({
       infinite: true,
       slidesToShow: 2,
       slideToScroll: 1,
       variableWidth: true,
        });
      });
        last.classList.remove('visible');
        glamourGallery.classList.add('visible');
        last = glamourGallery;
        lastSlider.slick('unslick');
        lastSlider = $('#glamour-gallery');
    }
  });
}
if(fashionBtn.classList.contains('btn-active')){
  console.log(5);
  $(document).ready(function(){
    $('#fashion-gallery').slick({
   infinite: true,
   slidesToShow: 2,
   slideToScroll: 1,
   variableWidth: true,
    });
  });
}

$(function(){
  $('.photo').click(function(event) {
    let i_path = $(this).children('img').attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();

    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
