function encriptar(){
    let value = document.getElementById("input-text").value;
    console.log(value);
    if(value == ''){
        document.getElementById("empty-div").style.display = "block";
        document.getElementById("non-empty-div").style.display = "none";
        return;
    }

    document.getElementById("empty-div").style.display = "none";
    document.getElementById("non-empty-div").style.display = "block";

    value = value.replaceAll('e','enter');
    value = value.replaceAll('i','imes');
    value = value.replaceAll('a','ai');
    value = value.replaceAll('o','ober');
    value = value.replaceAll('u','ufat');

    document.getElementById("output-text").value = value;

}

function desencriptar(){
    let value = document.getElementById("input-text").value;
    console.log(value);
    if(value == ''){
        document.getElementById("empty-div").style.display = "block";
        document.getElementById("non-empty-div").style.display = "none";
        return;
    }

    document.getElementById("empty-div").style.display = "none";
    document.getElementById("non-empty-div").style.display = "block";

    value = value.replaceAll('enter','e');
    value = value.replaceAll('imes','i');
    value = value.replaceAll('ai','a');
    value = value.replaceAll('ober','o');
    value = value.replaceAll('ufat','u');

    document.getElementById("output-text").value = value;
}

function copy(){
    const copyText = document.getElementById('output-text');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    alert("texto copiado");
}