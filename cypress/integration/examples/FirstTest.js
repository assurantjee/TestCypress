/// <reference types="Cypress" />

describe('This is a test suite', function () {

    it('My first test case', function () {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input[type=search]').type('ca')
        cy.get('div.product:visible').should('have.length',4) //1st type of assertion

        cy.get('div.products').find('div.product').should('have.length',4) //2nd type of assertion

        //Selecting an element from an array list by hard coding the index
        cy.get('div.products').find('div.product').eq(1).contains('ADD TO CART').click()

        
        
    })


})
