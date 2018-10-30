//jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true
//eslint-env browser
//eslint 'no-console': 0

//*****************************************************************************
//Micro interactie 1, feedback in de button tijdens het filteren
//*****************************************************************************

//filtermenu op de overzichtpagina tonen
var fltr = document.querySelector("#homepagina section:nth-child(3) article form > button:nth-child(1)");

if (fltr) {
    fltr.addEventListener("click", showMenu);
}
function showMenu() {
        var filtermenu = document.querySelector('#homepagina section:nth-child(4) > article:nth-child(1) div');
        var filteroverlay = document.querySelector('body#homepagina section:nth-child(4)>article:nth-child(1)');
    filtermenu.classList.toggle('filtermenu');
    filteroverlay.classList.toggle('filtermenu');
}

//filtermenu op de overzichtpagina verbergen
var close = document.querySelector("#homepagina section:nth-child(4) > article:first-of-type img");
var filteroverlay = document.querySelector('#homepagina section:nth-child(4) > article:first-of-type');
if (close) {
    close.addEventListener("click", hideMenu, [true]);
}

function hideMenu(e) {
    var filtermenu = document.querySelector('#homepagina section:nth-child(4) > article:nth-child(1) div');
    var filteroverlay = document.querySelector('#homepagina section:nth-child(4) > article:first-of-type');
    e.stopPropagation();
    filtermenu.classList.remove('filtermenu');
    filteroverlay.classList.remove('filtermenu');
}

//Hier wordt de eerste checkbox onder de genre fieldset opgehaald
var checkbox1 = document.querySelector("#homepagina section:nth-child(4) > article:first-of-type div form fieldset:nth-child(7) div:first-of-type label input");
console.log(checkbox1);
if (checkbox1) {
    checkbox1.addEventListener("click", filterFeedback);
}

function filterFeedback() {
    var resultatenKnop = document.querySelector('#homepagina section:nth-child(4) > article:first-of-type div form input[type=submit]');
    resultatenKnop.classList.toggle('filterFeedback');

    resultatenKnop.value = "Resulaten laden";

    window.setTimeout(function () {
var resultatenKnop = document.querySelector('#homepagina section:nth-child(4) > article:first-of-type div form input[type=submit]');
        resultatenKnop.value = "15 verhalen tonen";
    }, 2900);
}

//*****************************************************************************
    
//Micro interactie 2, bookmark icoon 

//*****************************************************************************
var bookmarkButtons = document.querySelectorAll("#homepagina section:nth-child(4) article ul li button");
if (bookmarkButtons) {
    for (var i = 0; i < bookmarkButtons.length; i++) {
        bookmarkButtons[i].addEventListener("click", addBookmark);
    }
}
//Hier wordt de bookmark opgefult en de notificatie getoond
function addBookmark(event) {
    var bookmarkButton = event.target; // event.target = het aangeklikte element (dus de specifieke bookmarkButton)
    bookmarkButton.classList.remove('filtermenu');
    bookmarkButton.classList.toggle("fill");
    var notificatie = document.querySelector('#homepagina span:nth-child(3)');
    notificatie.classList.toggle('notificatie');
}



//*****************************************************************************
//login pagina
//*****************************************************************************

//Acc aanvragen toggle link
var aanvraag = document.querySelector("body#loginpagina ul:nth-child(3) > li > a");
if (aanvraag) {
    aanvraag.addEventListener("click", showAanvragen);
}

function showAanvragen() {
    var aanvraagForm = document.querySelector('#loginpagina article:nth-child(2) form');
    aanvraagForm.classList.toggle('showaanmelden');
    document.querySelector("#loginpagina  article:nth-child(2) label:nth-child(2) input").focus();
}
