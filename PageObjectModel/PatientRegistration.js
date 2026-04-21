import {generatePatient}from'../GenericUtility/JavaScriptUtility.js'
export class PatientRegistration{
    constructor(page){
        this.page=page
        this.firstNameTextfield=page.getByPlaceholder('First Name')
        this.lastNameTextfield=page.getByPlaceholder('Last Name')
        this.selectDoctorName=page.locator('//select[@name="dnames"]')
        this.adressField=page.getByPlaceholder('Address',{exact:true})
        this.contactNumberField=page.getByPlaceholder('Contact Number')
        this.emailField=page.getByPlaceholder('Email Address')
        this.selectGender=page.getByPlaceholder('Select your Gendere')
        this.birthday=page.getByPlaceholder('Birthday')
        this.selectBloodGroup=page.getByPlaceholder('Select your Staff Type')
        this.submitButton = page.getByRole('button', { name: 'SUBMIT', exact: true });
        this.registrationSuccesful=page.locator("//div[contains(text(),'Registration Successful')]")
    }

    async patientRegistration(patient){
       await this.firstNameTextfield.fill(patient.firstName)
       await this.lastNameTextfield.fill(patient.lastName)
       await this.selectDoctorName.selectOption({label:'Hemanth Kumar'})
       await this.adressField.fill('kathriguppe')
       await this.contactNumberField.fill(patient.phone)
       await this.emailField.fill(patient.email)
       await this.selectGender.selectOption({value:patient.gender})
       await this.birthday.fill(patient.dob)
       await this.selectBloodGroup.selectOption({value:patient.bloodGroup})
       await this.submitButton.click()
    }

}