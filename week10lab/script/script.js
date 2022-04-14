
var gradeNumber;
var sum = 0;
var average;
var grade = [];

function go(){
	gradeNumber= parseInt(prompt("Enter your number of grades here:"));
	
	for (i=0; i<gradeNumber; i++){
		grade[i] = parseInt(prompt("Enter grade number " + (i + 1) + " here:"));
			if(grade[i] >= 0 && grade[i]<= 100){
				continue;
			}
			else{
				i--;
			}
		}
	for (i=0; i<gradeNumber; i++){
	sum = sum + grade[i];
	}
	average = sum/gradeNumber;
	document.getElementById("main").innerHTML += ("Your average grade across all " + gradeNumber + " modules is " + average + ". <br/>");
	
	
for (i=0; i<gradeNumber; i++){
	document.getElementById("main").innerHTML += ("Your grade for module " + (i + 1) + " is " + grade[i] + ". Your grade is ");
	if (grade[i] >= 90 && grade[i] <= 100){
		document.getElementById("main").innerHTML += ("A. <br/>");
		}
	else if (grade[i] >= 80 && grade[i] <= 89){
		document.getElementById("main").innerHTML += ("B. <br/>");
		}
	else if (grade[i] >= 70 && grade[i] <= 79){
		document.getElementById("main").innerHTML += ("C. <br/>");
		}
	else if (grade[i] >= 60 && grade[i] <= 69){
		document.getElementById("main").innerHTML += ("D. <br/>");
		}
	else if (grade[i] >= 50 && grade[i] <= 59){
		document.getElementById("main").innerHTML += ("E. <br/>");
		}
	else {
		document.getElementById("main").innerHTML += ("F. <br/>");
		}
	}

}
