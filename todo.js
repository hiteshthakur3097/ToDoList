var data=(localStorage.getItem('todolist'))? JSON.parse(localStorage.getItem('todolist')) :{todoarr:[], completedarr:[]};
bringBackToDOM();


function bringBackToDOM()
{
    console.log(data);
    if(!data.todoarr.length && !data.completedarr.length) return;

    for(var i=0; i<data.todoarr.length; i++)
    {
    var value=data.todoarr[i];
    console.log(value);
    DOM(value);

    }

    for(var j=0; j<data.completedarr.length; j++)
    {
       var value=data.completedarr[j];
        console.log(value);
        DOM(value, true);
    }
}

function update()
{
    localStorage.setItem('todolist', JSON.stringify(data));

}

function delTask()
{
    var li=this.parentNode;
    var par=li.parentNode;
    var parid=par.id
    var n=li.childNodes[1].innerText;

    if (parid==="task") 
    {
        data.todoarr.splice(data.todoarr.indexOf(n),1);
    } 
    else 
    {
        data.completedarr.splice(data.completedarr.indexOf(n),1);
    }
    update();
    par.removeChild(li); 
   
}

function CompleteTask()
{

    var li=this.parentNode;
    var par=li.parentNode;
    var Parid=par.id;
    var complete;
    
    if (Parid==="task") 
    {
        var n=li.childNodes[1].innerText;
        data.todoarr.splice(data.todoarr.indexOf(n),1);
        data.completedarr.push(n);

    } 
    else 
    {
        var n=li.childNodes[1].innerText;
        data.completedarr.splice(data.completedarr.indexOf(n),1);
        data.todoarr.push(n);

    }
 
update();
complete=(Parid==="task")?document.getElementById('completed-tasks'):document.getElementById('task');
par.removeChild(li);
complete.insertBefore(li, complete.childNodes[0]);
    
}




function addTask()
{
    var list=document.getElementById("task");
    var li=document.createElement("li");
    var editButton=document.createElement("button");
    var checkbox1=document.createElement("input");
    var label=document.createElement("label");
    var editInput=document.createElement("input");
    var deletebutton=document.createElement("button");
    var newtask=document.getElementById("taskadd2").value;
    editInput.type="text";
    editInput.className="ei";
    checkbox1.type="checkbox";
    checkbox1.className="cb";
    checkbox1.addEventListener('click', CompleteTask)
    editButton.innerText="Edit";
    editButton.className="eb";
    editButton.addEventListener('click', editTask)
    deletebutton.innerText="Delete";
    deletebutton.className="db";
    deletebutton.addEventListener('click', delTask);
    label.innerText=newtask;
    var data12=label.innerText;
    if(newtask==="")
    {
        alert("Add a new Task");
    }
    else
    {
        list.appendChild(li);
        list.insertBefore(li, list.childNodes[0]);
        li.appendChild(checkbox1);
        li.appendChild(label);
        li.appendChild(editInput);
        li.appendChild(editButton);
        li.appendChild(deletebutton);
        data.todoarr.push(data12);
    }

    document.getElementById("taskadd2").value="";
    update();
 
    function editTask()
    {


    var li = this.parentNode;
    var par=li.parentNode;
    var Parid=par.id;
    var n=li.childNodes[1].innerText;
    //console.log(data.todoarr.indexOf(n));
    var index=data.todoarr.indexOf(n);
    var editInput = li.querySelector("input[type=text]");
    var containsClass = li.classList.contains("editMode");
    containsClass=true;

    if(containsClass) 
        {
            label.innerText = editInput.value;

            if(label.innerText!="")
                {
                    console.log(data.todoarr.indexOf(n));
                        if (Parid==="task") 
                        {
                            data.todoarr.splice(data.todoarr.indexOf(label.innerText), 1, label.innerText);
                        }
                        else 
                        {
                            data.completedarr.splice(data.todoarr.indexOf(label.innerText), 1, label.innerText);
                        }

                        update();
                }

    editInput.value="";
        } 

    else 
    {
        editInput.value = label.innerText;
    }

   li.classList.toggle("editMode");  
    }
//console.log(data);
}



function DOM(value, complete)
{

    var list = (complete)?document.getElementById('completed-tasks'):document.getElementById('task');
    var li=document.createElement("li");
    var editButton1=document.createElement("button");
    var checkbox1=document.createElement("input");
    var label=document.createElement("label");
    var editInput1=document.createElement("input");
    var deletebutton=document.createElement("button");
    label.innerText=value;
    console.log(label.innerText);
    editInput1.type="text";
    editInput1.className="ei";
    checkbox1.type="checkbox";
    //checkbox1.checked="checked";
    checkbox1.className="cb";
    checkbox1.addEventListener('click', CompleteTask)
    editButton1.innerText="Edit";
    editButton1.className="eb";
    editButton1.addEventListener('click', editTask1)
    deletebutton.innerText="Delete";
    deletebutton.className="db";
    deletebutton.addEventListener('click', delTask);
    list.appendChild(li);
    list.insertBefore(li, list.childNodes[0]);
    li.appendChild(checkbox1);
    li.appendChild(label);
    li.appendChild(editInput1);
    li.appendChild(editButton1);
    li.appendChild(deletebutton);

    function editTask1()
    {

    

    var li = this.parentNode;
    var par=li.parentNode;
    var Parid=par.id;
    var n=li.childNodes[1].innerText;
    //console.log(data.todoarr.indexOf(n));
    var editInput1 = li.querySelector("input[type=text]");
    var containsClass = li.classList.contains("editMode");
    containsClass=true;

    if(containsClass) 
    {
 
        label.innerText = editInput1.value;

            if(label.innerText!="")
                {
                    console.log(data.todoarr.indexOf(n));
                    if (Parid==="task") 
                    {
                        data.todoarr.splice(data.todoarr.indexOf(label.innerText), 1, label.innerText);
                    } 
                    else 
                    {
                        data.completedarr.splice(data.todoarr.indexOf(label.innerText), 1, label.innerText);
                    }
                        update();
                }

        editInput1.value="";
    } 

    else 
    {
    editInput1.value = label.innerText;
    }

   li.classList.toggle("editMode"); 
}
//console.log(data);
}

