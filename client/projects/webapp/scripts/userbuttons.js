let userSession = {};

// add functionality to the sign up button
let signUpButton = document.getElementById("sign-up-button");
signUpButton.addEventListener("click", signUpButtonHandler);

async function signUpButtonHandler() {
    
    let user = {
        username: prompt("Choose username:"),
        password: prompt("Choose password:") 
    }

    if(user.username == "" || user.username == null)
        return;

    if(user.password == "" || user.password == null)
        return;
    
    let response = await signUpUser(user);

    if(!response.ok) {
        alert (response.status + ": " + response.statusText);
        return;
    }

    let data = await response.json();
    alert("Logged in user: " + JSON.stringify(data))
    userSession = data;
    reloadTasks();
}