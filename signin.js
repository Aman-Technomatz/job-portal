function savedata() {
  let name, mob, email, pass;

  name = document.getElementById("name").value;
  mob = document.getElementById("mob").value;
  email = document.getElementById("email").value;
  pass = document.getElementById("pass").value;
  let user_record = new Array();
  user_record = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [];
  if (
    user_record.some((v) => {
      return v.email == email;
    })
  ) {
    alert("duplicate data");
  } else {
    user_record.push({
      name: name,
      mob: mob,
      email: email,
      pass: pass,
    });
    localStorage.setItem("user", JSON.stringify(user_record));
    window.location.href = "signin.html";
  }
}

function loginData() {
  let email, pass;
  var checkBox = document.getElementById("myCheck");
  email = document.getElementById("email").value;

  pass = document.getElementById("pass").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [];
  if (
    checkBox.checked == true &&
    user_records.some((v) => {
      return v.email == email && v.pass == pass;
    })
  ) {
    alert("Login Pass");
    let current_user = user_records.filter((v) => {
      return v.email == email && v.pass == pass;
    })[0];
    localStorage.setItem("name", current_user.name);
    localStorage.setItem("email", current_user.email);
    window.location.href = "home.html";
  } else {
    alert("Login Fail");
  }
}
