const express = require('express');
const server = express(); /*To utilize express functions */
const middle = require('body-parser'); /*Main Middle-ware to handle requests form website*/
const dynamic_url = require('cors'); /*Server and Website IP different handling  cross origin resource sharing*/
const path = require('path'); /*Path handling to redirect pages */
const o_stream = require('fs');
const multer = require('multer');
const cookie_parser = require('cookie-parser');

const server_ip = "172.20.10.3"; /*DO CHANGE WHEN URL/IPV4 CHANGES MANDATORY*/
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
const {Login_Verify, addAccount, addComment, addPost, addLikes, addFollower, generateFeed, generateComments, getUsers} = require("./connect.js");
//get methods
server.get('/get_feed',(required,sender)=>{
    var username = required.query.username;
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
    var postID = required.postID;
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
        else
           console.log("No");
        })
})

server.post('/addAccount', (required,sender) =>
{
    console.log("Entered function");
    var firstName = required.body.firstName;
    var lastName = required.body.lastName;
    var email = required.body.email;
    var username = required.body.username;
    var password = required.body.password;
    //Running addAccount query
    addAccount(firstName, lastName, email, username, password);
    sender.redirect('/login.html');
})