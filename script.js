// // Wait for the DOM to load
// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("form");

//     // Add a submit event listener to the form
//     form.addEventListener("submit", (event) => {
//         event.preventDefault(); // Prevent the default form submission

//         // Retrieve input values
//         const name = document.getElementById("name").value.trim();
//         const favoriteEvent = document.getElementById("favorite_event").value.trim();
//         const feedback = document.getElementById("feedback").value.trim();

//         // Simple validation
//         if (!name || !favoriteEvent || !feedback) {
//             alert("Please fill out all required fields.");
//             return;
//         }

//         // Display a confirmation message
//         alert(`Thank you for your feedback, ${name}!`);
        
//         // Optionally reset the form
//         form.reset();
//     });
// });










// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const feedbackSection = document.createElement("div");
    feedbackSection.style.marginTop = "20px";
    form.after(feedbackSection);

    // Add a submit event listener to the form
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve input values
        const name = document.getElementById("name").value.trim();
        const favoriteEvent = document.getElementById("favorite_event").value.trim();
        const feedback = document.getElementById("feedback").value.trim();

        // Clear previous error or success messages
        feedbackSection.innerHTML = "";

        // Validate the form inputs
        const errors = [];
        if (!name) errors.push("Please enter your name.");
        if (!favoriteEvent) errors.push("Please specify your favorite community event.");
        if (!feedback) errors.push("Please share your thoughts.");

        if (errors.length > 0) {
            // Display error messages
            const errorList = document.createElement("ul");
            errorList.style.color = "red";
            errors.forEach(error => {
                const listItem = document.createElement("li");
                listItem.textContent = error;
                errorList.appendChild(listItem);
            });
            feedbackSection.appendChild(errorList);
            return;
        }

        // Display a success message
        const successMessage = `
            <h3>Thank you for your feedback, ${name}!</h3>
            <p><strong>Your favorite event:</strong> ${favoriteEvent}</p>
            <p><strong>Your thoughts:</strong> ${feedback}</p>
        `;
        feedbackSection.innerHTML = successMessage;
        feedbackSection.style.border = "1px solid #28a745";
        feedbackSection.style.backgroundColor = "#d4edda";
        feedbackSection.style.padding = "15px";
        feedbackSection.style.borderRadius = "5px";

        // Optionally reset the form
        form.reset();
    });
});
