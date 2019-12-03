const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
};

const preloadImage = (img) => {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  });

  imagesToLoad.forEach((image) => {
    imgObserver.observe(image);
  });
} else {
  imagesToLoad.forEach((image) => {
    preloadImage(image);
  });
}
