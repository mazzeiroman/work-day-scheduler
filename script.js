// console.log(moment());
    $("#currentDay").html(moment().format('dddd, '+ "MMM Do "));

var container = $(".container");
var dayLength = 8;
var dayHours =["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

for (var i = 0; i<= dayLength; i++) {
    var newDivRow = $("<div>" +"</div>");
    newDivRow.addClass("row");
    container.append(newDivRow);

  var newDivCol2 =  $("<div>" + "</div>");
  newDivCol2.addClass("col-md-2");
  newDivRow.append(newDivCol2);

  var spanCol2 = $("<span>"+ dayHours[i] + "</span>");
  spanCol2.addClass("time-block")
  newDivCol2.append(spanCol2);

  var newDivCol9 =  $("<div>" + "</div>");
  newDivCol9.addClass("col-md-9 past present future");
  newDivRow.append(newDivCol9);

  var newInput9 = $("<input>");
  newInput9.addClass("dailyPlan");
  newDivCol9.append(newInput9);

  var newDivCol1 =  $("<div>" + "</div>");
  newDivCol1.addClass("col-md-1");
  newDivRow.append(newDivCol1);
    // container.append(newDivRow);
//    var newRow= container.html("<div>" + "</div>");
//    newRow

}
console.log(newDivRow)