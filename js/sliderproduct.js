var id = localStorage.getItem("id");
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000
if(id==0){
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);

// -------------------------show one image-------------------------------------------

// ----------------------------------------------------------------------------------
for(var i=0; i<6; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories").innerHTML +="</div>";
   
}
    
}

for(var i=6; i<13; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories2").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories2").innerHTML +="</div>";
}
}

for(var i=13; i<19; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories3").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid'  src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories3").innerHTML +="</div>";
}
}



}
}
xmlhttp.open("GET","jsonFiles/0.txt",true);
xmlhttp.send();
// alert(localStorage.getItem("id"));


// ----------------------------------------------------------
xml=new XMLHttpRequest();
xml.onreadystatechange=function()
{
if (xml.readyState==4 && xml.status==200)
{
str=xml.responseText;
var myobj = JSON.parse(str);
var id ;

for(var i=0; i<30; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
      document.getElementById("imgId").src = myobj.Dept.Categories.Category[i].img;
   
}
    
}

}
}
xml.open("GET","jsonFiles/oneProduct.txt",true);
xml.send();
//----------------------img slider------------------------------
xml2=new XMLHttpRequest();
xml2.onreadystatechange=function()
{
if (xml2.readyState==4 && xml2.status==200)
{
str=xml2.responseText;
var myobj = JSON.parse(str);
var id ;
var imgId;
var counter=0;
for(var i=0; i<13; i++)
{
    id = localStorage.getItem("id");

  document.getElementById(i).src  = myobj.Dept.Categories.Category[i].img;

console.log(i);

    
}

}
}
xml2.open("GET","jsonFiles/0.txt",true);
xml2.send();
// ------------------------------------------------------
function showImg(id){
  document.getElementById("imgId").src =document.getElementById(id).src;

}
}
// 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
else if(id == 1)
{
  xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);

// -------------------------show one image-------------------------------------------

// ----------------------------------------------------------------------------------
for(var i=0; i<6; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories").innerHTML +="</div>";
   
}
    
}

for(var i=6; i<13; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories2").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories2").innerHTML +="</div>";
}
}

for(var i=13; i<19; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories3").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid'  src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories3").innerHTML +="</div>";
}
}



}
}
xmlhttp.open("GET","jsonFiles/1.txt",true);
xmlhttp.send();
// alert(localStorage.getItem("id"));


// ----------------------------------------------------------
xml=new XMLHttpRequest();
xml.onreadystatechange=function()
{
if (xml.readyState==4 && xml.status==200)
{
str=xml.responseText;
var myobj = JSON.parse(str);
var id ;

for(var i=0; i<30; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
      document.getElementById("imgId").src = myobj.Dept.Categories.Category[i].img;
   
}
    
}

}
}
xml.open("GET","jsonFiles/oneProduct.txt",true);
xml.send();
//----------------------img slider------------------------------
xml2=new XMLHttpRequest();
xml2.onreadystatechange=function()
{
if (xml2.readyState==4 && xml2.status==200)
{
str=xml2.responseText;
var myobj = JSON.parse(str);
var id ;
var imgId;
var counter=0;
for(var i=0; i<13; i++)
{
    id = localStorage.getItem("id");

  document.getElementById(i).src  = myobj.Dept.Categories.Category[i].img;

console.log(i);

    
}

}
}
xml2.open("GET","jsonFiles/1.txt",true);
xml2.send();
// ------------------------------------------------------
function showImg(id){
  document.getElementById("imgId").src =document.getElementById(id).src;

}
  
}

// ---------------------2222222222222222222222222222222


else if(id == 2)
{
  xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);

// -------------------------show one image-------------------------------------------

// ----------------------------------------------------------------------------------
for(var i=0; i<6; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories").innerHTML +="</div>";
   
}
    
}

for(var i=6; i<13; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories2").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories2").innerHTML +="</div>";
}
}

for(var i=13; i<19; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories3").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid'  src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories3").innerHTML +="</div>";
}
}



}
}
xmlhttp.open("GET","jsonFiles/2.txt",true);
xmlhttp.send();
// alert(localStorage.getItem("id"));


// ----------------------------------------------------------
xml=new XMLHttpRequest();
xml.onreadystatechange=function()
{
if (xml.readyState==4 && xml.status==200)
{
str=xml.responseText;
var myobj = JSON.parse(str);
var id ;

for(var i=0; i<30; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
      document.getElementById("imgId").src = myobj.Dept.Categories.Category[i].img;
   
}
    
}

}
}
xml.open("GET","jsonFiles/oneProduct.txt",true);
xml.send();
//----------------------img slider------------------------------
xml2=new XMLHttpRequest();
xml2.onreadystatechange=function()
{
if (xml2.readyState==4 && xml2.status==200)
{
str=xml2.responseText;
var myobj = JSON.parse(str);
var id ;
var imgId;
var counter=0;
for(var i=0; i<13; i++)
{
    id = localStorage.getItem("id");

  document.getElementById(i).src  = myobj.Dept.Categories.Category[i].img;

console.log(i);

    
}

}
}
xml2.open("GET","jsonFiles/2.txt",true);
xml2.send();
// ------------------------------------------------------
function showImg(id){
  document.getElementById("imgId").src =document.getElementById(id).src;

}
  
}

// 3333333333333333333333333333333333333333333333333333333333333333333333333333333333



else if(id == 3)
{
  xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);

// -------------------------show one image-------------------------------------------

// ----------------------------------------------------------------------------------
for(var i=0; i<6; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories").innerHTML +="</div>";
   
}
    
}

for(var i=6; i<13; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories2").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories2").innerHTML +="</div>";
}
}

for(var i=13; i<19; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories3").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid'  src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories3").innerHTML +="</div>";
}
}



}
}
xmlhttp.open("GET","jsonFiles/3.txt",true);
xmlhttp.send();
// alert(localStorage.getItem("id"));


// ----------------------------------------------------------
xml=new XMLHttpRequest();
xml.onreadystatechange=function()
{
if (xml.readyState==4 && xml.status==200)
{
str=xml.responseText;
var myobj = JSON.parse(str);
var id ;

for(var i=0; i<30; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
      document.getElementById("imgId").src = myobj.Dept.Categories.Category[i].img;
   
}
    
}

}
}
xml.open("GET","jsonFiles/oneProduct.txt",true);
xml.send();
//----------------------img slider------------------------------
xml2=new XMLHttpRequest();
xml2.onreadystatechange=function()
{
if (xml2.readyState==4 && xml2.status==200)
{
str=xml2.responseText;
var myobj = JSON.parse(str);
var id ;
var imgId;
var counter=0;
for(var i=0; i<13; i++)
{
    id = localStorage.getItem("id");

  document.getElementById(i).src  = myobj.Dept.Categories.Category[i].img;

console.log(i);

    
}

}
}
xml2.open("GET","jsonFiles/3.txt",true);
xml2.send();
// ------------------------------------------------------
function showImg(id){
  document.getElementById("imgId").src =document.getElementById(id).src;

}
  
}
// ---444444444444444444444444444444444444444444444444444444444444444444444444444444

else if(id == 4)
{
  xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);

// -------------------------show one image-------------------------------------------

// ----------------------------------------------------------------------------------
for(var i=0; i<6; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories").innerHTML +="</div>";
   
}
    
}

for(var i=6; i<13; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories2").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories2").innerHTML +="</div>";
}
}

for(var i=13; i<19; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories3").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid'  src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories3").innerHTML +="</div>";
}
}



}
}
xmlhttp.open("GET","jsonFiles/4.txt",true);
xmlhttp.send();
// alert(localStorage.getItem("id"));


// ----------------------------------------------------------
xml=new XMLHttpRequest();
xml.onreadystatechange=function()
{
if (xml.readyState==4 && xml.status==200)
{
str=xml.responseText;
var myobj = JSON.parse(str);
var id ;

for(var i=0; i<30; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
      document.getElementById("imgId").src = myobj.Dept.Categories.Category[i].img;
   
}
    
}

}
}
xml.open("GET","jsonFiles/oneProduct.txt",true);
xml.send();
//----------------------img slider------------------------------
xml2=new XMLHttpRequest();
xml2.onreadystatechange=function()
{
if (xml2.readyState==4 && xml2.status==200)
{
str=xml2.responseText;
var myobj = JSON.parse(str);
var id ;
var imgId;
var counter=0;
for(var i=0; i<13; i++)
{
    id = localStorage.getItem("id");

  document.getElementById(i).src  = myobj.Dept.Categories.Category[i].img;

console.log(i);

    
}

}
}
xml2.open("GET","jsonFiles/4.txt",true);
xml2.send();
// ------------------------------------------------------
function showImg(id){
  document.getElementById("imgId").src =document.getElementById(id).src;

}
  
}


// ---55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555

else if(id == 5)
{
  xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);

// -------------------------show one image-------------------------------------------

// ----------------------------------------------------------------------------------
for(var i=0; i<6; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories").innerHTML +="</div>";
   
}
    
}

for(var i=6; i<13; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories2").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories2").innerHTML +="</div>";
}
}

for(var i=13; i<19; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
    var id = "class"+i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
   
 
    document.getElementById("Categories3").innerHTML +="<div class='classbook' id='"+id+"'>";

    document.getElementById(id).innerHTML+= "<img class='photoProduct 'class='img-fluid'  src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn'>see detail</button>"
    document.getElementById("Categories3").innerHTML +="</div>";
}
}



}
}
xmlhttp.open("GET","jsonFiles/5.txt",true);
xmlhttp.send();
// alert(localStorage.getItem("id"));


// ----------------------------------------------------------
xml=new XMLHttpRequest();
xml.onreadystatechange=function()
{
if (xml.readyState==4 && xml.status==200)
{
str=xml.responseText;
var myobj = JSON.parse(str);
var id ;

for(var i=0; i<30; i++)
{
    id = localStorage.getItem("id");
    if(myobj.Dept.Categories.Category[i].cat == id){
      document.getElementById("imgId").src = myobj.Dept.Categories.Category[i].img;
   
}
    
}

}
}
xml.open("GET","jsonFiles/oneProduct.txt",true);
xml.send();
//----------------------img slider------------------------------
xml2=new XMLHttpRequest();
xml2.onreadystatechange=function()
{
if (xml2.readyState==4 && xml2.status==200)
{
str=xml2.responseText;
var myobj = JSON.parse(str);
var id ;
var imgId;
var counter=0;
for(var i=0; i<13; i++)
{
    id = localStorage.getItem("id");

  document.getElementById(i).src  = myobj.Dept.Categories.Category[i].img;

console.log(i);

    
}

}
}
xml2.open("GET","jsonFiles/5.txt",true);
xml2.send();
// ------------------------------------------------------
function showImg(id){
  document.getElementById("imgId").src =document.getElementById(id).src;

}
  
}
