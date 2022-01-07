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
        todoList.prepend(element)
        preview.innerHTML=''
        newTask.value=''
    }
});

todoList.addEventListener('click',function(e){
    var element = e.target
    console.log(element.nodeName)
    if(element.nodeName == "UL"){
        return;
    }
    if (element.style.textDecoration == "line-through"){
        todoList.removeChild(element)
        return
    }
    element.parentElement.appendChild(element);
    element.style = "text-decoration: line-through";
});
