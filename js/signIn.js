let signUp = document.getElementById("signUp");

function signinForm() {
  if (document.getElementById("signinContainer")) {
    return;
  }

  let container = document.createElement("div");
  container.id = "signinContainer";

  let signForm = document.createElement("form");
  signForm.id = "signForm";

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

  let signIn = document.createElement("h2");
  signIn.innerText = "Sign In";

  let userLabel = document.createElement("label");
  userLabel.setAttribute("for", "email");
  userLabel.innerText = "Email:- ";

  let userInput = document.createElement("input");
  userInput.id = "email";
  userInput.name = "email";
  userInput.type = "email";
  userInput.placeholder = "Enter your email";
  userInput.required = true;

  let dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.innerText = "Date of Birth:- ";

  let dateInput = document.createElement("input");
  dateInput.id = "date";
  dateInput.name = "date";
  dateInput.type = "date";
  dateInput.value = "2024-06-16";
  dateInput.max = "2024-06-16";
  dateInput.required = true;

  let genderLabel = document.createElement("label");
  genderLabel.innerText = "Gender:- ";
  genderLabel.id = "gender";
  
  let select = document.createElement("select");
  select.id = "select";

  let optMale = document.createElement("option");
  optMale.value = "male";
  optMale.innerText = "Male";

  let optFemale = document.createElement("option");
  optFemale.value = "female";
  optFemale.innerText = "Female";

  let optOthers = document.createElement("option");
  optOthers.value = "others";
  optOthers.innerText = "Others";

  select.appendChild(optMale);
  select.appendChild(optFemale);
  select.appendChild(optOthers);

  let passwordLabel = document.createElement("label");
  passwordLabel.innerText = "Password:- ";
  passwordLabel.setAttribute("for", "password");

  let passInput = document.createElement("input");
  passInput.id = "password";
  passInput.name = "password";
  passInput.type = "password";
  passInput.placeholder = "Enter your password";
  passInput.required = true;

  let cofPasswordLabel = document.createElement("label");
  cofPasswordLabel.innerText = "Confirm Password:- ";
  cofPasswordLabel.setAttribute("for", "cofPassword");

  let cofPassInput = document.createElement("input");
  cofPassInput.id = "cofPassword";
  cofPassInput.name = "cofPassword";
  cofPassInput.type = "password";
  cofPassInput.placeholder = "Enter your password again";
  cofPassInput.required = true;

  let submitBtn = document.createElement("button");
  submitBtn.id = "submitBtn";
  submitBtn.type = "submit";
  submitBtn.innerText = "Sign Up";

  let logLink = document.createElement("a");
  logLink.id = "signIn";
  logLink.href = "login.js";
  logLink.innerText = "Sign In";

  let textLink = document.createElement("h4");
  textLink.innerText = "Already have an account?";
  textLink.appendChild(logLink);

  signForm.appendChild(span);
  signForm.appendChild(signIn);
  signForm.appendChild(userLabel);
  signForm.appendChild(userInput);
  signForm.appendChild(document.createElement("br"));
  signForm.appendChild(dateLabel);
  signForm.appendChild(dateInput);
  signForm.appendChild(document.createElement("br"));
  signForm.appendChild(genderLabel);
  signForm.appendChild(select);
  signForm.appendChild(document.createElement("br"));
  signForm.appendChild(passwordLabel);
  signForm.appendChild(passInput);
  signForm.appendChild(document.createElement("br"));
  signForm.appendChild(cofPasswordLabel);
  signForm.appendChild(cofPassInput);
  signForm.appendChild(document.createElement("br"));
  signForm.appendChild(submitBtn);
  signForm.appendChild(textLink);

  container.appendChild(signForm);

  document.body.appendChild(container);

  logLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm();
    document.body.removeChild(container);
  });

  span.addEventListener("click", () => {
    document.body.removeChild(container);
  });
}

signUp.addEventListener("click", signinForm);
