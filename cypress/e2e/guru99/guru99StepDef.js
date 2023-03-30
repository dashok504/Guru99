/// <reference types= "cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import guru99 from "../Pages/guru99";

Given("Visit Guru99 website", ()=> {

    cy
    .visit('https://demo.guru99.com/insurance/v1/index.php')

    cy
    .wait(1000)

    cy
    .url()
    .should('include','https://demo.guru99.com/insurance/v1/index.php')

    cy
    .title().should('eq','Insurance Broker System - Login')

})

Then("User enters invalid username and password", ()=>{

    cy
    .get('#email')
    .type('ashok')

    cy
    .wait(500)

    cy
    .get('#password')
    .type('kumar')

    cy
    .wait(500)

})

And("User clicks on Login button", ()=>{

    cy
    .get('#login-form')
    .find("[class='btn btn-default']")
    .last()
    .click({force:true})

    cy
    .wait(10000)

})

Then("Validate login failure message", ()=>{

    // cy
    // .get('#login-form')
    // .scrollIntoView()
    // .contains('Enter your Email address and password correct', { includeShadowDom: true })
    // .should('be.visible')

    cy
    .contains('#login-form','Enter your Email address and password correct', { includeShadowDom: true })
    .scrollIntoView()
    .should('be.visible')

})

Then("User enters a valid username and password", ()=>{

    cy
    .get('#email')
    .type('ashok.dekammagari@gmail.com')

    cy
    .wait(500)

    cy
    .get('#password')
    .type('Test12345!@')

    cy
    .wait(500)

})

Then("Validate login success message", ()=>{

    cy
    .get('.content')
    .contains('Signed in as ')
    .should('be.visible')
    .should('not.be.disabled')

    cy
    .url().should('include', 'https://demo.guru99.com/insurance/v1/header.php')

})

And("User navigates to Request Quotation page", ()=>{

    // cy
    // .contains('Request Quotation')
    // .click()

    // cy
    // .get('.ui-tabs-anchor', { includeShadowDom: true })
    // .contains('Request Quotation')
    // .click({force:true})

    cy
    .contains('#ui-id-2','Request Quotation', { includeShadowDom: true })
    .click({force:true})

    cy
    .get('#quotation_incidents')
    .click()
    .type('wheels')

    cy
    .get('#quotation_vehicle_attributes_registration')
    .click()
    .type('9047')

    cy
    .find("[value='Save Quotation']")
    .scrollIntoView()
    .click({force:true})

    // cy
    // .get('input.btn.btn-success')
    // .scrollIntoView()
    // .click({force:true})

})

And("User navigates to Retrieve Quotation page", ()=>{

    // cy
    // .contains('Retrieve Quotation')
    // .click()

    cy
    .contains('#ui-id-3','Retrieve Quotation', { includeShadowDom: true })
    .click({force:true})

})

And("User navigates to Profile page", ()=>{

    // cy
    // .contains('Profile')
    // .click()

    cy
    .contains('#ui-id-4','Profile', { includeShadowDom: true })
    .click({force:true})

})

And("User navigates to Edit Profile page", ()=>{

    // cy
    // .contains('Edit Profile')
    // .click()

    cy
    .contains('#ui-id-5','Edit Profile', { includeShadowDom: true })
    .click({force:true})

})

And("User clicks on Logout button", ()=>{

    cy
    .get('.btn btn-danger', { includeShadowDom: true })
    .click({force:true})

    cy
    .wait(3000)

    cy
    .url()
    .should('include','https://demo.guru99.com/insurance/v1/index.php')

    cy
    .title().should('eq','Insurance Broker System - Login')

})