var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");
    

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
    // response = { element, direction, index }
    var el = response.element;
    // remove is-active from all steps
    // then add is-active to this step
    steps.forEach((step) => step.classList.remove("is-active"));
    el.classList.add("is-active");
    // update graphic based on step
    document.getElementById("mainImage").className = `${el.dataset.step}`;
}

function init() {
    scroller.setup({
        step: "#scrolly article .step",
        offset: 0.66,
        debug: false})
        .onStepEnter(handleStepEnter);

    // setup resize event
    window.addEventListener("resize", scroller.resize);
}

// kick things off
init();

function pageLoaded() {
    document.querySelector("h1").style.opacity = 1;
}
window.onload = pageLoaded;

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    orientation: 'right'
});
