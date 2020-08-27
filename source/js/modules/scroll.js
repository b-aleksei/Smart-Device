const ua = window.navigator.userAgent.toLowerCase();
const isIe = (/trident/gi).test(ua) || (/msie/gi).test(ua);

const goToTarget = function (target) { // фолбэк для ie11
  const y = target.offsetTop;

  const moveTo = function () {
    if (window.pageYOffset < y) {
      window.scrollBy(0, 60);
      setTimeout(moveTo);
    }
  };

  moveTo();
};

const makeSmoothScroll = function (link) {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let targetId = link.getAttribute('href');
    let target = document.querySelector(targetId);
    if (target) {
      if (isIe) { // примитивная проверка для ie 11
        goToTarget(target);
      } else {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });
};

const links = document.querySelectorAll('.main-screen__wrap-content a');
if (links.length) {
  links.forEach((link) => makeSmoothScroll(link));
}
