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
            storeDiv.querySelector("#followButton").addEventListener("click", async function()
            {
                await new Promise((resolve,reject)=>
                {
                    var name = storeDiv.querySelector("#followButton").name;
                    console.log("Name: " + name);
                    var add_friend = new XMLHttpRequest();
                    add_friend.open("GET", "/addFollower?followed_Username=" + name);
                    add_friend.send();
                    resolve();
                });
            });
            for(var i = 1; i < data.length; i++)
            {
                var cloneDiv = storeDiv.cloneNode(true);
                cloneDiv.querySelector("#name").textContent = data[i].username;
                parentDiv.appendChild(cloneDiv);
            }
            buttons = document.querySelectorAll("#followButton");
            if(buttons[1])
            {
                buttons[1].addEventListener("click", async function()
                {
                    await new Promise((resolve,reject)=>
                    {
                        console.log("Name: " + data[1].username);
                        var add_friend = new XMLHttpRequest();
                        add_friend.open("GET", "/addFollower?followed_Username=" + data[1].username);
                        add_friend.send();
                        resolve();
                    }); 
                });
            }
            if(buttons[2])
            {
                buttons[2].addEventListener("click", async function()
                {
                    await new Promise((resolve,reject)=>
                    {
                        console.log("Name: " + data[2].username);
                        var add_friend = new XMLHttpRequest();
                        add_friend.open("GET", "/addFollower?followed_Username=" + data[2].username);
                        add_friend.send();
                        resolve();
                    }); 
                });
            }
            if(buttons[3])
            {
                buttons[3].addEventListener("click", async function()
                {
                    await new Promise((resolve,reject)=>
                    {
                        console.log("Name: " + data[3].username);
                        var add_friend = new XMLHttpRequest();
                        add_friend.open("GET", "/addFollower?followed_Username=" + data[3].username);
                        add_friend.send();
                        resolve();
                    }); 
                });
            }
            if(buttons[4])
            {
                buttons[4].addEventListener("click", async function()
                {
                    await new Promise((resolve,reject)=>
                    {
                        console.log("Name: " + data[4].username);
                        var add_friend = new XMLHttpRequest();
                        add_friend.open("GET", "/addFollower?followed_Username=" + data[4].username);
                        add_friend.send();
                        resolve();
                    }); 
                });
            }
            if(buttons[5])
            {
                buttons[5].addEventListener("click", async function()
                {
                    await new Promise((resolve,reject)=>
                    {
                        console.log("Name: " + data[5].username);
                        var add_friend = new XMLHttpRequest();
                        add_friend.open("GET", "/addFollower?followed_Username=" + data[5].username);
                        add_friend.send();
                        resolve();
                    }); 
                });
            }
            if(buttons[6])
            {
                buttons[6].addEventListener("click", async function()
                {
                    await new Promise((resolve,reject)=>
                    {
                        console.log("Name: " + data[6].username);
                        var add_friend = new XMLHttpRequest();
                        add_friend.open("GET", "/addFollower?followed_Username=" + data[6].username);
                        add_friend.send();
                        resolve();
                    }); 
                });
            }
            if(buttons[7])
            {
                buttons[7].addEventListener("click", async function()
                {
                    await new Promise((resolve,reject)=>
                    {
                        console.log("Name: " + data[7].username);
                        var add_friend = new XMLHttpRequest();
                        add_friend.open("GET", "/addFollower?followed_Username=" + data[7].username);
                        add_friend.send();
                        resolve();
                    }); 
                });
            }
            if(buttons[8])
            {
                buttons[8].addEventListener("click", async function()
                {
                    await new Promise((resolve,reject)=>
                    {
                        console.log("Name: " + data[8].username);
                        var add_friend = new XMLHttpRequest();
                        add_friend.open("GET", "/addFollower?followed_Username=" + data[8].username);
                        add_friend.send();
                        resolve();
                    }); 
                });
            }
            if(buttons[9])
            {
                buttons[9].addEventListener("click", async function()
                {
                    await new Promise((resolve,reject)=>
                    {
                        console.log("Name: " + data[9].username);
                        var add_friend = new XMLHttpRequest();
                        add_friend.open("GET", "/addFollower?followed_Username=" + data[9].username);
                        add_friend.send();
                        resolve();
                    }); 
                });
            }
            if(buttons[10])
            {
                buttons[10].addEventListener("click", async function()
                {
                    await new Promise((resolve,reject)=>
                    {
                        console.log("Name: " + data[10].username);
                        var add_friend = new XMLHttpRequest();
                        add_friend.open("GET", "/addFollower?followed_Username=" + data[10].username);
                        add_friend.send();
                        resolve();
                    }); 
                });
            }
            console.log("Potty");
        }
        resolve();
    });
    console.log("End");
});


