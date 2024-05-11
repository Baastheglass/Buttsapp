 /*Required Files*/
const { query } = require('express');
const db_sql = require('mssql/msnodesqlv8');
 /*Configuration*/
const config={
     connectionString: "DSN=ButtsappBackEnd;UID=sa;PWD=12345678;" /*SQL System Adminstrator UID/PASS DSN ODBC driver*/
 };

function Login_Verify(username, password, returnback)
{
    // Establish a connection to the SQL Server using the provided configuration
    db_sql.connect(config,(error)=>{
        // Check if there is an error while connecting to the database
        if(error){
            console.log("\nDatabase SQL Connection failed!\n"); 
            // Call the callback function with 'false' to indicate connection failure
            returnback(false);
        }
        // Create a new SQL request object
        let  query_exec=new db_sql.Request();
        
        // Define the stored procedure to execute for login check
        let exec_procedure = "DECLARE @userExists int; \n exec verifyLogin";
        
        // Define the input parameters for the stored procedure (email and password)
        let check_data = "\n @username='" + username + "',\n @password='" + password + "',";
        
        // Define an output parameter to capture the login check result
        let check_flag_output = "\n @userExists = @userExists OUTPUT\n";
        
        // Define the SQL query to execute the stored procedure and retrieve the result
        let select_output = "select @userExists as userExists";
        
        // Concatenate all parts to form the complete SQL query
        let full_query = exec_procedure + check_data + check_flag_output + select_output;
        
        // Execute the SQL query
        query_exec.query(full_query,(query_error,res)=>{
            // Check if there is an error while executing the query
            if(query_error){
                console.log("\n****Login Query Failed!*****\n"+query_error); 
                // Call the callback function with 'false' to indicate query failure
                returnback(false);
            }
            // Log the query for debugging purposes
            console.log("****For Debugging Login Query ******\n"+ full_query +"\n*************");
            
            // Call the callback function with the result of the query
            returnback(res.recordset);
        });
    });
}

// Login_Verify("woahImBaasil", "baasilissoawesome", (result) => 
// {
//     console.log("Login result:", result);
// });

function addAccount(firstName, lastName, email, username, password)
{
    // Establish a connection to the SQL Server using the provided configuration
    db_sql.connect(config,(error)=>{
        // Check if there is an error while connecting to the database
        if(error){
            console.log("\nDatabase SQL Connection failed!\n"); 
            // Call the callback function with 'false' to indicate connection failure
            returnback(false);
        }
        // Create a new SQL request object
        let  query_exec=new db_sql.Request();
        
        // Define the stored procedure to execute for login check
        let exec_procedure = "exec addAccount";
        
        // Define the input parameters for the stored procedure (email and password)
        let parameters = "\n @firstName ='" + firstName + "',\n @lastName ='" + lastName + "',\n @email ='" + email
        + "',\n @username = '" + username + "',\n @password = '" + password + "'";
        
        // Concatenate all parts to form the complete SQL query
        let full_query = exec_procedure + parameters;
        
        // Execute the SQL query
        query_exec.query(full_query,(query_error,res)=>{
            // Check if there is an error while executing the query
            if(query_error){
                console.log("\n****Add Account Failed!*****\n"+query_error); 
            }
            // Log the query for debugging purposes
            console.log("****For Debugging Add Account Query ******\n"+ full_query +"\n*************");
        });
    });
}

function addComment(text, postID, username)
{
    // Establish a connection to the SQL Server using the provided configuration
    db_sql.connect(config,(error)=>{
        // Check if there is an error while connecting to the database
        if(error){
            console.log("\nDatabase SQL Connection failed!\n"); 
            // Call the callback function with 'false' to indicate connection failure
            returnback(false);
        }
        // Create a new SQL request object
        let  query_exec=new db_sql.Request();
        
        // Define the stored procedure to execute for login check
        let exec_procedure = "exec addComment";
        
        // Define the input parameters for the stored procedure (email and password)
        let parameters = "\n @text ='" + text + "',\n @postID = " + postID + ",\n @username ='" + username + "'";
        // Concatenate all parts to form the complete SQL query
        let full_query = exec_procedure + parameters;
        
        // Execute the SQL query
        query_exec.query(full_query,(query_error,res)=>{
            // Check if there is an error while executing the query
            if(query_error){
                console.log("\n****Add Comment Failed!*****\n"+query_error); 
            }
            // Log the query for debugging purposes
            console.log("****For Debugging Add Comment Query ******\n"+ full_query +"\n*************");
        });
    });
}

function addPost(username, caption, imageLink)
{
    // Establish a connection to the SQL Server using the provided configuration
    db_sql.connect(config,(error)=>{
        // Check if there is an error while connecting to the database
        if(error){
            console.log("\nDatabase SQL Connection failed!\n"); 
            // Call the callback function with 'false' to indicate connection failure
            returnback(false);
        }
        // Create a new SQL request object
        let  query_exec=new db_sql.Request();
        
        // Define the stored procedure to execute for login check
        let exec_procedure = "exec addPost";
        
        // Define the input parameters for the stored procedure (email and password)
        let parameters = "\n @username ='" + username + "',\n @caption = '" + caption + "',\n @imageLink = '" + imageLink + "'";
        // Concatenate all parts to form the complete SQL query
        let full_query = exec_procedure + parameters;
        
        // Execute the SQL query
        query_exec.query(full_query,(query_error,res)=>{
            // Check if there is an error while executing the query
            if(query_error){
                console.log("\n****Add Post Failed!*****\n"+query_error); 
            }
            // Log the query for debugging purposes
            console.log("****For Debugging Add Post Query ******\n"+ full_query +"\n*************");
        });
    });
}

function addLikes(postID, username)
{
    // Establish a connection to the SQL Server using the provided configuration
    db_sql.connect(config,(error)=>{
        // Check if there is an error while connecting to the database
        if(error){
            console.log("\nDatabase SQL Connection failed!\n"); 
            // Call the callback function with 'false' to indicate connection failure
            returnback(false);
        }
        // Create a new SQL request object
        let  query_exec=new db_sql.Request();
        
        // Define the stored procedure to execute for login check
        let exec_procedure = "exec addLikes";
        
        // Define the input parameters for the stored procedure (email and password)
        let parameters = "\n @postID =" + postID + ",\n @username = '" + username + "'";
        // Concatenate all parts to form the complete SQL query
        let full_query = exec_procedure + parameters;
        
        // Execute the SQL query
        query_exec.query(full_query,(query_error,res)=>{
            // Check if there is an error while executing the query
            if(query_error){
                console.log("\n****Add Likes Failed!*****\n"+query_error); 
            }
            // Log the query for debugging purposes
            console.log("****For Debugging Add Likes Query ******\n"+ full_query +"\n*************");
        });
    });
}

function addFollower(followerUserName, followedUserName)
{
    // Establish a connection to the SQL Server using the provided configuration
    db_sql.connect(config,(error)=>{
        // Check if there is an error while connecting to the database
        if(error){
            console.log("\nDatabase SQL Connection failed!\n"); 
            // Call the callback function with 'false' to indicate connection failure
            returnback(false);
        }
        // Create a new SQL request object
        let  query_exec=new db_sql.Request();
        
        // Define the stored procedure to execute for login check
        let exec_procedure = "exec addFollower";
        
        // Define the input parameters for the stored procedure (email and password)
        let parameters = "\n @followerUserName = '" + followerUserName + "',\n @followedUserName = '" + followedUserName + "'";
        // Concatenate all parts to form the complete SQL query
        let full_query = exec_procedure + parameters;
        
        // Execute the SQL query
        query_exec.query(full_query,(query_error,res)=>{
            // Check if there is an error while executing the query
            if(query_error){
                console.log("\n****Add Follower Failed!*****\n"+query_error); 
            }
            // Log the query for debugging purposes
            console.log("****For Debugging Add Follower Query ******\n"+ full_query +"\n*************");
        });
    });
}

function generateFeed(username, returnback)
{
    // Establish a connection to the SQL Server using the provided configuration
    db_sql.connect(config,(error)=>{
        // Check if there is an error while connecting to the database
        if(error){
            console.log("\nDatabase SQL Connection failed!\n"); 
            // Call the callback function with 'false' to indicate connection failure
            returnback(false);
        }
        // Create a new SQL request object
        let  query_exec=new db_sql.Request();
        
        // Define the stored procedure to execute for login check
        let exec_procedure = "exec generateFeed";
        
        // Define the input parameters for the stored procedure (email and password)
        let parameters = "\n @username='" + username + "'";
        
        // Concatenate all parts to form the complete SQL query
        let full_query = exec_procedure + parameters;
        
        // Execute the SQL query
        query_exec.query(full_query,(query_error,res)=>{
            // Check if there is an error while executing the query
            if(query_error){
                console.log("\n****Generate Feed Failed!*****\n"+query_error); 
                // Call the callback function with 'false' to indicate query failure
                returnback(false);
            }
            // Log the query for debugging purposes
            console.log("****For Debugging Generate Feed Query ******\n"+ full_query +"\n*************");
            
            // Call the callback function with the result of the query
            returnback(res.recordset);
        });
    });
}

generateFeed("buttButter" , (result) => 
{
    console.log("Feed:", result);
});

function generateComments(postID, returnback)
{
    // Establish a connection to the SQL Server using the provided configuration
    db_sql.connect(config,(error)=>{
        // Check if there is an error while connecting to the database
        if(error){
            console.log("\nDatabase SQL Connection failed!\n"); 
            // Call the callback function with 'false' to indicate connection failure
            returnback(false);
        }
        // Create a new SQL request object
        let  query_exec=new db_sql.Request();
        
        // Define the stored procedure to execute for login check
        let exec_procedure = "exec generateComments";
        
        // Define the input parameters for the stored procedure (email and password)
        let parameters = "\n @postID = " + postID;
        
        // Concatenate all parts to form the complete SQL query
        let full_query = exec_procedure + parameters;
        
        // Execute the SQL query
        query_exec.query(full_query,(query_error,res)=>{
            // Check if there is an error while executing the query
            if(query_error){
                console.log("\n****Generate Comments Failed!*****\n"+query_error); 
                // Call the callback function with 'false' to indicate query failure
                returnback(false);
            }
            // Log the query for debugging purposes
            console.log("****For Debugging Generate Comments Query ******\n"+ full_query +"\n*************");
            
            // Call the callback function with the result of the query
            returnback(res.recordset);
        });
    });
}

generateComments(1 , (result) => 
{
    console.log("Comments:", result);
});

