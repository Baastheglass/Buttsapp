const get_cookie = new XMLHttpRequest();
const get_feed = new XMLHttpRequest();
get_cookie.open("GET",'/get_cookie');
get_cookie.send();
get_cookie.onload = function()
{
    let logged_data = JSON.parse(get_cookie.responseText);
    username = logged_data.username[0];
}
get_feed.open("GET", '/get_feed');
get_feed.send();
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
        cloneDiv.querySelector("#name").textContent = data[i].username;
        parentDiv.appendChild(cloneDiv);
    }
    console.log("Potty");

}