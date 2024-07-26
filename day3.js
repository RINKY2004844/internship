var form=document.getElementById('form')

form.addEventListener('submit',function(event) {
    event.preventDefault()//prevents the form from autosubmitting
    var username=document.getElementById('username').value
    console.log(username)
    var email=document.getElementById('email').value
    console.log(email)

});
