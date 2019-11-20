function validate(elementEvent) {
  var formElement = elementEvent.srcElement
  var text = formElement.q.value
  
  var regexEmpty = /^\s*$/g
  
  if (regexEmpty.test(text)) {
    elementEvent.preventDefault() // don't run action on function call
    document.getElementById('alert').innerHTML = "Invalid query"
  } 
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('monform').addEventListener('submit', function () {
    validate(event)
  })
})
