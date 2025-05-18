// script.js
$(document).ready(function() {
    // Handle form submission
    $('#enrollmentForm').on('submit', function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var membership = $('#membership').val();
        var amount = membership === 'premium' ? 200000 : 100000; // Amount in paise (₹2000 or ₹1000)

        var options = {
            "key": "", // Replace with your Razorpay key
            "amount": amount, 
            "currency": "INR",
            "name": "Gym Membership",
            "description": "Enrollment for " + membership + " plan",
            "handler": function (response) {
                alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            },
            "prefill": {
                "name": name,
                "email": email,
                "contact": phone
            }
        };

        var rzp = new Razorpay(options);
        rzp.open();
    });
});


