const get_cookie = new XMLHttpRequest();
const get_feed = new XMLHttpRequest();
const add_likes = new XMLHttpRequest();
const add_dislikes = new XMLHttpRequest();
const add_Saved = new XMLHttpRequest();
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
    var commentLink = storeDiv.querySelector('#commenthref');
    data = JSON.parse(get_feed.responseText);
    commentLink.href = "./comments.html?postID=" + data[0].postID;
    console.log(commentLink.href);
    storeDiv.querySelector("#name").textContent = data[0].authorName;
    storeDiv.querySelector("#caption").textContent = data[0].caption;
    storeDiv.querySelector("#image").src = data[0].imageLink;
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
    storeDiv.querySelector("#save").addEventListener("click", async function()
    {
        var postID = storeDiv.getAttribute('name');
        console.log("postID: " + postID);
        add_Saved.open("GET", "/addSavedPost?postID=" + postID);
        add_Saved.send();
    });
    for(var i = 1; i < data.length; i++)
    {
        var cloneDiv = storeDiv.cloneNode(true);
        cloneDiv.querySelector("#name").textContent = data[i].authorName;
        cloneDiv.querySelector('#caption').textContent = data[i].caption;
        cloneDiv.querySelector('#image').src = data[i].imageLink;
        cloneDiv.setAttribute("name", data[0].postID);
        cloneDiv.querySelector("#commenthref");
        commentLink.href = "./comments.html?postID=" + data[i].postID;
        parentDiv.appendChild(cloneDiv);
    }
    likeButtons = document.querySelectorAll("#like");
    dislikeButtons = document.querySelectorAll("#dislike");
    saveButtons = document.querySelectorAll("#save");
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
    if(saveButtons[1])
    {
        saveButtons[1].addEventListener("click", async function()
        {
            var postID = data[1].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
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
    if(saveButtons[2])
    {
        saveButtons[2].addEventListener("click", async function()
        {
            var postID = data[2].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
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
    if(saveButtons[3])
    {
        saveButtons[3].addEventListener("click", async function()
        {
            var postID = data[3].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    if(likeButtons[4])
    {
        likeButtons[4].addEventListener("click", function()
        {
            var postID = data[4].postID;
            console.log("author:" + data[4].authorName);
            console.log("caption: " + data[4].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[4])
    {
        dislikeButtons[4].addEventListener("click", function()
        {
            var postID = data[4].postID;
            console.log("author:" + data[4].authorName);
            console.log("caption: " + data[4].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(saveButtons[4])
    {
        saveButtons[4].addEventListener("click", async function()
        {
            var postID = data[4].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    if(likeButtons[5])
    {
        likeButtons[5].addEventListener("click", function()
        {
            var postID = data[5].postID;
            console.log("author:" + data[5].authorName);
            console.log("caption: " + data[5].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[5])
    {
        dislikeButtons[5].addEventListener("click", function()
        {
            var postID = data[5].postID;
            console.log("author:" + data[5].authorName);
            console.log("caption: " + data[5].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(saveButtons[5])
    {
        saveButtons[5].addEventListener("click", async function()
        {
            var postID = data[5].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    if(likeButtons[6])
    {
        likeButtons[6].addEventListener("click", function()
        {
            var postID = data[6].postID;
            console.log("author:" + data[6].authorName);
            console.log("caption: " + data[6].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[6])
    {
        dislikeButtons[6].addEventListener("click", function()
        {
            var postID = data[6].postID;
            console.log("author:" + data[6].authorName);
            console.log("caption: " + data[6].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(saveButtons[6])
    {
        saveButtons[6].addEventListener("click", async function()
        {
            var postID = data[6].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    if(likeButtons[7])
    {
        likeButtons[7].addEventListener("click", function()
        {
            var postID = data[7].postID;
            console.log("author:" + data[7].authorName);
            console.log("caption: " + data[7].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[7])
    {
        dislikeButtons[7].addEventListener("click", function()
        {
            var postID = data[7].postID;
            console.log("author:" + data[7].authorName);
            console.log("caption: " + data[7].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(saveButtons[7])
    {
        saveButtons[7].addEventListener("click", async function()
        {
            var postID = data[7].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    if(likeButtons[8])
    {
        likeButtons[8].addEventListener("click", function()
        {
            var postID = data[8].postID;
            console.log("author:" + data[8].authorName);
            console.log("caption: " + data[8].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[8])
    {
        dislikeButtons[8].addEventListener("click", function()
        {
            var postID = data[8].postID;
            console.log("author:" + data[8].authorName);
            console.log("caption: " + data[8].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(saveButtons[8])
    {
        saveButtons[8].addEventListener("click", async function()
        {
            var postID = data[8].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    if(likeButtons[9])
    {
        likeButtons[9].addEventListener("click", function()
        {
            var postID = data[9].postID;
            console.log("author:" + data[9].authorName);
            console.log("caption: " + data[9].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[9])
    {
        dislikeButtons[9].addEventListener("click", function()
        {
            var postID = data[9].postID;
            console.log("author:" + data[9].authorName);
            console.log("caption: " + data[9].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(saveButtons[9])
    {
        saveButtons[9].addEventListener("click", async function()
        {
            var postID = data[9].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    if(likeButtons[10])
    {
        likeButtons[10].addEventListener("click", function()
        {
            var postID = data[10].postID;
            console.log("author:" + data[10].authorName);
            console.log("caption: " + data[10].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[10])
    {
        dislikeButtons[10].addEventListener("click", function()
        {
            var postID = data[10].postID;
            console.log("author:" + data[10].authorName);
            console.log("caption: " + data[10].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(saveButtons[10])
    {
        saveButtons[10].addEventListener("click", async function()
        {
            var postID = data[10].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    if(likeButtons[11])
    {
        likeButtons[11].addEventListener("click", function()
        {
            var postID = data[11].postID;
            console.log("author:" + data[11].authorName);
            console.log("caption: " + data[11].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[11])
    {
        dislikeButtons[11].addEventListener("click", function()
        {
            var postID = data[11].postID;
            console.log("author:" + data[11].authorName);
            console.log("caption: " + data[11].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(saveButtons[11])
    {
        saveButtons[11].addEventListener("click", async function()
        {
            var postID = data[11].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    if(likeButtons[12])
    {
        likeButtons[12].addEventListener("click", function()
        {
            var postID = data[12].postID;
            console.log("author:" + data[12].authorName);
            console.log("caption: " + data[12].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[12])
    {
        dislikeButtons[12].addEventListener("click", function()
        {
            var postID = data[12].postID;
            console.log("author:" + data[12].authorName);
            console.log("caption: " + data[12].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(saveButtons[12])
    {
        saveButtons[12].addEventListener("click", async function()
        {
            var postID = data[12].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    if(likeButtons[13])
    {
        likeButtons[13].addEventListener("click", function()
        {
            var postID = data[13].postID;
            console.log("author:" + data[13].authorName);
            console.log("caption: " + data[13].caption);    
            add_likes.open("GET", "/addLikes?postID=" + postID);
            add_likes.send();
        });
    }
    if(dislikeButtons[13])
    {
        dislikeButtons[13].addEventListener("click", function()
        {
            var postID = data[13].postID;
            console.log("author:" + data[13].authorName);
            console.log("caption: " + data[13].caption);    
            add_dislikes.open("GET", "/addDislikes?postID=" + postID);
            add_dislikes.send();
        });
    }
    if(saveButtons[13])
    {
        saveButtons[13].addEventListener("click", async function()
        {
            var postID = data[13].postID;
            console.log("postID: " + postID);
            add_Saved.open("GET", "/addSavedPost?postID=" + postID);
            add_Saved.send();
        });
    }
    console.log("Potty");
}
