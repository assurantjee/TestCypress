/// <reference types="Cypress" />

class LandingPage {

	getRegisLink() {
		return cy.get('input[value="Register"]')
	}

	getSearchbox() {

		return cy.get('#small-searchterms')
	}

	getSearchButtton() {

		return cy.get('input[type="submit"]')
	}

}
export default LandingPage;
