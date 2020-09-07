# WeHaul

[Live Demo](http://wehaulbetter.herokuapp.com/#/)

## Background and Overview

Has your significant other ever left your possessions in a box on the porch? And you had to move but weren't ready? You don't have time to get a truck? No friends are available to help? WeHaul is the answer.

WeHaul is a web application which allow users to request movers with various vehicle sizes in your area on short notice. 

This project will:
* Incorporate google maps API
* Create user authorization for both users and drivers in WeHaul marketplace
* Construct the web application for visualization for routes and requests
* Create interface for driver and user ratings
* Allow users to create requests and drivers to accept or decline

## Functionality and MVP

- [x] User authorization: sign up and log in
- [x] Production README
- [x] Upload to Heroku
- [x] Google maps API
- [x] Driver and user dashboard
- [x] Requests: create, accept, edit, and delete
- [ ] Ratings: users and drivers

## Technologies & Technical Challenges

**Google Maps API**


**Backend: MongoDB/Express**

**Frontend: React/Node.js**

### Google Maps API
The Maps JavaScript API lets you customize maps with your own content and imagery for display on web pages and mobile devices. The Maps JavaScript API features four basic map types (roadmap, satellite, hybrid, and terrain) which you can modify using layers and styles, controls and events, and various services and libraries. 

**Technical Challenges:**

* Create routes with start and end destinations
* Updating routes
* Implementation of maps API
* Visualizing routes 


### Backend: MongoDB/Express


**Technical Challenges:**
* Connecting google maps API to MongoDB/Express

### Frontend: React/Node.js

**Technical Challenges:**
* Reading data from MongoDB database and organizing for display
* Constructing visualization of google maps API
* Implementing effective user and driver interaction
## Group Members
[Adrian Apodaca]() 

[Albert Chen](https://github.com/albert-d-chen) 

[Kodi Shiflett]() 

[Shonail Valenciaga]()






Splash page -> pretty much done - needs styling
login -> pretty much done - needs styling


CSS styling all over the place

User Page:
    1. Form
       get input working. 
        Parse data for google maps request.
    2. View pending request
        Job index filtered on User Id
    3. cancel request
        delete job through delete job prop.
        

Driver Page:
    1. View all requests
        render map with origin pins and data. 
    2. accept request -> Assign session user ID to driverId
    3. display accepted request on map -> filter map based off of currently accepted request if there is one.
        render map with dest and origin info instead of origin pins and data.
    4. remove request? -> remove filter and remove Driver ID from Job. -> render all requests.

Seed data:
