const get_cookie = new XMLHttpRequest();
const get_feed = new XMLHttpRequest();
const add_likes = new XMLHttpRequest();
const add_dislikes = new XMLHttpRequest();
var username;
get_cookie.open("GET",'/get_cookie', true);
get_cookie.send();
get_cookie.onload = async function()
{
    console.log("In func");
    await new Promise((resolve,reject)=>
    {
        console.log("In cookie");
        if(get_cookie.status === 200)
        {
            console.log("In func");
            let logged_data =JSON.parse(get_cookie.responseText);
             username = logged_data.User;
                    console.log("The returned cookie is: "+username);
        }
        get_feed.open("GET", '/get_feed?username='+username);
        get_feed.send();
        resolve();
    })
}
     
console.log("This is before get feed logic: "+username);
get_feed.onload = async function()
{           
    console.log("This is after get feed logic: "+username);
    console.log("Potty");
    var parentDiv = document.querySelector('.feed');
    var storeDiv = document.querySelector('#line');
    data = JSON.parse(get_feed.responseText);
    storeDiv.querySelector("#name").textContent = data[0].authorName;
    storeDiv.querySelector("#caption").textContent = data[0].caption;
    //storeDiv.querySelector("image").src = data[0].imageLink;
    storeDiv.setAttribute('name', data[0].postID);
    storeDiv.querySelector("#like").addEventListener("click", async function()
    {
        var postID = storeDiv.getAttribute('name');
        console.log("postID: " + postID);
        add_likes.open("GET", "/addLikes?postID=" + postID);
        add_likes.send();
    });
    storeDiv.querySelector("#dislike").addEventListener("click", async function()
    {
        var postID = storeDiv.getAttribute('name');
        console.log("postID: " + postID);
        add_dislikes.open("GET", "/addDislikes?postID=" + postID);
        add_dislikes.send();
    });
    for(var i = 1; i < data.length; i++)
    {
        var cloneDiv = storeDiv.cloneNode(true);
        cloneDiv.querySelector("#name").textContent = data[i].authorName;
        cloneDiv.querySelector('#caption').textContent = data[i].caption;
        cloneDiv.querySelector('#image').src = data[i].imageLink;
        cloneDiv.setAttribute("name", data[0].postID);
        parentDiv.appendChild(cloneDiv);
    }
    likeButtons = document.querySelectorAll("#like");
    dislikeButtons = document.querySelectorAll("#dislike");
    if(likeButtons[1])
    {
        likeButtons[1].addEventListener("click", function()
        {
            var postID = data[1].postID;
            console.log("author:" + data[1].authorName);
            console.log("caption: " + data[1].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[1])
    {
        dislikeButtons[1].addEventListener("click", function()
        {
            var postID = data[1].postID;
            console.log("author:" + data[1].authorName);
            console.log("caption: " + data[1].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(likeButtons[2])
    {
        likeButtons[2].addEventListener("click", function()
        {
            var postID = data[2].postID;
            console.log("author:" + data[2].authorName);
            console.log("caption: " + data[2].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[2])
    {
        dislikeButtons[2].addEventListener("click", function()
        {
            var postID = data[2].postID;
            console.log("author:" + data[2].authorName);
            console.log("caption: " + data[2].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(likeButtons[3])
    {
        likeButtons[3].addEventListener("click", function()
        {
            var postID = data[3].postID;
            console.log("author:" + data[3].authorName);
            console.log("caption: " + data[3].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[3])
    {
        dislikeButtons[3].addEventListener("click", function()
        {
            var postID = data[3].postID;
            console.log("author:" + data[3].authorName);
            console.log("caption: " + data[3].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    console.log("Potty");
}
