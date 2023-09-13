onload = function(){
    if (localStorage.getItem("checked") === "true") {
        
        window.location.href = "HomePage/index.html";
        alert("Alert: You're already logged in!")
    }
    var checked = false
    let inputs = {
        loginbutton: document.getElementById("LoginButton"),
        usernameinput: document.getElementById("UsernameInput"),
        passwordinput: document.getElementById("PasswordInput"),
        inputbox: document.getElementById("inputbox")
    }
    

    var theaudio = document.getElementById("theaudio")
    inputs.inputbox.addEventListener('mouseenter',() =>{
        theaudio.currentTime = 0.9;
        theaudio.play()
    })
    
    inputs.passwordinput.value.replace(" ","")
    inputs.usernameinput.value.replace(" ","")
    inputs.loginbutton.addEventListener("click",() =>{
        if(inputs.usernameinput.value.length <= 3 || inputs.passwordinput.value.length <= 3){
            return alert("Error: You have to write your username/password at least 3 keywords!")
        }else if(inputs.usernameinput.value.length >= 20){
            return alert("Error: Your name is too long! Max length : 20")
        }else if(inputs.passwordinput.value.length <= 1 || inputs.usernameinput.value.length <= 1){
            return alert("Error: You haven't write anything in password/username, Sir!")
        }else if(inputs.passwordinput.value.length <= 7){
            return alert("Error: You have to write at least 8 keywords in your password!")
        
        }else if(!(isNaN(inputs.usernameinput.value))){
            return alert("Error: You have to write keywords and numbers together, Not only numbers!")
        }else{
            
            if(!checked) {
                
                
                window.location.href = "HomePage/index.html";
                console.log("Data Saved! " + userdata.username + " " + userdata.password)
                checked = true
            }
            let userdata = {
                username: localStorage.setItem("username", inputs.usernameinput.value),
                password: localStorage.setItem("userpassword", inputs.passwordinput.value),
                checked: localStorage.setItem("checked",checked)
            }

           
        }
    })


    


   


}