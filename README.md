# CSM40kBuilder

## Project Aim
 - To be able to build 40k game lists using an app.
 - Will use vanilla JS and HTML to refresh my knowledge
 - Will test with Jest

 - Main goal of this project is to refresh my knowledge and skills on some basics I feel I have forgotten.


## Journal of Learning

- When dynamically creating elements like a list, we can add an event listener at time of creation using addEventListener. However we need to make sure we write the function as a call back otherwise if will be invoked on load.
  - The example here is addUnit/list unit - before the event listener function was behind ()=>, it was being immediately invoked.
