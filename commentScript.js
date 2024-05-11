var files = [];
var fullDocthing = window.location.href;
var lastSlashIndex = fullDocthing.lastIndexOf('/');
var fileName = fullDocthing.substring(lastSlashIndex + 1);
files.push(fileName);
if(files[files.length - 1] == "comments.html" && files.length >= 2 && files[files.length - 2] == "main.html")
{ 
    alert("In first if");
    var backButton = document.querySelector("#back");
    backButton.addEventListener("click", function()
{
    window.location.href = "./main.html"
});
}
else if(files[files.length - 1] == "comments.html" && files.length >= 2 && files[files.length - 2] == "post.html")
{
    alert("In second if");
    var backButton = document.querySelector("#back");
    backButton.addEventListener("click", function()
    {
        window.location.href = "./post.html"
    });
}
else if(files[files.length - 1] == "comments.html")
{
    alert("No if chosen");
}
alert(files.length);