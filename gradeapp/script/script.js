
var gradeNum;
var results;

var score = ("Your result is ");
var mark = ("Your grade is ");




function grade(){
	


	
	
	gradeNum= prompt("Please enter number of subjects");
	
	for(i=0; i<gradeNum; i++){
		results = prompt("Please enter your result for subject " + (i+1));
		
		if(results >= 90 && results <=100){
			document.getElementById("main").innerHTML += score + " " + results + "<br>" + mark + "A. <br><br>";
			
			}
		else if(results >= 80 && results <90){
			document.getElementById("main").innerHTML += score + " " + results + "<br>" + mark + "B. <br><br>";	
			
	}
		else if(results >= 70 && results <80){
			
			document.getElementById("main").innerHTML += score + " " + results + "<br>" + mark + "C. <br><br>";
			
		}
		else if(results >= 60 && results <70){
			document.getElementById("main").innerHTML += score + " " + results + "<br>" + mark + "D. <br><br>";
			
		}
		else if(results >= 50 && results <60){
			document.getElementById("main").innerHTML += score + " " + results + "<br>" + mark + "E. <br><br>";
			
		}
		else if(results >= 0 && results <50){
			document.getElementById("main").innerHTML += score + " " + results + "<br>" + mark + "F. <br><br>";
			
		}
		else{
			document.getElementById("main").innerHTML += "You entered " + results + ". Incorrect grade, please try again. <br><br>";
			
			
		}
		}
		reveal();
		hide();
}

function reveal(){
	document.getElementById("reset").style.display="block";
		
}
function hide(){
	document.getElementById("go").style.display="none";
}