var uploadField = document.getElementById("scan");
uploadField.onchange = function() {
    if(this.files[0].size > 2000000){ // ini untuk ukuran 800KB, 1000000 untuk 1 MB.
        alert("Maaf, File Terlalu Besar !!");
        this.value = "";
    };
};

document.getElementById("beda").addEventListener("click", display);
function display(){
    if(document.getElementById("beda").checked===true){
        document.getElementById("box").hidden=false
    }
}

document.getElementById("sama").addEventListener("click", displaysama);
function displaysama(){
    if(document.getElementById("sama").checked===true){
        document.getElementById("box").hidden=true
    }
}

var uploadField = document.getElementById("scan1");
uploadField.onchange = function() {
    if(this.files[0].size > 2000000){ // ini untuk ukuran 800KB, 1000000 untuk 1 MB.
        alert("Maaf, File Terlalu Besar !!");
        this.value = "";
    };
};

document.getElementById("lain").addEventListener("click", displaylain);
function displaylain(){
    if(document.getElementById("lain").checked===true){
        document.getElementById("lainbox").hidden=false
    }
}

document.getElementById("denda").addEventListener("click", displaydenda);
function displaydenda(){
    if(document.getElementById("denda").checked===true){
        document.getElementById("lainbox").hidden=true
    }
}

document.getElementById("rusun").addEventListener("click", displayrusun);
function displayrusun(){
    if(document.getElementById("rusun").checked===true){
        document.getElementById("lainbox").hidden=true
    }
}

document.getElementById("ringan").addEventListener("click", displayringan);
function displayringan(){
    if(document.getElementById("ringan").checked===true){
        document.getElementById("lainbox").hidden=true
    }
}
                    
document.getElementById("hukum").addEventListener("click", displayhukum);
function displayhukum(){
    if(document.getElementById("hukum").checked===true){
        document.getElementById("lainbox").hidden=true
    }
}
            
document.getElementById("pendidikan").addEventListener("click", displaypendidikan);
function displaypendidikan(){
    if(document.getElementById("pendidikan").checked===true){
        document.getElementById("lainbox").hidden=true
    }
}