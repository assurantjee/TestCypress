/// <reference types="Cypress" />

Cypress.Commands.add("addProductToCart", (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) => {

        const name = $el.text()
        if (name.includes(productName)) {
            cy.get('.btn.btn-info').eq(index).click().debug()
        }

    })

})

Cypress.Commands.add('login', (email, pwd) => {


    cy.visit(Cypress.env('url2'))
    cy.get('.email').type(email)
    cy.get('.password').type(pwd)
    cy.get("input[class*='login-button']").click()

})
