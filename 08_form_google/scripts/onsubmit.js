function validate(elementEvent) {
  var inputElement = elementEvent.srcElement
  var text = inputElement.q.value
  
  if (!text) {
    elementEvent.preventDefault() // don't run action on function call
    alert('Empty form')
  } 
}


//document.getElementById('monform').addEventListener('submit', function () {
//  validate(event)
//})

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('monform').addEventListener('submit', function () {
    validate(event)
  })
})
