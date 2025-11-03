---
title: Revit二次开发-创建IURibbon中使用相对地址
date: 2025-11-03 11:39:27
tags: Revit二次开发
---
# 前言
<font color=#999AAA > &emsp;&emsp;我们在进行二次开发的时候经常会把自己开发好的DLL文件连同Addin文件发给别人，让别人复制到电脑上的Addin文件夹进行插件的使用。
&emsp;&emsp;可是当我们把自己的DLL文件发给别人的时候会发现经常出现由于代码中的地址发生改变使得插件无法使用。我们可以在编程中**将外部命令、创建UIRibbon的外部应用和UIRibbon使用的图片封装在一个DLL文件中**。这样我们只要发送一dll和一个addin文件给对方，一起放在Addin文件夹中即可使用。类似LookUp插件的使用效果。
# 一、创建DLL文件
<font color=#999AAA >&emsp;&emsp;新建一个UIRibbon类库（名字随意，我只是举例），在该类库中添加两个类，一个是继承IExteranlCommand接口的命令类（插件命令），一个是继承IExternalApplication接口创建UIRibbon的功能按钮类。UIRibbon是一个库（.dll），库中可以有很多类，所有命令类和按钮类可以封装在一个库中。![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/30268cc5561bf59ae1d09aa9313c0593.png#pic_center)
<font color=#999AAA >&emsp;&emsp;这里我编写的最简单的显示HelloRevit的命令进行示例。
# 二、按钮类编写（UIRibbon）
## 1.程序集的引用
<font color=#999AAA >&emsp;&emsp;除了正常的RevitAPI及RevitAPIUI的引用外，程序里图片的使用还需要引用PresentationCore和WindowsBase两个程序集。引用如下：![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a528a0a8c2f343c2cb6af02886f25c97.png#pic_center)
## 2.代码编写

<font color=#999AAA >1、新建一个选项卡，并在该选项卡下创建一个面板



```c
application.CreateRibbonTab("NewTab");
RibbonPanel ribbonPanel = application.CreateRibbonPanel("NewTab", "NewPanel");
```
<font color=#999AAA >2、获得UIRibbon.dll的相对地址，即不是写死了的地址，会根据dll所放的位置的改变而改变
```c
string assemblyPash = Assembly.GetExecutingAssembly().Location;
```
<font color=#999AAA >3、编写PushButtonDate
```c
string className = "UIRibbon.HelloRevit";
PushButtonData pushButtonData = new PushButtonData("ButtonName", "CommandName", assemblyPash, className);
```
<font color=#999AAA >4、将图片封装在dll，并对其进行引用。在类库项目右键，新建文件夹，将准备好的图面拖到文件里面。（当然放根目录也行）![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8cbfc8f665716e540be43b7258fa9414.png#pic_center)
<font color=#999AAA >5、将图片的生成操作改成”嵌入的资源“，这样在生成dll的时候图片会一并封装在里面。![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f2d1be0af47667e29cff307387459c9a.png#pic_center)
<font color=#999AAA >6、嵌入图片的使用
```c
Stream sm = Assembly.GetExecutingAssembly().GetManifestResourceStream("UIRibbon.Image.图标.png");
pushButtonData.LargeImage = BitmapFrame.Create(sm);
ribbonPanel.AddItem(pushButtonData);
```
<font color=#999AAA >这里的UIRibbon对应的是类库名称（也是名称空间），Image是文件夹名，后面的就是图片的文件名称。这里的点相当于文件夹的访问。
<font color=#999AAA >第一句是获取当前程序集的指定资源，返回值是一个Stream。第二句是将返回的stream创建一个imagesource。并进行使用。最后添加按钮。完成。
## 3.完整代码
```c
using Autodesk.Revit.UI;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media.Imaging;

namespace UIRibbon
{
    class UIRibbon : IExternalApplication
    {
        public Result OnShutdown(UIControlledApplication application)
        {
            return Result.Succeeded;
        }

        public Result OnStartup(UIControlledApplication application)
        {
            application.CreateRibbonTab("NewTab");//创建选项卡
            RibbonPanel ribbonPanel = application.CreateRibbonPanel("NewTab", "NewPanel");//创建面板
            string assemblyPash = Assembly.GetExecutingAssembly().Location;//获取程序集的相对地址
            string className = "UIRibbon.HelloRevit";//外部命令的FullName
            PushButtonData pushButtonData = new PushButtonData("ButtonName", "CommandName", assemblyPash, className);
            Stream sm = Assembly.GetExecutingAssembly().GetManifestResourceStream("UIRibbon.Image.图标.png");//获取嵌入的图片
            pushButtonData.LargeImage = BitmapFrame.Create(sm);//创建图片并赋值给LargeImage
            ribbonPanel.AddItem(pushButtonData);
            
            return Result.Succeeded;
        }
    }
}

```
# 三、dll文件和addin文件的使用
<font color=#999AAA >1、打开Revit，点击附加模块的外部工具，选择右侧的LoadedApplications，选择下面的Load加载我们刚编译好的UIRibbon.dll点右下角的save，选择第二个（Save chacked items to local .addin file），Save前记得把Loaded Commads里面的勾全部去掉。在载入文件夹生成一个addin文件。这样在我们编译的文件夹就会生成一个我们需要的addin文件，不用去自己编写addin文件。![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f8b1555bba5f611e8184a80a3f7e24e5.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ceeaa2993675596e3ee6b0b64ffb5013.png#pic_center)
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/feb029d67aedcee3c51ec5c497ca79b0.png#pic_center)
<font color=#999AAA >2、如果前面忘记把勾去掉，addin文件就是生成我们不需要加载的东西。记事本打开addin文件，将我们不需要加载的HelloRevit删掉，我们只需要加载UIRibbon这个类就行。HelloRevit在按钮中调用即可。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f1f15530437c4bf389c6c53a59d3739a.png#pic_center)
<font color=#999AAA >3、将dll和addin文件复制，粘贴到C:\ProgramData\Autodesk\Revit\Addins\2018文件夹下，打开Revit后就能正常使用。（2018是我安装的Revit版本，故放在此文件夹下）
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/50aeb2b14fced8dd9d0275470b26d250.png#pic_center)


# 四、最终效果
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/488fc5e74621e47bd9e26250baf74ff4.png#pic_center)
<font color=#999AAA >这样我们只需要把编译好的dll和addin文件发给别人，别人只需要放在上述的文件夹下就能使用。不会因为改变路径报错。
另外还有"黑夜de骑士"方法
将图片属性的“生成操作”改成“Resource”
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/255e8fb26b32e955da9da3727d18f65f.png#pic_center)
<font color=#999AAA >代码变成
```c
pushButtonData.LargeImage = new BitmapImage(new Uri("pack://application:,,,/UIRibbon;component/Image/图标.png"));
```
<font color=#999AAA >也能达到同样的效果。这里的UIRibbon名称空间，Image就是文件夹名，最后就是文件名，这三根据自己需求修改。其他就固定写法，照抄就行。
<font color=#999AAA >B站视频地址：https://www.bilibili.com/video/BV1MJ41167mb?t=2413