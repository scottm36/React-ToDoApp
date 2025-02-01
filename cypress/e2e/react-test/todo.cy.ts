import cypress from "cypress";

describe('Counter and reset test', () => {
    it('should increment the counter', () => {
        cy.visit('http://localhost:5173');
        cy.get('[data-cy="list-item"]').should('have.length', 4);
        cy.get('input[data-cy="new-item"]').type('Test Item');
        cy.get('button[data-cy="add-item"]').click();
        cy.get('[data-cy="list-item"]').should('have.length', 5);
        cy.get(':nth-child(5) > .list-item-text').should('have.text', 'Test Item');
    });

});

