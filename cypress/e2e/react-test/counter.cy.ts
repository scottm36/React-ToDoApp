import cypress from "cypress";

describe('Counter and reset test', () => {
    it('should increment the counter', () => {
        cy.visit('http://localhost:3000');
        cy.get('button').click();
        cy.get('p').should('have.text', 'Count: 1');
    });

    it('should reset the counter', () => {
        cy.visit('http://localhost:3000');
        cy.get('button').click();
        cy.get('p').should('have.text', 'Count: 0');
    });
});