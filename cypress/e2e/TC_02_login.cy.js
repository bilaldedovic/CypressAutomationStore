/// <reference types="Cypress"/>

beforeEach(()=>{
  cy.visitPage();
  cy.fixture('loginData.json').as('loginUser');

})

it('TC_O2_should login user from using login data in fixtures', ()=>{
    cy.contains('Login or register').click();
    cy.get('@loginUser').then((user)=>{
      cy.get('#loginFrm_loginname').type(user.loginName);
      cy.get('#loginFrm_password').type(user.password);
    })

    cy.get('button[title="Login"]').click();

})