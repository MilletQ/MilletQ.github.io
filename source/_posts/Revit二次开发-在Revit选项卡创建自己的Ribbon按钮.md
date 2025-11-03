---
title: Revit二次开发-在Revit选项卡创建自己的Ribbon按钮
date: 2025-11-03 11:41:10
tags: Revit二次开发
---
# 前言
<font color=#999AAA >本博客为笔者初入Revit二次开发第一篇博客，如有错误或疑问欢迎指正交流。后续笔者将持续输出与Revit二次开发的相关内容，对有新的实现方法也会进行更新，欢迎收藏关注。
# 一、应用场景
<font color=#999AAA >在Revit软件界面中有两种形式的按钮，一种是单命令按钮，一种是含下拉菜单的按钮。下面就让笔者分别介绍两种按钮的实现方法。
# 二、实现方法
<font color=#999AAA > 创建界面按钮的（UIRibbon）的大体思路就是：1、编写好自己的命令文件（一般就是继承IExteralCommand接口）；2、创建一个继承IExternalApplication接口的文件；3、编辑Addin文档。

<font color=#999AAA >新建自己编写好的命令文件这个大家自己准备就好了，确保自己测试能用就行。

<font color=#999AAA >下面就继承IExternalApplication接口的类的编辑
## 1.新建一个选项卡
```c
application.CreateRibbonTab("NewTab");
RibbonPanel ribbonPanel = application.CreateRibbonPanel("NewTab","TabBar");
```
<font color=#999AAA >NewTab对应的选项卡的名称，TabBar对应的就是选项栏的名称。
## 2.在新建的选项卡中创建一个单命令按钮
```c
PushButtonData p3 = new PushButtonData("命令名称3", "Text3", @"C:\Users\Jhon\Desktop\StudyRevit\HelloRevit\HelloRevit\bin\Debug\HelloRevit.dll", "HelloRevit.Class1");
PushButton pushButton3= ribbonPanel.AddItem(p3) as PushButton;
```
<font color=#999AAA >这里的“命令名称3”就程序内部的命令名称，用户看到的是“Text3”。@后面的是该按钮触发的命令文件路径（也就是第1步自己编写和测试好的命令文件）；最后一个参数是该命令的全称。
## 3.1在新建的选项卡中创建一个可下拉按钮
```c
SplitButtonData sbd1 = new SplitButtonData("Name", "Text");
SplitButton sb1 = ribbonPanel.AddItem(sbd1) as SplitButton;
```
## 3.2在可下拉按钮下创建两个单命令按钮
```c
PushButtonData p1 = new PushButtonData("命令名称1", "Text1", @"C:\Users\Jhon\Desktop\StudyRevit\HelloRevit\HelloRevit\bin\Debug\HelloRevit.dll", "HelloRevit.Class1");
PushButton pushButton1= sb1.AddPushButton(p1);
PushButtonData p2 = new PushButtonData("命令名称2", "Text2", @"C:\Users\Jhon\Desktop\StudyRevit\HelloRevit\HelloRevit\bin\Debug\HelloRevit.dll", "HelloRevit.Class1");
PushButton pushButton2 = sb1.AddPushButton(p2);
```
## 4.为上述三个按钮添加图片
```c
Uri uriImage = new Uri(@"C:\Users\Jhon\Desktop\StudyRevit\Ribbon\timg.jpg");
BitmapImage largeImage = new BitmapImage(uriImage);
pushButton1.LargeImage = largeImage;
pushButton2.LargeImage = largeImage;
pushButton3.LargeImage = largeImage;
```
<font color=#999AAA >这里要引用PresentationCore程序集，再引用system.windows.media.imaging
## 5.示例代码
```c
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media.Imaging;
using Autodesk.Revit.Attributes;
using Autodesk.Revit.DB;
using Autodesk.Revit.UI;

namespace Ribbon
{
    public class Class1 : IExternalApplication
    {
        public Result OnShutdown(UIControlledApplication application)
        {
            
            return Result.Succeeded;
        }

        public Result OnStartup(UIControlledApplication application)
        {
            //新建一个选项卡，并在该选项卡总新建一个命令栏（命令栏可以放多个命令按钮）
            application.CreateRibbonTab("NewTab");
            RibbonPanel ribbonPanel = application.CreateRibbonPanel("NewTab","TabBar");

            //1、建立一个可下拉的命令栏
            //1.1、新建一个可下拉按钮
            SplitButtonData sbd1 = new SplitButtonData("Name", "Text");
            SplitButton sb1 = ribbonPanel.AddItem(sbd1) as SplitButton;
            //1.2、在该按钮是添加两个命令按钮(软件中按钮的名称由命令名称文本定义)
            PushButtonData p1 = new PushButtonData("命令名称1", "Text1", @"C:\Users\Jhon\Desktop\StudyRevit\HelloRevit\HelloRevit\bin\Debug\HelloRevit.dll", "HelloRevit.Class1");
            PushButton pushButton1= sb1.AddPushButton(p1);
            PushButtonData p2 = new PushButtonData("命令名称2", "Text2", @"C:\Users\Jhon\Desktop\StudyRevit\HelloRevit\HelloRevit\bin\Debug\HelloRevit.dll", "HelloRevit.Class1");
            PushButton pushButton2 = sb1.AddPushButton(p2);
           
            //2、在选项卡栏添加一个普通按钮
            PushButtonData p3 = new PushButtonData("命令名称3", "Text3", @"C:\Users\Jhon\Desktop\StudyRevit\HelloRevit\HelloRevit\bin\Debug\HelloRevit.dll", "HelloRevit.Class1");
            PushButton pushButton3= ribbonPanel.AddItem(p3) as PushButton;
          
            //3、先准备一张图片,后面给按钮加图片。（这里要引用PresentationCore程序集，再引用system.windows.media.imaging）
            Uri uriImage = new Uri(@"C:\Users\Jhon\Desktop\StudyRevit\Ribbon\timg.jpg");
            BitmapImage largeImage = new BitmapImage(uriImage);
            //3.1、将图片赋值给按钮。PushButton有两个属性，当按钮是堆叠时，显示的是Image；当按钮是下拉或单个的时候显示的是LargeImage。
            pushButton1.LargeImage = largeImage;
            pushButton2.LargeImage = largeImage;
            pushButton3.LargeImage = largeImage;

            return Result.Succeeded;
        }
    }
}
```
## 6.编辑Addin文件
```c
<?xml version="1.0" encoding="utf-8"?>
<RevitAddIns>
  <AddIn Type="Application">
    <Name>HelloRevit</Name>
    <Assembly>C:\Users\Jhon\Desktop\StudyRevit\Ribbon\Ribbon\bin\Debug\Ribbon.dll</Assembly>
    <AddInId>6cdba932-c058-4ec1-b038-33ed590c41d3</AddInId>
    <FullClassName>Ribbon.Class1</FullClassName>
    <VendorId>ADSK</VendorId>
  </AddIn>
</RevitAddIns>
```
<font color=#999AAA >Addin文件编辑需要注意的点：1、路径名称一定要是第2步实现IExternalApplication接口的文件的路径名称。2、FullClassName就是该文件名称空间下的类（本文例子的名称空间为Ribbon，类名为Class1）

<font color=#999AAA >Addin文件的存放路径为C:\ProgramData\Autodesk\Revit\Addins\2018\（2018对应的是你安装的Revit版本，笔者安装的是2018版的Revit就放2018文件夹下）

# 三、最终效果
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8fc5d395bebc4d994f8efe7702d2fad4.png#pic_center)
<font color=#999AAA >这里的NewTab和TabBar名称都可以在“1.新建一个选项卡”中就行修改
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f9797b78a4aac0c7313ee003160f74d7.png#pic_center)
<font color=#999AAA >Text1、Text2、Text3就是PushButtonData里的参数。


