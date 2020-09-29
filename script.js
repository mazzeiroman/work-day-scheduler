// console.log(moment());
    $("#currentDay").html(moment().format('dddd, '+ "MMM Do "));

var container = $(".container");
var dayHours =["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var hour = moment().format('h A');
console.log(hour)


for (var i = 0; i< dayHours.length; i++) {
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
  newDivCol9.addClass("col-md-9 ");
  newDivRow.append(newDivCol9);

  var newInput9 = $("<input>");
  newInput9.addClass("dailyPlan");
  newDivCol9.append(newInput9);

  var newDivCol1 =  $("<div>" + "</div>");
  newDivCol1.addClass("col-md-1");
  newDivRow.append(newDivCol1);

  var icon = $("<i>" + "</i>");
  icon.addClass("far fa-2x fa-save");
  newDivCol1.append(icon);

  if (hour == dayHours[i]) {
    newDivCol9.addClass("present")}
 else if (hour < dayHours[i] ){
    newDivCol9.addClass("future") 
 }
 else if (hour > dayHours[i]) {
    newDivCol9.addClass("past")
 }
    
 console.log(moment(dayHours[i]));
  
}
