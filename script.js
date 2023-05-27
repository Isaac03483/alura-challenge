function encriptar(){
    const value = document.getElementById("input-text").value;
    console.log(value);
    if(value == ''){
        document.getElementById("empty-div").style.display = "block";
        document.getElementById("non-empty-div").style.display = "none";
        return;
    }

    document.getElementById("empty-div").style.display = "none";
    document.getElementById("non-empty-div").style.display = "block";

}

function desencriptar(){
    const value = document.getElementById("input-text").value;
    console.log(value);
    if(value == ''){
        document.getElementById("empty-div").style.display = "block";
        document.getElementById("non-empty-div").style.display = "none";
        return;
    }

    document.getElementById("empty-div").style.display = "none";
    document.getElementById("non-empty-div").style.display = "block";
}