var Name = document.getElementById("name");
var jobTitle = document.getElementById("job-title");
var summary = document.getElementById("summary");
var skills = document.getElementById("skills");
var experience = document.getElementById("experience");
var education = document.getElementById("education");
var phone = document.getElementById("phone");
var website = document.getElementById("web-url");
var email = document.getElementById("email");
Name.addEventListener("input", function () {
    document.getElementById("template-name").innerText = Name.value;
});
jobTitle.addEventListener("input", function () {
    document.getElementById("template-job-title").innerText = jobTitle.value;
});
summary.addEventListener("input", function () {
    document.getElementById("template-summary").innerText = summary.value;
});
skills.addEventListener("input", function () {
    document.getElementById("template-skills").innerText = skills.value;
});
experience.addEventListener("input", function () {
    document.getElementById("template-experience").innerText = experience.value;
});
education.addEventListener("input", function () {
    document.getElementById("template-education").innerText = education.value;
});
phone.addEventListener("input", function () {
    document.getElementById("template-phone").innerText = phone.value;
});
website.addEventListener("input", function () {
    document.getElementById("template-website").innerText = website.value;
});
email.addEventListener("input", function () {
    document.getElementById("template-email").innerText = email.value;
});
