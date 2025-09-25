

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {

        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 - index;
            }, 500);

        }else{
            pageTurn.classList.add('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 + index;
            }, 500);
        }
    }
});


// contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {

            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            },500);
        }, (index + 1) * 200 + 100)
    });
}

// --- populate owner contact details when contact page is shown ---
const ownerInfo = {
    name: 'ANIL MEGAVATH',
    email: 'anil@example.com', // <-- change to your real email
    phone: '+91-XXXXXXXXXX'    // <-- change to your real phone number
};

function populateOwnerContact() {
    const nameEl = document.getElementById('owner-name');
    const emailEl = document.getElementById('owner-email');
    const phoneEl = document.getElementById('owner-phone');

    if(nameEl) nameEl.textContent = ownerInfo.name;

    if(emailEl) {
        emailEl.innerHTML = '';
        const a = document.createElement('a');
        a.href = `mailto:${ownerInfo.email}`;
        a.textContent = ownerInfo.email;
        emailEl.appendChild(document.createTextNode('Email: '));
        emailEl.appendChild(a);
    }

    if(phoneEl) {
        phoneEl.innerHTML = '';
        const a = document.createElement('a');
        a.href = `tel:${ownerInfo.phone}`;
        a.textContent = ownerInfo.phone;
        phoneEl.appendChild(document.createTextNode('Phone: '));
        phoneEl.appendChild(a);
    }
}

// call populateOwnerContact when Contact Me is clicked so info appears on page 6
contactMeBtn.addEventListener('click', populateOwnerContact);

// also populate details under the form
function populateOwnerBelowForm() {
    const below = document.getElementById('owner-below-form');
    if(!below) return;

    below.innerHTML = '';
    const nameDiv = document.createElement('div');
    nameDiv.textContent = ownerInfo.name;
    nameDiv.className = 'owner-name-below';

    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${ownerInfo.email}`;
    emailLink.textContent = ownerInfo.email;
    emailLink.className = 'owner-email-below';

    const phoneLink = document.createElement('a');
    phoneLink.href = `tel:${ownerInfo.phone}`;
    phoneLink.textContent = ownerInfo.phone;
    phoneLink.className = 'owner-phone-below';

    below.appendChild(nameDiv);
    below.appendChild(document.createElement('br'));
    below.appendChild(emailLink);
    below.appendChild(document.createTextNode(' | '));
    below.appendChild(phoneLink);
}

contactMeBtn.addEventListener('click', populateOwnerBelowForm);


// create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}


// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();

            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)

    })
}


// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


// open animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);


pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();

        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)

}) 