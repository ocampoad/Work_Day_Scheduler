// creating daily calendar
const containerEl = $(".container");
const currentTime = moment().hour();

for (let i = 6; i < 25; i++) {
    let largelistEl = $("<h3>")
        .attr('data-time', i - 6)
    let listEl = $("<h2 class='time'>");
    let inputEl = $("<form><input id ='myInput' style='width:400px' value ='' /></form>")
    let buttonEl = $("<button type='submit' class = 'button' style='width:40px;height:50px'>💾</button>")
    if (i < 12) {
        listEl.text(i + "AM");
        if (currentTime > i) {
            listEl.attr('data-color', 'gray');
        } else if (currentTime === i) {
            listEl.attr('data-color', 'red');
        } else if (currentTime < i) {
            listEl.attr('data-color', 'green');
        }
    } else if (i === 12) {
        listEl.text(i + "PM");
        if (currentTime > i) {
            listEl.attr('data-color', 'gray');
        } else if (currentTime === i) {
            listEl.attr('data-color', 'red');
        } else if (currentTime < i) {
            listEl.attr('data-color', 'green');
        }
    } else if (i === 24) {
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
        let time = i;
        listEl.text((time - 12) + "PM");
        if (currentTime > i) {
            listEl.attr('data-color', 'gray');
        } else if (currentTime === i) {
            listEl.attr('data-color', 'red');
        } else if (currentTime < i) {
            listEl.attr('data-color', 'green');
        }
    }
    largelistEl.append(listEl)
        .append(inputEl)
        .append(buttonEl);
    containerEl.append(largelistEl);
}

containerEl.children().children().css('font-size', 'large');
containerEl.children().children('.time').css('padding', '15px 30px 0px');
containerEl.children().children('.time').css('min-width', '110px');
containerEl.children().css('display', 'flex');
containerEl.children().css('justify-content', 'center');
containerEl.children().css('margin', '0px');
$('input').css('line-height', '44px');

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

const savedElement = {};

const saveTheElement = function (event) {
    event.preventDefault();
    let x = $(event.target).parent().attr('data-time');
    savedElement[x] = $('.container').children().eq(x).children().eq(1).children().val();
    localStorage.setItem('savedElements', JSON.stringify(savedElement));
}

const lastInput = JSON.parse(localStorage.getItem("savedElements"));
if (lastInput !== null) {
    for (let i = 0; i < Object.keys(lastInput).length; i++) {
        console.log(Object.keys(lastInput)[i]);
        console.log(lastInput[i]);
        $('.container').children().eq(i).children().eq(1).children().val(lastInput[i]);
    }
} 

$(".button").click(function (event) {
    saveTheElement(event);
});
