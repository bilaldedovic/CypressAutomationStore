/// <reference types="Cypress"/>
import {faker} from '@faker-js/faker';



describe('Test footer newsletter subscribe  to open and submit ', ()=>{
    
    beforeEach(()=>{
        cy.fixture('loginData.json').as('loginUser');
        cy.fixture('allUserData.json').as('userData');
        cy.visitPage();

    })
    
    it('should sign up to newsletter for logged in user', ()=>{
        cy.contains('Login or register').click();
        cy.get('@loginUser').then((user)=>{
          cy.get('#loginFrm_loginname').type(user.loginName);
          cy.get('#loginFrm_password').type(user.password);
        })
    
        cy.get('button[title="Login"]').click();


        cy.get('@userData').then((user)=>{

            cy.get('#appendedInputButton').type(user.email);
        })

        cy.get('.btn').contains('Subscribe').click();
    
        cy.get('#imFrm_settingsnewsletteremail').check();

        cy.get('.btn').contains('Continue').click();

        cy.get('.alert').should('be.visible');
        cy.get('.alert').contains('Success: Your notification settings has been successfully up');

    })


  it('should sign up to newsletter for guest user',  async () => {

   
    const email = faker.internet.email().toLowerCase();

    cy.get('#appendedInputButton').click();
    cy.get('#appendedInputButton').type(email);
    cy.get('.btn').contains('Subscribe').click();

    cy.get('.heading1').then((el) => {
      expect(el.text().toLowerCase().trim()).to.equal('become a newsletter subscriber');
    });

    cy.get('#SubscriberFrm_firstname').type(faker.person.firstName());
    cy.get('#SubscriberFrm_lastname').type(faker.person.lastName());

    cy.task('deleteAllFilesInDir', './cypress/screenshots');
    cy.xpath('//*[@id="SubscriberFrm"]/div[1]/fieldset/div[5]/div/span/img').screenshot('image');


    cy.get('#SubscriberFrm_email').should('not.be.empty');
  });
})