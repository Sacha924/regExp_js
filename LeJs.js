const form = document.querySelector("#loginForm");
form.email.addEventListener("change", function () {
  validEmail(this);
});
form.password.addEventListener("change", function () {
  validPassword(this);
});

const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g");
  let small = inputEmail.nextElementSibling; //element suivant la balise avec le name email
  if (emailRegExp.test(inputEmail.value)) {
    small.innerText = "adresse valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.innerText = "adresse invalide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

const validPassword = function (inputPassword) {
  let msg = "";
  let valid = false;
  //au moins 3 caract :
  if (inputPassword.value.length < 3) msg += "ton mot de passe est trop court ";
  //au moins 1 MAJ
  if (!/[A-Z]/.test(inputPassword.value)) msg += "ton mot de passe doit contenir une majuscule ";
  //au moins 1 min
  if (!/[a-z]/.test(inputPassword.value)) msg += "ton mot de passe doit contenir une minuscule ";
  if (!/[0-9]/.test(inputPassword.value)) msg += "ton mot de passe doit contenir un chiffre!";
  if (msg.length == 0) {
    valid = true;
    msg = "mot de passe valide";
  }
  let small = inputPassword.nextElementSibling;
  small.innerText = msg;
  return valid;
  //j'aurai pu faire un msg plus propre sans répéter le "ton mot de passe", j'ai juste à mettre des if mais bref on s'en branle
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validEmail(form.email) && validPassword(form.password)) {
    form.submit();
  }
});

$("body").css("background-color", "orange");
