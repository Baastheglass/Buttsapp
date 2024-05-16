const get_cookie = new XMLHttpRequest();
const get_feed = new XMLHttpRequest();
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
    var storeName = document.querySelector('#name');
    storeName.textContent = data[0].authorName;
    for(var i = 1; i < data.length; i++)
    {
        var cloneDiv = storeDiv.cloneNode(true);
        cloneDiv.querySelector("#name").textContent = data[i].authorName;
        cloneDiv.querySelector('#caption').textContent = data[i].caption;
        cloneDiv.querySelector('#image').src = data[i].imageLink;
        parentDiv.appendChild(cloneDiv);
    }
    console.log("Potty");
}
         
        

  

    
    




