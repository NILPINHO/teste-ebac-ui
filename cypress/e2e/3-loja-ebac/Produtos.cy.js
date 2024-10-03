/// <reference types="cypress"/>

describe('Funcionalidade:Produto', () => {

    beforeEach(() => {
    cy.visit('produtos')
    });
    it('Deve selecionar produto da lista', () => { 
        cy.get('.product')
        //.first()
        //.last()
        //.eq(2)
        .contains('Abominable Hoodie')
        
        .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });
});