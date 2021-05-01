## Express-server-jwt
  This project was made for learning Express , MongoDB Atlas , JWT and Passport.
  
  🟢 It is a simple API which can request user's basic details and add them.

  🟢 The user can then login with their credentials and it will authenticate and then authorize the user a jwt token.
  
  🟢 The jwt token is used to visit the protected route and is used to skip login again.
  
  🟢 By default, jwt expiry is set to 1 hour.
  
  🟢 For authorization, Passport library is used to verify the jwt token every time we visit the protected route.
 
 
 
 ## Working
 
  ### The api is tested on *Postman*
  
  🔵 A get request to http://localhost:5000/users will return a json file containing all the users.
  
  🔵 To add a new user, a post request to http://localhost:5000/users/add is made along with all the details in json format as the request body. 
  If successful, a response is received.
  
  🔵 To login, a post request to  http://localhost:5000/users/login is made with the user's credentials,
  i.e. email and password, as the request body. 
  If user exists, it will respond with json data containing user
  details and a jwt token in the form **'bearer token'**
  
  🔵 Copy the token string and check for authorization by
  sending a get request to http://localhost:5000/users/protected along with the token in the authorization field.
  **_Note: In the authorization field, set the type to bearer token_**
 
 🔵 If the token is valid, it will respond with user's email id, otherwise it will send an unauthorized message.
 
 
 
 ## Required 
  User needs to update the environment variables, i.e. MongoDB URI key and secret key for jwt, in the .env file.
