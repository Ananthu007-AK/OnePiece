function validateForm(){
    // clear previous error message
    document.getElementById("usernameError").innerText=""
    document.getElementById("emailError").innerText=""
    document.getElementById("passwordError").innerText=""

    let isValid=true

    // Validate Username
    const username=document.getElementById("username").value;
    if(username.length < 3){
        document.getElementById("usernameError").innerText="Username must be atleast 3 characters long."
        isValid=false
    }

    // Validate email
    const email=document.getElementById("email").value;
    const emailPattern=/^[^ ]+@[^ ]+\.[a-z](2,3)$/
    if(emailPattern){
        document.getElementById("emailError").innerText="Please Enter a Valid email address"
        isValid=false
    }

    // Validate password
    const password=document.getElementById("passwod").value
    if(password.length<6){
        document.getElementById("passwordError").innerText="password must be atleast 6 characters long"
        isValid=false
    }
    return isValid
}