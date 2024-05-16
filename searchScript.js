const get_cookie = new XMLHttpRequest();


get_cookie.open("GET",'/get_cookie');
get_cookie.send();
var username;
get_cookie.onload = function()
{
    let logged_data = JSON.parse(get_cookie.responseText);
    username = logged_data.username[0];
}
var searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", async function()
{
    console.log("Start");
    var searchBox = document.querySelector("#searchText");
    var searchParameter = searchBox.value;
    console.log(searchParameter);
    var get_users = new XMLHttpRequest();
    get_users.open("GET", "/get_users?username=" + searchParameter);
    get_users.send();
    await new Promise((resolve,reject)=>{
        get_users.onload = async function()
        {
            console.log("Potty");
            var parentDiv = document.querySelector('#results');
            var storeDiv = document.querySelector('#line');
            data = JSON.parse(get_users.response);
            var storeName = document.querySelector('#name');
            var button = document.querySelector("#followButton");
            button.style.display = "inline-block";
            storeName.textContent = data[0].username;
            storeDiv.querySelector("#followButton").setAttribute("name", data[0].username);
            for(var i = 1; i < data.length; i++)
            {
                var cloneDiv = storeDiv.cloneNode(true);
                cloneDiv.querySelector("#name").textContent = data[i].username;
                cloneDiv.querySelector("#followButton").setAttribute("name", data[i].username);
                parentDiv.appendChild(cloneDiv);
            }
            storeDiv.querySelector("#followButton").addEventListener("click", function()
            {
                var name = storeDiv.querySelector("#followButton").name;
                var add_friend = new XMLHttpRequest();
                add_friend.open("GET", '/addFollower');
                add_friend.send();
                add_friend.onload = async function()
                {
                    
                }
            });
            for(var i = 1; i < data.length; i++)
            {
                
            }
            console.log("Potty");
        }
        resolve();
    });
    console.log("End");
});


