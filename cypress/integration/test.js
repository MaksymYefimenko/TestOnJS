import {Login} from "../pages/Login"
const login = new Login();

describe('Login Page', ()=>{
    beforeEach('navigate to login page', ()=>{
        login.navigate();
    })
    
it('shoud not be able to login to using invalid credential' , ()=>{
    login.login('Username', 'password');
    login.validateInvalidGredentials('No account found with that username');
    return this;
})
})