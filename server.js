const express = require('express');
const server = express(); /*To utilize express functions */
const middle = require('body-parser'); /*Main Middle-ware to handle requests form website*/
const dynamic_url = require('cors'); /*Server and Website IP different handling  cross origin resource sharing*/
const path = require('path'); /*Path handling to redirect pages */
const o_stream = require('fs');
const multer = require('multer');
const cookie_parser = require('cookie-parser');

const server_ip = "192.168.100.18"; /*DO CHANGE WHEN URL/IPV4 CHANGES MANDATORY*/
const server_port = 3000;
/*Server Listening */
server.listen(server_port,server_ip,(server_error)=>{
    console.log("***********************************");
    console.log("Connectify Server is now online!");
    console.log("Listening to "+server_ip+":"+server_port);
    console.log("***********************************");
})

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

connectify_server.post('/loginCheck',(required,sender)=>{
    var username = required.body.username; 
    var password = required.body.password; 
    var check_flag = 0;
     /*Running Login Check Query */
     Login_Check(email,password,(record)=>{
             if(record==false){console.log("\nLogin Query generally failed\n");}
             check_flag=record.map(lflag_obj => lflag_obj.lflag);
             if(check_flag[0]==1){
                 console.log("\nFor Debugging purpose Sucess Login with email: "+email+"\nPassword: "+password);
                 Get_User(email,password,(record)=>{
                     if(record==false){console.log("Get_User Query Generally faield!");}
                     let current_name=record.map(c_user_obj=>c_user_obj.user_name);
                     let current_id = record.map(c_user_obj=>c_user_obj.user_id);
                     temp_user=current_name;
                     temp_id=current_id;
                     sender.cookie('Logged_in_User',JSON.stringify({User:current_name,User_ID:current_id}),{maxAge:7200000,httpOnly: true});
                     sender.redirect('/www.connectify.com/'+temp_user+temp_id+'/Home_Page');
                 })
             }else{
                 console.log("\nFor Debugging purpose Failed Login with email: "+email+"\nPassword: "+password)
                 sender.redirect('/www.connectify.com/');
             }
         })
})
