// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

        // Load header and footer dynamically
        document.addEventListener("DOMContentLoaded", function () {
            fetch('header.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('header').innerHTML = data;
                });

            fetch('footer.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('footer').innerHTML = data;
                });
        });

        // Booking form submission
        document.getElementById('booking-form').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('payment-section').style.display = 'block';
            document.getElementById('success-event-id').innerText = document.getElementById('eventId').value;
            document.getElementById('success-names').innerText = document.getElementById('names').value;
        });

        // Payment form submission
        document.getElementById('payment-form').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('payment-section').style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
        });

        // Function to simulate ticket download
        function downloadTickets() {
            alert('Tickets downloaded! (This is a simulation)');
            alert('Payment Successful!'); // Popup confirmation
        }