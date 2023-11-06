/// <reference types="Cypress"/>


describe('Test suite for testing currency changer functionality with user login and guest user',()=>{
    beforeEach(()=>{
        cy.fixture('loginData.json').as('loginUser');
        cy.visitPage();
        cy.viewport(1920,1080);

        cy.log('Before EACH !!')
    });

    it('should redirect change currency for logged in user', ()=>{

        cy.contains('Login or register').click();

        cy.get('@loginUser').then((user)=>{
          cy.get('#loginFrm_loginname').type(user.loginName);
          cy.get('#loginFrm_password').type(user.password);
        })
    
        cy.get('button[title="Login"]').click();

        cy.get('span.subtext').should('be.visible');
       
        cy.get(".subnav").contains('Home').click();

        cy.get('.block_6').realHover().then(()=>{
            cy.contains('Euro').click();
    
            cy.get('.pricetag').find('.price').then((el)=>{
                expect((el.first().text()).toLowerCase()).to.contain('27.69€');
            });
          });
    
          cy.get('.block_6').realHover().then(()=>{
            cy.contains('US Dollar').click();
    
            cy.get('.pricetag').find('.price').then((el)=>{
                expect((el.first().text()).toLowerCase()).to.contain('$29.50');
            });
          });
    
          cy.get('.block_6').realHover().then(()=>{
            cy.contains('Pound Sterling').click();
    
            cy.get('.pricetag').find('.price').then((el)=>{
                expect((el.first().text()).toLowerCase()).to.contain('£23.40');
            });
          });
        
    });


    it('should redirect change currency for guest user', ()=>{

      cy.get('.block_6').realHover().then(()=>{
        cy.contains('Euro').click();

        cy.get('.pricetag').find('.price').then((el)=>{
            expect((el.first().text()).toLowerCase()).to.contain('27.69€');
        });
      });

      cy.get('.block_6').realHover().then(()=>{
        cy.contains('US Dollar').click();

        cy.get('.pricetag').find('.price').then((el)=>{
            expect((el.first().text()).toLowerCase()).to.contain('$29.50');
        });
      });

      cy.get('.block_6').realHover().then(()=>{
        cy.contains('Pound Sterling').click();

        cy.get('.pricetag').find('.price').then((el)=>{
            expect((el.first().text()).toLowerCase()).to.contain('£23.40');
        });
      });
        
    });

})