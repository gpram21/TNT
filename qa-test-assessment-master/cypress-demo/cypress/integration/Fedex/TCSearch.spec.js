/// <reference types="cypress" />
import { searchFormSelectors } from '../../../../cypress-cucumber/cypress/support/utils/Objselectors'
import {search, validateNoResult, validatePeopleSearchResult, validatePlanetSearchResult} from '../../support/utils/actions/RCsearchActions'
import { searchResultsSelector } from '../../support/utils/Objselectors'

describe('Verify the seach results of star wars characters and planets', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('TestData').then(function (data) {
        this.data = data
    })
  })

  


  it('verify people search', function() {
    search(this.data[0].character, "peopleRadio")
    validatePeopleSearchResult(1,this.data[0].character,this.data[0].Gender,this.data[0].BirthYear,this.data[0].EyeColor,this.data[0].SkinColor)
  })

  it('verify planets search', function() {
    search(this.data[1].PlanetName, "planetRadio")
    validatePlanetSearchResult(1,this.data[1].PlanetName,this.data[1].PlanetPopulation,this.data[1].PlanetClimate,this.data[1].PlanetGravity)

  })

 //Search for a valid people name which will lead to no result
  it('verify people search leading to no result', function() {
    search("Test", "peopleRadio")
    cy.get(searchResultsSelector.noresult).should('have.text', 'Not found.')   
  })
  
  //Search for a valid people name which will lead to multiple result
  it('verify people search leading to  multiple results', function() {
    search(this.data[2].character, "peopleRadio")
    validatePeopleSearchResult(2,this.data[2].character1,this.data[2].Gender1,this.data[2].BirthYear1,this.data[2].EyeColor1,this.data[2].SkinColor1)
    validatePeopleSearchResult(2,this.data[2].character2,this.data[2].Gender2,this.data[2].BirthYear2,this.data[2].EyeColor2,this.data[2].SkinColor2)
  })

  //Search for a valid people name and switch to planet and search for an invalid value
  it('Switch between people and planet search', function() {
    search(this.data[0].character, "peopleRadio")
    validatePeopleSearchResult(1,this.data[0].character,this.data[0].Gender,this.data[0].BirthYear,this.data[0].EyeColor,this.data[0].SkinColor)
    search('X', "planetRadio")
    cy.get(searchResultsSelector.noresult).should('have.text', 'Not found.')       
  })  
 

  /* When for example you have searched for a full planet name and you’ve got results, 
  if you switch to People and search for the same thing (that has no matching people based on a partial name), 
  you should get a “Not found” in the results.
   */it('Switch between people and planet search. Verify if the results are cleared', function() {
    search(this.data[0].character, "peopleRadio")
    validatePeopleSearchResult(1,this.data[0].character,this.data[0].Gender,this.data[0].BirthYear,this.data[0].EyeColor,this.data[0].SkinColor)
    cy.get(searchFormSelectors.searchTermEdit).clear()
    cy.findByTestId(searchFormSelectors.searchButton).click()
    cy.get(searchResultsSelector.noresult).should('have.text', 'Not found.')       
  }) 

})
