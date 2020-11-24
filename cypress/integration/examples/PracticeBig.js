/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
describe('TestBig', function() {

    before(function(){

        cy.fixture('example').then(function(data){

            this.data=data
        })

        
    })
    it('FillViaParam', function() {
        const homePage = new HomePage() 
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
       
        homePage.getName().type(this.data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-pristine').should('have.value',this.data.name)
        cy.get(':nth-child(2) > .nav-link').click()
       
        this.data.products.forEach((element) => {

                cy.addProductToCart(element)
                cy.log(element)

            });

    })

    }) 
