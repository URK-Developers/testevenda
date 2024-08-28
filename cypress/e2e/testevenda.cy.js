/// <reference types= "cypress" />

describe ('Tela Login e Venda', () => {
    it ('Deve inserir usuario, senha e realizar o login e venda com sucesso', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get('.fa-layers-counter').click()
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Natália')
        cy.get('[data-test="lastName"]').type('Vansolini')
        cy.get('[data-test="postalCode"]').type('09580780')
        cy.get('.btn_primary').click()
        cy.get('.btn_action').click()
    
    })

   
})

