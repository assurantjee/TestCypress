	/// <reference types="Cypress" />
	
	class ShoppingCartPage {
	
	    getPriceText(){
	
	      return  cy.get('tr td:nth-child(7) >span.product-subtotal')
	    }
	
	    
	
	}
	export default ShoppingCartPage;
