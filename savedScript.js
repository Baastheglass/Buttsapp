const retrieveSavedPosts = new XMLHttpRequest();
retrieveSavedPosts.open("GET", '/retrieveSavedPosts');
retrieveSavedPosts.send();
retrieveSavedPosts.onload = async function()
{
    console.log("Function start");
    var data = JSON.parse(retrieveSavedPosts.responseText);
    var parentDiv = document.querySelector(".feed");
    var storeDiv = document.querySelector("#line");
    storeDiv.setAttribute('name', data[0].postID);
    var image = document.querySelector("#image");
    var name = document.querySelector("#name");
    var caption = document.querySelector("#caption");
    image.src = data[0].imageLink;
    name.textContent = data[0].authorName;
    caption.textContent = data[0].caption;
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
        cloneDiv.setAttribute("name", data[i].postID);
        cloneDiv.querySelector("#image").src = data[i].imageLink;
        cloneDiv.querySelector("#name").textContent = data[i].authorName;
        console.log("authorName: "  + cloneDiv.querySelector("#name").textContent);
        cloneDiv.querySelector("#caption").textContent = data[i].caption;
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
    console.log("Function end");
}