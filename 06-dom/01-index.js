// get elemnent by id 

const element = document.getElementById('title')
          // element.id
          // element.className
          // element.getAttribute('id')
          // element.getAttribute('class')
        
          // element.setAttribute('class',"title heading")  // note : it overwrite always 

          // element.style.backgroundColor = "red"
          // element.style.padding = '1px'       
          // element.style.borderRadius = "35px"
          
          // element.textContent // 'Dom learning chai aur code Akash Singh Chauhan '
          // element.innerHTML // 'Dom learning chai aur code <span style="display: none;">Akash Singh Chauhan</span> '
          // element.innerText // 'Dom learning chai aur code'



// query selector : it give only first value access 


// const elements = document.querySelector('#title')
// const elements2 = document.querySelector('.heading')
// const elements3 = document.querySelector('input[type="text"]')

const elements = document.querySelector('h2')
      elements.style.color = "red"


const ulElement = document.querySelector('ul')
    
const liElements = ulElement.querySelector('li')
      liElements.style.color = 'yellow' 
      liElements.innerText 
      liElements.innerText = 'ITEM10'
        


// query selector all   // it give all the value access
const h1Element = document.querySelectorAll('h1')
          h1Element[0].style.color='purple'

const elements5 = document.querySelectorAll('li')
      elements5[1].style.color = 'purple'

      elements5.forEach(function (item){
              item.style.color = 'red'
              item.style.padding = '20px'
              item.style.borderRadius = '20px'
      })



  // class name 

  const byClassName0 = document.getElementsByClassName('heading')
        byClassName0[0].style.color = 'green'


const byClassName = document.getElementsByClassName('item-list')
                                byClassName[0].style.color = 'blue'

const tempList = Array.from(byClassName)
      tempList.forEach(function (item){
                   item.style.color = 'green'
      })
