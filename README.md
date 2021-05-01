## Express-server-jwt
  This project was made for learning Express , mongodb Atlas , jwt and passport.
  
  🟢 It is a simple api which which we can use to get users and add them.

  🟢 The user can then login with their credentials and it will authenticate and then authorized you a jwt token.
  
  🟢 The jwt token is used to visit the protected route and is used to skip login in again.
  
  🟢 By default jwt expiry is set to 1 hour.
  
  🟢 For authorization, Passport library is used which will verify the jwt token every time we visit the protected route.
 
 
 
 ## Working
 
  ### The api is tested on *Postman*
  
  🔵 A get request http://localhost:5000/users will send a json file conatining all the users.
  
  🔵 To add a new user, a post request to http://localhost:5000/users/add is made with all the details in json format in the body. 
  If succesful will give a response.
  
  🔵 To login , a post request to  http://localhost:5000/users/login with your credentials 
  i.e. email and password in body of the request is made. 
  If user exists it will response with a json data containing your 
  details and a jwt token in the form **'bearer token'**
  
  🔵 Copy the token string and the to check for authorization 
  send a get request to http://localhost:5000/users/protected and add the token in the authorization field.
  **_Note: In the authorization set the type to bearer token_**
 
 🔵 If the token is valid it will response with your email id else will send an unauthorized message.
 
 
 
 ## Required 
  User need to edit .env which contains your mongodb uri key and your secret key.
