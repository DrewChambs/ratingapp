# ratingapp

Frontend Mentor rating application

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

## My process

I started the process by first creating the HTML with a container class to constrain
the application within the center of the page.
Since the application needed to span multiple devices, I used a mobile-first approach
to creating it.
I started with a lesser screen width than the 375px from the style-guide. With this approach
I could create a truly responsive and expandable application.
After centering the contents on the page, I added a container for the application itself.
This would ensure that the application remains central once again. Consideration had to
go into how CSS would control main content placement.
An "app" class was the main container class that would be re-used for the second screen. the
"Thank you!" screen.

Using a top-down methodology the next section to tackle was the number container.
I used the button element for the number buttons and the submit button. The number
container was important because the buttons needed to span the width of the application,
yet they needed to be evenly spaced.
Thinking about the spacing I thought using Flexbox would allow
me to accomplish this so a container div was important. And so it proved.
Using flexbox I used "justify-content: space-between" to ensure that the buttons
would space adequately as the screen size was changed.
I didn't include the submit button in the button container because it needed to span the width
of the application. To accomplish this I added a width of 100% to the button.

Once the main app HTML was finished the next step was to tackle the CSS before moving on to code the
thank you screen.
The second (thank you) screen didn't require as much HTML so the idea was to complete the opening
screen for the app then move on to the second screen.
I controlled the CSS to such a degree that it could also be used for the thank you screen.
I used a section element as an outer casing so that it could be collapsed to a height of
"0" and re-introduced with an Event Listener in JavaScript. This would complete the effect of a
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
