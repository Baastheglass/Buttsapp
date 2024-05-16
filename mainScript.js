const get_cookie = new XMLHttpRequest();
const get_feed = new XMLHttpRequest();
var username;
get_cookie.open("GET",'/get_cookie', true);
get_cookie.onload = async function()
{
    if(get_cookie.status === 200)
    {
        let logged_data = JSON.parse(get_cookie.responseText);
        username = logged_data.username[0];
        console.log(username);
        get_feed.open("GET", '/get_feed?username = ' + username);
        get_feed.onload = async function()
        {
            console.log("Potty");
            var parentDiv = document.querySelector('.feed');
            var storeDiv = document.querySelector('#line');
            data = JSON.parse(get_users.response);
            var storeName = document.querySelector('#name');
            storeName.textContent = data[0].username;
            for(var i = 1; i < data.length; i++)
            {
                var cloneDiv = storeDiv.cloneNode(true);
                cloneDiv.querySelector("#name").textContent = data[i].authorName;
                cloneDiv.querySelector('#caption').textContent = data[i].caption;
                cloneDiv.querySelector('#image').value = data[i].imageLink;
                parentDiv.appendChild(cloneDiv);
            }
            console.log("Potty");
        }
        get_feed.send();
    }
    else
        console.log("Failed to retrieve cookie");
}
get_cookie.send();


