// number list and color 
let numberslist = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let listColorArr = ['#6F98A8', '#2B8EAD', '#2F454E', '#2B8EAD', '#2F454E', '#BFBFBF', '#BFBFBF', '#6F98A8', '#2F454E'];

// create list
let contentWrap = document.getElementById('content-box');
numberslist.forEach((listitem, index) => {
    contentWrap.innerHTML += '<li data-item=' + listitem + '>' + listitem + '</li>';
})

// dynamic background color for list
function listItemColor() {
    let listItems = document.getElementsByTagName('li');
    for (let i = 0; i < listColorArr.length; i++) {

        if (window.matchMedia("(max-width:650px").matches) {
            listItems[i].style.backgroundColor = '#efefef';
            listItems[i].style.borderLeft = '5px solid' + listColorArr[i];
        }
        else {
            listItems[i].style.backgroundColor = listColorArr[i];
            listItems[i].style.borderLeft = '0px';
        }
    }
};

window.onresize = resize;
function resize() {
    listItemColor()
}


// logic for shuffle and sort numbers list
const createNumbersList = (numberslist) => {
    contentWrap.innerHTML = '';
    for (let i = 0; i < numberslist.length; i++) {
        let listItemShuffle = document.createElement("li");
        listItemShuffle.innerHTML = numberslist[i];
        listItemShuffle.setAttribute('data-item', numberslist[i]);
        listItemShuffle.style.backgroundColor = listColorArr[i];
        if (window.matchMedia("(max-width:650px").matches) {
            listItemShuffle.style.backgroundColor = '#efefef';
            listItemShuffle.style.borderLeft = '5px solid' + listColorArr[i];
        }
        contentWrap.appendChild(listItemShuffle);
    }
}

// shuffle numbers on click of shuffle button
function shuffleNumbers() {
    let numbersListShuffle = numberslist.sort(() => {
        return 0.5 - Math.random();
    });
    createNumbersList(numbersListShuffle);
}

// sort numbers on click of sort button
function sortNumbers() {
    let numbersListSort = numberslist.sort((a, b) => {
        return a - b;
    });
    createNumbersList(numbersListSort);
}

