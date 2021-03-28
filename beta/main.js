function newtask(task) {
    if (task.value) {
    
        var t = document.createElement("li");
        t.innerHTML = '<span class="task">'.concat(String(task.value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').concat('</span><span class="next">></span>'));
        task.value = "";
        document.getElementById("tdl").appendChild(t);
        refreshnex();

    }
    
}

function refreshnex() {
    var nexbut = document.getElementsByClassName("next");
    var i;
    for (i = 0; i < nexbut.length; i++) {
    nexbut[i].onclick = function() {
    var cn = this.parentElement.parentElement.id;
    var elem = this.parentElement;
    if (cn === "tdl") {
        document.getElementById("idl").appendChild(elem);
    }
    else if (cn === "idl") {
        document.getElementById("ddl").appendChild(elem);
    }
    else {
        elem.style.display = "none" ;
      }
     }
    }
    var task = document.getElementById("t-input");
    task.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        newtask(task);
    }
    })
}


document.addEventListener("DOMContentLoaded", function() {
    refreshnex();
    var cls = document.getElementById("clear-ddl");
    cls.onclick = function() {
        var ddl = document.getElementById("ddl");
        ddl.innerHTML = "";
    }
});





