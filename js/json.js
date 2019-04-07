// $.ajax({url: "jsonFiles/deals.json", success: function(result){
//     //    alert( result.data[0].first_name);
//     $(".firstCol").html("<div>")
    
//     for(var i = 0; i<3; i++)
//     {
//         $(".firstCol").append(
//         "<p><img src='"+result.data[i].avatar+"'><p>"+
//         "<p>"+result.data[i].last_name+"</p>"+
//         "<p>"+result.data[i].first_name+"</p>");
//     }
//     $(".firstCol").append("</div>")
//       }});
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);

var id;
for(var i=0; i<30; i++)
{
  id = i;
    var text = "" ;
    var rate = parseInt(myobj.Dept.Categories.Category[i].rate);
    for(var j = 0; j<rate ;j++)
    {
        text = text+"<img src ='images/Filled_star.png'>";
    }
    
 
    document.getElementById("Categories").innerHTML +="<div class='categorie col-lg-3 col-md-4 col-sm-6'>"+
    "<img class='photoProduct 'class='img-fluid' src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p class='dealDay'>"+myobj.Dept.Categories.Category[i].deal+"</p>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a><br>"+
  
    
  text+"<br>"+
    "<button class='detailBtn' id="+id+" onclick =showProduct('"+id+"')>see detail</button>"
    "</div>";
   
      
    
}


}
}
xmlhttp.open("GET","jsonFiles/Json.txt",true);
xmlhttp.send();
    
function showProduct(id)
{
  localStorage.setItem("id", id);
  location.href="showProduct.html";
}
