function age(bdate) {
  const dateNow = Date.now()
  const birthday = new Date(bdate)
  
  if (birthday > dateNow) {
    return NaN
  } else {
    const difference = new Date(dateNow - birthday)
    return difference.getFullYear() - 1970
  }
}

function decorate(element, dict) {
  var text = '<tr><th>name</th><th>birthday</th><th>age</th></tr>'
  for (var i = 0; i < dict.length; ++i) {
    text += '<tr>'
    
    text += '<td>' + dict[i].name + '</td>'
    text += '<td>' + dict[i].date + '</td>'
    text += '<td>' + age(dict[i].date) + '</td>'
    
    text += '</tr>'
  }
  
  element.innerHTML = text
}

function fileHandler(elementEvent) {
  const content = document.getElementById('table')
  const element = elementEvent.srcElement
  
  var reader = new FileReader()
  
  reader.onloadend = (file) => {
    const parsed = JSON.parse(file.target.result)
    decorate(content, parsed)
  }  
  
  reader.readAsText(element.files[0])
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('file').addEventListener('change', () => {
    fileHandler(event)
  })
})
