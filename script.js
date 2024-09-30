// Skill Meter Animation on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const meters = document.querySelectorAll(".progress-meter span");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const meter = entry.target;
          const width = meter.dataset.width; // Read the width from a data attribute
          meter.style.transition = "width 2s ease";
          meter.style.width = width; // Animate to the actual skill level
          observer.unobserve(meter); // Stop observing once the animation is triggered
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );

  meters.forEach((meter) => {
    meter.dataset.width = meter.style.width; // Store the width in a data attribute
    meter.style.width = "0%"; // Set initial width to 0%
    observer.observe(meter); // Start observing the element
  });
});

// Timeline Animation on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );

  timelineItems.forEach((item) => {
    observer.observe(item); // Start observing the timeline item
  });
});

// Rotating Titles for Hero Section
document.addEventListener("DOMContentLoaded", () => {
  const titles = ["Frontend Developer", "Data Analyst"];
  const titleElement = document.getElementById("animated-title");
  let currentIndex = 0;

  function updateTitle() {
    titleElement.textContent = titles[currentIndex];
    titleElement.classList.add("fade"); // Add the fade animation
    setTimeout(() => titleElement.classList.remove("fade"), 1000); // Remove it after 1 second

    currentIndex = (currentIndex + 1) % titles.length;
  }

  updateTitle(); // Set initial title
  setInterval(updateTitle, 3000); // Switch every 3 seconds
});

// Fire/Thunder Effect for Skill Hover
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("fire-effect"); // Adding fire effect class on hover
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("fire-effect"); // Remove fire effect when hover ends
    });
  });
});

// Interactive Infographic for Skills
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");
  const infographic = document.getElementById("infographic"); // Assuming there's a canvas or chart element with id 'infographic'
  const skillLabel = document.getElementById("skillLabel");

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const skill = card.getAttribute("data-skill");
      const proficiency = card.getAttribute("data-percent"); // Assuming proficiency is stored in a data attribute

      // Update chart or infographic to reflect the skill proficiency (example using Chart.js or similar)
      updateInfographic(skill, proficiency); // This would be a function to update the chart/graphic

      // Update skill label
      skillLabel.textContent = `${skill}: ${proficiency}%`;

      // Add animation or glow effect to the infographic
      infographic.classList.add("glow-effect");
    });

    card.addEventListener("mouseleave", () => {
      // Reset the infographic or hide it when hovering out
      resetInfographic(); // This would be a function to reset the chart

      // Remove glow effect
      infographic.classList.remove("glow-effect");
    });
  });
});

// Placeholder functions for infographic update/reset
function updateInfographic(skill, proficiency) {
  // Logic to update infographic/chart with new proficiency (e.g., using Chart.js)
  // Assuming you use Chart.js here. You'd update the chart with new data (e.g., skill proficiency).
}

function resetInfographic() {
  // Logic to reset infographic/chart to default state
  // This could reset the chart to a default value or make it empty.
}
