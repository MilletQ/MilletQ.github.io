---
title: CAD二次开发-基础流程
date: 2025-11-03 11:33:58
tags: CAD二次开发
---
# 1. 创建.NET Framework类库项目
①打开vs，点击创建新项目
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d60562e1117ea9ed3ebbaa38496c5f59.png)
②筛选windows-库，选择类库(.NET Framework)点击下一步
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/306dd8dc1534b385045849839da7ed06.png)
③填写项目名称，选择项目框架，点击创建。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/fd86c253948469d51c40ae5efc08b461.png)
# 2. 引用CAD dll 库文件
①在项目的**引用**处右键，点击管理NuGet程序包
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d7d6fc7fe9e8c04afde2861c65c337aa.png)
②在浏览选项卡搜索**CAD2018**，选择AutoCAD2018NET库进行安装。（这里以CAD2018举例，其他版本可以引用CAD安装目录下对应的同名dll）
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9cd18b0f46c3b16c888c02fc4e31707e.png)
# 3. 编写模板代码
模板代码如下：
```c
[CommandMethod("test")]
public void TestCommand()
{
    //在此输入业务逻辑代码
}
```
以下示例业务代码为创建一条线
```c
//在此输入业务逻辑代码
//创建两条线
Line line = new Line(new Point3d(0, 0, 0), new Point3d(1, 1, 0));
Line line2 = new Line(new Point3d(0, 0, 0), new Point3d(-1, 1, 0));
//打开CAD块表记录
using (IDisposable db = HostApplicationServices.WorkingDatabase, trans = (db as Database).TransactionManager.StartTransaction(), blockTable = (trans as Transaction).GetObject((db as Database).BlockTableId, OpenMode.ForRead), blockTableRecord = (trans as Transaction).GetObject((blockTable as BlockTable)[BlockTableRecord.ModelSpace], OpenMode.ForWrite))
{
    //添加实体
    (blockTableRecord as BlockTableRecord).AppendEntity(line);
    (blockTableRecord as BlockTableRecord).AppendEntity(line2);
    (trans as Transaction).AddNewlyCreatedDBObject(line, true);
    (trans as Transaction).AddNewlyCreatedDBObject(line2, true);
    //提交实体
    (trans as Transaction).Commit();
}
```
# 4. 生成dll载入CAD进行调用
①在项目右键，点击生成。即可生成dll库文件。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/405854e7223c694d577f0245cf504126.png)
②打开CAD，新建一张空白CAD图纸。在控制台输入NETLOAD命令按回车进行dll程序加载。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/db9082d4e06812bba26c66289cf9ecc2.png)
②在弹出的选择窗口找到我们刚才生成的dll文件，点击打开进行加载。（dll文件在项目文件夹下的bin/Debug文件夹中）
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e34d321ab87402c745689f1462ce93bd.png)
③在弹出的安全提示窗口点击“始终加载”。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/befa71c4565e8b4bee6e45f5b6effc1a.png)

④在控制台输入“test”命令按回车即可执行我们自定义的程序命令，生成两条线。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/48451804e03b1ebb7d15b622015c115c.png)
⑤生成效果入下：
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/61a62168ba625d7cb0b3061becb645dd.png)
# 5. 完整代码
```c
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.Geometry;
using Autodesk.AutoCAD.Runtime;
using System;

namespace CADDEMO
{
    public class Class1
    {
        [CommandMethod("test")]
        public void TestCommand()
        {
            //在此输入业务逻辑代码
            //创建两条线
            Line line = new Line(new Point3d(0, 0, 0), new Point3d(1, 1, 0));
            Line line2 = new Line(new Point3d(0, 0, 0), new Point3d(-1, 1, 0));
            //打开CAD块表记录
            using (IDisposable db = HostApplicationServices.WorkingDatabase, trans = (db as Database).TransactionManager.StartTransaction(), blockTable = (trans as Transaction).GetObject((db as Database).BlockTableId, OpenMode.ForRead), blockTableRecord = (trans as Transaction).GetObject((blockTable as BlockTable)[BlockTableRecord.ModelSpace], OpenMode.ForWrite))
            {
                //添加实体
                (blockTableRecord as BlockTableRecord).AppendEntity(line);
                (blockTableRecord as BlockTableRecord).AppendEntity(line2);
                (trans as Transaction).AddNewlyCreatedDBObject(line, true);
                (trans as Transaction).AddNewlyCreatedDBObject(line2, true);
                //提交实体
                (trans as Transaction).Commit();
            }
        }
    }
}
```