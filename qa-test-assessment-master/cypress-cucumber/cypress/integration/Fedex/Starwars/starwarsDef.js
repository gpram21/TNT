
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import {search, validateNoResult, validatePeopleSearchResult, validatePlanetSearchResult} from '../../../support/utils/actions/RCsearchActions'
import { searchResultsSelector } from '../../../support/utils/Objselectors'

/// <reference types="Cypress" />

Given('I navigate to StarWarssearchpage', () => {
    cy.visit('/')
  })


  When('I search for {string} as {string}', function(SrchCriteria,Srchtype)  {
    search(SrchCriteria, Srchtype)
  })
  
  Then('I see peopledetails {string} and {string} and {string} and {string} and {string} and {string}', function(Name,R1,R2,R3,R4,searchType)  {
    validatePeopleSearchResult(1,Name,R1,R2,R3,R4)
  })
  
  Then('I see planetdetails {string} and {string} and {string} and {string} and {string}', function(Name,R1,R2,R3,searchType)  {
    validatePlanetSearchResult(1,Name,R1,R2,R3)
  })

  
