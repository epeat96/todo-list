var newTask = document.getElementById("newTask");
var todoList = document.getElementById("todoList");
var preview = document.getElementById('preview');

newTask.oninput = previewTask;

function previewTask()
{
    preview.innerHTML = newTask.value;
}

newTask.addEventListener('keyup',function (e){
    if (e.key ==="Enter"){
        var element = document.createElement('li');
        var text = document.createTextNode(newTask.value)
        var preview = document.getElementById('preview');
        element.appendChild(text)
        todoList.appendChild(element)
        preview.innerHTML=''
        newTask.value=''
    }
});
