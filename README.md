# web-navigation-imitating-lsdhss-top
web navigation imitating lsdhss top （模仿猎手导航头部的网址导航）

# 起因

特别喜欢猎手导航头部搜索的效果，输入一次关键词后，可以用不同的搜索引擎反复搜索。
解决了搜索时同一关键词反复输入的痛点。
但是猎手导航没有针对手机端的网页，pc端的网页在手机端展示不是很完整。由于我只需要头部（top）部分的效果，我把这部分重新写了一个适合手机访问的样式。
-------------------------------------------------

# 效果

## 体验地址(手机端效果更佳) http://154.8.167.43

![效果图片](https://github.com/skygongque/web-navigation-imitating-lsdhss-top/edit/master/web_imitating_ls/picture/example.jpg)


# 核心文件
index.html
--------


# 核心实现方式
监听input内容改变
----
`
; $("#key_value").bind("input propertychange", function (event) {
                 console.log($("#key_value").val())
                 //改变所有a标签的href值
                 //..........
                }
            })
`

# 扩展性
保证class="category_div"下的span标签数（类别数）和class="items" 下的div标签数（类别详情）对应即可item-1,2,3等class没有用到扩展时可以不用顾忌顺序

# 问题
搜索结果有些网站不支持手机UA,有些尚未修改为手机端的请求，所以部分网站的搜索结果页面仍然是pc端的
部分网站的不能成功携带搜索关键词

