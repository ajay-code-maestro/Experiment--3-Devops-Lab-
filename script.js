document.getElementById("regForm").addEventListener("submit", function(event){

event.preventDefault();

let fname=document.getElementById("fname").value;
let lname=document.getElementById("lname").value;
let father=document.getElementById("father").value;
let mother=document.getElementById("mother").value;
let dob=document.getElementById("dob").value;

if(fname==""){
alert("Enter First Name");
return;
}

if(lname==""){
alert("Enter Last Name");
return;
}

if(father==""){
alert("Enter Father's Name");
return;
}

if(mother==""){
alert("Enter Mother's Name");
return;
}

if(dob==""){
alert("Select Date of Birth");
return;
}

let gender=document.querySelector('input[name="gender"]:checked');

if(gender==null){
alert("Select Gender");
return;
}

let photo=document.getElementById("photo");

if(photo.files.length==0){

alert("Upload Passport Photo");
return;

}

let size=photo.files[0].size;

if(size>102400){

alert("Passport Photo should be less than 100 KB");
return;

}

alert("Registration Successful");

});

document.getElementById("regForm").addEventListener("reset",function(){

setTimeout(function(){

alert("All Fields Cleared");

},100);

});