function tr(string) {
   return `<tr>${string}</tr>`;
}

function td(string) {
   return `<td>${string}</td>`;
}

function tableHeader(listString) {
   let content = ""
   
   for (let line of listString) {
      content += `<th scope="row">${line}</th>`;
   }
   
   return tr(content);
}

function tableRow(listString) {
   let content = "";
   
   for (let line of listString) {
      content += td(line);
   }
   
   return tr(content);
}

function audio(url) {
   return `
      <figure>
         <audio controls src="${url}">
            Your browser does not support the <code>audio</code> element.
         </audio>
      </figure>`;
}

function decorate(dictionary) {
   const element = $('#results');
   
   let content = tableHeader(['Artist', 'Song', 'Preview']);
   
   for (let row of dictionary.results) {
      content += tableRow([
         row.artistName, 
         row.trackName, 
         audio(row.previewUrl)
      ]);
   }
   
   element.html(content);
}

function handleError(error, status, response) {
   const element = $('#results');
   let errorMessage = `Error: ${error},
                       Status: ${status},
                       Response: ${result}`;
   element.after(`<span class="error">${errorMessage}</span>`);
}

$(() => {
   $('#search-form').submit(function search(event) {
      event.preventDefault();
      const query = $('#term').val();
      
      let jsonData;
      
      $.ajax({
         url: 'https://itunes.apple.com/search?'
      ,  type: 'GET'
      ,  data: `term=${query}&entity=song`
      ,  dataType: 'json'
      ,  success: (response) => {
            const responseStr = JSON.stringify(response);
            if (jsonData != undefined) {
               jsonData += $.parseJSON(responseStr);
            } else {
               jsonData = $.parseJSON(responseStr);
            }
         }   
      ,  error: (response, status, error) => {
            handleError(error, status, response);
         }   
      ,  complete: () => {
            // this is fine. (Seriously though, it's fine)
            decorate(jsonData);
         }
      });
   });
});