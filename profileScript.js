const getPosts = new XMLHttpRequest();
const getUser = new XMLHttpRequest();
var usernameBox = document.querySelector("#username");
var numPostsBox = document.querySelector("#numPosts");
var followersBox = document.querySelector("#followers");
var followingBox = document.querySelector("#following");
getUser.open("GET", '/getUserInfo');
getUser.send();
getUser.onload = async function()
{
    var data = JSON.parse(getUser.responseText);
    console.log(data[0].username);
    usernameBox.textContent = data[0].username;
    numPostsBox.textContent = data[0].numPosts;
    followersBox.textContent = data[0].numFollowers;
    followingBox.textContent = data[0].numFollowing;
}
var parentDiv = document.querySelector("#posts");
var storeDiv = document.querySelector(".line");
getPosts.open("GET", '/getPosts');
getPosts.send();
getPosts.onload = async function()
{
    var data = JSON.parse(getPosts.responseText);
    console.log(data.length);
    if(data.length < 3)
    {
        console.log("Less than 3");
        var post1 = document.querySelector("#post1");
        var post2 = document.querySelector("#post2");
        var post3 = document.querySelector("#post3");
        for(var i = 0; i < data.length; i++)
        {
            if(i==0)
                post1.src = data[i].imageLink;
         
            else if(i == 1)
                post2.src = data[i].imageLink;

            else if(i == 2)
                post3.src = data[i].imageLink;
        }
    }
    else
    {
        console.log("More than 3");
        var post1 = document.querySelector("#post1");
        var post2 = document.querySelector("#post2");
        var post3 = document.querySelector("#post3");
        for(var i = 0; i < 3; i++)
        {
            if(i==0)
                post1.src = data[i].imageLink;
         
            else if(i == 1)
                post2.src = data[i].imageLink;

            else if(i == 2)
                post3.src = data[i].imageLink;
        }
        for(var i = 3; i < data.length; i++)
        {
            console.log("Entering cloneDiv area");
            var cloneDiv = storeDiv.cloneNode(true);
            for(var j = 0; j < 3 && (i + j) < data.length; j++)
            {
                if(j == 0)
                    cloneDiv.querySelector("#post1").src = data[i + j].imageLink;
                
                else if(j == 1)
                    cloneDiv.querySelector("#post2").src = data[i + j].imageLink;
    
                else if(j == 2)
                    cloneDiv.querySelector("#post3").src = data[i + j].imageLink;
            }
            i += 3;
            parentDiv.appendChild(cloneDiv);
        }
    }
}