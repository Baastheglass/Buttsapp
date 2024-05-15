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
/*Server Listening */
server.listen(server_port,server_ip,(server_error)=>{
    console.log("***********************************");
    console.log("Connectify Server is now online!");
    console.log("Listening to "+server_ip+":"+server_port);
    console.log("***********************************");
})
global.current_workspace=path.resolve(__dirname);
//Module imports
const {Login_Verify, addAccount, addComment, addPost, addLikes, addFollower, generateFeed, generateComments} = require("./connect.js");

server.get('/get_feed',(required,sender)=>{
    generateFeed((returnback)=>{
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
    generateComments((returnback)=>{
            if(returnback==true){console.log("****generateComments generally failed!***\n");}
            else{
                sender.send(returnback);
            }
    });
})

server.get('/get_login_status',(required,sender)=>{
    Login_Verify((returnback)=>{
            if(returnback==true){console.log("****LoginVerification generally failed!***\n");}
            else{
                sender.send(returnback);
            }
    });
})

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
            sender.redirect("./main.html");
        }
        else
           console.log("No");
        })
})
