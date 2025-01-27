document.addEventListener("DOMContentLoaded", () => {
    // Define the async function
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the data container element
        const dataContainer = document.getElementById("api-data");

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);

            // Convert the response to JSON
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create and append the user list
            const userList = document.createElement("ul");
            users.forEach((user) => {
                const listItem = document.createElement("li");
                listItem.textContent = user.name; // Set the user's name
                userList.appendChild(listItem);  // Append <li> to <ul>
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke fetchUserData on DOMContentLoaded
    fetchUserData();
});
