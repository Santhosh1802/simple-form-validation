function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var phone = document.getElementById('phoneInput').value;
    var pass = document.getElementById('passwordInput').value;
    var letters = /^[0-9]+$/;
    document.getElementById('name_alert').innerHTML="";
    document.getElementById('email_alert').innerHTML="";
    document.getElementById('phone_alert').innerHTML="";
    document.getElementById('password_alert').innerHTML="";
    if (name.trim() == "" || letters.test(name)) {
        document.getElementById('name_alert').innerHTML="Please enter your name";
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email_alert').innerHTML="Please enter a Valid Email Address";
        return false;
    }
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone_alert').innerHTML="Please enter a Valid 10-digit Phone Number";
        return false;
    }
    if (pass.length < 6) {
        document.getElementById('password_alert').innerHTML="Password must be at least 6 Characters long";
        return false;
    }
    document.getElementById('submit_alert').innerHTML="Form Submitted Successfully";
    return true;
}
