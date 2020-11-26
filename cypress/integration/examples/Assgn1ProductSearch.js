/// <reference types="Cypress" />

import LandingPage from '../../support/pageObjects/LandingPage'
import ProductSummaryPage from '../../support/pageObjects/ProductSummaryPage'
import ProductDetailsPage from '../../support/pageObjects/ProductDetailsPage'
import ShoppingCartPage from '../../support/pageObjects/ShoppingCartPage'
import RegistrationPage from '../../support/pageObjects/RegistrationPage'
import SuccessPage from '../../support/pageObjects/SuccessPage'


describe('ShoppingAnwhere', function () {

    beforeEach(() => {

        cy.fixture('example').then(function (data) {

            this.data = data
        })
        
    })
    it('Product search and add to cart functionality', function () {
        const landingPage = new LandingPage()
        const productSummary = new ProductSummaryPage()
        const productDetail = new ProductDetailsPage()
        const shoppingCart = new ShoppingCartPage()

        cy.visit(Cypress.env('url1'))
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
        const landingPage = new LandingPage()
        const registration = new RegistrationPage()
        const success = new SuccessPage()
        cy.visit(Cypress.env('url2'))
        landingPage.getRegisLink().click()
        registration.getGender().check()
        registration.getFirstName().type(this.data.firstName)
        registration.getLastName().type(this.data.lastName)
        var dob=this.data.DOB
        var splittedDob=dob.split("/")
        registration.getDayOfBirth().select(splittedDob[0])
        registration.getMonthOfBirth().select(splittedDob[1])
        registration.getYearOfBirth().select(splittedDob[2])
        var randomNumber = 'ABC' + Math.random()

        registration.getEmailText().type(randomNumber+'@gmail.com')

        registration.getCompanyName().type(this.data.companyName)
        registration.getCheckBox().uncheck()
        registration.getPwd().type(this.data.password)
        registration.getConfirmPwd().type(this.data.password)
        registration.getRegButton().click()
        success.getSuccessMessage().should('have.text','Your registration completed')
    })

     it('Login functionality', function () { 

        cy.login(this.data.email,this.data.password)


     })


})
