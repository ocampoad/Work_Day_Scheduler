// creating daily calendar
const containerEl = $(".container");
const currentTime = moment().hour();
const currentDate = moment().format("dddd, MMM Do");

//setting current day and date
$('#currentDay').text(currentDate);

for (let i = 6; i < 25; i++) { // start time
    let largelistEl = $("<h3>")
        .attr('data-time', i - 6) // change the difference depending on start time (what is i set to initially)
    let listEl = $("<h2 class='time'>");
    let inputEl = $("<form><input id ='myInput' style='width:400px' value ='' /></form>")
    let buttonEl = $("<button type='submit' class = 'button' style='width:40px;height:50px'>💾</button>")
    if (i < 12) { // time blocks for pm
        listEl.text(i + "AM");
        if (currentTime > i) {
            listEl.attr('data-color', 'gray');
        } else if (currentTime === i) {
            listEl.attr('data-color', 'red');
        } else if (currentTime < i) {
            listEl.attr('data-color', 'green');
        }
    } else if (i === 12) { // time block at 12 pm noon
        listEl.text(i + "PM");
        if (currentTime > i) {
            listEl.attr('data-color', 'gray');
        } else if (currentTime === i) {
            listEl.attr('data-color', 'red');
        } else if (currentTime < i) {
            listEl.attr('data-color', 'green');
        }
    } else if (i === 24) { // time block at 12 am midnight
        listEl.text('12AM');
        if (currentTime > i) {
            listEl.attr('data-color', 'gray');
        } else if (currentTime === i) {
            listEl.attr('data-color', 'red');
        } else if (currentTime < i) {
            listEl.attr('data-color', 'green');
        }
    }
    else {
        let time = i; // time blocks for pm
        listEl.text((time - 12) + "PM");
        if (currentTime > i) {
            listEl.attr('data-color', 'gray');
        } else if (currentTime === i) {
            listEl.attr('data-color', 'red');
        } else if (currentTime < i) {
            listEl.attr('data-color', 'green');
        }
    }
    // making and appending a set of elements 
    // <h3>
    //      <h2>
    //      <form>
    //              <input>
    //      <button>
    largelistEl.append(listEl)
        .append(inputEl)
        .append(buttonEl);
    containerEl.append(largelistEl);
}
// color code time blocks
const hourAttribute = containerEl.children().children('.time');
const inputAttribute = $('input');
for (let i = 0; i < hourAttribute.length; i++) {
    if (hourAttribute.eq(i).attr('data-color') === 'red') {
        inputAttribute.eq(i).css('background-color', '#e6274d');
    } else if (hourAttribute.eq(i).attr('data-color') === 'green') {
        inputAttribute.eq(i).css('background-color', '#40b329');
    } else if (hourAttribute.eq(i).attr('data-color') === 'gray') {
        inputAttribute.eq(i).css('background-color', 'gray');
    }
};

const lastInput = JSON.parse(localStorage.getItem("savedElements"));
let savedElement = {};
// function that saves inputs on local storage
const saveTheElement = function (event) {
    event.preventDefault();
    let x = $(event.target).parent().attr('data-time');
    if (lastInput !== null) {
        savedElement = lastInput;
        savedElement[x] = $('.container').children().eq(x).children().eq(1).children().val();
        localStorage.setItem('savedElements', JSON.stringify(savedElement));
        console.log('why')
    } else {
        savedElement[x] = $('.container').children().eq(x).children().eq(1).children().val();
        localStorage.setItem('savedElements', JSON.stringify(savedElement));
    }
}
//renders and keeps text when page is refreshed 
for (let i = 0; i < Object.keys(lastInput).length; i++) {
    let y = Object.keys(lastInput)[i]
    console.log(y);
    $('.container').children().eq(y).children().eq(1).children().val(lastInput[y]);
}

//on click event to save the text to local storage 
$(".button").click(function (event) {
    saveTheElement(event);
});
// tried to make schedule box look organized and pretty
containerEl.children().children().css('font-size', 'large');
containerEl.children().children('.time').css('padding', '15px 30px 0px');
containerEl.children().children('.time').css('min-width', '110px');
containerEl.children().css('display', 'flex');
containerEl.children().css('justify-content', 'center');
containerEl.children().css('margin', '0px');
$('input').css('line-height', '44px');
