	/// <reference types="Cypress" />
	
	class LandingPage {
	
	    getSearchbox(){
	
	        return cy.get('#small-searchterms')
	    }
	
	    getSearchButtton(){
	
	        return cy.get('input[type="submit"]')
	    }
	
	}
	export default LandingPage;
