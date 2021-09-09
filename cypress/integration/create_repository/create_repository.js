/// <reference types="cypress"/>

const { Before, Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const homePage = require('../../support/ui/loginPage');

Before(() => {
    console.log('EN EL BEFORE');
    cy.fixture('user').as('userData');
});

Given(`Camilo wants to start registering`, function() {
    cy.visit('https://app.bimbau.co/.');
});

When(`Camilo creates a register`, function() {
    cy.authenticate(this.userData.email, this.userData.documentid, this.userData.firstname, this.userData.lastname, this.userData.cellphone, this.userData.localnumber,
        this.userData.ext, this.userData.jobposition);
   cy.wait(5000);

});

Then(`Camilo should see the register created`, function() {
    //cy.url().should('include', this.userData.name);
});