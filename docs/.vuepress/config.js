module.exports = {
    title: '烟雨夕阳的知识库',
    description: '这是我的第一个 知识库 站点',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
     },
    themeConfig: {
        // logo: 'https://www.linglan01.cn/favicon.JPG',
        //顶部导航栏
        nav: [
            { text: '博客', link: '' },
            { text: '掘金', link: '' },
            { text: 'Github', link: '' }
        ],
        sidebar: [
            {
                title: 'AI大模型', 
                collapsable: false, 
                sidebarDepth: 1,    
                children: [
                    '/introduce/',//自动获取README.md
                    '/introduce/haha',
                ]
            },
             {
                title: '知识库', 
                collapsable: true, 
                sidebarDepth: 1,    
                children: [
                ]
            },
            {
                title: '微服务', 
                collapsable: true, 
                sidebarDepth: 1,    
                children: [
                ]
            },
        ],
    }
 }
