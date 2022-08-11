


var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (Event) {
        Event.preventDefault();
        var target = this.textContent.trim().toLowerCase();
        console.log(target);
        var section = document.getElementById(target);
        var position = section.getBoundingClientRect().y;
        var current = 0;
        var scroll = setInterval(function () {
            if (current >= position) {
                clearInterval(scroll);
            }
            current += 8;
            window.scrollBy(0, 8);
        }, 1);
    })
}


var progressBars = document.querySelectorAll(".skill-progress > div");
var skillContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;


function initialiseBars() {
    for (let bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}
function fillBars() {

    for (let i of progressBars) {
        var width = 0;
        var fill = setInterval(function () {

            if (width >= i.getAttribute("data-bar-width")) {
                clearInterval(fill);
                return;
            } else {
                width += 0.3;
                i.style.width = width + '%';
            }

        }, 20);
    }


}
function fillBarsSingle(bar){
    let width = 0;
    let fill = setInterval(function () {

        if (width >= bar.getAttribute("data-bar-width")) {
            clearInterval(fill);
            return;
        } else {
            width += 0.9;
            bar.style.width = width + '%';
        }

    }, 10);
}

initialiseBars();


function initialiseBarsSingle(bar){
    bar.style.width=0+'%';
}
var animationDonesingle=[progressBars.length];
function checkScroll() {
    var barno=0;
    for (let i of progressBars) {

    let coordinates = i.getBoundingClientRect();
    if (!animationDonesingle[barno] && coordinates.top < window.innerHeight) {

       // fillBars();
       fillBarsSingle(i);
        animationDonesingle[barno] = true;
    }else if(coordinates.top  > window.innerHeight){
      //  animationDone=false;
       // initialiseBars();
       initialiseBarsSingle(i);
       animationDonesingle[barno] = false;
    } barno++;}
}
