// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      output.innerText = "Please fill all fields.";
      return;
    }

    output.innerText = `✅ Thank you, ${name}! We'll reach out to ${email} soon.`;

    form.reset(); // clear the form
  });
});
