# Github's Repo Search

### `npm run start:fresh` 
This should download all the modules, build thgen start the app in your browser.
### `npm run start` 
This will start up the app.
### `npm run test` 
This will run all the jest and enzyme tests.

### General Information
#### This is a very simple app the takes a query or name, and returns all the public github 
#### repositories for that account. 

### Technologies
#### I used Apollo-client and Apollo-boots("hooks") to leverage Github's API's, React as my
#### framework and Redux for state management and time-travel(Not finished) 

### Styling
#### Theme switching and styling were done using styled-components

### Testing
#### For testing coverage I used Jest ad Enzyme 

### Unfinished Part
#### I began adding some pagination, so the user can filter through the results
#### quickly if there are numerous. I also connected extra redux middle-ware in case
#### a user  wanted to use the pagination and travel back to a previous state using the
#### Back button.