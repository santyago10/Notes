describe('Forms testing', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    it('Show create form', () => {
        cy.contains('Create').click()
        .get('#create-form')
        .should('be.visible')
    })

    it('Create new note', () => {
        cy.contains('Create').click()
        .get('#create-form')
        .should('be.visible')
        .get('#create-form input').type("Automatically created note")
        .get('#create-form').contains('Create').click()
    })

    it('Delete note', () => {
        cy.contains('Delete').click()
    })

    it('Show edit form', () => {
        cy.contains('Edit').click()
        .get('#edit-form')
        .should('be.visible')  
    })

    it('Hide edit form', () => {
        cy.contains('Edit').click()
        .get('#edit-form')
        .should('be.visible') 
        .contains("Cancel").click()
    })
})