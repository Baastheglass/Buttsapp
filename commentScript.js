const generate_Comments = new XMLHttpRequest();
const searchParams = new URLSearchParams(window.location.search);
var postID = searchParams.get('postID');
generate_Comments.open("GET", '/get_comments?postID=' + postID);
generate_Comments.send();
generate_Comments.onload = async function()
{
    data = JSON.parse(generate_Comments.responseText);
    var commentBox = document.querySelector("#comment");
    var nameBox = document.querySelector("#name");
    var parentDiv = document.querySelector("#comments");
    var storeDiv = document.querySelector(".comment");
    nameBox.textContent = data[0].commenterName;
    commentBox.textContent = data[0].comment;
}  