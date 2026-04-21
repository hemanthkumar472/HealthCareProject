export class HomePage{

    constructor(page){
        this.page = page
        this.patientInfo = page.locator('//a[@href="patin.php"]').first()
}
}