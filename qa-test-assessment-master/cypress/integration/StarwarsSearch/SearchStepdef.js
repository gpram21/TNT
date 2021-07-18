import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import SearchPage from '../Fedex/pageoObjects/SearchPage.js'


Given('I navigate to StarWarssearchpage', () => {
  cy.visit('http://localhost:4200/')
})

When('I search for {string} as {string}', function(SrchCriteria,Srchtype)  {
    const srchPage = new  SearchPage()
    cy.get('#'+ Srchtype).click()
    srchPage.getEditBox().clear()
    if(SrchCriteria != '')
        srchPage.getEditBox().type(SrchCriteria)       
    srchPage.getButton().click()
  })

Then('I see details {string} and {string} and {string} and {string} and {string}', function(R1,R2,R3,R4,seacrhType)  {
    cy.VerifyResult(R1,R2,R3,R4,seacrhType)    
})

Then('I see no result {string}', function(R1)  {
    cy.VerifyEmptyResult(R1)    
})

Then('I see results1 {string} and {string} and {string} and {string}', function(R1,R2,R3,R4)  {
    let values_set1 = []

    cy.pause

    cy.get(':nth-child(1) > app-character > .card > .card-body')
    .find('div.row')
    .each(($el, $index) => {
       cy.wrap($el)
        .invoke('text')
        .then(text => {
            cy.log(text.trim())
            values_set1.push(text.trim())
            })
         })
        .then(() => expect(values_set1).to.deep
        .eq([R1,R2,R3,R4]))  
        
       })

And('I see results2 {string} and {string} and {string} and {string}', function(R5,R6,R7,R8)  {
    let values_set2 = []
    cy.pause
    cy.get(':nth-child(2) > app-character > .card > .card-body')                
    .find('div.row')
    .each(($el1, $index) => {
       cy.wrap($el1)
        .invoke('text')
        .then(text => {    
            cy.log(text.trim())
            values_set2.push(text.trim())
            })
         })
        .then(() => expect(values_set2).to.deep
        //.eq(["male","54BBY","yellow","red"]))          
        .eq([R5,R6,R7,R8]))  
    
    })
    
    