# ScrapGaming
Gaming related articles all piled into one easy to read website

## ====Summary====

I enjoy reading about gaming related news articles and thought it would be fun to get the articles from a gaming related website from 
howtogeek/t/gaming.It's nice not having to trudge around in the ad space and just see the information you want.  

## ====Technologies Used====
"axios": "^0.18.0",
"cheerio": "^1.0.0-rc.2",
"express": "^4.16.4",
"express-handlebars": "^3.0.0",
"mongoose": "^5.4.1",
"path": "^0.12.7"

## ====Building It====

Firstly, started by creating the server adding all the dependencies for it. 
Then started working on the model's one blueprint for making the Article object and the other for the comments/notes
Afterwards, I ran the routing system that linked the handlebar pages to the routing.js file. 
I then had to look up a lot of the handlebars material linking mongo and handlebars.

## ====Troubles====
Yeah I hate writing these
I tried my best but I couldn't figure out how to link the note's to the articles and how to save the articles to another page.
I'm pretty sure I had to add something in the update that told mongoose/mongo to get the article id and insert the note into it,
I never figured it out however. Maybe I could get some insight on what I did wrong later on? I would appreciate the corrections
So that I know what not to do.
