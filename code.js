/*if (3>0) {
	alert("js working");
}*/


function greeting() {

	 var hour = new Date().getHours(); 

	 if (hour<12) {
	 	document.getElementById("good1").style.display = "initial";
	 }
	 else if (hour>18) {
	 	document.getElementById("good3").style.display = "initial";
	 }
	 else {
	 	document.getElementById("good2").style.display = "initial";
	 }

}

function myFunction() {

	document.getElementById("sub_content").style.display = "initial";
	document.getElementById('coffee_grams').innerHTML = document.getElementById('cups').value*6;
	document.getElementById('water_mililiters').innerHTML = document.getElementById('cups').value*100;

	if (document.getElementById('metodo').value=="Kalita") {
		document.getElementById("m_kalita").style.display = "initial";
		document.getElementById("m_prensa").style.display = "none";
		document.getElementById("water_bloom_kalita").innerHTML = document.getElementById('cups').value*12;
	}
	else if (document.getElementById('metodo').value="Prensa francesa") {
		document.getElementById("m_kalita").style.display = "none";
		document.getElementById("m_prensa").style.display = "initial";
		document.getElementById("water_bloom_prensa").innerHTML = document.getElementById('cups').value*50;
	}

}
