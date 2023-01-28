buttons = document.querySelectorAll("button");
let screen = document.getElementById('screen');
let answer = '';
// console.log(btn);


for(button of buttons){
    button.addEventListener("click", (e)=>{
        content = e.target.innerText;

        if(content == '=')
        {
            screen.value = eval(screen.value);
        }
        else if(content == 'D')   // D means delete last character
        {
            len = screen.value.length;
            screen.value = screen.value.slice(0, len-1);
        } 
        else if(content == 'C')  // C means clear all 
        {
            screen.value = '';
        }
        else
        {
            screen.value += content;
        }

    })
}


// we can also use forEach
// btn.forEach(function(e){
//     e.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }




// CALC using keypress
const body = document.body;
body.addEventListener("keypress", (e)=>{
    key = e.key;
    if(key == 'Enter' || key == '=')
    {
        screen.value = eval(screen.value);
    }
    else if(key == 'C')
    {
        screen.value = '';
    }
    else if(key == 'c')
    {
        strLen = screen.value.length;
        screen.value = screen.value.slice(0, strLen - 1);
    }
    else
    {
        screen.value += key;
    }
})

