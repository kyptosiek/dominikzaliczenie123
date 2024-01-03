function suma(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik1=liczba1+liczba2;
    document.getElementById("wynik").innerHTML=wynik1;
 }
function roznica(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik2=liczba1-liczba2;
    document.getElementById("wynik").innerHTML=wynik2;
}
function iloczyn(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik3=liczba1*liczba2;
    document.getElementById("wynik").innerHTML=wynik3;
 }
function iloraz(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik4=liczba1/liczba2;
    document.getElementById("wynik").innerHTML=wynik4;
}
function potegowanie(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik5=Math.pow(liczba1,liczba2);
    document.getElementById("wynik").innerHTML=wynik5;
}