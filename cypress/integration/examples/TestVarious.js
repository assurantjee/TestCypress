/// <reference types="Cypress" />

describe('This is a test suite', function () {

    it('My first test case', function () {

        //handle and assert Checkboxes

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption3').check().should('be.checked')

        //handle and assert Radio Buttons

        cy.get('input[value="radio1"]').click().should('be.checked')
        cy.log('Radio button is selected')

        //handle and assert static dropdowns
        
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')

        //handle and assert dynamic dropdowns

        cy.get('#autocomplete').type('new')

        cy.get('.ui-menu-item div').each(($el,index,$list) => {
           
            if ($el.text() === 'New Zealand') {

                cy.wrap($el).click()
                
            }

            

        })
        
        
    })

})
