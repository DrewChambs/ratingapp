# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# ratingapp

Frontend Mentor rating application

## Table of contents

- Overview
- The challenge
- Screenshot- Located in images folder
- Links
- My process
- Built with
- What I learned
- Continued development
- Author - Andrew Chambers

## Overview

The challenge is to create a rating app that allows the user to leave a number rating.
The app has a selection of 5 buttons, one for each rating score. The user selects a rating,
and clicks a submit button to declare their rating choice.
Once the submit button is clicked, a thank you display screen appears and confirms the user's
choice.

### The challenge

- A confirmation says "You selected (4) out of 5", with the number in parentheses displaying
  the user's selection.
  There are various states that come into play such as:
- Highlighting user's selection before the submit button is pressed.
- Hover-state on selection choices and the submit button.

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

<!-- Main screen-shot -->

![](/images/rating_screenshot.png)

<!-- Thank you screen -->

![](/images/rating_thankyou.png)

### Links

- Live Site URL: https://drewchambs.github.io/ratingapp/

## My process

I started the process by first creating the HTML with a container class to constrain
the application within the center of the page.
Since the application needed to span multiple devices, I used a mobile-first approach
in creating it.
I started with a lesser screen width than the 375px from the style-guide. With this approach
I could create a truly responsive and expandable application.
After centering the contents on the page, I added a container for the application itself.
This would ensure that the application remains central once again.
Consideration had to go into how CSS would control main content placement.
An "app" class was the main container class that would be re-used for the second screen. the
"Thank you!" screen.

Using a top-down methodology the next section to tackle was the number container.
I used the button element for the number buttons and the submit button.
The number container was important because the buttons needed to span the width of the application,
yet they needed to be evenly spaced.
Thinking about the spacing I thought using Flexbox would allow
me to accomplish this so a container div was important. And so it proved.
Applying flexbox, I used "justify-content: space-between" to ensure that the buttons
would space adequately as the screen size was changed.
I didn't include the submit button in the button container because it needed to span the width
of the application. To accomplish this I added a width of 100% to the button.

Once the main app HTML was finished the next step was to tackle the CSS before moving on to code the
thank you screen.
The second (thank you) screen didn't require as much HTML so the idea was to complete the opening
screen for the app then move on to the second screen.
I controlled the CSS to such a degree that it could also be used for the thank you screen.
I used a section element as an outer casing so that it could be collapsed to a height of
"0" and be re-introduced with an Event Listener in JavaScript. This would complete the effect of a
changing screen.

### Built with

I built this application in VS Code with the use of HTML, CSS, and JavaScript.

- HTML5 markup
- CSS custom properties
- JavaScript
- ES6
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how useful an Event listener could be when I found I could add/remove a certain class that
controlled the display of a certain element. That was the key to allowing the application to behave
as a normal disappearing/thank you screen upon user selection.

### Continued development

I think more projects moving forward is the way to go for me. This was an excellent exercise to gauge where I was
in my JavaScript learning process. Repetition is the key from where I am now. I've discovered that I know a good few things about
the core HTML, CSS, and JavaScript, and the next step is the application of everything I've learned so far.
I do need to focus on more advanced topics within JavaScript, and a good way to start that process is to look into
re-factoring the code for this application.

## Author

Andrew Chambers

- Website - Coming Soon!
