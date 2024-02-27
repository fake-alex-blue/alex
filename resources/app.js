// === Scroll Timeline Observer === 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            scrollTimeline(entry.target.index + 1);
        } else { //remove me
        }
    })
})

const hiddenElements = document.querySelectorAll(".scroll-gap")
hiddenElements.forEach((el, i) => {
    el.index = i;
    observer.observe(el)
});



// === Nav Link Reset ===

const reset = document.getElementById("back-to-top")
reset.addEventListener("click", resetAll)



// === Scroll Timeline Variables === 

const textOne = document.getElementById("text_01")
const textTwo = document.getElementById("text_02")
const textThree = document.getElementById("text_03")
const trioGroup = document.querySelector(".up-together")
const line = document.querySelector(".line")
const swipeOuts = document.querySelectorAll(".swipe-R")
const swipeIn = document.querySelector(".swipe-L")
const heroName = document.getElementById("hero-name")
const colorSplash = document.querySelector(".colorbox")
let splashed = false;
const nav = document.querySelector(".navigation")



// === Scroll Timeline Effects ===

function scrollTimeline(i) {
    switch(i){
        case 1:
            textOne.classList.add("show");
            textTwo.classList.remove("show");
            textThree.classList.add("hide");
            nav.style.display ="none";
            break;
        case 3:
            textOne.classList.remove("show");
            textTwo.classList.add("show");
            textTwo.classList.remove("delete");
            textThree.classList.remove("type");
            textThree.classList.remove("hide");
            break;
        case 5:
            textTwo.classList.add("delete");
            textThree.classList.add("type");
            break;
        case 6:
            textTwo.classList.add("hide");
            break;
        case 9:
            trioGroup.classList.remove("go-up");
            break
        case 11:
            trioGroup.classList.add("go-up");
            break;
        case 13:
            trioGroup.classList.remove("go-up");
            line.classList.remove("squash-grow");
            swipeOuts.forEach(element => {
                element.classList.remove("swipe-out-right")
            })
            swipeIn.classList.remove("swipe-in-left")
            break;
        case 16:
            line.classList.add("squash-grow");
            swipeIn.classList.add("show")
            heroName.classList.add("whitebg")
            break;
        case 19:
            if (!splashed) {
                heroName.classList.remove("whitebg")
                heroName.classList.add("content")
                
            }
            swipeOuts.forEach(element => {
                element.classList.add("swipe-out-right")
            })
            swipeIn.classList.add("swipe-in-left")
            nav.style.zIndex = "-1";
            nav.style.display ="none";
            nav.classList.remove("hoverable")
            break;

        case 22:
            if (splashed) {
                colorSplash.classList.add("unsplash");
                
                
                setTimeout(()=>{
                    colorSplash.classList.remove("splash")
                    heroName.classList.remove("titlesplash")
                    heroName.classList.add("titleunsplash")
                }, 1000);

                setTimeout(()=>{
                    colorSplash.classList.remove("unsplash")
                    heroName.classList.remove("titleunsplash")
                    heroName.classList.remove("content")
                    splashed = false;
                }, 4000);
            }
            break;
        case 23:
            swipeIn.classList.remove("show")
            swipeIn.classList.add("hide")
            break;
        case 24:
            colorSplash.classList.add("splash")
            heroName.classList.add("titlesplash")
            splashed = true;
            setTimeout(()=>{
                nav.style.display ="block";
                nav.style.zIndex = "1";
                nav.classList.add("hoverable")
            }, 1500)
            break;

    }
}

function resetAll() {
    textOne.classList.add("show");
    textTwo.classList.remove("show");
    textTwo.classList.remove("delete");
    textTwo.classList.remove("hide");
    
    textThree.classList.add("hide");
    textThree.classList.remove("type");
    
    trioGroup.classList.remove("go-up");
    
    line.classList.remove("squash-grow");
    
    swipeOuts.forEach(element => {
        element.classList.remove("swipe-out-right");
    });
    swipeIn.classList.remove("swipe-in-left");
    swipeIn.classList.remove("show");
    swipeIn.classList.add("hide");
    
    heroName.classList.add("whitebg");
    heroName.classList.remove("titlesplash");
    heroName.classList.remove("titleunsplash");
    heroName.classList.remove("content");
    
    splashed = false;
    
    colorSplash.classList.remove("splash");
    colorSplash.classList.remove("unsplash");
    
    nav.style.display ="none";
    nav.style.zIndex = "-1";
    nav.classList.remove("hoverable");
}


// == Display Scaling ==

let siteWidth = 1920;
let scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

// == Return to Top & Reset on Reload ==

window.onload = function() {
    window.scrollTo(0, 0);
    resetAll()
}