function signup(e){
    e.preventDefault()
    const email=document.querySelector("#signupEmail")
    const password=document.querySelector("#signupPassword")
    console.log(email.value,password.value)
}