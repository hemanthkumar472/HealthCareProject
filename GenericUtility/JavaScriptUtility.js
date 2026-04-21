// utils/patientData.js

function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//  Your simple phone logic (digit by digit)
function getPhone() {
    let phone = '';

    for (let i = 0; i < 10; i++) {
        phone += i === 0
            ? Math.floor(Math.random() * 9) + 1   // first digit 1–9
            : Math.floor(Math.random() * 10);     // 0–9
    }

    return phone;
}

function getRandomDate() {
    const start = new Date(1970, 0, 1);
    const end = new Date(2005, 0, 1);
    const date = new Date(start.getTime() + Math.random() * (end - start));
    return date.toISOString().split('T')[0];
}

function getEmail(name) {
    return `${name.toLowerCase()}${Date.now()}@gmail.com`;
}

export function generatePatient() {
    const firstNames = ['Rahul', 'Amit', 'Sneha', 'Priya', 'Kiran'];
    const lastNames = ['Sharma', 'Reddy', 'Kumar', 'Patel', 'Das'];
    const genders = ['Male', 'Female'];
    const bloodGroups = ['A+', 'B+', 'O+', 'AB+'];

    const firstName = randomFromArray(firstNames);
    const lastName = randomFromArray(lastNames);

    return {
        firstName,
        lastName,
        doctor: 'Hemanth Kumar',
        address: 'kathriguppe',
        phone: getPhone(),                 // using your logic here
        email: getEmail(firstName),
        gender: randomFromArray(genders),
        bloodGroup: randomFromArray(bloodGroups),
        dob: getRandomDate()
    };
}