import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import SearchPage from '../Fedex/pageoObjects/SearchPage.js'
/// <reference types="Cypress" />


Given('I navigate to StarWarssearchpage', () => {
  cy.visit(Cypress.env('url')) 
})

When('I search for {string} as {string}', function(SrchCriteria,Srchtype)  {
    const srchPage = new  SearchPage()
    cy.get('#'+ Srchtype).then(($text) => {
        
    })
    //wait for the page to be loaded and select the search type
    cy.get('#'+ Srchtype).should('be.visible').then((rdButton) => {
    rdButton.click() })
    
    //There are scenarios where we switch between people and planet search, let's clear the etxt first
    srchPage.getEditBox().clear()
    //If the feature sends an empty string, handle it
    if(SrchCriteria != '')
        srchPage.getEditBox().type(SrchCriteria)     
    //Click on the search button  
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
    
    