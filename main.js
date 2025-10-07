const courses = [
  { id: 1, title: "HTML & CSS Basics", description: "Learn the foundations of web design." },
  { id: 2, title: "JavaScript Essentials", description: "Master interactivity on web pages." },
  { id: 3, title: "Intro to Python", description: "Start coding with Python fundamentals." }
];

const courseList = document.getElementById("course-list");

courses.forEach(course => {
  const card = document.createElement("div");
  card.classList.add("course-card");
  card.innerHTML = `
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <a href="course.html?id=${course.id}" class="btn">View Details</a>
  `;
  courseList.appendChild(card);
});

