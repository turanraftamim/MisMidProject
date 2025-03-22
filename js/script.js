function showMessage() {
    alert("Welcome to Football Gear Store!");
}

function addToCart() {
    alert("Item added to cart!");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Please fill out all fields.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
