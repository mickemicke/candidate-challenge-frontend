# Candidate Challenge - Frontend Developer
![Kaustik logo](https://seeklogo.com/images/K/Kaustik-logo-D9A629CE32-seeklogo.com.gif)

This repository aims to describe the candidate challenge for Kaustik's frontend applicants.



## Background
Kaustik's APP team is responsible for developing and maintaining the company's products visual and behavioural aspects. This includes Kaustik's frontend code and assets, even some rendering related backend tasks.

We assume a good handling of HTML, CSS, JavaScript and some fundamental knowledge on modern JavaScript frameworks, React above all.


### Technical stack 

Kaustik's frontend stack is built upon the following technologies:

* React
* TypeScript
* Jest + React Testing Library test suite
* Material UI CSS Frameworks 
* Webpack

Use of the above tools is encouraged but not required.



## The Challenge 
As Kaustik's products are centered around the scheduling and planning of human resources, we think it is paramount to be comfortable with logical implementations for date and time. Therefore, this is the core task of the challenge.


### Instructions
Clone this repository to your local machine. You will be provided with an API endpoint from Kaustik that includes data with some events that you will use for this challenge.

Your task is to create entities based on each event and present them on the page. If an event passes over midnight (00:00), the event should be split into two entities. 

We would also like to see at least one test for a component, written in the JavaScript testing framework of your choice.

We leave the implementation details open ended as we would like to leave the instructions open for interpretation and creativity. 

*Documentation for the API endpoint is available here: https://crudcrud.com/*


### Assessment
We base the quality of your solution on these four factors:

1. Retrieval and management of data
2. State management
3. Separation of concerns (presentational and logical layers)
4. UX and Design



## Bonus challenge (optional)

### Posting Event Data
As the core challenge only asserts skill in consuming API resources,  we would also like to see event data being persisted. Use the endpoint provided above to post new events.


**Note**: As posting event data is a bonus challenge, do not worry about it if the rest of the criteria does not feel sufficient to you.
