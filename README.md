# Challenge: Dice Roller

## Goal
- As a user I can click on the image of a dice
- Every time I click on the dice, I see a new roll

## Process

### Set Up
- Create a new react app and remove any unnecessary boiler plate code
- Add directory to src file for images
- Add directory to src file for components
- Add Board.js to the component directory and import to App.js

### Board logic
- Import dice images to Board component
- Add a constructor method and a state object with the dice images in an array and current roll value
- Add an image tag to the render method to display one image from the array
- Add a method called handleClick to rotate the dice image

### Dice logic
- Break out the Dice into its own component
- Add Board.js to the component directory and import to Board.js
- Move the image tag containing the onClick event into the Dice render div
- Call the Dice component in the Board render div
- Pass the values for onClick and image as props to the Dice component as variables
- Destructure the variables out of props
