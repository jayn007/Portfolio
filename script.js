// Timeline Animation on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  timelineItems.forEach((item) => observer.observe(item));
});

// Rotating Titles for Hero Section
document.addEventListener("DOMContentLoaded", () => {
  const titles = [
    "Frontend Developer",
    "Data Analyst",
    "Cloud Security Engineer",
  ];
  const titleElement = document.getElementById("animated-title");
  let currentIndex = 0;

  function updateTitle() {
    titleElement.textContent = titles[currentIndex];
    titleElement.classList.add("fade");
    setTimeout(() => titleElement.classList.remove("fade"), 1000);

    currentIndex = (currentIndex + 1) % titles.length;
  }

  updateTitle(); // Set initial title
  setInterval(updateTitle, 3000); // Switch every 3 seconds
});

// Fire/Thunder Effect for Skill Hover
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () =>
      card.classList.add("fire-effect")
    );
    card.addEventListener("mouseleave", () =>
      card.classList.remove("fire-effect")
    );
  });
});

// Interactive Infographic for Skills
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");
  const infographic = document.getElementById("infographic");
  const skillLabel = document.getElementById("skillLabel");
  const toolList = document.getElementById("toolList");

  const skillTools = {
    Programming: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    "Data Visualization": ["Tableau", "Power BI", "D3.js", "Matplotlib"],
    "Database Management": ["PostgreSQL", "MySQL", "MongoDB"],
    "Statistical Analysis": ["R", "Python Stats Libraries"],
    "Data Cleaning and Preparation": ["Pandas", "NumPy", "OpenRefine"],
    "Version Control": ["Git", "GitHub"],
    "Problem-Solving and Debugging": ["Python Debugger", "Chrome DevTools"],
    SDLC: ["Agile", "Scrum", "Waterfall"],
    "Cloud Platforms": ["AWS", "EC2", "S3", "Lambda"],
    "Adapting New Technologies": ["Machine Learning", "AI"],
  };

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const skill = card.getAttribute("data-skill");
      const proficiency = card.getAttribute("data-percent");

      // Update chart/infographic and skill label
      updateInfographic(skill, proficiency);
      skillLabel.textContent = skill;

      // Update tool list
      const tools = skillTools[skill] || [];
      toolList.innerHTML = tools.map((tool) => `<li>${tool}</li>`).join("");

      // Add glow effect to infographic
      infographic.classList.add("glow-effect");
    });

    card.addEventListener("mouseleave", () => {
      // Reset infographic and remove glow effect
      resetInfographic();
      infographic.classList.remove("glow-effect");
    });
  });
});

// Function to update the infographic with skill proficiency
function updateInfographic(skill, proficiency) {
  const chartData = {
    labels: ["Proficiency", "Remaining"],
    datasets: [
      {
        data: [proficiency, 100 - proficiency],
        backgroundColor: ["#f97316", "#1f2937"],
      },
    ],
  };

  const ctx = document.getElementById("skillChart").getContext("2d");

  // Remove the existing chart instance, if any
  if (window.currentChart) {
    window.currentChart.destroy();
  }

  window.currentChart = new Chart(ctx, {
    type: "doughnut",
    data: chartData,
    options: {
      maintainAspectRatio: false,
      cutout: "75%",
      plugins: {
        legend: { display: false },
      },
    },
  });
}

// Function to reset the infographic to its default state
function resetInfographic() {
  const ctx = document.getElementById("skillChart").getContext("2d");

  if (window.currentChart) {
    window.currentChart.destroy();
  }

  window.currentChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Empty"],
      datasets: [
        {
          data: [100],
          backgroundColor: ["#4b5563"],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      cutout: "75%",
      plugins: {
        legend: { display: false },
      },
    },
  });

  skillLabel.textContent = "Hover over a skill";
  toolList.innerHTML = ""; // Clear tool list
}
