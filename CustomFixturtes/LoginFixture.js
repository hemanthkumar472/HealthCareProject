import{test as base, expect}from'@playwright/test'
import { LoginPage } from '../PageObjectModel/LoginPage'
import LoginCredentials from '../TestData/LoginCredentials.json'

export const test = base.extend({

    loginFixture:async({page},use)=>{
    let LoginPageObj = new LoginPage(page)
    let URL = LoginCredentials.url
    let USERNAME = LoginCredentials.username
    let PASSWORD = LoginCredentials.password
    await page.goto(URL)
    await LoginPageObj.usernameTextfield.fill(USERNAME)
    await LoginPageObj.passwordTextfield.fill(PASSWORD)
    await LoginPageObj.submitButton.click()
    await expect(page.getByText('Hospital Management System')).toBeVisible()
    await use(page)   
     
    }






})