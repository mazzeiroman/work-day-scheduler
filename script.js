var usersArray = JSON.parse(localStorage.getItem("usersInput")) || [];

console.log(usersArray)

// console.log(moment());
    $("#currentDay").html(moment().format('dddd, '+ "MMM Do "));

var container = $(".container");
var dayHours =["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
// var dayHoursM =["9 AM", "10 AM", "11 AM", "12 PM", "13 PM", "14 PM", "15 PM", "16 PM", "17 PM"];
var hour = moment().format('HH');
console.log(hour)

var dayHoursArr = [
{hour:"9 AM", hourM:9}, 
{hour:"10 AM", hourM:10}, 
{hour:"11 AM", hourM:11}, 
{hour:"12 PM", hourM:12}, 
{hour:"1 PM", hourM:13},
{hour:"2 PM", hourM:14},
{hour:"3 PM", hourM:15},
{hour:"4 PM", hourM:16},
{hour:"5 PM", hourM:17},
];

var hourIndex = [1,2,3,4,5,6,7,8,9];
var saveId = [1,2,3,4,5,6,7,8,9];

console.log(dayHoursArr)

for (var i = 0; i< dayHoursArr.length; i++) {
    var newDivRow = $("<div>" +"</div>");
    newDivRow.addClass("row");
    container.append(newDivRow);

  var newDivCol2 =  $("<div>" + "</div>");
  newDivCol2.addClass("col-md-2");
  newDivRow.append(newDivCol2);

  var spanCol2 = $("<span>"+ dayHoursArr[i].hour + "</span>");
  spanCol2.addClass("time-block")
  newDivCol2.append(spanCol2);

  var newDivCol9 =  $("<div>" + "</div>");
  newDivCol9.addClass("col-md-9 ");
  newDivRow.append(newDivCol9);

  var newInput9 = $("<input>");
  newInput9.addClass("dailyPlan");
  newInput9.attr('hourIndex', hourIndex[i]);
  newDivCol9.append(newInput9);

//   var storePlans =  newInput9.val();
//   console.log(storePlans);


  var newDivCol1 =  $("<div>" + "</div>");
  newDivCol1.addClass("col-md-1 save");
  newDivRow.append(newDivCol1);

  var icon = $("<i>" + "</i>");
  icon.addClass("far fa-2x fa-save");
  icon.attr('data-id', saveId[i]);
  newDivCol1.append(icon);

  if (hour == dayHoursArr[i].hourM) {
    newDivCol9.addClass("present")}
 else if (hour < dayHoursArr[i].hourM ){
    newDivCol9.addClass("future") 
 }
 else if (hour > dayHoursArr[i].hourM) {
    newDivCol9.addClass("past")

   
   
 }
}
var elementNodeList = document.querySelectorAll(".dailyPlan");
console.log($(this).children("i").attr("data-id"));

for (var i = 0; i< elementNodeList.length; i++) {
    console.log(elementNodeList[i]);
    elementNodeList[i].textContent = "hello";
    // elementNodeList.
}
 $(document).on('click', '.save', function(event) {
    event.preventDefault();  

   var col1 = $(this).closest(".row").find("input");
   var hourI =$(this).children("i").attr("data-id");
   console.log(hourI);
    // console.log($(col1).val());
  
        var usersInput =
    {
        text: col1.val(),
        hour: hourI
    };
    // var usersArray =  JSON.parse(localStorage.getItem('usersInput')) || [];
    // SET TO LOCAL STORAGE 
    console.log(usersArray);
    usersArray.push(usersInput);
    localStorage.setItem('usersInput', JSON.stringify(usersArray));
 
 });


 for (var i =0; i< storagearr.length; i++) {

    var textInp = $(".dailyPlan").val(dayHoursArr[i].hour)
    console.log(textInp)
//    var savedImput = $(".dailyPlan").text(usersInput.text)
//    newInput9.append(savedImput)
   }