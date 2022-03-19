let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let cointainerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ1234567890!@"
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

slider.oniput = function () {
  sizePassword.innerHTML = this.value
}

function generatePassword() {
  let pass = ""
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }
}

cointainerPassword.classList.remove('hide')
password.innerHTML = pass
novaSenha = password

function copyPassword() {
  alert('Senha copiada com sucesso!')
  navigator.clipboard.writeText(novaSenha)
}
