let submit = document.querySelector(".enterTask button");

submit.addEventListener("click", function(){
    
    let inputText = document.querySelector("#task");
    let inputValue = inputText.value;
    
    if(inputValue.length > 0)
    {
        let ul = document.querySelector(".list .ul .li");
        let li = document.createElement("li");

        li.appendChild(document.createTextNode(inputText.value));
        
        let div = document.createElement("div");
        div.className = "todoBtn";
        
        let editButton = document.createElement("button");
        editButton.appendChild(document.createTextNode("Edit"));
        
        let deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        
        div.append(editButton);
        div.append(deleteButton);
        
        ul.append(li);
        li.append(div);

        inputText.value = '';
    }

})




