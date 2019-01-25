export const READ = 'READ';

export default function(products){
	
	console.log('Read Action is on....', products);
	return {
		type : READ,
		payload : products
	}

}

