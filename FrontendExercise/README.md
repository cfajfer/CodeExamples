# Hill-Rom R&D Web Team Interview - JavaScript Front-end Coding Exercise

We're excited to get to know you and learn more about the way you build solutions in Javascript.  For the purpose of this
exercise, we've created an exercise comprised of a React web application and a NodeJS backend.  Below you'll find a
set of tasks we'd like you to complete and return to the sending interviewer.  Please email a ZIP/TAR/etc file back
within 48 hours of receiving this exercise.  We'll be discussing your work in our next interview; we'd like time to
better understand your implementation, so we can ask better questions when we meet again.

If you have any questions about the exercise, please feel free to email the sending interviewer; we'll try to get those
answered as quickly as possible.  As a rule of thumb, focus on finding a working solution, no matter if it's a solution
with which you're not 100% happy.  Once you have something you can deliver, iterate on that solution until you get
to a point where you're comfortable sharing it.  Although we hope to better understand your code style and organization,
we also understand these things can be stressful.  Do your best and be prepared to talk about your code and the challenges
you encountered along the way.  Best of luck!

## Getting started

### Environment

We've tried to make this process as painless as possible, but the host you're using will need a few things to get started:
* NodeJS - We recommend NVM (https://github.com/nvm-sh/nvm#installing-and-updating) to install NodeJS, but your platform
  package manager works as well.  If you don't use a package manager, you can download NodeJS @ https://nodejs.org/en/download/.
  We recommend at least Node version 14.
* Web browser - We recommend Chrome so the syntax of your Javascript is kept more modern, but ultimately the choice is yours.

### Running the project

1. In this exercise, both the client and server applications are started for development separately, but both in the same
   way.  Use the following commands to get started:

        # CLIENT
        cd client
        npm install
        npm start
        
        # SERVER
        cd server
        npm install
        npm start

1. Once started, each application will watch their respective folders for changes, loading those changes into memory.  
   Once changes have been reloaded, you can refresh the web browser to see those resulting changes.

### Front-end Client

We've started you off with an empty React application. You will need to implement the entire front end yourself, using the
provided screenshot (example.png) as a guide.  Please try to adhere to the structure of the example image as much as possible, 
but feel free to style it as you like!

Don't want to use React? No problem - feel free delete the boilerplate and use any single-page application 
framework you're comfortable with.

You are welcome to use any additional client libraries, frameworks, etc. that you wish.

We recommend using randomuser.me to quickly generate sample contacts for your application, which will provide 
you with names, e-mail addresses, phone numbers, and avatar URLs.

https://randomuser.me/

### Back-end Server

You've been provided with a fully-functional REST API in the "server" directory. Please see the "Server API" section below 
for more details about the endpoints exposed by this API. You must integrate this API into your application (see "Deliverables" below).

Because this is a front-end exercise, you won't need to edit the server. Please leave it as-is.

## Deliverables

For this exercise, you will create a contact list such as you would see on a phone or chat application such as 
Facebook Messenger, Telegram, etc. Your application must implement the following features:

- A list of contacts organized into rows, where each row consists of these elements:
    1. An avatar
    2. First and last name
    3. E-mail address
    4. Phone number
    5. A "chat" icon on the right-hand side. This icon does *not* need to be functional in any way.
- A search bar whereby the list of contacts may be filtered by first or last name. The search should be implemented 
  only on the client - there's no server work in this exercise!
- An "Add Contact" icon in the top-right which will allow the user to add a new contact.
  - The method by which contacts can be added by the user is entirely up to you - some suggestions might be to use a modal or to open a new page.
  Use your imagination!
  
#### Requirements
- You must use the provided back-end server as an API for your application. See the "Server API" section below for a list of 
  the endpoints available for your use. How you utilize these endpoints is up to you!
- When adding a new contact, it should POST to the backend API to insert a new contact into the database.
    - Users must be able to specify first name, last name, e-mail address, phone number, and avatar path. All of these
      fields are required.
    - Note: The backend API performs data validation on phone numbers, e-mail addresses, and avatar URLs.
      Phone numbers must be provided to the backend as 10-digit numbers, but must be formatted on the client as shown in the example image.
- On page load, your application should immediately fetch a list of all contacts in the database and display them.
- The search bar should search as the user types and should not require pressing "Enter" or clicking a button. An empty search 
  bar should display all contacts.
- The contact list must be scrollable if the screen cannot display them all at once
- That's it, you're done! However... see the Bonus Points section below if you feel like this was too easy!

#### Bonus Points

If you'd like to go the extra mile, you'll earn bonus points for implementing the below features. We understand these
interview exercises take time, so these are in no way required, but would certainly help us gain a better understanding
of your code style and decision-making process. Feel free to implement any, all, or none of these features.

- Delete a contact (see Server API section below)
- Edit a contact (see Server API section below)
- Search contacts by phone number or e-mail address in addition to first and last name

## Server API

On the server, you have the following endpoints available for your use in the front-end application. 
Remember, this is a front-end only exercise, so you don't need to edit anything on the server application.

```
GET http://localhost/user

Returns all users in the database

Returns 200 OK on success
```

```
GET http://localhost/user/:userID

Return a single user wtih the given userID. For example, http://localhost/user/1

Returns 200 OK on success
Returns 404 on invalid user ID
```

```
POST http://localhost/user

Insert a new user into the database. You must supply a header of Content-Type: application/json. All properties are required. 
Example body:

{
    "firstName": "Bob",
    "lastName": "Williams",
    "emailAddress": "bob.williams@example.com",
    "phoneNumber": "3335559981",
    "avatarPath": "http://randomuser.me/api/portraits/men/73.jpg"
}

Returns 200 OK on success
Returns inserted user on success
```

```
PUT http://localhost/user/:userID

Replaces an existing user in the database. You must supply a header of Content-Type: application/json. All properties are required. 
See the POST endoint above for example body.

Returns 200 OK on success
Returns replacement user on success
```

```
DELETE http://localhost/user/:userID

Deletes a user from the database with the given userID.

Returns 200 OK on success
Returns 404 on invalid user ID
```

```
POST http://localhost/db/reset

Resets the database and removes all data. You can use this if you need to clear the database for any reason.

Returns 200 OK on success
```

```
POST http://localhost/db/resetWithFixtures

Resets the database and inserts some sample data. You can use this if you need to see example data or just insert some 
test contacts.

Returns 200 OK on success
```

## Final Notes

We understand that these interview exercises can be time-consuming, so please don't feel that you must complete all the 
requirements exhaustively. Our expectation is not that you will provide us with a fully-functional, bug-free application, but 
rather to gain an understanding of your code style and decision-making process.

If you can't finish this exercise in the time allotted, please turn it in regardless! We'd love to 
know what you struggled with and what you thought of the exercise, so we can better tune it to our 
future interview candidates. Thank you!
