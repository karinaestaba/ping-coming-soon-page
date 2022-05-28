document.addEventListener('DOMContentLoaded', function(){
  const subscriptionForm = document.getElementById('subscriptionForm')
  const subscriptionButton = document.getElementById('subscriptionButton')

  if ( subscriptionForm != null && subscriptionButton != null){
    subscriptionButton.addEventListener('click', function(event){
      const emailInput = document.getElementById('emailInput')

      if(emailInput != null){
        if(emailInput.checkValidity() === false){
          event.preventDefault()
          event.stopImmediatePropagation()
          subscriptionForm.classList.add('invalid')

          if(emailInput.validity.valueMissing){
            emailInput.classList.add('empty')
          }
          else if(emailInput.validity.typeMismatch){
            emailInput.classList.add('type-mismatch')
          }
        }else{
          subscriptionForm.classList.remove('invalid')
        }
      }
    })
  }
})