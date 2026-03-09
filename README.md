# Scroll Curtain Reveal Animation

A cinematic scroll based animation built using **HTML, CSS, and Vanilla
JavaScript**. This project demonstrates how scroll driven interactions
can create an engaging storytelling experience on the web.

The page begins with a **heart shaped curtain** covering the screen. As
the user scrolls, the curtain splits open revealing an image that
gradually zooms out. Once the zoom animation finishes, the curtain and
title move upward and the main content section becomes visible.

This type of animation is commonly used in modern landing pages and
interactive storytelling websites.

------------------------------------------------------------------------

# Demo Flow

The animation sequence works like this:

1.  Heart curtain covers the screen.
2.  User scrolls.
3.  Heart curtain splits open from the center.
4.  Background image begins zoomed in.
5.  Image slowly zooms out as scrolling continues.
6.  Curtain and title move upward.
7.  Content section appears.

------------------------------------------------------------------------

# Features

Scroll controlled curtain reveal animation\
Zoom out image animation based on scroll position\
Sticky hero section for cinematic effect\
Gradient styled title text\
Smooth transform based animations\
Responsive layout for desktop tablet and mobile

------------------------------------------------------------------------

# Technologies Used

HTML5 for page structure\
CSS3 for layout styling gradients and responsive design\
Vanilla JavaScript for scroll driven animation logic

------------------------------------------------------------------------

# How The Animation Works

## 1. Curtain Reveal

Two curtain elements are placed on the left and right sides of the
screen.

When the user scrolls, JavaScript moves both curtains in opposite
directions.

Example logic

left curtain moves left\
right curtain moves right

This creates the illusion of a curtain opening from the center.

------------------------------------------------------------------------

## 2. Scroll Controlled Image Zoom

The hero image starts zoomed in using CSS transform.

Initial scale

scale 3

As the user scrolls, JavaScript calculates the scroll progress and
gradually reduces the scale value until the image becomes fully visible.

------------------------------------------------------------------------

## 3. Moving Title And Curtain

After the zoom animation finishes, the curtain and title move upward
with the scroll.

This creates a smooth transition between the hero animation and the
content section.

------------------------------------------------------------------------

# Project Structure

    project-folder

    index.html
    style.css
    script.js

    assets
       olivia.jpg
       heart.png

index.html contains the structure of the page\
style.css contains all styling and responsive layout\
script.js controls the animation logic

------------------------------------------------------------------------

# Setup Instructions

1.  Clone the repository or download the project files.

2.  Ensure the following structure exists

index.html\
style.css\
script.js\
assets folder containing images

3.  Open index.html in a browser.

No additional libraries or build tools are required.

------------------------------------------------------------------------

# Key CSS Concepts Used

Position sticky for hero image\
Position fixed for curtain animation\
CSS gradients for background and title styling\
Transform scale animations\
Responsive media queries

------------------------------------------------------------------------

# Key JavaScript Concepts Used

Scroll event listener\
DOM element selection\
Dynamic transform manipulation\
Scroll progress based animation

------------------------------------------------------------------------

# Responsive Design

The layout adjusts automatically for different screen sizes.

Tablet adjustments include smaller titles and reduced padding.

Mobile adjustments include smaller image scale values reduced hero
height and improved text readability.

------------------------------------------------------------------------

# Possible Improvements

Add smooth easing using requestAnimationFrame\
Add text reveal animations when content appears\
Add multiple layered images for parallax depth\
Optimize animation performance for mobile devices

------------------------------------------------------------------------

# Author

Adnan Ashraf

Frontend development learner building interactive web interfaces using
modern web technologies.

------------------------------------------------------------------------

# License

This project is free to use for learning experimentation and personal
projects.
