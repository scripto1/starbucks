

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 만큼 지연되면서 요소가 순차적으로 나타난다.//
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});