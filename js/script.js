// Banner Slider Start
$('.banner_slider').slick({
    fade: true,
    arrows: false,
    dots: true,
});
// Banner Slider End

// Aboud Video VenoBon Start
new VenoBox({
    selector: '.about_video',
});
// Aboud Video VenoBon End

// Gellary VenoBox Start
new VenoBox({
    selector: '.gallery_image',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
// Gellary VenoBox End

// Testimonial Slider Start
$('.testimonial_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
});
// Testimonial Slider End

// CounterUp Start
$('.gym_counter').counterUp({
    delay: 10,
    time: 1000
});
// CounterUp End

// Mix It Up Start
var mixer = mixitup('.cls_main');
// Mix It Up End

// Client Slider Slider Start
$('.client_slider_main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<span class="prevArrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow:'<span class="nextArrow"><i class="fa-solid fa-angle-right"></i></span>',
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
      ]
});
// Client Slider Slider End