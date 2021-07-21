# QA Engineer Assessment Solution
Name: Prabhuram Govindarajan, prabhuramchennai@gmail.com, 0629210741

## Introduction
The assignment has been completed using Cypress and cucumber. Following 2 approaches are included:
1. Modular scripts with selectors and reusable actions separated - without cucumber (6 test cases)
    a. Test scripts: cypress-demo\cypress\integration\Fedex\TCSearch.spec.js
    b. reusable actions: cypress-demo\cypress\support\utils\actions\RCsearchActions.js
    c. Selectors(objects): cypress-demo\cypress\support\utils\Objselectors.js
2. Using cucumber to define the scenarios with data included (2 test cases)
    a. Feature files: cypress-cucumber\cypress\integration\Fedex\Starwars.feature
    b. Step definitions: cypress-cucumber\cypress\integration\Fedex\Starwars\starwarsDef.js

3. The objects in the application are prone to change, I have added test objects in the "application code" to make the scripts more robust. The changes are made in following 2 files:
    # a. src\app\components\planet\planet.component.html - testid= '' has been added to many objects
    # b. src\app\components\character\character.component.html - testid= '' has been added to many objects
    These have been mapped with the selectors in cypress-demo\cypress\support\utils\Objselectors.js

## To execute
Please follow the below steps to execute the scripts:
1. Perform a npm update. command: "npm update" in the VS code terminal.
2. ng serve to load the application (needs protractor CLI - Command: npm install -g @angular/cli).
3. Execute the below command to run the scripts.
    Cypress without cucumber: cypress-demo and use npx cypress run
    Cucumber: Got to directory: cypress-cucumber and use npx cypress run 
4. There will be one failure as the application doesn't meet the requirement. This is a defect.
    a. User searches for a character, this gives correct results.
    b. User changes the radio button to planets.
    c. clears the textbox and hit the search button.
    d. Previous search result is not cleared.


## Remarks 
1. The objects in the application needs a better definition
2. Functionally, when the user hits a space in the search editbox and click search button, this gives the list of all characters. This should give an error message, as this will give unneccesary load on the system.

## Recommendation
Out of the 2 approaches, cucumber way of working will be useful when business is really involved, if these are scripts that will be used between a develope & SDET Cypress withoiut cucumber is recommended.