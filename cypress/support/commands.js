Cypress.Commands.add("addProductToCart", (productName) => { 
    cy.get('h4.card-title').each(($el,index,$list) => {
    
        const name = $el.text()
        if (name.includes(productName)) {
            cy.get('.btn.btn-info').eq(index).click().debug()
        }
    
    })
    
    })
    