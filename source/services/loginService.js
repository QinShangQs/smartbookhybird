import * as req from '../utils/request';

export function doLogin(username, password,callback){
	let data = "username="+username+"&password="+password;

	return req.request("http://api.sixbook.cn/users/login",'POST', data, false,callback);
	//return req.get("http://api.sixbook.cn/areas/find?module=%E9%A6%96%E9%A1%B5%E5%A4%B4%E9%83%A8%E6%BB%9A%E5%8A%A8"
	 	//,'GET',callback);
}