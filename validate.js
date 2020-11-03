function validateform(){
		var name=document.registration.username.value;
		var password=document.registration.password.value;
		if(username==null || username=="")
		{
			alert('username cannot be blank');
		return false;
}
else if(password.length<6)
{
	alert('password must be atleast 6 characters');
	return false;
	}
}