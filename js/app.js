document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;

/**
 * contact data
 */

document.querySelector('.contacts-block').innerHTML += `<li class="list-inline-item">
  <a href="${data.telegram}"target='_blank' class="text-decoration-none text-secondary">Telegram</a>
</li>`
document.querySelector('.contacts-block').innerHTML += `<li class="list-inline-item">
<a href="mailto:${data.email}" class="text-decoration-none text-secondary">Почта</a>
</li>`
document.querySelector('.contacts-block').innerHTML += `<li class="list-inline-item">
<a href="${data.GitHub}"target='_blank' class="text-decoration-none text-secondary">GitHub</a>
</li>`
document.querySelector('.contacts-block').innerHTML += `<li class="list-inline-item">
<a href="${data.HeadHunter}"target='_blank' class="text-decoration-none text-secondary">Resume</a>
</li>`
// document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">${data.linkedin}</a></li>`
document.querySelector('.address').innerHTML = `<a href='https://goo.gl/maps/HEXhLRGiKh7ZpH4L7' target='_blank'><p>${data.address}</p></a>`;