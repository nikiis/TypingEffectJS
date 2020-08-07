//Typing effect
function typingEffect() {
    const texts = ["Nicole.", "a developer.", "cool."];
    let count = 0;
    let index = 0;
    let currentText = '';
    const typeText = document.querySelector('.typing');
    const typeElement = document.querySelector('.typing-text');
    const colourClass = ['my-name-text', 'developer-text', 'ramen-text'];


    (function type() {
        //add appropriate colour class
        //remove previous colour class
        typeText.classList.add(colourClass[count]);
        typeText.classList.remove(colourClass[count - 1]);

        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        // add colour
        letter = currentText.slice(0, ++index);
        t = setTimeout(type, 300);

        typeText.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
        };



        //pause typing animation if mouse is hovering over
        typeElement.onmouseenter = function () {
            clearTimeout(t);
        };

        //restart typing animation if mouse is no longer hovering over
        typeElement.onmouseleave = function () {
            setTimeout(type, 300);
        };

    })();
};

function main() {
    typingEffect();
};

// main();