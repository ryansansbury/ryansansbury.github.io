// Responsive Navigation Menu
const toggleMenu = () => {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

document.querySelector('.burger-menu').addEventListener('click', toggleMenu);

// Media Queries and Viewport Detection
const adjustLayout = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    // Apply mobile styles
    document.body.classList.add('mobile-view');
  } else {
    // Apply desktop styles
    document.body.classList.remove('mobile-view');
  }
}

window.addEventListener('resize', adjustLayout);
adjustLayout(); // Initial adjustment

// Image Lazy Loading
const lazyLoadImages = () => {
  const images = document.querySelectorAll('.lazy-load');
  images.forEach(image => {
    if (image.getBoundingClientRect().top < window.innerHeight) {
      image.src = image.dataset.src;
      image.classList.remove('lazy-load');
    }
  });
}

window.addEventListener('scroll', lazyLoadImages);
lazyLoadImages(); // Initial load

// Smooth Scrolling
const smoothScroll = (target) => {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    smoothScroll(target);
  });
});

// Dynamic Content Loading (Example: Load more posts on button click)
const loadMorePosts = () => {
  // Code to load more posts dynamically
}

document.querySelector('.load-more-btn').addEventListener('click', loadMorePosts);

// Interactive Elements (Example: Slider)
// Code for slider implementation

// Device Orientation and Motion Events (Example: Parallax Scrolling)
// Code for parallax scrolling implementation

// Accessibility Improvements (Example: Keyboard Navigation)
document.addEventListener('keydown', (event) => {
  const isArrowKey = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key);
  if (isArrowKey) {
    // Handle keyboard navigation
  }
});
