var DisplayedNumber = "";
var LoggedNumber = "0";
var Operation = "";

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

var UpdateDisplay = function()
{
  $("output").html(DisplayedNumber);
}


$(document).ready(function(){

    $("output").html(DisplayedNumber);

    $("#0").click(function(){
        DisplayedNumber += "0";
        UpdateDisplay();
    });
    $("#1").click(function(){
        DisplayedNumber += "1";
        UpdateDisplay();
    });
    $("#2").click(function(){
        DisplayedNumber += "2";
        UpdateDisplay();
    });
    $("#3").click(function(){
        DisplayedNumber += "3";
        UpdateDisplay();
    });
    $("#4").click(function(){
        DisplayedNumber += "4";
        UpdateDisplay();
    });
    $("#5").click(function(){
        DisplayedNumber += "5";
        UpdateDisplay();
    });
    $("#6").click(function(){
        DisplayedNumber += "6";
        UpdateDisplay();
    });
    $("#7").click(function(){
        DisplayedNumber += "7";
        UpdateDisplay();
    });
    $("#8").click(function(){
        DisplayedNumber += "8";
        UpdateDisplay();
    });
    $("#9").click(function(){
        DisplayedNumber += "9";
        UpdateDisplay();
    });

    $("#add").click(function(){
      if (Operation === "")
      {
        LoggedNumber = DisplayedNumber;
        DisplayedNumber = "";
        Operation = "add";
        UpdateDisplay();
      }
    });
    $("#subtract").click(function(){
      if (Operation === "")
      {
        LoggedNumber = DisplayedNumber;
        DisplayedNumber = "";
        Operation = "subtract";
        UpdateDisplay();
      }
    });
    $("#times").click(function(){
      if (Operation === "")
      {
        LoggedNumber = DisplayedNumber;
        DisplayedNumber = "";
        Operation = "times";
        UpdateDisplay();
      }
    });
    $("#divide").click(function(){
      if (Operation === "")
      {
        LoggedNumber = DisplayedNumber;
        DisplayedNumber = "";
        Operation = "divide";
        UpdateDisplay();
      }
    });

    $("#equals").click(function(){
      $("output").html(Calculate(LoggedNumber,DisplayedNumber,Operation).toString());
       DisplayedNumber = Calculate(LoggedNumber,DisplayedNumber,Operation).toString();
       UpdateDisplay();
    });



    $("#clear").click(function(){

      DisplayedNumber = "";
      Operation = "";
      UpdateDisplay();

    })

});
