





let form = document.createElement("form");
form.setAttribute("action","#");
form.setAttribute("method","post");
document.body.appendChild(form);

///////////////////////////////////////////////////////////////////////

let h3 = document.createElement("h3");
h3.innerHTML="USER INFORMATION";
h3.setAttribute("id","heading1")
form.appendChild(h3);

let br15 = document.createElement("br");
form.appendChild(br15);

let de = document.createElement("div");
de.id="div-error";
let h5 = document.createElement("h5");
h5.innerHTML="";
h5.setAttribute("id","errormsg")
de.appendChild(h5);
form.appendChild(de);

let br17 = document.createElement("br");
form.appendChild(br17);


//////////////////////////////////////////////////////////////////////

let d1= document.createElement("div");
d1.setAttribute("class","flex");
form.appendChild(d1);

let l1 = document.createElement("label");
l1.setAttribute("for","fname");
let t1 = document.createTextNode("First Name : ")
l1.appendChild(t1);
d1.appendChild(l1);



let f1=document.createElement("input");
f1.setAttribute("type","text");
f1.setAttribute("id","fname");
d1.appendChild(f1);


////////////////////////////////////////////////////////////////////////
let br1 = document.createElement("br");
form.appendChild(br1);
////////////////////////////////////////////////////////////////////////

let d2= document.createElement("div");
d2.setAttribute("class","flex");
form.appendChild(d2);

let l2 = document.createElement("label");
l2.setAttribute("for","lname");
let t2 = document.createTextNode("Last Name : ")
l2.appendChild(t2);
d2.appendChild(l2);

let f2=document.createElement("input");
f2.setAttribute("type","text");
f2.setAttribute("id","lname");
d2.appendChild(f2);

/////////////////////////////////////////////////////////////////////////
let br2 = document.createElement("br");
form.appendChild(br2);


////////////////////////////////////////////////////////////////////////

let d3= document.createElement("div");
d3.setAttribute("class","flex");
form.appendChild(d3);

let l3 = document.createElement("label");
l3.setAttribute("for","address");
let t3 = document.createTextNode("Address : ")
l3.appendChild(t3);
d3.appendChild(l3);

let f3=document.createElement("input");
f3.setAttribute("type","text");
f3.setAttribute("id","address");
d3.appendChild(f3);

let l4 = document.createElement("label");
l4.setAttribute("for","pincode");
let t4 = document.createTextNode("Pincode : ")
l4.appendChild(t4);
d3.appendChild(l4);

let f4=document.createElement("input");
f4.setAttribute("type","text");
f4.setAttribute("id","pincode");
d3.appendChild(f4);

////////////////////////////////////////////////////////////////////////////
let br3 = document.createElement("br");
form.appendChild(br3);

////////////////////////////////////////////////////////////////////////////

let d4= document.createElement("div");
d4.setAttribute("class","flex");
form.appendChild(d4);

let l5 = document.createElement("label");
l5.setAttribute("for","");
let t5 = document.createTextNode("Gender : ")
l5.appendChild(t5);
d4.appendChild(l5);

let select = document.createElement("select");
select.setAttribute("id","gender");

let option1= document.createElement("option");
option1.innerHTML="Choose";
select.appendChild(option1);
let option2= document.createElement("option");
option2.innerHTML="Male";
select.appendChild(option2);
let option3= document.createElement("option");
option3.innerHTML="Female";
select.appendChild(option3);
let option4= document.createElement("option");
option4.innerHTML="Others";
select.appendChild(option4);
let option5= document.createElement("option");
option5.innerHTML="Don't want to disclose";
// option1.setAttribute("disabled","disabled");
// option1.setAttribute("selected","true");
select.appendChild(option5);


d4.appendChild(select);

//////////////////////////////////////////////////////////////////////////////

let br4 = document.createElement("br");
form.appendChild(br4);

//////////////////////////////////////////////////////////////////////////////

let d5= document.createElement("div");
d5.setAttribute("class","flexr");
form.appendChild(d5);

let l6 = document.createElement("label");
l6.setAttribute("for","");
let t6 = document.createTextNode("Choice of food: ")
l6.appendChild(t6);
d5.appendChild(l6);


let din1= document.createElement("div");
d5.appendChild(din1);
let c1 =document.createElement("input");
c1.setAttribute("type","checkbox");
c1.id="food1"
din1.appendChild(c1);
let lin1 = document.createElement("label");
lin1.setAttribute("for","food1")
lin1.id="lin1";
lin1.innerHTML="continental";
din1.appendChild(lin1);
// din1.innerHTML+="continental";

let br8 = document.createElement("br");
d5.appendChild(br8);


let din2= document.createElement("div");
d5.appendChild(din2);
let c2 =document.createElement("input");
c2.setAttribute("type","checkbox");
c2.id="food2"
din2.appendChild(c2);
let lin2 = document.createElement("label");
lin2.setAttribute("for","food2")
lin2.innerHTML="Asian";
lin2.id="lin1";
din2.appendChild(lin2);
// din2.innerHTML+="Asian"

let br9 = document.createElement("br");
d5.appendChild(br9);


let din3= document.createElement("div");
d5.appendChild(din3);
let c3 =document.createElement("input");
c3.setAttribute("type","checkbox");
c3.id="food3"
din3.appendChild(c3);
let lin3 = document.createElement("label");
lin3.setAttribute("for","food3")
lin3.innerHTML="Vegan";
lin3.id="lin1";
din3.appendChild(lin3);
// din3.innerHTML+="Vegan";

let br10 = document.createElement("br");
d5.appendChild(br10);


let din4= document.createElement("div");
d5.appendChild(din4);
let c4 =document.createElement("input");
c4.setAttribute("type","checkbox");
c4.id="food4"
din4.appendChild(c4);
let lin4 = document.createElement("label");
lin4.setAttribute("for","food4")
lin4.innerHTML="Keto";
lin4.id="lin1";
din4.appendChild(lin4);
// din4.innerHTML+="Keto";

let br11 = document.createElement("br");
d5.appendChild(br11);


let din5= document.createElement("div");
d5.appendChild(din5);
let c5 =document.createElement("input");
c5.setAttribute("type","checkbox");
c5.id="food5"
din5.appendChild(c5);
let lin5 = document.createElement("label");
lin5.setAttribute("for","food5")
lin5.innerHTML="Others";
lin5.id="lin1";
din5.appendChild(lin5);
// din5.innerHTML+="Others"

let br12 = document.createElement("br");
d5.appendChild(br12);


///////////////////////////////////////////////////////////////////////////

let br5 = document.createElement("br");
form.appendChild(br5);

//////////////////////////////////////////////////////////////////////////////

let d6= document.createElement("div");
d6.setAttribute("class","flex");
form.appendChild(d6);

let l7 = document.createElement("label");
l7.setAttribute("for","state");
let t7 = document.createTextNode("State :  ")
l7.appendChild(t7);
d6.appendChild(l7);

let f5=document.createElement("input");
f5.setAttribute("type","text");
f5.setAttribute("id","state");
d6.appendChild(f5);


///////////////////////////////////////////////////////////////////////////////

let br6 = document.createElement("br");
form.appendChild(br6);

//////////////////////////////////////////////////////////////////////////////


let d7= document.createElement("div");
d7.setAttribute("class","flex");
form.appendChild(d7);

let l8 = document.createElement("label");
l8.setAttribute("for","country");
let t8 = document.createTextNode("Country :  ")
l8.appendChild(t8);
d7.appendChild(l8);

let f6=document.createElement("input");
f6.setAttribute("type","text");
f6.setAttribute("id","country");
d7.appendChild(f6);


///////////////////////////////////////////////////////////////////////////////

let br7 = document.createElement("br");
form.appendChild(br7);

//////////////////////////////////////////////////////////////////////////////

let btn = document.createElement("input");
btn.setAttribute("type","button");
btn.value="SUBMIT";
btn.addEventListener("click", () => {
    document.getElementById("div-error").style.display="none";
    //console.log("SUBMIT BUTTON");
    let count=0;
    let food=[];
    if(document.querySelector("#food1").checked===true){
        count++;
        food.push("continental");
    }
    if(document.querySelector("#food2").checked===true){
        count++;
        food.push("Asian");
    }
    if(document.querySelector("#food3").checked===true){
        count++;
        food.push("vegan");
    }
    if(document.querySelector("#food4").checked===true){
        count++;
        food.push("keto");
    }
    if(document.querySelector("#food5").checked===true){
        count++;
        food.push("others");
    }
   // console.log(count,food);
        let fname =document.getElementById("fname").value.trim();
        let lname = document.getElementById("lname").value.trim();
        let address = document.getElementById("address").value.trim();
        let pincode = document.getElementById("pincode").value.trim();
        let state = document.getElementById("state").value.trim();
        let country = document.getElementById("country").value.trim();
        let gender =document.getElementById("gender").value.trim();
        //console.log(fname,lname,address,pincode,state,country,gender)


        
        if(fname==""){
            //alert("First Name cannot be empty");
            document.getElementById("errormsg").innerHTML=`First Name cannot be empty.`;
            document.getElementById("div-error").style.display="block";
        }else if(lname==""){
            //alert("Last Name cannot be empty");
            document.getElementById("errormsg").innerHTML=`Last Name cannot be empty.`;
            document.getElementById("div-error").style.display="block";
        }else if(address==""){
            //alert("Address cannot be empty");
            document.getElementById("errormsg").innerHTML=`Address cannot be empty.`;
            document.getElementById("div-error").style.display="block";
        }else if(pincode==""){
            //alert("Pincode cannot be empty");
            document.getElementById("errormsg").innerHTML=`Pincode cannot be empty.`;
            document.getElementById("div-error").style.display="block";
        }else if(gender=="Choose"){
           // alert("Choose any value for gender");
            document.getElementById("errormsg").innerHTML=`Choose any value for gender`;
            document.getElementById("div-error").style.display="block";

        }else if(count<2){
            //alert("Atleast 2 choices should be selected");
            document.getElementById("errormsg").innerHTML=`Atleast 2 food choices should be selected`;
            document.getElementById("div-error").style.display="block";
        }
        else if(state==""){
            //alert("State cannot be empty");
            document.getElementById("errormsg").innerHTML=`State cannot be empty.`;
            document.getElementById("div-error").style.display="block";
        }else if(country==""){
            //alert("Country cannot be empty");
            document.getElementById("errormsg").innerHTML=`Country cannot be empty.`;
            document.getElementById("div-error").style.display="block";
        }
                
        else{       
            
                    let fooditems="";
                    for(x of food){
                        if(x!=food[food.length-1]){
                            fooditems+=x+", ";
                        }else{
                            fooditems+=x;
                        }
                    }


                    document.querySelector("#tabdiv").style.display="inline";
                    let tbody = document.querySelector("#table-body");
                    tbody.innerHTML+=`
                        <tr>
                            <td>${fname}</td>
                            <td>${lname}</td>
                            <td>${address}</td>
                            <td>${pincode}</td>
                            <td>${gender}</td>
                            <td>${fooditems}</td>
                            <td>${state}</td>
                            <td>${country}</td>
                        </tr>
                    `;
                    document.getElementById("fname").value ="";
                     document.getElementById("lname").value ="";
                  document.getElementById("address").value ="";
                    document.getElementById("pincode").value  ="";
                 document.getElementById("state").value ="";
                   document.getElementById("country").value ="";
                    document.getElementById("gender").value ="Choose";
                    document.querySelector("#food1").checked=false;
                    document.querySelector("#food2").checked=false;
                    document.querySelector("#food3").checked=false;
                    document.querySelector("#food4").checked=false;
                    document.querySelector("#food5").checked=false;
                }
    }
);

form.appendChild(btn);


//////////////////////////////////////////////////////////////////////////////

let br13 = document.createElement("br");
document.body.appendChild(br13);
let br14 = document.createElement("br");
document.body.appendChild(br14);

//////////////////////////////////////////////////////////////////////////////

let tabdiv = document.createElement("div");

// let h4 = document.createElement("h4");
// h4.innerHTML="TABLE:";
// h4.setAttribute("id","heading2")
// tabdiv.appendChild(h4);

// let br16 = document.createElement("br");
// tabdiv.appendChild(br16);


tabdiv.id="tabdiv"
tabdiv.innerHTML=`
<table id="tab-data">
    <thead>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>Gender</th>
        <th>Choice of food</th>
        <th>State</th>
        <th>Country</th>
    </tr>
    </thead>

    <tbody id="table-body">

    </tbody>
  
</table>
`;
document.body.appendChild(tabdiv);