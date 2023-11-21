document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // In a real-world scenario, you might send a request to the server for authentication
    // and then decide what to do based on the response. For simplicity, we'll simulate a redirect here.

    // Redirect to another page (replace 'targetPage.html' with the actual page you want to redirect to)
    window.location.href = 'index.html';
});
