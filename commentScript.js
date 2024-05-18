const generate_Comments = new XMLHttpRequest();
const addComment = new XMLHttpRequest();
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
    console.log(data[0].commenterName);
    nameBox.textContent = data[0].commenterName + ":  ";
    commentBox.textContent = data[0].comment;
    for(var i = 1; i < data.length; i++)
    {
        var cloneDiv = storeDiv.cloneNode(true);
        cloneDiv.querySelector("#comment").textContent = data[i].comment;
        cloneDiv.querySelector("#name").textContent = data[i].commenterName + ":  ";
        parentDiv.appendChild(cloneDiv);
    }
}
var button = document.querySelector("#submitComment");
button.addEventListener("click", async function()
{
    var comment = document.querySelector("#caption");
    var caption = comment.value;
    console.log(caption);
    addComment.open("GET", "/addComment?postID=" + postID + "&comment=" + caption);
    addComment.send();
});