describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Centros')
    cy.contains('Solicitudes')

    cy.get('a').first().click()

    cy.contains('Fernando de Rojas')

    cy.get('a').eq(1).click()

    cy.contains('Jorge Ferrer').should('exist')
    cy.contains('Nueva solicitud')
    cy.contains('Nombre demasiado corto')

    cy.get('input').eq(1).type("Hola")

    cy.contains('Nombre demasiado corto').should('not.exist')
  })
})
