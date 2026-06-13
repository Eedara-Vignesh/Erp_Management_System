function register() {

    const username =
        document.getElementById("username").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            role: "USER"
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Registration Failed");
        }
        return response.json();
    })
    .then(data => {
        alert("Registration Successful");
        window.location.href = "login.html";
    })
    .catch(error => {
        console.error(error);
        alert("Registration Failed");
    });
}