function caroussel()
{
    var i=2;
    var photoGal = document.getElementById("firstRow");
    setInterval(function()
    {
        photoGal.innerHTML="<img src='res/ph"+i+".jpg' class='img-fluid' alt='Shipment' style='position: absolute; z-index:1; class='img-fluid'>";
        i++;
        if(i>3) i=1;
        
    },4000);

}