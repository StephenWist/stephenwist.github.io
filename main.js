function submitEmail() {
	var email = document.getElementById("email_input").value;
	console.log(email);
	validation();

}


// Name and Email validation Function.
function validation(){
	var email = document.getElementById("email_input").value;
	var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
	if (!(email).match(emailReg)){
		alert("Invalid Email...!!!!!!");
		return false;
	}else{
		return true;
	}
}