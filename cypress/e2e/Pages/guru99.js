const URL = "https://demo.guru99.com/insurance/v1/index.php";
const USER_NAME = "['ashok.dekammagari@gmail.com']";
const PASSWORD = "['Test12345!@']";
const LOGIN_BUTTON = "[type='submit']";

class Guru99{

    getUrl(){
        return cy.get(URL);
    }

    getUserName(){
        return cy.get(USER_NAME);
    }

    getPassword(){
        return cy.get(PASSWORD);
    }

    getLoginButton(){
        return cy.get(LOGIN_BUTTON);
    }

}

export default new Guru99();