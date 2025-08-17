document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

   "https://script.google.com/macros/s/AKfycbwMJ4u4_gwDwKz7lxDwuQZpC7smaA5ec87Zy9GaEaznA68-AB61LdPZbLmYiDih485M/exec"

    fetch(googleAppsScriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        if (result.result === "success") {
            alert('Laporan berhasil dikirim!');
            form.reset();
        } else {
            alert('Terjadi kesalahan saat mengirim laporan.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
    });
});