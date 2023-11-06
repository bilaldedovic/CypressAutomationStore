/// <reference types="Cypress"/>



describe('Test contact form to open and submit ', ()=>{
    
    beforeEach(()=>{
        cy.fixture('loginData.json').as('loginUser');
        cy.fixture('allUserData.json').as('userData');
        cy.visitPage();

    })
    
    it('should redirect logged in user from footer navigation', ()=>{
        cy.contains('Login or register').click();
        cy.get('@loginUser').then((user)=>{
          cy.get('#loginFrm_loginname').type(user.loginName);
          cy.get('#loginFrm_password').type(user.password);
        })
    
        cy.get('button[title="Login"]').click();

        cy.get('.info_links_footer > :nth-child(1) > .dropdown > a').click();

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('about us');
        })

        cy.get('.info_links_footer > :nth-child(2) > .dropdown > a').click();
        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('privacy policy');
        })

        cy.get(':nth-child(3) > .dropdown > a').click();
        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('return policy');
        })

        cy.get(':nth-child(4) > .dropdown > a').click();
        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('shipping');
        })

        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('contact us');
        })

        cy.get('.info_links_footer > :nth-child(6) > a').click();
        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('site map');
        })

        cy.get('.info_links_footer > :nth-child(7) > a').click();
        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('account logout');
        })
    })


  it('should redirect guest user from footer navigation',  async () => {
    cy.get('.info_links_footer > :nth-child(1) > .dropdown > a').click();

    cy.get('.heading1').then((el)=>{
        expect(((el.text()).toLowerCase()).trim()).to.equal('about us');
    })

    cy.get('.info_links_footer > :nth-child(2) > .dropdown > a').click();
    cy.get('.heading1').then((el)=>{
        expect(((el.text()).toLowerCase()).trim()).to.equal('privacy policy');
    })

    cy.get(':nth-child(3) > .dropdown > a').click();
    cy.get('.heading1').then((el)=>{
        expect(((el.text()).toLowerCase()).trim()).to.equal('return policy');
    })

    cy.get(':nth-child(4) > .dropdown > a').click();
    cy.get('.heading1').then((el)=>{
        expect(((el.text()).toLowerCase()).trim()).to.equal('shipping');
    })

    cy.get('.info_links_footer > :nth-child(5) > a').click();
    cy.get('.heading1').then((el)=>{
        expect(((el.text()).toLowerCase()).trim()).to.equal('contact us');
    })

    cy.get('.info_links_footer > :nth-child(6) > a').click();
    cy.get('.heading1').then((el)=>{
        expect(((el.text()).toLowerCase()).trim()).to.equal('site map');
    })

    cy.get('.info_links_footer > :nth-child(7) > a').click();
    cy.get('.heading1').then((el)=>{
        expect(((el.text()).toLowerCase()).trim()).to.equal('account login');
    })

  });
})