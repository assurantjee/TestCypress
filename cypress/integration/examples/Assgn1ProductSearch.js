/// <reference types="Cypress" />

import LandingPage from '../../support/pageObjects/LandingPage'
import ProductSummaryPage from '../../support/pageObjects/ProductSummaryPage'
import ProductDetailsPage from '../../support/pageObjects/ProductDetailsPage'
import ShoppingCartPage from '../../support/pageObjects/ShoppingCartPage'

describe('ShoppingAnwhere', function () {

    before(() =>{

        cy.fixture('example').then(function(data){

            this.data=data
        })

        
    })
    it('Product search and add to cart functionality', function () {
        const landingPage = new LandingPage()
        const productSummary = new ProductSummaryPage()
        const productDetail = new ProductDetailsPage()
        const shoppingCart = new ShoppingCartPage()
        cy.visit(Cypress.env('url'))
        landingPage.getSearchbox().type(this.data.product)
        landingPage.getSearchButtton().click()
        productSummary.getProduct().click()
        productDetail.getQtyBox().clear().type('2')
        productDetail.getAddToCartBtn().click()
        productDetail.getCartLink().click()
        cy.wait(3000)
        shoppingCart.getPriceText().should('have.text', '$1,000.00')

    })

    it('Registration functionality', function () {

        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')
        cy.get('input[value="Register"]').click()
        cy.get('#gender-male').check()
        cy.get('#FirstName').type('Tarun')
        cy.get('#LastName').type('Tarun')
        cy.get('select[name="DateOfBirthDay"]').select('15')
        cy.get('select[name="DateOfBirthMonth"]').select('March')
        cy.get('select[name="DateOfBirthYear"]').select('1992')
        const name = 'ABC'
        var randomNumber = name + Math.random()
        cy.get('#Email').type(randomNumber + '@gmail.com')
        cy.get('#Company').type('Tarun')
        cy.get('#Newsletter').uncheck()
        cy.get('#Password').type('Test@123')
        cy.get('#ConfirmPassword').type('Test@123')
        cy.get('#register-button').click()
        cy.get('.result').should('be.visible')

    })

    it('Login functionality', function () {

        cy.log(randomNumber)

    })


})
