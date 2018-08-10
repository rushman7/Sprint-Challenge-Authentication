<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

  Middleware - acts like a bridge between requests that help us perform functions on the request, such as verifying. It is allowed to be accessed, or it is formatted how we want, or that it is safe. 
  
  Sessions- stores user data as they access the application in order to access across requests, allowing us to make decisions based on how they have interacted with our api. 
  
  bcrypt- is a package that allows us to hash our passwords (a 1 way method of password security) that greatly lower failure to prevent attacks as well as prevent loss of client's original password in case of breach 
  
  JWT- allows for safe transmissions of information due to digital signatures that can verify integrity of claims

2.  What does bcrypt do in order to prevent attacks?
  
  It uses hashes which are a 1 way key that prevent personal passwords from getting stolen second it allows us to use salt which allows a certain number of hashes/sec in order to slow down attacks

3.  What are the three parts of the JSON Web Token?

  Header, Payload, and Signature
