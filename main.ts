let Name = document.getElementById ("name") as HTMLInputElement;

let jobTitle = document.getElementById("job-title") as HTMLInputElement;

let summary = document.getElementById("summary") as HTMLTextAreaElement;

let skills = document.getElementById("skills") as HTMLTextAreaElement;

let experience = document.getElementById("experience") as HTMLTextAreaElement;

let education = document.getElementById("education") as HTMLTextAreaElement;

let phone = document.getElementById("phone") as HTMLInputElement;

let website = document.getElementById("web-url") as HTMLInputElement;

let email = document.getElementById("email") as HTMLInputElement;

Name.addEventListener("input", () => {
  document.getElementById("template-name")!.innerText = Name.value;
});

jobTitle.addEventListener("input", () => {
  document.getElementById("template-job-title")!.innerText = jobTitle.value;
});

summary.addEventListener("input", () => {
  document.getElementById("template-summary")!.innerText = summary.value;
});

skills.addEventListener("input", () => {
  document.getElementById("template-skills")!.innerText = skills.value;
});

experience.addEventListener("input", () => {
  document.getElementById("template-experience")!.innerText = experience.value;
});

education.addEventListener("input", () => {
  document.getElementById("template-education")!.innerText = education.value;
});

phone.addEventListener("input", () => {
  document.getElementById("template-phone")!.innerText = phone.value;
});

website.addEventListener("input", () => {
  document.getElementById("template-website")!.innerText = website.value;
});

email.addEventListener("input", () => {
  document.getElementById("template-email")!.innerText = email.value;
});



