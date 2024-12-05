const parent = document.querySelector('#parent')
      console.log(parent);
       console.log(parent.children);  // parent.children gives html collection 
       console.log(parent.children[1].innerHTML);
       
const htmlCollection = parent.children

for (let i = 0; i < htmlCollection.length; i++) {
     const element = htmlCollection[i]
      element.style.color = 'red'
}

console.log(htmlCollection[1].innerHTML);
console.log(htmlCollection[1].style.color = 'orange');

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);



const dayOne = document.querySelector('.day')
         console.log(dayOne);
         console.log(dayOne.parentElement);
         console.log(dayOne.nextElementSibling);

         

console.log("NODES :" ,parent.childNodes)
         

    