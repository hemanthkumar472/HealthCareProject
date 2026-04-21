export class LoginPage{

    constructor(page){
        this.page=page
        this.usernameTextfield=page.getByPlaceholder('Username')
        this.passwordTextfield=page.getByPlaceholder('Password')
        this.submitButton=page.getByRole('button',{name:'SUBMIT'})

    }
}