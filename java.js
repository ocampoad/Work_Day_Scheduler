// creating daily calendar
const containerEl = $(".container");

for (let i = 6; i <21; i++) {
    let largelistEl = $("<h3>")
    let listEl = $("<h2>");
    let inputEl = $("<input style='width:400px;height:50x'>")
    let buttonEl = $("<button class = 'button' style='width:40px;height:50px'>")
    buttonEl.text('💾');
    if (i < 12) {
        listEl.text(i + "AM");
        listEl.attr('class',i + ' time');
    } else if (i === 12) {
        listEl.text(i + "PM");
        listEl.attr('class',i + ' time');
    } else if (i === 24) {
        listEl.text('12AM')
        listEl.attr('class',i + ' time');
    }
    else {
        let time = i;
        listEl.text((time -12) + "PM");
        listEl.attr('class',i + ' time');
    }
    largelistEl.append(listEl)
    .append(inputEl)
    .append(buttonEl);
    containerEl.append(largelistEl);
}

containerEl.children().children().css('font-size','large');
containerEl.children().children('.time').css('padding','15px 30px 0px');
containerEl.children().children('.time').css('min-width','110px');
containerEl.children().css('display','flex');
containerEl.children().css('justify-content','center');
containerEl.children().css('margin','0px');

// color code time blocks
const currentTime = moment().hour();
const timematch = currentTime === 52;
alert(timematch);
