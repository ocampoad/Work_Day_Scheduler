// alert(moment().format('MMMM Do YYYY, h:mm:ss a'))

const containerEl = $(".container");
let schedulelistEl = $("<div class ='calendar'>");
containerEl.append(schedulelistEl);

for (let i = 1; i <25; i++) {
    let listEl = $("<h3>");
    let inputEl = $("<input>")
    let buttonEl = $("<button style='width:40px;height:40px'>")
    buttonEl.text('💾');
    if (i < 12) {
        listEl.text(i + "AM");
    } else if (i === 12) {
        listEl.text(i + "PM");
    } else if (i === 24) {
        listEl.text('12AM')
    }
    else {
        let time = i;
        listEl.text((time -12) + "PM");
    }
    listEl.append(inputEl)
    .append(buttonEl);
    schedulelistEl.append(listEl);
}

schedulelistEl.children().css('font-size','x-large');
schedulelistEl.children().css('display','flex');
// schedulelistEl.css('display','flex');
schedulelistEl.children().css('justify-content','center');
