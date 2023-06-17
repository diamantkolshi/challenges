# React coding challenge

## Requirements 

* Take the accompanying JSON list of films and tv seasons. 
* Display two buttons: "Films" and "TV Seasons". Films should be selected by default. 
* Display a simple list of the films by default.
* If the user clicks on "TV Seasons" the list should change to display the TV Seasons only, and the button states should change. 

## What we expect from your code

* Clean code
* Consistent style
* Extensibility
* Maintainability
* Testability

## Extra details
* No styling is needed, simple raw HTML is fine 
* No routing is needed. 
* You're welcome to use Create React App or any other tool to bootstrap your project. 
* Apart from what is included in your default setup, please don't use any extra libraries or external components (apart from testing libraries). 

Each Film element should display: 
* Name
* Description 
* Price (Buy)
* Price (Rent)

Each TV season element should display: 
* Name
* Description 
* Number of episodes
* Price (Buy)
* Price (Rent)

## Example UI 
The ui is not important or part of this challenge - any output is fine. Here is an example that just uses raw HTML output. 

https://www.dropbox.com/s/qb0r6db29ol6yw1/react_ui.png?dl=0


# Extension 

We'd like you to extend the code with a new data source, and a new feature. There is a new json file attached:

* We have learned that there are some "TV Movies" in the "tv_seasons" feed. These are "seasons" with a single episode. 
  * These are present in the TV feed, but need to be displayed in the "Films" section. 
  * They need a label saying "TV Film" added to their content 
* Release years have been added for all titles. 
  * Titles should be sorted by release year. 


# Data
Please use the data provided in [react_data.md](react_data.md)
