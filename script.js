/*WDD Lab 9.1 - Daniel Syrén (20105070).js*/
function NNBB() {
    for (i = 99; i > 2; i--) {
        document.getElementById("bdy").innerHTML += "<br / ><br / >" + i + " bottles of beer on the wall, " + i + " bottles of beer<br />Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall";
    }
    document.getElementById("bdy").innerHTML += "<br / ><br / >2 bottles of beer on the wall, 2 bottles of beer<br />Take one down and pass it around, 1 bottle of beer on the wall<br / ><br / >1 bottle of beer on the wall, 1 bottle of beer<br />Take one down and pass it around, no bottles of beer on the wall";
}