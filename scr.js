// header scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

//navbar hide
let navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLinks.forEach((ele) => {
  ele.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// popover
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// form validation

document.getElementById("submit-btn").addEventListener("click", function () {
  let FullName = document.getElementById("inputName").value;
  let Email = document.getElementById("inputEmail").value;
  let Message = document.getElementById("inputMessage").value;
  const NameRGEX = /^[A-Za-z ]{2,30}$/;
  const EmailRGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
  const MessageRGEX = /.*[A-Za-z]+.*/;

  let NameResult = NameRGEX.test(FullName);
  let EmailResult = EmailRGEX.test(Email);
  let MessageResult = MessageRGEX.test(Message);

  const validationMessages = [];
  const successMessage =
    "Your message has been received. I appreciate your interest and potential opportunities.\n As a professional in the industry,\n I value your outreach. :)";

  if (!NameResult) {
    validationMessages.push("Please enter a valid Name.");
  }

  if (!EmailResult) {
    validationMessages.push("Please enter a valid Email Address.");
  }

  if (!MessageResult) {
    validationMessages.push("Message cannot be empty.");
  }

  if (validationMessages.length > 0) {
    const validationMessage = validationMessages.join("\n");
    document.getElementById("validationMessage").innerText = validationMessage;
    $("#validationModal").modal("show");
  }

  if (NameResult && EmailResult && MessageResult) {
    document.getElementById("exampleModalLabel").innerText =
      "Thank you for getting in touch!";
    document.getElementById("validationMessage").innerText = successMessage;
    $("#validationModal").modal("show");
  }
});

// disable form submit button until required fields are entered

function enableSubmit() {
  let inputs = document.getElementsByClassName("required");

  let btn = document.querySelector('button[type="submit"]');

  let isValid = true;
  for (let i = 0; i < inputs.length; i++) {
    let changedInput = inputs[i];

    if (changedInput.value.trim() === "" || changedInput.value === null) {
      isValid = false;
      break;
    }
  }
  btn.disabled = !isValid;
}
