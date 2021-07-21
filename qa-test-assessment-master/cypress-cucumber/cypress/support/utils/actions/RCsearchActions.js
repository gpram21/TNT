import {searchFormSelectors,searchResultsSelector } from '../Objselectors'

//Search for character/planet
export const search = (searchCriteria, searchType) => {
    cy.get(searchFormSelectors[searchType]).should('be.visible').click()
    cy.get(searchFormSelectors.searchTermEdit).type(searchCriteria)
    cy.findByTestId(searchFormSelectors.searchButton).click()
}

//Verify search results for people 
export const validatePeopleSearchResult = (numberOfResults,CharacterName,Gender,Byear,EColor,SColor) => {
    cy.findByTestId(searchResultsSelector.characterResultCard).should('have.length', numberOfResults)    
    cy.findByTestId(searchResultsSelector.characterResultCard).then(($obj, i) => {
        cy.wrap($obj[i]).findByTestId('character-name').contains(CharacterName)
        cy.wrap($obj[i]).findByTestId('character-gender').contains(Gender)
        cy.wrap($obj[i]).findByTestId('character-birthYear').contains(Byear)    
        cy.wrap($obj[i]).findByTestId('character-eyeColor').contains(EColor)
        cy.wrap($obj[i]).findByTestId('character-skinColor').contains(SColor)   
    })
}

//Verify search results for planet
export const validatePlanetSearchResult = (numberOfResults,PlName,PlPop,PlClimate,PlGravity) => {
    cy.findByTestId(searchResultsSelector.planetResultCard).then(($obj) => {
    cy.wrap($obj).should('have.length', numberOfResults)
    cy.findByTestId(searchResultsSelector.planetResultCard).then(($obj, i) => {
        cy.wrap($obj[i]).findByTestId('planet-name').contains(PlName)
        cy.wrap($obj[i]).findByTestId('planet-population').contains(PlPop)
        cy.wrap($obj[i]).findByTestId('planet-climate').contains(PlClimate)    
        cy.wrap($obj[i]).findByTestId('planet-gravity').contains(PlGravity)
    })
    })
}

export const validateNoResult = () =>{
    cy.get(searchResultsSelector.validateNoResult).contains('Not found.')
}