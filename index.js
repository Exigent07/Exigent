const E         = document.getElementById('text_E');
const welcome   = document.getElementsByClassName('welcome')[0];
const im        = document.getElementsByClassName('im')[0];
const intro     = document.getElementsByClassName('intro')[0];
const loading   = document.getElementsByClassName('loading')[0];
const body      = document.querySelectorAll('body')[0];

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        gsap.to(E, { left: "3%", duration: 2, ease: "power4.inOut" });
    }, 2000);
    setTimeout(() => {
        E.classList.remove('animate');
        typeAnimation(); 
    }, 2450);
});

const plain = "Exigent";
const myName = "Hello, I'm Aravindh";
let currentIndex = 1;

function typeAnimation() {
    if (currentIndex < plain.length) {
        setTimeout(() => {
            E.textContent += plain[currentIndex];
            currentIndex++;
            typeAnimation();
        }, 50);
    }
}

function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top
    };
}

function typeName() {
    for (let index = 0; index < plain.length; index++) {
        setTimeout(() => {
            if (E.textContent.length > 0) {
                E.textContent = plain.slice(0, index === 0 ? -1 : -index);
                if (E.textContent.length === 1) {
                    E.textContent = "";
                }
            }
        }, 50 * index);
    }
    setTimeout(() => {
        for (let index = 0; index < myName.length; index++) {
            setTimeout(() => {
                E.textContent += myName[index];
            }, 50 * index);
        }
    }, 1200);
}

function loadElements() {
    let positionY = getOffset(E).top;

    gsap.fromTo(intro, { opacity: 0, y: 0 }, { opacity: 1, y: -positionY - 10, duration: 3, ease: "power2.inOut" });
}

setTimeout(() => {
    typeName();
    loadElements();
    setTimeout(() => {
        body.style.overflow = "auto";
    }, 1200);
}, 3500);