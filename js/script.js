function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }

/* show image on viewbox */
function changeImg(image){
    var imghol = document.getElementById("imageHolder");
    imghol.src = image;
  }

/* SUBMIT FORM */
  function openForm() {
    document.getElementById("my-form").style.width = "500px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeForm() {
    document.getElementById("my-form").style.width = "0";
  }
