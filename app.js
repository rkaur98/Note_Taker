    
    let addlist =document.getElementById('add-note');
    let mynotes =document.getElementById('mynotes');
    let note = document.getElementsByClassName('notes');
    let del= document.getElementsByClassName('del');
    let li=document.getElementsByClassName('notice');
    
    addlist.addEventListener('click',addnote);
    
    
    
    function get_note1(){
        let myArr= new Array();
        let noteitem = localStorage.getItem('nnotes');  /*global localStorage */
            myArr = JSON.parse(noteitem); 
        return myArr;
    }
    
    
    function addnote() {
        
        let x="";
        let notes = get_note1();
        notes.push(x);
        localStorage.setItem('nnotes', JSON.stringify(notes));
        
     
        display();
     
    }
    
    function display() {
        let notes = get_note1();
        let y="";
     
        for(let i=0; i<notes.length; i++) {
            y += '<li class="notice cf">'+'<button class="del" id="'+i+'">X</button><a href="#" class="note-list">'
                 +'<div id="t'+i+'">'+notes[i]+'</div>'+'</a>'
                 +'<div class="notes" id="'+i+'">'+
    
                '<input id="title'+i+'" type="text" name="title" placeholder="Enter title "/>'
                 +'<button id="done'+i+'">Add</button>'
                +'<div id="new-notes'+i+'" class="new-notes cf">'
                    
                    +'<p id="display'+i+'" class="display"></p>'
                    +'<textarea id="list'+i+'" class="input" name="note"></textarea>'
                    +'<button class="add" id="add'+i+'">Add</button>'
                    
                +'</div>'
                
               +'</div>'+'</li>';
        };
        
     
        document.getElementById('mynotes').innerHTML = y;
        
        enter();
        
        for (let i=0; i < del.length; i++) {
            del[i].addEventListener('click', del_item);
        };
     
        
        
        
    }
    
    display();
    
    function del_item(){
        let div = this.getAttribute('id');
        let dealt = get_note1();
        dealt.splice(div, 1);
        localStorage.setItem('nnotes', JSON.stringify(dealt));
        display();
        console.log(div);
        
    }
    
    
    
    /*================================================================================*/
function enter(){
    
    
    
    for(let i=0; i<note.length;i++){
    
    let list=document.getElementById('list'+i);
    let addition=document.getElementById('add'+i);
    let title = document.getElementById('title'+i);
    let done = document.getElementById('done'+i);
    
    done.addEventListener('click',add_title);
    
    function add_title(){
        let a=title.value;
        
        localStorage.setItem('t'+i,a);
        display_title();
        title.value="";
    }
    
    function display_title(){
        document.getElementById('t'+i).innerHTML=localStorage.getItem('t'+i);
    }
    
    display_title();
    
    function get_note(){
        let myArr= new Array();
        let noteitem = localStorage.getItem('d'+i);  /*global localStorage */
            myArr = JSON.parse(noteitem); 
        return myArr;
    }
    
    
    addition.addEventListener('click', add);
    
    function add() {
        let x = list.value;
        let notes = get_note();
        notes.push(x);
        localStorage.setItem('d'+i, JSON.stringify(notes));
        list.value="";
        
        let arr=[];
        for(let i=0;i<note.length;i++){
        arr.push(localStorage.key(i));
        }
        console.log(arr);
     
        display2();
     
    }
    
    // Display output 
    
    function display2() {
        let notes = get_note();
        let y="";
     
        for(let i=0; i<notes.length; i++) {
            y += '<p>' + notes[i] +'</p>'+'<br/>';
        };
        
     
        document.getElementById('display'+i).innerHTML = y;
        
        for (let i=0; i < del.length; i++) {
            del[i].addEventListener('click', del_note);
        };
     
        
        
        
    }
    function del_note(){
        let div = this.getAttribute('id');
        let arr=[];
            for(let i=0;i<note.length;i++){
            arr.push(localStorage.key(i));
            
            if(i===div){
                localStorage.setItem('d'+div,localStorage.getItem('d'+(div+1)));
            }
            }
            console.log(arr);
            display2();
        }
    
    
    
     display2();
    }
    
    
   
   
}

let arr=[];
    for(let i=0;i<note.length;i++){
        arr.push(localStorage.key(i));
    }
    console.log(arr); 
    
    
