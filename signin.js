
function savedata(){
	let name,mob,email,pass;

	name = document.getElementById("name").value;
	mob = document.getElementById("mob").value;
	email = document.getElementById("email").value;
	pass = document.getElementById("pass").value;
	let user_record = new Array();
	user_record =JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[] 
	if(user_record.some((v)=>{return v.email==email}))
	{
		alert("duplicate data");
	}
	else{
user_record.push({
		"name":name,
		"mob":mob,
		"email":email,
		"pass":pass
	})
	localStorage.setItem("user",JSON.stringify(user_record));
	
	}
 }

 