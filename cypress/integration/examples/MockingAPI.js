

describe('ShoppingAnwhere', function () {




    it('XHR testing with Cypress', function () {



        cy.request('GET', 'https://dog.ceo/api/breeds/image/random', {




        }).then(function (response) {

            expect(response.body).to.have.property('status', 'success')

        })




    })
})