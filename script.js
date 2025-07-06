// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Get the current year and update the copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Get the last modified date of the document
    const lastUpdated = document.lastModified;
    
    // Format the date to the format you want
    const date = new Date(lastUpdated);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Insert the formatted date into the footer
    document.getElementById('last-updated').textContent = formattedDate;
});

