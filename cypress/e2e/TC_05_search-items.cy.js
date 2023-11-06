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

        cy.get('span.subtext').should('be.visible');
        
        cy.get('#filter_keyword').type('Total Moisture Facial Cream{enter}');

        cy.get('#product_details').find('.productname').then((el)=>{

            expect((el.text()).toLowerCase()).to.equal('total moisture facial cream');

        });

       
       
        
    });


    it('item search should work for guest user', ()=>{

        cy.get('#filter_keyword').type('Total Moisture Facial Cream{enter}');

        cy.get('#product_details').find('.productname').then((el)=>{

            expect((el.text()).toLowerCase()).to.equal('total moisture facial cream');

        });

        cy.get('#filter_keyword').type('Total Moisture Facial Cream{enter}');


    });


    it('category search should work with logged in user', ()=>{

        cy.contains('Login or register').click();

        cy.get('@loginUser').then((user)=>{
          cy.get('#loginFrm_loginname').type(user.loginName);
          cy.get('#loginFrm_password').type(user.password);
        })
    
        cy.get('button[title="Login"]').click();

        cy.get('span.subtext').should('be.visible');
        
        cy.get('#filter_keyword').type('Fragrance{enter}');

        cy.get('.thumbnails').then((el)=>{
            expect((el.text()).toLowerCase()).to.contain('man eau de toilette spray')
        })


       
       
        
    });


    it('category search should work for guest user', ()=>{

        
        cy.get('#filter_keyword').type('Fragrance{enter}');

        cy.get('.thumbnails').then((el)=>{
            expect((el.text()).toLowerCase()).to.contain('man eau de toilette spray')
        })


    });

})