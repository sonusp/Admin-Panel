document.getElementById("submit").onclick =function validate()
    {
     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     if ( username == "admin" && password == "admin")
        {
          alert(" Login successful !");
          
          location.href="./Dashboard/index.html"; // Redirecting to other page.
          return false;
        }
    else {
           alert(" Incorect Username or Password !");
         }
    }
    