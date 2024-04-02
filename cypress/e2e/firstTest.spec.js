/// <reference types="cypress" />

import { onSearchPage } from "../support/pageObjects/templateSearchPage.js"
import selectors from "../support/selectors.js"

describe('First test suite', () => {

    beforeEach( 'open  template search page', () => {
        cy.visit('/maker/mydesigns/logodrafts/8bf87f2e-0afd-4621-8bc0-ab2ac015dd97/templatetypes?searchTerm=tech%20challenge')
        cy.get(selectors.searchBox).clear()
    })

    it('should display template search page', () => {
        cy.get(selectors.searchBox).should('exist')
        cy.get(selectors.Filters).should('exist')
        cy.get(selectors.resultPage).should('exist')
    })    

    it('should be able to perform search', () => {
        onSearchPage.searchTemplate('aestethics')
        cy.contains('aestethics' + ' Templates')

        onSearchPage.searchTemplate('cooking challenge')
        cy.contains('cooking challenge' + ' Templates')
    })

    it('should be able to filter search result', () => {
        onSearchPage.selectACategory('Instagram')
        cy.get(selectors.resultPage).should('not.contain', 'Facebook Post')

        onSearchPage.selectACategory('Facebook')
        cy.get(selectors.resultPage).should('contain', 'Facebook Post')
        })
    })