

describe('ShoppingAnwhere', function () {




    it('XHR testing with Cypress without invloving browser', function () {



        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1', {
        }).then(function (response) {

            expect(response.body).to.have.property('userId', 1)

        })



    })
})