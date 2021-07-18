// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 

import SearchPage from '../integration/Fedex/pageoObjects/SearchPage.js'


Cypress.Commands.add('SearchType', (Srchtype,SrchCriteria) => {    
    const srchPage = new  SearchPage()
    cy.get('#'+ Srchtype).click()
    srchPage.getEditBox().type(SrchCriteria)       
    srchPage.getButton().click()
 })

 
Cypress.Commands.add('VerifyResult', (Value1,Value2,Value3,Value4,Srchtype) => {  
    const srchPage = new SearchPage() 
//    Cypress.Commands.add('VerifyResult', (Value) => {   
    let values = []    
    
    if(Srchtype=='people')  
        srchPage.getCharacterResult()
        .find('div.row')
        .each(($el, $index) => {
        cy.wrap($el)
        .invoke('text')
        .then(text => {
        cy.log(text.trim())
        values.push(text.trim())
        })
        })
        .then(() => expect(values).to.deep
        .eq([Value1,Value2,Value3,Value4]))  
    else                
        srchPage.getPlanetsResult()
        .find('div.row')
        .each(($el, $index) => {
        cy.wrap($el)
        .invoke('text')
        .then(text => {
        cy.log(text.trim())
        values.push(text.trim())
        })
        })
        .then(() => expect(values).to.deep
        .eq([Value1,Value2,Value3]))       
 })

 Cypress.Commands.add('VerifyEmptyResult', (Value1) => {   
    cy.get('.col > :nth-child(5)').should('have.text', Value1)       

 })





