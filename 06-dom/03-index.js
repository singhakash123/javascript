const body = document.querySelector('body')
const div = document.createElement('div')
     div.setAttribute('class',"title old")
     div.setAttribute('id',Math.floor((Math.random()*10)+1))

const textNode = document.createTextNode('akash singh chauhan')
    div.appendChild(textNode)

     div.classList.add("main")
     //div.className =("fx")
     //div.id =('fx')
     //div.innerText = 'akash singh chauhan'
body.appendChild(div)