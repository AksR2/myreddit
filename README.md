# MyReddit
> This is the course project for CEN5035 aim to create a simple version of Reddit. 
> This project will create a web application with basic Reddit functions including: 
  Login, Signup, Show Posts on the HomePage, Upvote, Downvote, Post Subreddit, Delete Posts, Edit User Profile, Search Posts, Comments....

## Getting Started
### Prerequisites

1. Installing Mongo: https://docs.mongodb.com/manual/installation/
2. Installing Nodejs: https://nodejs.org/en/download/
3. npm install -g @angular/cli 

#### How to use
1. Git clone {{projecturl}}

2. run mongod.exe by giving the mongod.exe path followed by --dbpath followed by the path of databasesetup by you.
{example} : "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath "<databasepath>"

3. run mongo.exe
{example} : "C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"

4. go to your backend folder
{example} : cd myreddit/redditbe

5. install all the dependencies
{example}  : npm install

6. npm start the backend
{example} : npm start

7. go to your frontend folder
{example} : cd myreddit/redditbe

8. install all the dependencies
{example}  : npm install

9. npm start the frontend
{example} : npm start
 
10. http://localhost:4200 will have your application running

## Running the tests
Front end testing is done using protractor. For front-end Unit and e2e tests do the following
-cd myreddit/redditfe
-npm test

Each front end test checks basic front-end functionalities like button clicks, form data, opening and closing of navigation bars etc.

For back-end tests
-cd myreddit/redditbe
-npm test

Back end testing is done using Mocha and Chai. Each back-end tests are used to check each fundamental functionality like update post, delete post, insert post etc. is working fine at any given time or not.

## Built With

MEAN stack
Angular 4.0 - The web framework used
Express - Go web framework
MongoDB - Database used
Angular Material - Styling

## Version

1.0

## Authors

- Himanshu Taneja
- Akshay Rawat
- Prachi Prakash Desai
