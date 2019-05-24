function encryption() {	
var message = prompt("Please enter your message","");
var passphrase = prompt("Please enter a passphrase","");
var encrypted = CryptoJS.Rabbit.encrypt(message, passphrase);
alert(encrypted); 	
}
