/*5 arrays filled with local rep details, these arrays are printed to screen as strings in alert 
windows through rep"countryName"() functions below. */

const england = ["England Rep", "Barry Smith", "Tel:01000 999 000000", "E-mail:BazSmith@sales.companyname"];
const scotland = ["Scotland Rep", "Dougie Anderson", "Tel:01700 990 000000", "E-mail:DAnderson@sales.companyname"];
const wales = ["Wales Rep", "Di Roberts", "Tel:01000 722 000001", "E-mail:DiRoberts@sales.companyname"];
const nireland = ["Northern Ireland Rep", "Tiarnan Carragher", "Tel:01000 990 00005", "E-mail:TCarragher@sales.companyname"];
const roi = ["Republic of Ireland Rep", "Aisling Barry", "Tel:01000 666 00050", "E-mail:Aislingbarry1@sales.companyname"];

/* 6 functions titles clickFunction 1-6, these perform the show/hide text function for 6 thumbnail 
pictures in features/benefits part of webpage. */

function clickFunction1(){
  var y = document.getElementById("connectivity");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

function clickFunction2(){
  var y = document.getElementById("design");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
function clickFunction3(){
  var y = document.getElementById("therapyAssurance");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
function clickFunction4(){
  var y = document.getElementById("deliveredShock");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
function clickFunction5(){
  var y = document.getElementById("syncAV");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}
function clickFunction6(){
  var y = document.getElementById("programming");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

/*5 javascript functions to print rep detail arrays as strings in alert window when user clicks on relevant 
button to display rep details .join function used to print arrays as strings with line breaks to improve formatting */


function repEngland(){
		
		alert(england.join("\n"));
}
function repScotland(){
		
		alert(scotland.join("\n"));
}
function repWales(){
		
		alert(wales.join("\n"));
}
function repNireland(){
		
		alert(nireland.join("\n"));
}
function repROI(){
		
		alert(roi.join("\n"));
}

/* used this piece of code to stop alert message 
on every refresh after form submission stating returning to page might trigger repetion of action */
 if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
	
	
	/* Form validation through JS, will return alert message and block form submission if details not entered correctly as requested,
Form submitted successfully message delivered on for being entered and submitted correctly	*/
	function validateForm(){
		var x=document.forms["myForm"]["fullName"].value;
		var y=document.forms["myForm"]["phone"].value;
		var z=document.forms["myForm"]["email"].value;
if (x==null || x=="")

   {

   alert("First name must be filled out");

   return false;

   }
   else if (y==null || y=="")

   {

   alert("Contact number must be filled out");

   return false;

   }
   else if (z==null || z=="")

   {

   alert("E-mail address must be filled out");

   return false;

   }
   else {
	   alert("Form submitted successfully");
   }
   
	}