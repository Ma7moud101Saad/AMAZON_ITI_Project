var prod = document.getElementById("products");
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);
for(let i = 0; i<20; i++)
{
    var id= "product"+i;
prod.innerHTML+="<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12 product align-self-start '  id='"+id+"'>"+
"<img class='img-fluid' src='"+myobj.Dept.poducts.product[i].img+"'>"+
"<h5>"+myobj.Dept.poducts.product[i].name+"</h5><br>";

for (x in myobj.Dept.poducts.product[i].link)
{
    document.getElementById(id).innerHTML+="<a href='#'>"+myobj.Dept.poducts.product[i].link[x]+"</a><br>";
  
}
prod.innerHTML+= "</div>";
}
}
}
xmlhttp.open("GET","jsonFiles/department.json",true);
xmlhttp.send();

