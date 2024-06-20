let loginBtn = document.getElementById("loginBtn");

function loginForm() {
  if (document.getElementById("logContainer")) {
    return;
  }

  let container = document.createElement("div");
  container.id = "logContainer";

  let linkElement = document.createElement("link");
  linkElement.href =
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";
  linkElement.rel = "stylesheet";
  linkElement.id = "linkElement";
  container.appendChild(linkElement);

  let span = document.createElement("span");
  span.className = "material-symbols-outlined";
  span.id = "cancelSpan";
  span.innerText = "cancel";

  let logForm = document.createElement("form");
  logForm.id = "logForm";

  let logIn = document.createElement("h2");
  logIn.id = "logIn";
  logIn.innerText = "Log In";

  let userLabel = document.createElement("label");
  userLabel.setAttribute = ("for", "username");
  userLabel.innerText = "Username:-";

  let userInput = document.createElement("input");
  userInput.id = "username";
  userInput.name = "username";
  userInput.type = "text";
  userInput.placeholder = "Enter your username";
  userInput.required = "true";

  let password = document.createElement("label");
  password.innerText = "Password:-";
  password.setAttribute = ("for", "password");

  let passInput = document.createElement("input");
  passInput.id = "password";
  passInput.name = "password";
  passInput.type = "password";
  passInput.placeholder = "Enter your password";
  passInput.required = "true";

  let submitBtn = document.createElement("button");
  submitBtn.id = "submitBtn";
  submitBtn.type = "submit";
  submitBtn.innerText = "Sign In";

  let signLink = document.createElement("a");
  signLink.id = "signUp";
  signLink.href = "signIn.js";
  signLink.innerText = "Sign Up";

  let textLink = document.createElement("h4");
  textLink.innerText = "Don't have an account?";
  textLink.appendChild(signLink);

  logForm.appendChild(span);
  logForm.appendChild(logIn);
  logForm.appendChild(userLabel);
  logForm.appendChild(userInput);
  logForm.appendChild(document.createElement("br"));
  logForm.appendChild(password);
  logForm.appendChild(passInput);
  logForm.appendChild(document.createElement("br"));
  logForm.appendChild(submitBtn);
  logForm.appendChild(textLink);
  // logForm.appendChild(signInBtn)

  container.appendChild(logForm);

  document.body.appendChild(container);

  signLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    signinForm();
    document.body.removeChild(container); // Remove the login form when switching to sign-up form
  });

  span.addEventListener("click", () => {
    document.body.removeChild(container);
  })
}

loginBtn.addEventListener("click", loginForm);
