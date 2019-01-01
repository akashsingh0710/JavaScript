var ul = document.getElementById('list');
var li;



var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearItem);






function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item);

    if(item === ''){
        //return false;
        var para = document.createElement("p");
        var element = document.getElementById("input");
        var node = document.createTextNode("Enter your TODO");
        para.appendChild(node);
        element.append(para);
        //var element = document.getElementById("container");
        
        para.style.opacity = "1";
        input.style.opacity = "1";

        
        //element.append(node);
        //para.className = 'visual';
        //element.style.opacity = "1"
        //setTimeout( () => {
        //    node.style.opacity = "0";
        //    node.remove();
        //},3000);

       


    } else {
        //create li
        li =document.createElement('li');
        
        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id' , 'check');
        
        //create label
        var label = document.createElement('label');
        label.setAttribute('for' , 'item')  //optional

        //add these element on web page

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        //li.className = 'visual'

        setTimeout( () => {
            li.className = 'visual'
        },3);

        input.value =''

    }

}

function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])    
        }
        const element = li[index];   
    }
}

function clearItem(){
    li = ul.children
    for(let index = li.length; index > 0; index--) {        
        ul.removeChild(li[index-1])             
    }
}