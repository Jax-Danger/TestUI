// script.js
document.getElementById('myButton').addEventListener('click', function() {
	fetch(`https://${GetParentResourceName()}/helloWorld`, { method: 'POST' })
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.error(error));
});