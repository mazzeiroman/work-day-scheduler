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
  newDivCol1.addClass("col-md-1");
  newDivRow.append(newDivCol1);

  var icon = $("<i>" + "</i>");
  icon.addClass("far fa-2x fa-save");
  icon.attr('saveId', saveId[i]);
  newDivCol1.append(icon);

  if (hour == dayHoursArr[i].hourM) {
    newDivCol9.addClass("present")}
 else if (hour < dayHoursArr[i].hourM ){
    newDivCol9.addClass("future") 
 }
 else if (hour > dayHoursArr[i].hourM) {
    newDivCol9.addClass("past")

   
   
 }
    
//  console.log(moment(dayHours[i]));
  
}

for (var i = 0; i< dayHoursArr.length; i++) {
$(document).on('click','i', function(event) {
    // event.preventDefault();
    if (hourIndex == saveId) {
    console.log(event.target)};

    })
}

//     var usersInput =
//     {
//         text: newInput9.val()
//     };
//     // SET TO LOCAL STORAGE FIRST:
//     // console.log(usersArray);
//     // usersArray.push(usersInput);
//     localStorage.setItem('usersInput', JSON.stringify(usersArray));
//     // THEN GET IT FROM LOCAL STORAGE
//     getFromLocalStorage()
 
//  });
// }

//  function getFromLocalStorage(){
     
//      var usersArray =  JSON.parse(localStorage.getItem('usersInput')) || [];
//      usersArray.push(usersInput);

//      //you will need to loop through each of the hours in your day planner and set the text content for each item in local storage
//  }





// $(document).on('click','i', function(event) {
//     event.preventDefault();  

//     var usersInput = 
//     {
//         text: newInput9.val()
//     };
//     var usersArray =  JSON.parse(localStorage.getItem('usersInput')) || [];

//     console.log(usersArray);
//     usersArray.push(usersInput);
//     localStorage.setItem('usersInput', JSON.stringify(usersArray));
    

//     console.log(usersInput);
//   }); 
