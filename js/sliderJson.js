xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);

// ---------------------------------------------------------------------------------------------------------------------

for(var i=0; i<6; i++)
{
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

for(var i=6; i<13; i++)
{
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

for(var i=13; i<19; i++)
{
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
xmlhttp.open("GET","jsonFiles/Json.txt",true);
xmlhttp.send();


