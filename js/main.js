
$(document).ready(function () {
  $(".slide").owlCarousel({
    margin: 10,
    nav: true,
    autoplay: true,
    rtl: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".brandSlide").owlCarousel({
    loop: true,
    margin: 10,
    rtl:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });
});
new WOW().init();

const counters = document.querySelectorAll('.counter');
const speed = 5000;

counters.forEach(counter=>{
    const UpdateCount = ()=> {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(UpdateCount, 1);
        } else {
            count.innerText = target;
        }
    }

    UpdateCount();
});
