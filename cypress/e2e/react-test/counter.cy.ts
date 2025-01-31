import cypress from "cypress";

describe('Counter and reset test', () => {
    it('should increment the counter', () => {
        cy.visit('http://localhost:5173');
        cy.get('button[data-cy="increment"]').click();
        cy.get('button[data-cy="increment"]').should('have.text', 'count is 1');
    });

    it('should reset the counter', () => {
        cy.visit('http://localhost:5173');
        cy.get('button[data-cy="reset"]').click();
        cy.get('button[data-cy="increment"]').should('have.text', 'count is 0');
    });

    it('should have the correct title', () => {
        cy.visit('http://localhost:5173');
        cy.get('h1[data-cy="title"]').should('have.text', 'Vite + React');
    });
});

