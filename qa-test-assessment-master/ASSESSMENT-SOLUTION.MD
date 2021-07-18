# QA Engineer Assessment Solution
Name: Prabhuram Govindarajan, prabhuramchennai@gmail.com, 0629210741

## Introduction
The assignment has been completed using Cypress and cucumber. Following 2 approaches are included:
1. Using BDD/Gherkin to define the scenarios with data included (StarwarsSearch.feature in integration folder)
2. Modular scripts created with page objects, reusable components and test data(json) (Fedex in integration folder)


Please follow the below steps to execute the scripts:
1. Perform a npm update. command: "npm update" in the VS code terminal.
2. ng serve to load the application (needs protractor CLI - Command: npm install -g @angular/cli).
3. Execute the below command to run the scripts.
node_modules\.bin\cypress run --spec cypress\integration\StarwarsSearch.feature.
4. There are 4 scenarios (8 test cases) and 1 failure.
5. Results will be here "reports\cucumber-htmlreport.html\index.html"

Findings/remarks:
1. The following scenario fails:
    a. User searches for a character, this gives correct results.
    b. User changes the radio button to planets.
    c. clears the textbox and hit the search button.
    d. Previous search result is not cleared.

2. The user hits a space in the search editbox and click search button, this gives the list of all characters. This should give an error message, as this will give unneccesary load on the system.

3. Search.js could also be executed separately(without cucumber).

## Remarks 
Even though 2 approaches are included, Cucumber/Gherkin way of working is recommended. Also, the tests can be performed through APIs which are faster & maintainable than a UI based tests. Usually a combination is beneficial.
