//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let innerhtml = document.querySelector('#band');
function display(){
	for(let i = 0; i<bands.length;i++){
		let x = '';
		x += <span> bands[i]</span>;		
	
}
	innerhtml.innerHTML = x;
}
