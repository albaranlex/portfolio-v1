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
