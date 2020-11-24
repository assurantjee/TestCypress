/// <reference types="Cypress" />

class ProductSummaryPage {

    getProduct(){

      return  cy.get(':nth-child(1) > .product-item > .picture > a > img')
    }

    

}
export default ProductSummaryPage;
