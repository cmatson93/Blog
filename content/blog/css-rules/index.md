---
title: CSS Rules? 
date: "2019-07-28T23:12:03.284Z"
---

## CSS has rules??? 

Spent my evening reading about some best practices when working with css. One of my larger unexpected challenges when dealing with this refactoring of my code base at work is styling issues. How to maintain large ammounts of CSS that you didn't wrtie while also writing new css and editing old things. 

A few helpful things that are baked into the codebase already is the usage of SASS. All the stylesheets are split up according to pages and different components for the most part. Wtih nested styles targeting all the different accepects of the corresponding markup. 

But the difficulties have come with all the classes and css that goes with those classes. As well as the angular component libraries that they are using that bring in their own styles I don't know about... Just recently my designer came to me asking why all the input labels spacing increased. I didn't know why myself, it's not a class or style that I thought I had touched recently. Did it just change in the past week or has it been a month and we're just noticing? Either way I still didn't know how it happened. 

Each time I come accross an issue such as this I try to think of a better way to write my future code so I don't cause this headache for others down the road including myself. I read a quote today from Harry Roberts that said, "We lack confidence to be able to work with and modify existing styles because we fear the consequences of CSS' globally operating and leaky nature." That resogated greatly with me as I have often been afraid to make a change that will have global effects without me noticing. 

In comes BEM, BEM stands for Block Element Modifier. It's meant to provide a set of rules for html and css developers to use when writing classes and styles that will be applied to those classes. I won't go into detail about just what those conventions are as you have acess to the internet just as well as I did. But what I will say is it's definitly something I am going to begin to start implementing in a few projects and get a feel for if it helps my html and css scale to be better understandable or not. 

