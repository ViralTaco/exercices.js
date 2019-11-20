function validate(elementEvent) {
  const alertSpan = document.getElementById('alert')
  const formElement = elementEvent.srcElement
  const query = formElement.q.value
  
  const regexEmpty = /^\s*$/g
  const isAlpha = /^[a-zA-Z\s]+$/g
  
  if (regexEmpty.test(query)) {
    elementEvent.preventDefault() // don't run action on function call
    alertSpan.innerHTML = "Invalid query"
  } else if (!isAlpha.test(query)) {
    elementEvent.preventDefault()
    alertSpan.innerHTML = "No text in input"
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('monform').addEventListener('submit', function () {
    validate(event)
  })
})
