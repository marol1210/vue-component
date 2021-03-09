class Auth {
	
	constructor(axios_default_config = {Accept: 'application/json',responseType:'JSON'})
	{
		axios.defaults.heasers = axios_default_config;
		axios.defaults.validateStatus= function (status) {
										    return status >= 200 && status < 500; // default
										  }
	}
	
	getTokens(url){
		return axios.get(url)
				.then(response => {
					return response;
			    }) 
				.catch(function (error) {
					return Promise.reject(error);
				})
	}
	
	getClients(url){
		return axios.get(url)
				.then(response => {
					return response;
			    }) 
				.catch(function (error) {
					 return Promise.reject(error.response);
				})
	}
	
	setCurrentToken(token){
		axios.defaults.headers.Authorization = "Bearer "+token;
	}
}

module.exports =  Auth