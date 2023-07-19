const submitBtn = document.querySelector('#sub')
const wrapperChild = document.querySelector('.wrapper-child')
const targetName = document.querySelector('.targetName')
const senderName = document.querySelector('.senderName')
const form = document.querySelector('.form')


submitBtn.addEventListener('click', () => {
  const inputSenderName = document.querySelector('#inputSender').value
  const inputUserTarget = document.querySelector('#inputNama').value
  senderName.textContent = inputSenderName
  targetName.textContent = inputUserTarget
  form.classList.toggle('d-none')
  wrapperChild.classList.toggle('d-none')
  
})

