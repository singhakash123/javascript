
// 1)  1. event.type
              // Description: Specifies the type of event (e.g., click, keydown, submit).
              document.addEventListener('click', (event) => {
                console.log(event.type);  // Outputs: 'click'
              });
// 2)   2. event.target
             //Description: The element that triggered the event. Often used to identify which DOM element was interacted with.
             document.getElementById('myButton').addEventListener('click', (event) => {
              console.log(event.target);  // Outputs the button element that was clicked
            });

// 3)    3. event.currentTarget
            //Description: The element to which the event handler is attached. This is useful in event delegation when the event handler is attached to a parent element but you want to know which child element triggered the event.
          
            document.getElementById('parent').addEventListener('click', (event) => {
              console.log(event.currentTarget);  // Outputs the #parent element, not the target
            });
            
// 4)    4. event.preventDefault()
            //Description: Prevents the default action associated with the event (e.g., preventing form submission, following a link).

          document.getElementById('myLink').addEventListener('click', (event) => {
             event.preventDefault();  // Prevents the link from being followed
             console.log('Link clicked, default action prevented.');
            });

// 5)     5. event.stopPropagation()
           // Description: Stops the event from propagating (bubbling up) to parent elements. This is useful in event delegation to prevent triggering other handlers on parent elements.            
           document.getElementById('child').addEventListener('click', (event) => {
            event.stopPropagation();  // Prevents event from bubbling up to parent elements
            console.log('Click on child element.');
          });
          

// 6)     6. event.key (for keyboard events)  
           // Description: For keydown and keyup events, this property returns the value of the key that was pressed (e.g., "Enter", "a", "ArrowUp").
           window.addEventListener('keydown', (event) => {
            console.log(event.key);  // Outputs the key that was pressed (e.g., 'a')
          });
          
// 7)     7. event.clientX / event.clientY
           //Description: Provides the mouse pointer's position relative to the viewport (excluding scroll offset).
           document.addEventListener('click', (event) => {
            console.log(event.clientX, event.clientY);  // Outputs mouse coordinates
          });
          

// 8)    8. event.timeStamp
           //Description: The time (in milliseconds) when the event was created relative to the time the page loaded.
           document.addEventListener('click', (event) => {
            console.log(event.timeStamp);  // Outputs timestamp of the click event
          });

// 9)    9. event.relatedTarget (for mouse events like mouseover and mouseout)
            //Description: The other element involved in the mouse event, such as the element the pointer has moved from or to.
            document.getElementById('myElement').addEventListener('mouseover', (event) => {
              console.log(event.relatedTarget);  // Outputs the element the mouse entered from
            });
// 10 )   10. event.detail (for mouse events)
            //Description: Provides extra information about the event, such as the number of clicks for click events or the wheel movement for wheel events.
            document.getElementById('myElement').addEventListener('click', (event) => {
              console.log(event.detail);  // Outputs the number of clicks (1 for a single click)
            });
            