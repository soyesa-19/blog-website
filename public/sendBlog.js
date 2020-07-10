function myfunction() {
    
    const blogData = {
        title : document.querySelector('#title').value,
        description : document.querySelector('#desc').value
    }
    console.log(blogData)
    fetch('/compose', {
        method:'POST',
        headers:{
        'Content-Type': 'application/json',
        'Authorization':'bearer '+ window.localStorage.getItem('jwt')
        },
        body: JSON.stringify(blogData)
    })
    .then((response)=>{
        console.log(response.status)
        if (response.status == 200){
            window.location = '/'
        }
        else{
            window.location = '/users/signIn'
        }
    })
    .catch((err)=>{
        console.log(err)
    })
   
}

function sign() {
                
    const data = {
        username: document.querySelector('#uname').value,
        password: document.querySelector('#pass').value
    }

    fetch('/users/signIn', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((response)=>{
        console.log(response.status)
        if (response.status == 401) {
            document.querySelector("#error").innerHTML = "Please check your credentials or Register"
            // document.querySelector("#reg").innerHTML = "Register"
        }
        return response.json()
    })
    .then((dt)=>{
        
        console.log(dt.token)
        window.localStorage.setItem('jwt', dt.token)
        window.location = '/'
        console.log(window.localStorage.getItem('jwt'))
        
    })
}

function up() {
    const data = {
        email: document.querySelector("#email").value,
        username: document.querySelector('#uname').value,
        password: document.querySelector('#pass').value
    }
    fetch('/users/signup', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((response)=>{
        console.log(response)
        if (response.status == 200) {
            alert("Registered!!")
            window.location = "/users/signin"
        }
        else {
            document.querySelector("#up").innerHTML = "Already a user! Please Login"
            document.querySelector('#aup').innerHTML = "Login"
        }
        return response.json()
    })
    
}