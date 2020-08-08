//Typing effect
function typingEffect() {
    const texts = ["Nicole.", "a developer.", "cool."];
    let count = 0;
    let index = 0;
    let currentText = '';
    const typeText = document.querySelector('.typing');
    const typeElement = document.querySelector('.typing-text');
    const colourClass = ['my-name-text', 'developer-text', 'ramen-text'];
    let prevColour;

    (function type() {
        if (count === texts.length) {
            count = 0;
        }

        //add appropriate colour class
        //remove previous colour class
        typeText.classList.remove(prevColour);
        typeText.classList.add(colourClass[count]);
        // typeText.classList.remove(colourClass[count === 0 ? colourClass.length - 1 : count - 1]);
        prevColour = colourClass[count];

        currentText = texts[count];
        // add colour
        letter = currentText.slice(0, ++index);


        typeText.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
        };
        t = setTimeout(type, 330);


        //pause typing animation if mouse is hovering over
        typeElement.onmouseenter = function () {
            clearTimeout(t);
        };

        //restart typing animation if mouse is no longer hovering over
        typeElement.onmouseleave = function () {
            setTimeout(type, 330);
        };

    })();
};


// Nav bar underline sections animation
function navAnimation() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    console.log(navLinks);
    sections.forEach(section => {
        section.addEventListener("mouseenter", function () {
            const id = this.getAttribute("id");
            const navActive = document.querySelector(`a[href="#${id}"]`);
            navLinks.forEach(link => link.classList.remove('active'));
            navActive.classList.add('active');

        });
    });
};


//smooth scrolling effect
function scrollEffect() {
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}

// Using Intersection Observer for Navbar test
function observeSectionForNav() {
    const sections = document.querySelectorAll('section');
    const options = {
        // root: null, //this is the viewport
        threshold: 0.4
        // rootMargin: "-150px"
    };

    const navObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            const idName = entry.target.id;
            const activeAnchor = document.querySelector(`[data-page=${idName}]`);
            if(!entry.isIntersecting){
                activeAnchor.classList.remove('active');
            } else{
                activeAnchor.classList.add('active');
            }

        });
    }, options);

    sections.forEach(section => {
        navObserver.observe(section);
        console.log(section);
    })
}



//main function
function main() {
    scrollEffect();
    // typingEffect();
    // navAnimation();
    observeSectionForNav();
};

main();