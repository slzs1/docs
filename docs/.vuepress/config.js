module.exports ={
	base:'/docs/',
	title:'擅离职守的vue学习',
	description:'vuepress入门(未完待续)',
	dest:'',
	head:[
		['link',{rel:'icon',href:'/img/xinggong.favicon'}],
		['link',{rel:'stylesheet',href:'/css/style.css'}]
		],
	plugins:{
		'@vuepress/back-to-top':true,
		'@vuepress/medium-zoom':true,
		'@vssue/vuepress-plugin-vssue': {
			platform: 'github-v4',
			owner: 'slzs1',
			repo: 'docs',
			clientId: 'e60bc9020a36a3b67124',
			clientSecret: '6c22afdda5d1ad3d4bc6a4af46d1e0d19b2aceda',
		
		},
		'@vuepress/pwa': {
			    serviceWorker: true,
		 		updatePopup: {
				message: "发现新内容可用",
			    buttonText: "刷新"
			    }
			}
	},
	themeConfig:{
	smoothScroll:true,
	lastUpdated:'上次更新',
	repo:'slzs1/docs',
	nav:require("./nav.js"),	
	sidebar:require("./sidebar.js"),
	sidebarDepth: 2,
	lastUpdated:'Last Updated',
	searchMaxSuggestoins:10,
	editLinks:true,
	editLinkText:'在github上编辑此页！'
	},
}