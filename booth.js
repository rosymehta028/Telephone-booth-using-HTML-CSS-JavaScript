CodePen Home
CSS Telephone Booth
Tanner Dolby
Unfollow

Pen Editor Menu
Sign Up
Log In
HTML
CSS
JS
Result
 
JS Options
const lightOne = document.getElementById("lightOne");
const lightTwo = document.getElementById("lightTwo");
const booth = document.getElementsByClassName("container")[0];
​
booth.addEventListener("click", () => {
  lightOne.classList.toggle("light-box");
  lightTwo.classList.toggle("light-box-copy");
});

Console
Assets
Comments

1.0×
Fork
Export
Share