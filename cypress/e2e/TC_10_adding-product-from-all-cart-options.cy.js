/// <reference types="Cypress"/>


describe.skip('Test adding to cart from featured, latest products, best sellers and specials', ()=>{
    
    beforeEach(()=>{
        cy.fixture('loginData.json').as('loginUser');
        cy.visitPage();

    })

it('Should add product to cart from featured', ()=>{
    cy.contains('Login or register').click();
    cy.get('@loginUser').then((user)=>{
      cy.get('#loginFrm_loginname').type(user.loginName);
      cy.get('#loginFrm_password').type(user.password);
    })

    cy.get('button[title="Login"]').click();

    cy.contains('Home').click();

    cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click();
    cy.get('.block_7').click();

    cy.get('tbody > :nth-child(2) > :nth-child(2) > a').then((element)=>{
        expect(element.text()).to.equal('Skinsheen Bronzer Stick');
    })

    cy.xpath("//a[@class='btn btn-sm btn-default']").click();
    cy.get('.contentpanel').then((el)=>{
        expect((el.text()).trim()).to.contain('Your shopping cart is empty!');
    })

})

it('Should add product to cart from latest product', ()=>{
    cy.contains('Login or register').click();
    cy.get('@loginUser').then((user)=>{
      cy.get('#loginFrm_loginname').type(user.loginName);
      cy.get('#loginFrm_password').type(user.password);
    })

    cy.get('button[title="Login"]').click();

    cy.contains('Home').click();

    cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click();
    cy.get('.block_7').click();

    cy.get('tbody > :nth-child(2) > :nth-child(2) > a').then((element)=>{
        expect(element.text()).to.equal('Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15');
    })

    cy.xpath("//a[@class='btn btn-sm btn-default']").click();

    cy.get('.contentpanel').then((el)=>{
        expect((el.text()).trim()).to.contain('Your shopping cart is empty!');
    })

})

it('Should add product to cart from bestsellers', ()=>{
    cy.contains('Login or register').click();
    cy.get('@loginUser').then((user)=>{
      cy.get('#loginFrm_loginname').type(user.loginName);
      cy.get('#loginFrm_password').type(user.password);
    })

    cy.get('button[title="Login"]').click();

    cy.contains('Home').click();

    cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click();
    cy.get('.block_7').click();

    cy.get('tbody > :nth-child(2) > :nth-child(2) > a').then((element)=>{
        expect(element.text()).to.equal('Skinsheen Bronzer Stick');
    })

    cy.xpath("//a[@class='btn btn-sm btn-default']").click();
    cy.get('.contentpanel').then((el)=>{
        expect((el.text()).trim()).to.contain('Your shopping cart is empty!');
    })

})

it('Should add product to cart from specials', ()=>{
    cy.contains('Login or register').click();
    cy.get('@loginUser').then((user)=>{
      cy.get('#loginFrm_loginname').type(user.loginName);
      cy.get('#loginFrm_password').type(user.password);
    })

    cy.get('button[title="Login"]').click();

    cy.contains('Home').click();

    cy.get('#block_frame_special_1772 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click();
    cy.get('.block_7').click();

    cy.get('tbody > :nth-child(2) > :nth-child(2) > a').then((element)=>{
        expect(element.text()).to.equal('Absolue Eye Precious Cells');
    })

    cy.xpath("//a[@class='btn btn-sm btn-default']").click();


    cy.get('.contentpanel').then((el)=>{
        expect((el.text()).trim()).to.contain('Your shopping cart is empty!');
    })

})

})
