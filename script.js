// Dark Mode Toggle
const toggleDark = document.getElementById("toggleDark");

toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Form Validation
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    message.textContent = "Please fill in all required fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Message sent successfully!";
    message.style.color = "green";
    form.reset();
  }
});
