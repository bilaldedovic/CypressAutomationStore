/// <reference types="Cypress"/>


describe('Test suite for testing search functionality with user login and guest user',()=>{
    beforeEach(()=>{
        cy.fixture('loginData.json').as('loginUser');
        cy.visitPage();
        cy.viewport(1920,1080);

        cy.log('beforeEach!!!')
    });

    it('item search should work with logged in user', ()=>{

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
          
        cy.contains('Continue Shopping').click();

        cy.get('a[title="Add to Cart"]').then((cartBtn)=>{
            cartBtn.first().click();
        })

        cy.get('.block_7').click();
        cy.get('#cart_checkout1').click();
        cy.get('#checkout_btn').click();
    });
})