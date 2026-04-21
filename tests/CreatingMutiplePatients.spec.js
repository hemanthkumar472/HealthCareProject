import { generatePatient } from '../GenericUtility/JavaScriptUtility.js'
import { HomePage } from '../PageObjectModel/HomePage.js'
import { PatientRegistration } from '../PageObjectModel/PatientRegistration.js'
import { expect } from '@playwright/test'
import {test,loginFixture}from '../CustomFixturtes/LoginFixture.js'

test('Creating Patients Info', async ({ loginFixture }) => {

    await loginFixture.waitForLoadState('networkidle');

    const homePageObj = new HomePage(loginFixture);
    const patientRegistrationObj = new PatientRegistration(loginFixture);

    await homePageObj.patientInfo.waitFor({ state: 'visible' });
    await homePageObj.patientInfo.click();

    for(let i=1;i<=10;i++){
    const patient = generatePatient();
    console.log(patient);
    await patientRegistrationObj.patientRegistration(patient); //
    await expect(patientRegistrationObj.registrationSuccesful).toBeVisible();  
    console.log(`Registration of patient${i} is successful`);
    
}
    
});