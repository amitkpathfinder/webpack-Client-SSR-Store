console.log('Consoling Simple.js');

var alphaGot = {};

if (typeof document === 'undefined') {
	console.log('Writing on console.....cccccccccccccc....... Hello Simple.js');
	var alpha =5;
	var gama =6;
	alphaGot.a = '<div>'+(alpha+gama)+' Server Side Rendering of single variable</div>';
}
else{
	document.getElementById('app').append('Writing on document..........ddddddddddddc............ Hello Simple.js');
	document.write('Writing on document..........ddddddddddddc............ Hello Simple.js');
}

export default alphaGot;

