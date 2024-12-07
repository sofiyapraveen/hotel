let customers = [];

function registerCustomer(event) {
    event.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    const customer = { name, email, password };
    customers.push(customer);

    alert('Registration successful!');
    document.getElementById('registrationForm').reset();
    window.location.href = 'login.html';
}

function loginCustomer(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const customer = customers.find(cust => cust.email === email && cust.password === password);
    if (customer) {
        alert('Login successful!');
        window.location.href = 'room_allotment.html';
    } else {
        alert('Invalid email or password');
    }
}

function allotRoom(event) {
    event.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const roomNumber = document.getElementById('roomNumber').value;

   
    document.getElementById('roomAllotmentForm').reset();
    window.location.href = 'billing.html';
}

function generateBill(event) {
    event.preventDefault();
    const customerName = document.getElementById('billCustomerName').value;
    const roomRent = document.getElementById('roomRent').value;
    const foodCharges = document.getElementById('foodCharges').value;

    const totalBill = parseFloat(roomRent) + parseFloat(foodCharges);
    const billDetails = `
        <h3>Bill Details</h3>
        <p>Customer Name: ${customerName}</p>
        <p>Room Rent: $${roomRent}</p>
        <p>Food Charges: $${foodCharges}</p>
        <h3>Total: $${totalBill}</h3>
    `;

    document.getElementById('billDetails').innerHTML = billDetails;
    document.getElementById('billingSection').reset();
}