---
title: AngularJs to ReactJS
date: "2019-05-18"
description: A log of my expereinces and thoughts while converting and angularJS codebase to React.
---

It's been about 3 months now since I joined the team at Softbank Robotics as a Front End Engineer. I was hired with the purpose of taking an old AngularJS code base written by a contractor and begin the process of upgrading it making imporvements and migrating from AngularJS to React. 

Anytime you join a new team and step into a large codebase that you are not familar with there are challenges and a period of time where you must struggle through the code before you feel like you know what's going on. I think this experience is brought to a whole nother level when you go into that unfamilar code base ***knowing*** you're meant to throw it all out and make it new. 

It's so easy to look at other peoples code and think it's not good or that you could do better. I wanted to start off by saying that because if I've learned **ANYTHING** it's that never jump to conclusions that "this code sucks" cause soon you'll find yourself having to rewrite it under hard circumstances and realize just how difficult it can be. 

### So what did I do you might be asking? 
### How do you take and old codebase and begin to update and rewrite the whole thing? 

Well, I started the same way engineers start solving any problem they face... think you got this and start coding only to quickly realize you don't and then turn to google to see what the internet has to say. 

Well the internet has a diverse ammount of things to say and often it doesn't match your ***unique*** use case or neeeds. 

## Step One

#### Figure out how you are going to go about the write process. 

For me and I'm pretty certain most engineers as well, I didn't have the option to spend a 100% of my time working on a complete rewrite. There were new features that needed to be built and quickly approaching deadlines all the while old code that was a hassel to write. 

Therefore the answer I came up with was to build any new features in React while maintaining the curreent code base in AngularJS and whith any spare time I had begin to refactor out the AngularJS code into React code. 

## Step Two

#### Add React Code to Angular JS Code

Luckily for me my angularJS codebase had went through a start of trying to break things down into reusable components and the pages where pretty well split up. So I recived a new feature that needed to be added to the site.