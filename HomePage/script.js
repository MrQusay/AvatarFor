onload = function(){
    let userdatarecieved = {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("userpassword"),
        checked: localStorage.getItem("checked")
    }
    let Navbar = {
        LoginButton: document.getElementById("LoginButton"),
        AboutusButton: document.getElementById("AboutusButton")
    }



    Navbar.LoginButton.addEventListener('click',() =>{
        if(userdatarecieved.checked){
            return console.log("We have recieved your login data already from before, Sir! " + userdatarecieved.username + " " + userdatarecieved.password), alert("Alert: Check console to see your data and you have logged already before.")
        }else if(!userdatarecieved.checked){
            window.location.href = "../index.html";
        }
    })


    Navbar.AboutusButton.addEventListener('click',() => {
        location.href = "Aboutus/index.html";
    })
}
