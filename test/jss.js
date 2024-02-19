// var id = document.getElementById("#user_name");
// var pswd = document.getElementById("#password");
const btn = document.querySelector("#button");

btn.addEventListener('click', () => {
    var username = document.querySelector("#user_name").value;
    var password = document.querySelector("#password").value;
    
    var message = document.createElement('p');
    message.textContent = "Username: " + username + ", Password: " + password;
    document.body.appendChild(message);
});
