// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Resume Modal functionality
const modal = document.getElementById('resumeModal');
const btn = document.getElementById('viewResumeBtn');
const span = document.getElementById('closeResumeModal');

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const filterButtons = document.querySelectorAll('.skills-filter button');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    skillCards.forEach(card => {
      card.style.display = card.classList.contains(filter) ? '' : 'none';
    });
  });
});
document.querySelectorAll('.toggle-excerpt').forEach(btn => {
  btn.addEventListener('click', function() {
    const excerpt = this.previousElementSibling;
    const expanded = excerpt.classList.toggle('expanded');
    this.textContent = expanded ? 'Show Less' : 'Show More';
    this.setAttribute('aria-expanded', expanded);
  });
});


// Get the button element
const readMoreButton = document.querySelector('.read-more-btn');

// Add click event listener to the button
readMoreButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  
  // Medium article URL
  const articleUrl = "https://medium.com/@meghars46/databricks-calgary-meetup-lakeflow-automatic-power-bi-publishing-36b3af0e89f6";
  
  // Open the article in a new tab
  window.open(articleUrl, '_blank');
  
  // Optional: Track the click with analytics
  if (typeof gtag === 'function') {
    gtag('event', 'click', {
      'event_category': 'Blog',
      'event_label': 'Read Full Reflection',
      'value': 1
    });
  }
});

// Alternative approach: Add the URL directly to the HTML element
document.addEventListener('DOMContentLoaded', function() {
  const readMoreButton = document.querySelector('.read-more-btn');
  readMoreButton.href = "https://medium.com/@meghars46/databricks-calgary-meetup-lakeflow-automatic-power-bi-publishing-36b3af0e89f6";
});




