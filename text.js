
// document.addEventListener("DOMContentLoaded", function() {
//     const textElement = document.getElementById('typetext');
//     const text = "user.bat";
//     let index = 0;

//     function typeWriter() {
//         if (index < text.length) {
//             textElement.innerHTML += text.charAt(index);
//             index++;
//             setTimeout(typeWriter, 120); 
//         }
//         else{
//             textElement.innerHTML -= text.charAt(index);
//             index++;
//             setTimeout(typeWriter, 120); 
//         }
//     }

//     typeWriter();
// });
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('typetext');
    const text = "user.bat";
    const span = document.createElement('span');
    
    span.textContent='|'
    // span.style.fontSize = '100%';
    // span.style.animation='blink 0.5s steps(2, start) infinite';
    span.classList.add('span');
    textElement.parentElement.appendChild(span);
    let time = 0;
    let index = 0;
    let isAdding = true;

    function typeWriter() {
        textElement.innerHTML = text.slice(0, index);
        
        if (isAdding) {
            if (index < text.length) {
                index++;
            } else {
                isAdding = false;
                time++;
                if(time < 2){
                    setTimeout(typeWriter, 300);
                }
                // setTimeout(typeWriter, 120); 
                return;
            }
        } else {
            if (index > 0) {
                index--;
            } else {
                isAdding = true;
                // time++;
                // if(time < 2){
                //     setTimeout(typeWriter, 1000);
                // }
                setTimeout(typeWriter, 300); 
                return;
                // break;
            }

        }
        setTimeout(typeWriter, 300); 
        // break;
    }

    typeWriter();
});