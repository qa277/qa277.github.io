var firebaseConfig = {
    apiKey: "AIzaSyCU_SFlvzKk7EpjDatMTB29e5ST1NO0p5k",
    authDomain: "connect4-52337.firebaseapp.com",
    projectId: "connect4-52337",
    storageBucket: "connect4-52337.appspot.com",
    messagingSenderId: "1098230590476",
    appId: "1:1098230590476:web:e571599091988fa5d41229",
    measurementId: "G-RYWRYFLSBE"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const forms = database.ref("forms");

document.getElementById("submit").onclick = function() {
	let sent = confirm("Are you sure you want to send this? This will be seen by the developers.")
	if (sent) {
		forms.push(document.getElementById("text").value);
        alert("Your message has been sent to the developers.")
        console.log('Form sent!');
	} else {
		console.log("Form not sent.")
	}
}