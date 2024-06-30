body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('dark-overlay.png');
    mix-blend-mode: multiply;
    z-index: -1;
}

const creepyText = document.querySelectorAll('.creepy-text');

creepyText.forEach((text, index) => {
    const delay = index * 500; // Adjust the delay for each text element
    setTimeout(() => {
        text.style.animation = 'none'; // Disable the text shake animation
        text.style.color = '#ff0000'; // Change text color to red for added creepiness
    }, delay);
});

const unsettlingSound = document.getElementById('unsettlingSound');
const soundControl = document.getElementById('soundControl');

soundControl.addEventListener('click', () => {
    if (unsettlingSound.paused) {
        unsettlingSound.play();
        soundControl.innerHTML = 'Mute Sound';
    } else {
        unsettlingSound.pause();
        soundControl.innerHTML = 'Unmute Sound';
    }
});

const body = document.body;

function addRandomText() {
    const text = document.createElement('div');
    text.className = 'random-text';
    text.innerText = 'Creeping in the shadows...';
    text.style.top = Math.random() * window.innerHeight + 'px';
    text.style.left = Math.random() * window.innerWidth + 'px';
    body.appendChild(text);

    setTimeout(() => {
        text.remove();
    }, 5000); // Remove text after 5 seconds
}

setInterval(addRandomText, 3000); // Add random text every 3 seconds

const languageLinks = document.querySelectorAll('.language-link');

languageOptions.forEach(option => {
    option.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the selected language from the data-lang attribute
        const selectedLang = option.getAttribute('data-lang');

        // Construct the URL for the selected language
        const newURL = `/${selectedLang}/index.html`;

        // Redirect to the new language-specific page
        window.location.href = newURL;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const moreButton = document.getElementById('moreButton');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            moreButton.classList.add('show');
        } else {
            moreButton.classList.remove('show');
        }
    });
});

