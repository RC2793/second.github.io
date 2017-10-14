
function validate() {
    var fName = document.getElementById("name1").value;
    var err1 = document.getElementById("err1");
    var SName = document.getElementById("name2").value;
    var err2 = document.getElementById("err2");
    var Num1 = document.getElementById("num1").value;
    var err3 = document.getElementById("err3");
    var Num2 = document.getElementById("num2").value;
    var err4 = document.getElementById("err4");
    var Pass = document.getElementById("pass").value;
    var err5 = document.getElementById("err5");


    if (fName.length == " ") {
        err1.innerHTML = "Enter Your Full Name";
        document.getElementById("name1").style.border = "1px solid red";
        document.getElementById("name1").style.background = "#fde6ee";
        err1.style.border = " 2px solid #e20606";
        err1.style.color = "white";
        err1.style.background = "#f15353";
        err1.style.padding = "7px";
        err1.style.borderRadius = "8px";

    }
    else if (SName.length == " ") {
        err2.innerHTML = "Enter Your Full Name";
        document.getElementById("name2").style.border = "1px solid red";
        document.getElementById("name2").style.background = "#fde6ee";
        err2.style.border = " 2px solid #e20606";
        err2.style.color = "white";
        err2.style.background = "#f15353";
        err2.style.padding = "7px";
        err2.style.borderRadius = "8px";
    }
    else if (Num1.length == " ") {
        err3.innerHTML = "Enter Your Number or Email";
        document.getElementById("num1").style.border = "1px solid red";
        document.getElementById("num1").style.background = "#fde6ee";
        err3.style.border = " 2px solid #e20606";
        err3.style.color = "white";
        err3.style.background = "#f15353";
        err3.style.padding = "7px";
        err3.style.borderRadius = "8px";
    }
    else if (Num1 != Num2) {
        err4.innerHTML = "Your Number or Email Doesn't Match.Try Again!!!";
        document.getElementById("num2").style.border = "1px solid red";
        document.getElementById("num2").style.background = "#fde6ee";
        err4.style.border = " 2px solid #e20606";
        err4.style.color = "white";
        err4.style.background = "#f15353";
        err4.style.padding = "7px";
        err4.style.borderRadius = "8px";
    }
    else if (Pass.length == "") {
        err5.innerHTML = "You Need To Enter a Password";
        document.getElementById("pass").style.border = "1px solid red";
        document.getElementById("pass").style.background = "#fde6ee";
        err5.style.border = " 2px solid #e20606";
        err5.style.color = "white";
        err5.style.background = "#f15353";
        err5.style.padding = "7px";
        err5.style.borderRadius = "8px";
    }
    else if (document.reg.birthday_day.value == "0") {
        var err6 = document.getElementById("err6");
        err6.innerHTML = "Enter your Birthday"
        err6.style.border = " 2px solid #e20606";
        err6.style.color = "white";
        err6.style.background = "#f15353";
        err6.style.padding = "7px";
        err6.style.borderRadius = "8px";
    }
    else if (document.reg.birthday_month.value == "0") {
        var err6 = document.getElementById("err6");
        err6.innerHTML = "Enter your Birthday"
        err6.style.border = " 2px solid #e20606";
        err6.style.color = "white";
        err6.style.background = "#f15353";
        err6.style.padding = "7px";
        err6.style.borderRadius = "8px";
    }
    else if (document.reg.birthday_year.value == "0")
    {
        var err6 = document.getElementById("err6");
        err6.innerHTML = "Enter your Birthday"
        err6.style.border = " 2px solid #e20606";
        err6.style.color = "white";
        err6.style.background = "#f15353";
        err6.style.padding = "7px";
        err6.style.borderRadius = "8px";
    }
    else if (document.reg.sex[0].checked == false && document.reg.sex[1].checked == false) {
        var err7 = document.getElementById("err7");
        err7.innerHTML = "Select Your Gender"
        err7.style.border = " 1px solid #e20606";
        err7.style.color = "white";
        err7.style.background = "#f15353";
        err7.style.padding = "5px";
        err7.style.borderRadius = "8px";
    }


    else {
        return true;
    }
    return false;
}
function passValidate() {
    var Pass = document.getElementById("pass").value;
    var err5 = document.getElementById("err5");

    if (Pass.length == "") {
        err5.innerHTML = "You Need To Enter a Password";
        document.getElementById("pass").style.border = "1px solid red";
        document.getElementById("pass").style.background = "#fde6ee";
        err5.style.border = " 2px solid #e20606";
        err5.style.color = "white";
        err5.style.background = "#f15353";
        err5.style.padding = "7px";
        err5.style.borderRadius = "8px";
    }
    else if (Pass.length <= 5) {
        err5.innerHTML = "Weak Password";
        err5.style.border = " 2px solid #03A9F4";
        err5.style.color = "white";
        err5.style.background = "#58c6f7";
        err5.style.padding = "7px";
        err5.style.borderRadius = "8px";
    }
    else if (Pass.length > 5 && Pass.length < 8) {
        err5.innerHTML = "Good Password";
        err5.style.border = " 2px solid #4CAF50";
        err5.style.color = "white";
        err5.style.background = "#8BC34A";
        err5.style.padding = "7px";
        err5.style.borderRadius = "8px";
    }
    else if (Pass.length >= 8) {
        err5.innerHTML = "Strong Password";
        err5.style.border = " 2px solid green";
        err5.style.color = "white";
        err5.style.background = "green";
        err5.style.padding = "7px";
        err5.style.borderRadius = "8px";
    }
}
function loginValid() {
   var email= document.getElementById("email").value;
  var pwd=  document.getElementById("pwd").value;
    if(email=="" && pwd=="")
    {
     alert("Enter email/number and password to login")
        return false;
    }
    else if(pwd=="")
    {
        alert("Enter password")
        return false;
    }
    else {
      return true;
    }

}