/// <reference types="Cypress" />

class RegistrationPage {


    getGender() {
        return cy.get('#gender-male')
    }

    getFirstName() {
        return cy.get('#FirstName')
    }

    getLastName() {
        return cy.get('#LastName')
    }

    getDayOfBirth() {
        return cy.get('select[name="DateOfBirthDay"]')
    }

    getMonthOfBirth() {
        return cy.get('select[name="DateOfBirthMonth"]')
    }

    getYearOfBirth() {
        return cy.get('select[name="DateOfBirthYear"]')
    }

    getEmailText() {
        
        
        return cy.get('#Email')
        
    }

    getCompanyName() {
        return cy.get('#Company')
    }

    getCheckBox() {
        return cy.get('#Newsletter')
    }

    getPwd() {
        return cy.get('#Password')
    }

    getConfirmPwd() {

        return cy.get('#ConfirmPassword')
    }

    getRegButton() {
        return cy.get('#register-button')
    }

}
export default RegistrationPage;