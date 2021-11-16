export class Login {
    navigate(){
       cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php');
       cy.get('#logomini');
    }
    login(username,password){
        cy.get('[name=username]').type('Username')
        cy.get('[name=password]').type('Password')
        cy.get('.btn.btn-success').click();
        return this;
    }
    validateInvalidGredentials(expectedText){
        cy.contains('No account found with that username');
        return this;
    }
    ValidateTheLoginPage(){
        cy.get('.btn.btn-success').should('have.value',Login);
        return this;
   }
}