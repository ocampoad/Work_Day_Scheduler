// creating daily calendar
const containerEl = $(".container");
const currentTime = moment().hour();

for (let i = 6; i < 25; i++) {
    let largelistEl = $("<h3>")
    let listEl = $("<h2 class='time'>");
    let inputEl = $("<form><input style='width:400px'/></form>")
    let buttonEl = $("<button class = 'button' style='width:40px;height:50px'>")
    buttonEl.text('💾');
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
$('input').css('line-height','44px');

// color code time blocks
const hourAttribute = containerEl.children().children('.time');
const inputAttribute = $('input');
for (let i=0; i < hourAttribute.length; i++) {
    if (hourAttribute.eq(i).attr('data-color') === 'red') {
        inputAttribute.eq(i).css('background-color','red');
    } else if (hourAttribute.eq(i).attr('data-color') === 'green') {
        inputAttribute.eq(i).css('background-color','green');
    } else if (hourAttribute.eq(i).attr('data-color') === 'gray') {
        inputAttribute.eq(i).css('background-color','gray');
    }
};

$("form").submit( function(event) {
    event.preventDefault();
    alert('i submit');
})