(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Modal Video
    // $(document).ready(function () {
    //     var $videoSrc;
    //     $('.btn-play').click(function () {
    //         $videoSrc = $(this).data("src");
    //     });
    //     console.log($videoSrc);

    //     $('#videoModal').on('shown.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    //     })

    //     $('#videoModal').on('hide.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc);
    //     })
    // });

    var videoModal = document.getElementById("videoModal");
        let video = document.getElementById("video");
    window.onclick = function (event) {
        video.pause();

      if (event.target == videoModal) {
        videoModal.style.display = "none";
      }
    };



    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInDown',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 450,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    // my own code
    
// const Images = [
//   {
//     id: 1,
//     img: "img/portfolio-1.jpg",
//     type: "male",
//   },
//   {
//     id: 1,
//     img: "./img/img1.jpeg",
//     type: "female",
//   },
//   {
//     id: 1,
//     img: "./img/img1.jpeg",
//     type: "male",
//   },
//   {
//     id: 1,
//     img: "./img/img1.jpeg",
//     type: "female",
//   },
//   {
//     id: 1,
//     img: "./img/img1.jpeg",
//     type: "male",
//   },
//   {
//     id: 1,
//     img: "./img/img1.jpeg",
//     type: "female",
//   },
// ];
//     let filteredImages;
//     let portfolioContainer = document.querySelector(".portfolio-container");
//     const filterImages = (item) => {
//         if(item === "all" || item === ""){
//             filteredImages = Images;
//             console.log(filteredImages);
//         }else{
//             filteredImages = Images.filter((image) => image.type === item);
//         }
//     }
//     filterImages("all");
//     let htmlContent = filteredImages.map((image) => {
//         return `<div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first">
//                         <div class="portfolio-wrap">
//                             <a href= '${image?.img}' data-lightbox="portfolio">
//                                 <img src='${image?.img}' alt="Portfolio Image">
//                             </a>
//                         </div>
//                     </div>`;
//     })
//     htmlContent.join("");

//     console.log(htmlContent)

    // portfolioContainer.insertAdjacentHTML("afterbegin",htmlContent);

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})


(jQuery);

