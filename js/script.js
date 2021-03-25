function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }

/* Infinite Scroll Nav */
$('li').click(function(){
    $(this).prependTo($(this).parent());
    })

