var myEmail = document.getElementsByName("myEmail");
var text = "abc@gmail.com";

myEmail.onkeyup =function()
{
    if(myEmail.value == text)
    {
        alert("SORRY");
    }
    else
    {
        myEmail.value.style="#0f0";
    }
}