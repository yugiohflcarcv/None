"strict mode";

// check mail hợp lệ
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateMail = (mail) => {
  return mail.match(regex);
};

let personalInfo = document.querySelector(".info-content");
let mailForm = document.querySelector(".mail-check");

// Khi mail hợp lệ
function mailValidated() {
  personalInfo.classList.remove(`hide`);
  mailForm.classList.add(`hide`);
}

// Khi nhấn Submit
const submit = () => {
  let mailValue = document.getElementById("mail").value;

  if (validateMail(mailValue)) {
    mailValidated();
  }
};

// Hiển thị message trong quá trình nhập chữ
const checkMail = () => {
  let mailValue = document.getElementById("mail").value;
  let errorMail = document.querySelector(".message");
  if (validateMail(mailValue)) {
    errorMail.textContent = "";
  } else if (mailValue.length === 0) {
    errorMail.textContent = "Enter your email to continue";
    errorMail.style.color = "gray";
  } else {
    errorMail.textContent = "Please enter a mail";
    errorMail.style.color = "red";
  }
};

// Show hide job-info
const showHide = (element) => {
  let jobContent = document.querySelector(`.${element} .job-info-content`);
  let jobSection = document.querySelector(`.${element}`);
  let jobButton = document.querySelector(`.${element}-btn`);

  if (jobContent.style.display === "none" && element !== `so-thich`) {
    jobContent.style.display = `block`;
    jobSection.style.height = `100%`;
    jobButton.textContent = "View less";
  } else if (jobContent.style.display === "none" && element === `so-thich`) {
    jobContent.style.display = `flex`;
    jobSection.style.height = `100%`;
    jobButton.textContent = "View less";
  } else {
    jobContent.style.display = `none`;
    jobButton.textContent = "View more";
    jobSection.style.height = `50%`;
  }
};

document.getElementById("submit-btn").addEventListener("click", submit);
document.getElementById("mail").addEventListener("input", checkMail);