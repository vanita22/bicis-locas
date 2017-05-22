function validateForm(){
	/* Escribe tú código aquí */


var valido = true;
	if(document.getElementById("name").value == " " ){
		alert("ingrese nombre válido");
		return valido = false;
	}

	if(document.getElementById("name").value != toUppercase([A-Z])){
		alert("ingrese nombre con mayúsculas válido");
		return valido = false;
	}


	if(document.getElementById("lastname").value == " "){
		alert("ingrese apellido válido");
		return valido = false;
	}

	if(document.getElementById("lastname").value != toUppercase([A-Z])){
		alert("ingrese apellido con mayúsculas válido");
		return valido = false;
	}


	var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	var email = document.formulario.input-email.value;
	if (!expresion.test(input-email)){
		alert("ingrese email válido");
        return valido = false;
	}

	if(document.getElementById('input-password').value < 6){
		alert("ingrese password válido");
    	return valido = false;
	}

	if(document.getElementById('input-password').value =="password" ){
		alert("ingrese password válido");
    	return valido = false;
	}

	if(document.getElementById('input-password').value =="123456" || "098754" ){
		alert("ingrese password válido");
    	return valido = false;
	}

return valido;
}