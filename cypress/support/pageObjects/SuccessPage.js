/// <reference types="Cypress" />

class SuccessPage {


    getSuccessMessage(){

        return cy.get('.result')
    }
}
export default SuccessPage;