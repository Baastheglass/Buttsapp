const express = require('express');
const server = express(); /*To utilize express functions */
const middle = require('body-parser'); /*Main Middle-ware to handle requests form website*/
const dynamic_url = require('cors'); /*Server and Website IP different handling  cross origin resource sharing*/
const path = require('path'); /*Path handling to redirect pages */
const o_stream = require('fs');
const multer = require('multer');
const cookie_parser = require('cookie-parser');

const server_ip = "172.16.0.39"; /*DO CHANGE WHEN URL/IPV4 CHANGES MANDATORY*/
const server_port = 5500;
server.use(middle.urlencoded({ extended: true }));
server.use(express.static('C:/Users/User/Desktop/VSCode/WEBDEV/BUTTSAPP'));
server.use(cookie_parser());
/*Server Listening */
server.listen(server_port,server_ip,(server_error)=>{
    console.log("***********************************");
    console.log("ButtsApp Server is now online!");
    console.log("Listening to "+server_ip+":"+server_port);
    console.log("***********************************");
})
global.current_workspace=path.resolve(__dirname);
//Module imports
const {Login_Verify, addAccount, addComment, addPost, addLikes, addFollower, generateFeed, generateComments, getUsers, addDislikes, getPosts, getUserInfo, addSavedPost, retrieveSavedPost} = require("./connect.js");
//get methods
server.get('/get_feed',(required,sender)=>{
    // let Cookie = required.cookies.Logged_in_User;
    // Cookie = JSON.parse(Cookie);
    var username=required.query.username;
    generateFeed(username, (returnback)=>{
            if(returnback==true){console.log("****generateFeed generally failed!***\n");}
            else{
                sender.send(returnback);
            }
    });
})


server.get('/login.html',(required,sender)=>{
            sender.sendFile('/login.html');
})


server.get('/get_comments',(required,sender)=>{
    var postID = required.query.postID;
    generateComments(postID, (returnback)=>{
            if(returnback==true){console.log("****generateComments generally failed!***\n");}
            else{
                sender.send(returnback);
            }
    });
})

server.get('/get_cookie',(required,sender)=>{
    let Cookie = required.cookies.Logged_in_User;
    if(Cookie)
    {
        Cookie = JSON.parse(Cookie);
        console.log(Cookie);
        sender.send(Cookie);
    }
    else
        sender.status(400).send({error: "No cookie found"});
    
})
server.get('/get_users', (required, sender) =>
{
    console.log("Request Start");
    var username = required.query.username;
    console.log(username);
    getUsers(username, (returnback)=>{
        if(returnback==true){console.log("****getUsers generally failed!***\n");}
        else{
            sender.send(returnback);
        }
    console.log("Request End");
});
})

server.get('/addFollower', (required,sender) =>
{
    console.log("Entered addFollower");
    var cookie = required.cookies.Logged_in_User;
    if(cookie)
    {
        cookie = JSON.parse(cookie);
        var follower_username = cookie.User;
        var followed_Username = required.query.followed_Username;
        console.log("Followed Username: " + followed_Username);
        addFollower(follower_username, followed_Username);
    }
    else
        console.log("Cookie not found");
})

server.get('/addLikes', (required,sender) =>
{
    console.log("Entered addLikes");
    var postID = required.query.postID;
    console.log("PostID: " + postID);
    addLikes(postID);
})

server.get('/addDislikes', (required,sender) =>
{
    console.log("Entered addDislikes");
    var postID = required.query.postID;
    console.log("PostID: " + postID);
    addDislikes(postID);
})

server.get('/addSavedPost', (required,sender) =>
{
    console.log("Entered addSavedPost");
    var cookie = required.cookies.Logged_in_User;
    if(cookie)
    {
        cookie = JSON.parse(cookie);
        var username = cookie.User;
        console.log("Username: " + username);
        var postID = required.query.postID;
        console.log("PostID: " + postID);
        addSavedPost(username, postID);
    }
})

server.get('/retrieveSavedPosts', (required,sender) =>
{
    console.log("Entered retrieveSavedPosts");
    var cookie = required.cookies.Logged_in_User;
    if(cookie)
    {
        cookie = JSON.parse(cookie);
        var username = cookie.User;
        retrieveSavedPost(username, (returnback)=>{
            if(returnback==true){console.log("****retrieveSavedPosts generally failed!***\n");}
            else{
                sender.send(returnback);
            }});
    }
    else
        console.log("Cookie not found");
})

server.get('/getPosts', (required,sender) =>
{
    console.log("Entered getPosts");
    var cookie = required.cookies.Logged_in_User;
    if(cookie)
    {
        cookie = JSON.parse(cookie);
        var username = cookie.User;
        getPosts(username, (returnback)=>{
            if(returnback==true){console.log("****getPosts generally failed!***\n");}
            else{
                sender.send(returnback);
            }});
    }
    else
        console.log("Cookie not found");
})

server.get('/getUserInfo', (required,sender) =>
{
    console.log("Entered getUserInfo");
    var cookie = required.cookies.Logged_in_User;
    if(cookie)
    {
        cookie = JSON.parse(cookie);
        var username = cookie.User;
        getUserInfo(username, (returnback)=>{
            if(returnback==true){console.log("****getUserInfo generally failed!***\n");}
            else{
                sender.send(returnback);
            }});
    }
    else
        console.log("Cookie not found");
})

server.get('/addComment', (required,sender) =>
{
    console.log("Entered addComment");
    var cookie = required.cookies.Logged_in_User;
    if(cookie)
    {
        cookie = JSON.parse(cookie);
        var username = cookie.User;
        var postID = required.query.postID;
        var caption = required.query.comment;
        //Running addComment query
        addComment(caption, postID, username);
    }
    else
        console.log("No cookie found");
})
        
//post methods
server.post('/loginCheck',(required,sender)=>{
    var username = required.body.username; 
    var password = required.body.password; 
    var check_flag = 0;
    /*Running Login Check Query */
    Login_Verify(username, password, (record)=>{
        check_flag = record.map(function(c_user_obj) {
            return c_user_obj.userExists;
        });
        if(check_flag == 1)
        {
            sender.cookie('Logged_in_User',JSON.stringify({User:username}),{maxAge:7200000,httpOnly: true, sameSite: 'lax'});
            console.log(sender.cookie);
            sender.redirect("./main.html");
        }
        //else if(check_flag == 0)
           //sender.redirect("./error.html");
        })
})

server.post('/addAccount', (required,sender) =>
{
    console.log("Entered addAccount");
    var firstName = required.body.firstName;
    var lastName = required.body.lastName;
    var email = required.body.email;
    var username = required.body.username;
    var password = required.body.password;
    //Running addAccount query
    addAccount(firstName, lastName, email, username, password);
    sender.redirect('/login.html');
})

server.post('/addPost', (required,sender) =>
{
    console.log("Entered addAccount");
    var cookie = required.cookies.Logged_in_User;
    if(cookie)
    {
        cookie = JSON.parse(cookie);
        var username = cookie.User;
        var caption = required.body.caption;
        var imageLink = required.body.imageLink;
        //Running addPost query
        addPost(username, caption, imageLink);
    }
    else
        console.log("No cookie found");
})
    