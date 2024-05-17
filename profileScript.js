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
        for(var i = 0; i < data.length; i++)
        {
            
        }
    }
}