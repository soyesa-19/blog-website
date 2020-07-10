

document.addEventListener("DOMContentLoaded", lo);

function lo() {
    var a = document.createElement("A")
    a.style.textDecoration = "none"
    a.style.color = "floralwhite"
    if (window.localStorage.getItem('jwt') == null){       
        a.href = "/users/signin"
        document.querySelector("#signbtn").appendChild(a).innerHTML="Login"
        
    }
    else{
        document.querySelector("#signbtn").appendChild(a).innerHTML="Logout"
        a.onclick = function() {
            window.localStorage.removeItem('jwt')    
        }
        a.href = "/"
    }    
}