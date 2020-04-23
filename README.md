# web-navigation-imitating-lsdhss-top
web navigation imitating lsdhss top （模仿猎手导航头部的网址导航）

# 起因

特别喜欢猎手导航头部搜索的效果，输入一次关键词后，可以用不同的搜索引擎反复搜索。
解决了搜索时同一关键词反复输入的痛点。
但是猎手导航没有针对手机端的网页，pc端的网页在手机端展示不是很完整。由于我只需要头部（top）部分的效果，我把这部分重新写了一个适合手机访问的样式。
-------------------------------------------------

# 效果


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


