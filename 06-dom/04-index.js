

function addLngugae (lang){
      const ulElement = document.querySelector('#langname')
      const liElement = document.createElement('li')
       // liElement.textContent = lang
      const textNode = document.createTextNode(lang)
      liElement.appendChild(textNode)
      ulElement.appendChild(liElement)
}
addLngugae('Java')
addLngugae('React')



// edit 
const secondLang = document.querySelector('li:nth-child(2)')
     console.log(secondLang);
     
    //secondLang.textContent = 'Python'
const elementCreate = document.createElement('li')
const textNode = document.createTextNode('python')
elementCreate.appendChild(textNode)
secondLang.replaceWith(elementCreate)

const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li> js </li>'
   console.log(firstLang);
   

  
// remove 
const langToRemove = document.querySelector('li:nth-child(3)')
langToRemove.remove()
  
   