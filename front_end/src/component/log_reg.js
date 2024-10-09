export function initializeForms() {
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
      loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        try {
          const response = await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (response.ok) {
            const data = await response.json();
            alert("Login successful!");
            if (!data.is_admin) {
              window.location.href = "index.html";
            } else {
              // Handle admin login (e.g., redirect to admin dashboard)
            }
          } else {
            const errorData = await response.json();
            alert(`Login failed: ${errorData.description}`);
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred. Please try again.");
        }
      });
    }

    if (registerForm) {
      registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const firstName = registerForm.first_name.value;
        const lastName = registerForm.last_name.value;
        const email = registerForm.email.value;
        const password = registerForm.password.value;

        try {
          const response = await fetch("/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              email,
              password,
            }),
          });

          if (response.ok) {
            alert("Registration successful!");
            window.location.href = "index.html";
          } else {
            const errorData = await response.json();
            alert(`Registration failed: ${errorData.description}`);
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred. Please try again.");
        }
      });
    }
  });
}
