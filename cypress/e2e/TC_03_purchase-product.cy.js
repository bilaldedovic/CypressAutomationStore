/// <reference types="Cypress"/>

beforeEach(()=>{
    cy.fixture('loginData.json').as('loginUser');
    cy.visitPage();
})

it('TC_O3_should purchase product from one category', ()=>{
    cy.contains('Login or register').click();
    cy.get('@loginUser').then((user)=>{
      cy.get('#loginFrm_loginname').type(user.loginName);
      cy.get('#loginFrm_password').type(user.password);

    })

    cy.get('button[title="Login"]').click();

    cy.get(".subnav").contains('Apparel').realHover().then(()=>{
        cy.contains('T-shirts').click();
    });

    cy.get('a[title="Add to Cart"]').then((cartBtn)=>{
        cartBtn.click();
    })

    cy.get('a[title="Add to Cart"]').then((element) => {
          cy.wrap(element).eq(0).click();
          cy.contains('Add to Cart').click();
          cy.go('back');
          cy.go('back');
      });

    cy.get('.block_7').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
})