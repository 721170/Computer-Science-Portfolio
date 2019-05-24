function numberSign(){

var num1=parseInt(prompt("Enter first number"));
var num2=parseInt(prompt("Enter second number"));
var num3=parseInt(prompt("Enter third number"));
var product=num1*num2*num3

	if (product>0){
		window.alert("The product is a positive number");
	}else {
		window.alert("The product is a negative number");

  }

function encryption(){
	
var message = prompt("Please enter your message","");
var passphrase = prompt("Please enter a passphrase","");
var encrypted = CryptoJS.Rabbit.encrypt(message, passphrase);
alert(encrypted) 
	
}
