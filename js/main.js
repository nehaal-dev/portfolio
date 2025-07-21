
  const btn = document.getElementById("backToTopBtn");

  // Show/hide button on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Scroll to top
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Optional animation on hover
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
 

  // project section

  
  const reveals = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", function () {
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.classList.add("active");
      }
    });
  });

  // watsapp float
  document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });


 
  // Smooth scroll on navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Highlight active navbar link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    const sectionId = current.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Navbar close on nav-link click (for mobile view)
document.querySelectorAll('.navbar-collapse .nav-link').forEach(function(link) {
  link.addEventListener('click', function () {
    let navbar = document.querySelector('.navbar-collapse');
    let bsCollapse = bootstrap.Collapse.getInstance(navbar);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});