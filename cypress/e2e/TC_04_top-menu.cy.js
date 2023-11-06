/// <reference types="Cypress"/>


describe('Test suite for testing main top redirects functionality with user login and guest user',()=>{
    beforeEach(()=>{
        cy.fixture('loginData.json').as('loginUser');
        cy.visitPage();
        cy.viewport(1920,1080);

        cy.log('Before EACH !!')
    });

    it('should redirect logged in user on all top menu selects', ()=>{

        cy.contains('Login or register').click();

        cy.get('@loginUser').then((user)=>{
          cy.get('#loginFrm_loginname').type(user.loginName);
          cy.get('#loginFrm_password').type(user.password);
        })
    
        cy.get('button[title="Login"]').click();

        cy.get('span.subtext').should('be.visible');
       
        cy.get('.block_3 #topnav #main_menu_top').find("li[data-id='menu_specials']").click();

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('special offers');
        });

        cy.get('.block_3 #topnav #main_menu_top').find('li[data-id="menu_account"]').click();

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('my account');
        });

        cy.get(".block_3 #topnav #main_menu_top").find('li[data-id="menu_account"]').realHover().then(()=>{
            cy.get('.dropdown-menu').find('li[data-id="menu_order"]').first().click();
        });

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('my order history');
        });

        cy.get('.block_3 #topnav #main_menu_top').find("li[data-id='menu_cart']").click();

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('shopping cart');
        });

        cy.get('.block_3 #topnav #main_menu_top').find('li[data-id="menu_checkout"]').click();

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('checkout confirmation');
        });


        cy.get(".block_3 #topnav #main_menu_top").find('li[data-id="menu_account"]').realHover().then(()=>{
            cy.get('.dropdown-menu').find('li[data-id="menu_logout"]').first().click();
        });

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('account logout');
        });
        
    });


    it('should redirect guest user on all top menu selects', ()=>{

        cy.get('.block_3 #topnav #main_menu_top').find("li[data-id='menu_specials']").click();

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('special offers');
        });

        cy.get('.block_3 #topnav #main_menu_top').find('li[data-id="menu_account"]').click();

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('account login');
        });

        cy.get(".block_3 #topnav #main_menu_top").find('li[data-id="menu_account"]').realHover().then(()=>{
            cy.get('.dropdown-menu').find('li[data-id="menu_login"]').first().click();
        });

        cy.get('.contentpanel').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('returning customer');
        });


        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('account login');
        });

        cy.get('.contentpanel').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('returning customer');
        });

        cy.get(".block_3 #topnav #main_menu_top").find('li[data-id="menu_account"]').realHover().then(()=>{
            cy.get('.dropdown-menu').find('li[data-id="menu_order"]').first().click();
        });

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('order details');
        });


        cy.get('.block_3 #topnav #main_menu_top').find("li[data-id='menu_cart']").click();

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('shopping cart');
        });

        cy.get('.contentpanel').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('your shopping cart is empty!');
        });

        cy.get('.block_3 #topnav #main_menu_top').find('li[data-id="menu_checkout"]').click();

        cy.get('.heading1').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('shopping cart');
        });

        cy.get('.contentpanel').then((element)=>{
            expect((element.text()).toLowerCase()).to.contain('your shopping cart is empty!');
        });

        
    });

})