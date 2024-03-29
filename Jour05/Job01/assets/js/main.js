const fields = document.querySelectorAll(
  '#form input[type="text"], #form input[type="email"], #form input[type="password"]'
);

fields.forEach((field) => {
  field.addEventListener("blur", function () {
    validateField(field);
  });
});

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  resetErrors();
  let hasError = false;
  fields.forEach((field) => {
    if (!validateField(field)) {
      hasError = true;
    }
  });

  if (!hasError) {
    form.submit();
  }
});

function validateField(field) {
  const fieldId = field.id;
  const fieldValue = field.value.trim();
  let isValid = true;

  switch (fieldId) {
    case "nom":
    case "prenom":
    case "mdp":
    case "adress":
      if (!fieldValue) {
        setError(fieldId, `Le ${fieldId} est obligatoire.`);
        isValid = false;
      }
      break;
    case "email":
      if (!validateEmail(fieldValue)) {
        setError(fieldId, "L'email est invalide.");
        isValid = false;
      }
      break;
    case "postal":
      if (!validatePostalCode(fieldValue)) {
        setError(fieldId, "Le code postal est invalide.");
        isValid = false;
      }
      break;
  }
  if (isValid) {
    clearError(fieldId);
  }
  return isValid;
}

function setError(id, message) {
  const errorElement = document.getElementById("error-" + id);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function clearError(id) {
  const errorElement = document.getElementById("error-" + id);
  if (errorElement) {
    errorElement.textContent = "";
  }
}

function resetErrors() {
  document.querySelectorAll(".error__message").forEach(function (errorElement) {
    errorElement.textContent = "";
  });
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePostalCode(code) {
  const re = /^[0-9]{5}$/;
  return re.test(code);
}
