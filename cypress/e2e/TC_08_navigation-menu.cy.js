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

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('t-shirts')
        })
    
        cy.get(".subnav").contains('Apparel').realHover().then(()=>{
            cy.contains('Shoes').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('shoes')
        })

        cy.get(".subnav").contains('Makeup').realHover().then(()=>{
            cy.contains('Cheeks').click({force:true});
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('cheeks')
        })

        cy.get(".subnav").contains('Makeup').realHover().then(()=>{
            cy.contains('Eyes').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('eyes')
        })
        cy.get(".subnav").contains('Makeup').realHover().then(()=>{
            cy.xpath('//*[@id="categorymenu"]/nav/ul/li[3]/div/ul[1]/li[3]').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('face')
        })
        cy.get(".subnav").contains('Makeup').realHover().then(()=>{
            cy.contains('Lips').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('lips')
        })
        cy.get(".subnav").contains('Makeup').realHover().then(()=>{
            cy.contains('Nails').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('nails')
        })
        cy.get(".subnav").contains('Makeup').realHover().then(()=>{
            cy.contains('Value Sets').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('value sets')
        })
       
        cy.get(".subnav").contains('Skincare').realHover().then(()=>{
            cy.xpath('//*[@id="categorymenu"]/nav/ul/li[4]/div/ul[1]/li[1]').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('eyes')
        })

        cy.get(".subnav").contains('Skincare').realHover().then(()=>{
            cy.xpath('//*[@id="categorymenu"]/nav/ul/li[4]/div/ul[1]/li[2]').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('face')
        })

        

        cy.get(".subnav").contains('Skincare').realHover().then(()=>{
            cy.contains('Hands & Nails').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('hands & nails')
        })

        cy.get(".subnav").contains('Skincare').realHover().then(()=>{
            cy.contains('Sun').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('sun')
        })

        cy.get(".subnav").contains('Fragrance').realHover().then(()=>{
            cy.xpath('//*[@id="categorymenu"]/nav/ul/li[5]/div/ul[1]/li[1]').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('men')
        })

        cy.get(".subnav").contains('Fragrance').realHover().then(()=>{
            cy.contains('Women').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('women')
        })
       
        cy.get(".subnav").xpath('//*[@id="categorymenu"]/nav/ul/li[6]').realHover().then(()=>{
            cy.contains('Body & Shower').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('body & shower')
        })

        cy.get(".subnav").xpath('//*[@id="categorymenu"]/nav/ul/li[6]').realHover().then(()=>{
            cy.contains('Fragrance Sets').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('fragrance sets')
        })

        cy.get(".subnav").xpath('//*[@id="categorymenu"]/nav/ul/li[6]').realHover().then(()=>{
            cy.contains('Pre-Shave & Shaving').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('pre-shave & shaving')
        })

        cy.get(".subnav").xpath('//*[@id="categorymenu"]/nav/ul/li[6]').realHover().then(()=>{
            cy.xpath('//*[@id="categorymenu"]/nav/ul/li[6]/div/ul[1]/li[4]').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('skincare')
        })


        cy.get(".subnav").contains('Hair Care').realHover().then(()=>{
            cy.contains('Conditioner').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('conditioner')
        })

        cy.get(".subnav").contains('Hair Care').realHover().then(()=>{
            cy.contains('Shampoo').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('shampoo')
        })

        cy.get(".subnav").contains('Books').realHover().then(()=>{
            cy.contains('Audio CD').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('audio cd')
        })

        cy.get(".subnav").contains('Books').realHover().then(()=>{
            cy.contains('Paperback').click();
        });

        cy.get('.heading1').then((el)=>{
            expect(((el.text()).toLowerCase()).trim()).to.equal('paperback')
        })
       
       
       
        
       
       
    });
})