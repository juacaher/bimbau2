const loginPage = require('../ui/loginPage');

Cypress.Commands.add("authenticate", (email, documentid, firstname, lastname, cellphone, localnumber, ext, jobposition) => {
    cy.get(loginPage.TOAST_BUTTON).click();
    cy.wait(5000);
    cy.get(loginPage.REGISTER_RBUTTON).click();
    cy.get(loginPage.EMAIL_FIELD).type(email);
    cy.xpath(loginPage.DOC_FIELD).click({ force: true });
    //cy.scrollTo(0, 100);
    cy.xpath(loginPage.DOC_FIELD).type('{downarrow}');
    cy.xpath(loginPage.DOCUMENT_FIELD).type(documentid);
    cy.scrollTo(0, 500);
    cy.wait(3000);
    cy.get(loginPage.NAME_FIELD).type(firstname);
    cy.xpath(loginPage.LASTNAME_FIELD).type(lastname);
    cy.xpath(loginPage.CELLPHONE_FIELD).type(cellphone);
    cy.xpath(loginPage.PHONE_FIELD).type(localnumber);
    cy.xpath(loginPage.EXT_FIELD).type(ext);
    cy.xpath(loginPage.POSITION_FIELD).type(jobposition);
    cy.get('iframe')
    .first()
    .then((recaptchaIframe) => {
      const body = recaptchaIframe.contents()
      cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
    })

});

