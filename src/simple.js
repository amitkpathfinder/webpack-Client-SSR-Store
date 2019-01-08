console.log('Consoling Simple.js');

if (typeof document === 'undefined') {
	console.log('Writing on console.....cccccccccccccc....... Hello Simple.js');
	a = 'Server Side Rendering of single variable';
}
else{
	document.getElementById('app').append('Writing on document..........ddddddddddddc............ Hello Simple.js');
	document.write('Writing on document..........ddddddddddddc............ Hello Simple.js');
}

