/// <reference types="cypress"/>

describe('funcionalidade: login', () =>{
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('nilmapinhoteste2@hotmail.com')
        cy.get('#password').type('teste123#')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, nilmapinhoteste2 (não é nilmapinhoteste2? Sair)')

    })
     it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('nilmapinhotestet@hotmail.com')
        cy.get('#password').type('teste123#')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    
    });
   
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('nilmapinhoteste2@hotmail.com')
        cy.get('#password').type('teste123o')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail nilmapinhoteste2@hotmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')

        
    });
    

})

