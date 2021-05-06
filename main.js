function appInit(){
    const todoInput = document.querySelector("#todo__input");
    const addTodoBtn = document.querySelector(".add__todo");
    const appBody = document.querySelector(".app__body") 
 

    
    addTodoBtn.addEventListener("click",function (){
        if(todoInput.value == false ){
            alert("введите задачу!!!")
        }else if(todoInput.value.length >=1){
            addTodo()

        }
    })
    function addTodo(){
        document.addEventListener("DOMContentLoaded",getTodos)

        const todo = {
            todoValue:todoInput.value,
            checked : false,
         
        }
        const todoBlock = document.createElement("div");
        todoBlock.classList.add("todo__block")


        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("todo__checkbox");

        const todoText  = document.createElement("li");
        todoText.classList.add("todo__text");
        todoText.innerText = todoInput.value;


        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete__todo");
        deleteBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="7" x2="20" y2="7" />
  <line x1="10" y1="11" x2="10" y2="17" />
  <line x1="14" y1="11" x2="14" y2="17" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
        `
        deleteBtn.addEventListener("click",function(){
            const parElement = deleteBtn.parentElement
            parElement.classList.add("deleted")
            parElement.addEventListener("transitionend",function(){
                parElement.remove()
    
            
        })})

       
        checkbox.addEventListener("change",function(){
            const  parElement = checkbox.parentElement;
            parElement.classList.toggle("checked")
            if(checkbox.checked){
             todo.checked = true


         }else if(checkbox.checked == false){
            todo.checked = false 
            

         }


         } )
        

        todoBlock.appendChild(checkbox);
        todoBlock.appendChild(todoText);
        todoBlock.appendChild(deleteBtn)
        appBody.appendChild(todoBlock)
        
       
        todoInput.value = "" 
        saveLocalTodos()



        function saveLocalTodos(){
            let todos;
            if(localStorage.getItem("todos") === null){
                todos = []
            }else{
                todos = JSON.parse(localStorage.getItem("todos"))
            }
            todos.push(todo);
            localStorage.setItem("todos",JSON.stringify(todos))
        }
          

        document.addEventListener("DOMContentLoaded",getTodos)

        function getTodos(){
            console.log("work")
            let todos;
            if(localStorage.getItem("todos")=== null){
                todos = []
            }else{
                todos = JSON.parse(localStorage.getItem("todos"))
            }
            todos.forEach(element => {
    
                const todoBlock = document.createElement("div");
                todoBlock.classList.add("todo__block")
        
        
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.classList.add("todo__checkbox");
        
                const todoText  = document.createElement("li");
                todoText.classList.add("todo__text");
                todoText.innerText = element.value;
        
        
                const deleteBtn = document.createElement("button");
                deleteBtn.classList.add("delete__todo");
                deleteBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
                `
                deleteBtn.addEventListener("click",function(){
                    const parElement = deleteBtn.parentElement
                    parElement.classList.add("deleted")
                    parElement.addEventListener("transitionend",function(){
                        parElement.remove()
            
                    
                })})
        
               
                checkbox.addEventListener("change",function(){
                    const  parElement = checkbox.parentElement;
                    parElement.classList.toggle("checked")
                    if(checkbox.checked){
                     element.checked = true
        
        
                 }else if(checkbox.checked == false){
                    element.checked = false 
                    
        
                 }
        
        
                 } )
                
        
                todoBlock.appendChild(checkbox);
                todoBlock.appendChild(todoText);
                todoBlock.appendChild(deleteBtn)
                appBody.appendChild(todoBlock)
                
               
            });
        
        }
        
}

      
}
document.addEventListener("DOMContentLoaded",appInit)