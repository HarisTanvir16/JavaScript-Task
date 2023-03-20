function jump() {
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let username = document.getElementById("fullName").value
  if (email === "admin@user.com" && password === "123456" && username != "" ) {
    window.location.href = "home.html";
    var txtValue = document.getElementById('fullName').value;
    localStorage.setItem("passvalue", txtValue);
  }
  else {
    Toastify({
      text: "Invalid Information!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, red, black)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
    return
  }
}
let cities = ['Faisalabad', 'Lahore', 'Rawalpindi', 'Karachi', 'Islamabad', 'Multan']
console.log(cities);
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i])
}

function showOutput() {
  document.getElementById("output").innerHTML = output;
}


function addbtn() {

   newcity = document.getElementById("cityInput").value;
  if (!newcity) {
    Toastify({
      text: "Invalid Information!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, red, black)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
    return
  }
  cities.push(newcity);
  console.log(cities);
  Toastify({
    text: "New City Added",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, blue, cyan)",
    },
    onClick: function () { } // Callback after click
  }).showToast();

}
function showbtn() {

  document.getElementById("output").innerHTML = "";

  for (let i = 0; i < 6; i++) {
    console.log(i + 1, cities[i])
  }
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i])
    let num = i + 1;
    document.getElementById("output").innerHTML += num + ') ' + cities[i] + '<br>'
  }
}



function badaam() {
  Toastify({
    text: "Eat Badaams Regularly",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, brown, orange)",
    },
    onClick: function () { } // Callback after click
  }).showToast();
}