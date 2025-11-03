---
title: 群晖docker使用nginx部署前端
date: 2025-11-03 11:35:31
tags: NAS
---
# 1. 群晖文件目录创建放置前端文件的文件夹

①在群晖的File Station中，选择一个文件夹，在空白处右键，点击新建文件夹。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8cfc9c443f1e2b6ef36dc3f60ccaf705.png)
②在弹出的窗口中输入文件夹名称后，点击确定，完成文件夹创建。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/21a6ac7ea8888145a7f58c8255abe82b.png)
③按照上述方法在新建的文件夹中再创建一个名为html的文件夹用于放置前端静态文件。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8b4ae046f606ca68eed553cba0712a0f.png)
# 2. docker安装nginx

①打开群晖docker，选择注册表，右键nginx镜像，点击下载此映像。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/133a8fd7a08cc27cf80d4562123e47e1.png)
②在弹出的选择标签窗口，点击应用。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d7a4035828ec66a6e9140505a88dcc1c.png)
③转到映像页面，右键下载的nginx镜像，点击运行。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a3f7154ab3483c690959ead075de584d.png)
④在docker容器的常规设置中填写容器名称后，点击下一步。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/1829b1470250aec0ddb0276bfb4e59a3.png)
⑤在端口设置中，将docker中的80端口映射到本地的自定义端口，这边映射到2088端口。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/eed4520fd4b03af103c4fed525a19739.png)
⑥在存储空间设置中，将容器的```/usr/share/nginx/html```文件夹映射到第一步新建的html文件夹。用于将群晖中的文件放置到dokcer容器中。点击下一步，点击完成即可完成容器创建。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a0e73769e36c1d3b1398dda92a027ca4.png)
⑦跳转到容器页面，右键新建的nginx容器，点击详情。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/7d9125238c5667e765a39a1a2036b791.png)
⑧跳转到日志页面，当容器处于start woker process 状态时即容器启动成功。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/07121a33640086fbaf6170de9e24c390.png)
# 3. 映射本地端口到公网

①将刚刚设置的本地2088端口映射到公网进行访问。在控制面板中点击外部访问，点击新增，勾选新建的docker容器，点击完成。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e205da9421fa0d604c5a9a816d3b3200.png)
②完成后，点击应用，待测联机测试结果显示OK即完成端口映射操作。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/6973ca1a0eea94aecf4f3a87d1827309.png)
③跳转到你的域名后2088端口，如显示以下画面则nginx已成功完成公网访问。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/52bde01a45f8f2bbaf2a413db81f6cc7.png)
# 4. 编译前端项目

①选择一个vue前端项目，在控制台输入```npm run build```编译前端项目。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/05bf5cda03315417241b6c4e74a4094d.png)
②显示如下结果即编译成功。编译文件放置在dist文件夹中
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/15235c6a7e108c500c0700ded98f8b10.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/4f3984b355aa86ffdaed57e9c0e9f3d3.png)
# 5. 放置前端项目文件
①打开群晖中在第一步创建的html文件夹，将dist中的文件全部复制到html文件夹中
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d566dc62b0c0c81a43ecc97e6f900bd1.png)
# 6. 访问前端项目

①将前端静态文件放置到上述文件夹中后，刷新网页即可完成前端项目部署。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/bd60e24e9b13cac82bdae04a13eae300.png)