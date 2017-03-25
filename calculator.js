var CurrentNumber = "";
var LoggedNumber = "0";
var Operation = "";

// Contains possible calculations, takes 2 inputs then returns the result
// of the given operation on the number
var Calculate = function(number1, number2, op)
{
  number1 = parseInt(number1);
  number2 = parseInt(number2);
    if(op === "add")
    {
       return number1 + number2;
    }
    if(op === "subtract")
    {
      return number1 - number2;
    }
    if(op === "times")
    {
      return number1 * number2;
    }
    if(op === "divide")
    {
      return number1 / number2;
    }
}

// Function displays the given number in the outup screen
var UpdateDisplay = function(number)
{
  $("output").html(number);
}

// Clears all numbers from memory and clears the output screen
var ClearAll = function()
{
  CurrentNumber = "";
  Operation = "";
  UpdateDisplay(CurrentNumber);
}


$(document).ready(function(){

    $("output").html(CurrentNumber);

    $(".num").click(function(){
      // Clear the operation symbol from display by only allowing numbers
      if (CurrentNumber != "\^[0-9]"){
        CurrentNumber = ""
      }
        CurrentNumber += $(this).val();
        UpdateDisplay(CurrentNumber);
    });


    $(".operation").click(function(){
        LoggedNumber = CurrentNumber;
        CurrentNumber = "";
        Operation = $(this).val();
        UpdateDisplay(CurrentNumber);
    });

    $("#equals").click(function(){
      CurrentNumber = Calculate(LoggedNumber,CurrentNumber,Operation).toString();
       UpdateDisplay(CurrentNumber);
    });

    $("#clear").click(function(){
      ClearAll();
    })
});
