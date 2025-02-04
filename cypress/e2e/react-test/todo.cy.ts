import cypress from "cypress";

describe('Add new item and verify list', () => {
    it('should add a new item to the list and verify the list', () => {
        cy.visit('http://localhost:5173');
        cy.get('[data-cy="list-item"]').should('have.length', 4);
        cy.get('input[data-cy="new-item"]').type('Test Item');
        cy.get('button[data-cy="add-item"]').click();
        cy.get('[data-cy="list-item"]').should('have.length', 5);
        cy.get(':nth-child(5) > .list-item-text').should('have.text', 'Test Item');
    });

});

