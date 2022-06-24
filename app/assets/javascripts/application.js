const activityForm = document.getElementById('activity-form')
const nextButton = document.getElementById('next-button')
const prevButton = document.getElementById('prev-button')

let currentStep = 1
const maxStep = 3

nextButton.onclick = function () {
  const isValid = activityForm.reportValidity()

  if (isValid && currentStep < maxStep) {
    document.querySelector(`.step-${currentStep}`).classList.toggle('active')
    document.querySelector(`.step-${currentStep + 1}`).classList.toggle('active')
    document.querySelector(`.step-action-prev`).classList.remove('hide')

    if (currentStep + 1 == maxStep) {
      document.querySelector(`.step-action-next`).classList.add('hide')
      document.querySelector(`.step-action-submit`).classList.remove('hide')
    }

    currentStep += 1
    inputValidationAction(currentStep)
    setCurrentStep(currentStep)
  }
}

prevButton.onclick = function () {
  if (currentStep > 1 && currentStep <= maxStep) {
    document.querySelector(`.step-${currentStep}`).classList.toggle('active')
    document.querySelector(`.step-${currentStep - 1}`).classList.toggle('active')

    if (currentStep - 1 == 1) {
      document.querySelector(`.step-action-prev`).classList.add('hide')
      document.querySelector(`.step-action-next`).classList.remove('hide')
    } else if (currentStep - 1 > 1) {
      document.querySelector(`.step-action-next`).classList.remove('hide')
      document.querySelector(`.step-action-submit`).classList.add('hide')
    }

    currentStep -= 1
    inputValidationAction(currentStep)
    setCurrentStep(currentStep)
  }
}

const inputValidationAction = (step) => {
  document.querySelectorAll(`.step .form-input`).forEach(input => {
    input.removeAttribute('required')
  })

  document.querySelectorAll(`.step-${step} .form-input`).forEach(input => {
    input.setAttribute('required', 'true')
  })
}

const setCurrentStep = (step) => {
  document.getElementById('current-step').innerHTML = step
}

inputValidationAction(currentStep)
setCurrentStep(currentStep)
