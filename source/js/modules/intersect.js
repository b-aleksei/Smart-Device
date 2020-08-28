const ua = window.navigator.userAgent.toLowerCase();
const isIe = (/trident/gi).test(ua) || (/msie/gi).test(ua);

if (!isIe) {
  const options = {
    rootMargin: '0px 0px -30px 0px',
  };

  const views = ['.advantages', '.about', '.goods', '.feedback', 'footer'];

  const handleChanges = (entries, observer) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        observer.unobserve(el.target);
        el.target.classList.remove('op');
        el.target.addEventListener('transitionend', function () {
          el.target.classList.remove('tr');
        }, {once: true});
      }
    });

  };

  const observer = new IntersectionObserver(handleChanges, options);

  window.addEventListener('load', function () {

    views.forEach((view) => {
      let target = document.querySelector(view);
      if (target) {
        target.classList.add('op', 'tr');
        observer.observe(target);
      }
    });
  });
}
