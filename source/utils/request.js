
export function request(uri, method = "GET",  data = '',widthToken=false, callback = ()=>{}){
 	var options = {
 		method:method,
 		headers:{
 			'Accept': 'application/json',
 			'Content-Type': "application/json",
 		},
 	};

 	if(method != 'GET'){
 		options.body = data;
 		options.headers['Content-Type'] =  "application/x-www-form-urlencoded" ;
 	}

 	if(widthToken){
 		options.headers.token = "xxxxx";
 	}

 	fetch(uri, options)
 		.then((response) => response.json())
 		.then((responseText) =>{
 			console.log(responseText);
 			callback(responseText);
 		})
 		.catch((error) => {
        	console.error(error);
      	})
 		.done();
 }

export function get(uri, data,callback){
	return request(uri,'GET','',true, callback);
}

export function post(uri, data, callback){
	return request(uri,'POST','',true, callback);
}

export function put(uri, data, callback){
	return request(uri,'PUT','',true, callback);
}

export function deleted(uri, data, callback){
	return request(uri,'DELETE','',true, callback);
}