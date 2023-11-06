/// <reference types="Cypress"/>
import {faker} from '@faker-js/faker';



describe('Test contact form to open and submit ', ()=>{
    
    beforeEach(()=>{
        cy.fixture('loginData.json').as('loginUser');
        cy.fixture('allUserData.json').as('userData');
        cy.visitPage();

    })
    
    it('should submit contact form with logged in user', ()=>{
        cy.contains('Login or register').click();
        cy.get('@loginUser').then((user)=>{
          cy.get('#loginFrm_loginname').type(user.loginName);
          cy.get('#loginFrm_password').type(user.password);
        })
    
        cy.get('button[title="Login"]').click();

        cy.get('.info_links_footer > :nth-child(5) > a').click();

        cy.get('@userData').then((user)=>{
            cy.get('#ContactUsFrm_first_name').type(user.firstName);
            cy.get('#ContactUsFrm_email').type(user.email);
            cy.get('#ContactUsFrm_enquiry').type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
            cy.get('.col-md-6 > .btn').click();
        })

      
        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('contact us');
        })
        cy.get('.contentpanel').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.contain('your enquiry has been successfully sent to the store owner!')
        })
    })


  it('should submit contact form with guest user',  async () => {
    cy.get('.info_links_footer > :nth-child(5) > a').click();
    cy.get('#ContactUsFrm_first_name').type(faker.person.firstName());
    cy.get('#ContactUsFrm_email').type(faker.internet.email());
    cy.get('#ContactUsFrm_enquiry').type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    cy.get('.col-md-6 > .btn').click();

    cy.get('.heading1').then((el)=>{
        expect(((el.text()).toLowerCase()).trim()).to.equal('contact us');
    })

    cy.get('.contentpanel').then((el)=>{
        expect(((el.text()).toLowerCase()).trim()).to.contain('your enquiry has been successfully sent to the store owner!')
    })

  });
})