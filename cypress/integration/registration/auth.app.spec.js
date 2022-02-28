describe('TODO api testing', () => {
    let todoItem;
    it('fetches Todo items - GET', () => {
        cy.request('/api-docs/').as('swaggerDocs');
        cy.get('@swaggerDocs').then(swgdoc => {
            expect(swgdoc.status).to.eq(200);
        });
    });
 });