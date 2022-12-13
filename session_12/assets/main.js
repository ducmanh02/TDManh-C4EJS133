const ul = document.getElementById('list');
const btn = document.querySelector('#addTask');


//add tasks 
btn.addEventListener('click',addTask)
function addTask(e){
    e.preventDefault();
    const input = document.querySelector('#inputForm').value;

    if(input.trim() ==''){
        alert("Please enter the task!!");
        return;
    }
    console.log(input);

    innerTask(input);
}

//inner Tasks
function innerTask(input){
    
    const li = document.createElement('li');
    const taskName = document.createElement('span');

    // add name task content
    taskName.textContent = input;

    // add Class
    taskName.classList.add('taskItem');

    //append to DOM 
    li.appendChild(taskName);
    
    ul.appendChild(li);
    saveTask();

    //reset input
    setTimeout(()=>{
        document.getElementById('inputForm').value ='';
    },100);
    console.log(ul);
}

function saveTask(){
    let listTasks = [];
    const li = document.querySelectorAll('ul');
    for (let i = 0; i < li.length; i++) {
        const span = li[i].querySelector('.taskItem');
        let taskInfo = {
            'name': span.textContent
        }
        listTasks.push(taskInfo);
    }
    localStorage.setItem('listTasks', JSON.stringify(listTasks));
    console.log(listTasks);
}