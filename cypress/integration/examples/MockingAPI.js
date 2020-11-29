

describe('XHR Testing', function () {




    it('Mocking API with stub response', function () {

        let message = 'whoa, this comment does not exist'
      cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method: 'PUT',
            url: '**/comments/*',
          }, {
            statusCode: 404,
            body: { error: message },
            headers: { 'access-control-allow-origin': '*' },
            delayMs: 500,
          }).as('putComment')
       
          cy.get('.network-put').click()     
          cy.wait('@putComment')
          cy.get('.network-put-comment').should('contain', message)

       



    })
})