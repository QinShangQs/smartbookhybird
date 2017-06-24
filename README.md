"# 锐文小说阅读混合开发 #" 


基于react-native框架实现，版本 0.44
参考：http://reactnative.cn/
	

###########目录结构###########
/source/
|---- index.js					欢迎页
|---- /config/ 						配置文件目录 
|---- /images/						图片目录
|---- /service/						服务类目录
		|---- loginService.js 			登录服务类
|---- /style/						样式类目录
		|---- indexStyle.js 			欢迎页样式
		|---- loginStyle 				登录页样式
|---- /utils/						工具目录
		|---- request.js 				工具类
|---- /pages/						页面目录
		|---- login.js					登录页
		|---- home.js 					首页
		|---- my.js						个人中心
		|---- recent.js 				最近阅读页


###########第三方组件############
react-native-wechat				微信登录		参考：https://github.com/yorkie/react-native-wechat
react-native-navigation  		页面跳转		参考：https://reactnavigation.org/