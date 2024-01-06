const generatePassword = (length = 10) => {
    const pwdCharacters = 
    'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'

    let password = '';

    for(let i=0;i<length;i++) {

        let randomNum = Math.floor(Math.random() * pwdCharacters.length)
        password += pwdCharacters[randomNum]
    }

    document.getElementById('password').value = password;

    return password;
}

function copy() {
  let btn = document.querySelector('.icons');
  btn.addEventListener('click',function() {
    let txt = document.querySelector('.password')
    txt.select();
    document.execCommand('copy');
  })

}

copy()
generatePassword()
