const params = new URLSearchParams(window.location.search);
const courseId = parseInt(params.get("id"));

const courses = [
  { id: 1, title: "HTML & CSS Basics", content: "This course covers HTML structure, CSS styling, and responsive design." },
  { id: 2, title: "JavaScript Essentials", content: "Learn variables, functions, events, and DOM manipulation." },
  { id: 3, title: "Intro to Python", content: "Get started with syntax, data types, and loops in Python." }
];

const course = courses.find(c => c.id === courseId);
const detailsDiv = document.getElementById("course-details");

if (course) {
  detailsDiv.innerHTML = `
    <h2>${course.title}</h2>
    <p>${course.content}</p>
  `;
}

const completeBtn = document.getElementById("complete-btn");
completeBtn.addEventListener("click", () => {
  localStorage.setItem(`course_${courseId}_completed`, true);
  alert("✅ Course marked as completed!");
});

