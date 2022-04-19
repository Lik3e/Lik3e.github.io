document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
/**
 * section data
 */
let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += ` <h4 class="company-name mb-2">${item.company}, <i>${item.from}</i></h4>`;
    // expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<img src="${item.image}" alt="${item.company}" class="img-thumbnail mt-3 mb-3"`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

/**
 * contact data
 */

document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.telegram}"target='_blank'>Telegram</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">Почта</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.GitHub}"target='_blank'>GitHub</a></li>`
// document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">${data.linkedin}</a></li>`
document.querySelector('.address').innerHTML = `<a href='https://goo.gl/maps/HEXhLRGiKh7ZpH4L7' target='_blank'><p>${data.address}</p></a>`;
document.querySelector('#my-photo').src = data.photo;

/**
 * skills
 */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

/**
 * education
 */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

/**
 * Achievements
 */

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item}</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;
