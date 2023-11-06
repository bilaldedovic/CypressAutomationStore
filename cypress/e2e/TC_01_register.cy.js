/// <reference types="Cypress"/>
import {faker} from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = (firstName + lastName).toLowerCase() + '@gmail.com';
const telephone = faker.phone.number();
const fax = faker.phone.number();
const company = faker.company.name();
const address1 = faker.location.streetAddress();
const address2 =faker.location.streetAddress(); 
const city = faker.location.city();
const zipCode = faker.location.zipCode();
const loginName = (faker.person.zodiacSign()).toLowerCase() + firstName;
const password = faker.internet.password();
const password2 = password; 


beforeEach(()=>{
  cy.readFile("cypress/fixtures/loginData.json").then((profile) => {
    profile = '{}'
    cy.writeFile('cypress/fixtures/loginData.json', profile)
}) // this was in afterEach

cy.readFile("cypress/fixtures/allUserData.json").then((profile) => {
  profile = '{}'
  cy.writeFile('cypress/fixtures/allUserData.json', profile)
}) // this was in afterEach

  cy.readFile("cypress/fixtures/loginData.json").then((profile) => {
    profile.loginName = loginName;
    profile.password = password;
    cy.writeFile('cypress/fixtures/loginData.json', profile)


  })

  cy.readFile("cypress/fixtures/allUserData.json").then((profile) => {
    profile.loginName = loginName;
    profile.password = password;
    profile.firstName = firstName;
    profile.lastName = lastName;
    profile.email = email;
    profile.telephone = telephone;
    profile.fax = fax;
    profile.company = company;
    profile.address1 = address1;
    profile.address2 = address2;
    profile.city = city;
    profile.zipCode = zipCode;
    cy.writeFile('cypress/fixtures/allUserData.json', profile)


  })
  cy.fixture('loginData.json').as('loginUser');

  cy.visitPage();
})


  it('TC_01_Register', () => {
    cy.contains('Login or register').click();
    cy.get('#accountFrm_accountregister').check();
    cy.get('button[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type(firstName);
    cy.get('#AccountFrm_lastname').type(lastName);
    cy.get('#AccountFrm_email').type(email);
    cy.get('#AccountFrm_telephone').type(telephone);
    cy.get('#AccountFrm_fax').type(fax);
    cy.get('#AccountFrm_company').type(company);
    cy.get('#AccountFrm_address_1').type(address1);
    cy.get('#AccountFrm_address_2').type(address2);
    cy.get('#AccountFrm_city').type(city);
    cy.get('#AccountFrm_country_id').select(27);
    cy.get('#AccountFrm_zone_id').select('Sarajevo-Romanija or Sokolac');
    cy.get('#AccountFrm_postcode').type(zipCode);
    cy.get('#AccountFrm_loginname').type(loginName);
    cy.get('#AccountFrm_password').type(password);
    cy.get('#AccountFrm_confirm').type(password2);
    cy.get('#AccountFrm_agree').check();
    cy.get('button[title="Continue"]').click();

    cy.window().then((p)=>{
      //stubbing prompt window
      cy.stub(p, "prompt").returns("Result just for closing prompt");
      // click on Click for JS Prompt button
      cy.get(':nth-child(3) > button').click()
   });


    cy.get('.side_account_list li').last().click();
   
  })

