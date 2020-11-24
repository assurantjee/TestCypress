/// <reference types="Cypress" />

class ProductDetailsPage {

    getQtyBox() {

        return cy.get('#product_enteredQuantity_3')
    }

    getAddToCartBtn() {
        return cy.get('#add-to-cart-button-3')
    }

    getCartLink() {

        return cy.get('#topcartlink')
    }

}
export default ProductDetailsPage;
