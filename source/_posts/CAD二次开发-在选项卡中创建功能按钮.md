---
title: CAD二次开发-在选项卡中创建功能按钮
date: 2025-11-03 11:31:42
tags: CAD二次开发
---
# 1. 新建项目
①打开VS2022，点击**创建新项目**。
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/CAD%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9C%A8%E9%80%89%E9%A1%B9%E5%8D%A1%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%8A%9F%E8%83%BD%E6%8C%89%E9%92%AE/a1d8da19301b352f4d2ddf17affe28f9.png)
②选择**类库.NET Framework)**，点击下一步。
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/CAD%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9C%A8%E9%80%89%E9%A1%B9%E5%8D%A1%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%8A%9F%E8%83%BD%E6%8C%89%E9%92%AE/a4f0fc633f7de2d4a941b427cf869ed0.png)
③输入项目名称后，点击创建。
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/CAD%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9C%A8%E9%80%89%E9%A1%B9%E5%8D%A1%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%8A%9F%E8%83%BD%E6%8C%89%E9%92%AE/9ca7a4189ca4c0b148340f505b180355.png)
# 2.  添加CAD类库引用
①右键**引用**，点击**管理NuGet程序包**。
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/CAD%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9C%A8%E9%80%89%E9%A1%B9%E5%8D%A1%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%8A%9F%E8%83%BD%E6%8C%89%E9%92%AE/1e3c945fe623f7cea7bf1e6bf3d76491.png)
②在浏览选项卡中，输入CAD2018，找到**ModPlus.AutoCAD.API.2018**，点击右侧箭头进行安装。
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/CAD%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9C%A8%E9%80%89%E9%A1%B9%E5%8D%A1%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%8A%9F%E8%83%BD%E6%8C%89%E9%92%AE/4a1ed59a9a0747f771f3cfffea5dc2cd.png)
# 3. 创建选项卡
在class1类下创建如下代码：
```c
////创建按钮命令，在控制台输入InitMyRibbon，可生成选项卡、面板和按钮
[CommandMethod("InitMyRibbon")]
public void Init()
{
    //设置名称参数
    string ribbonTabTitle = "DSS-定制插件";
    string ribbonPanleTitle = "自定义面板";
    string ribbonButtonTitle = "自定义按钮";
    //创建选项卡
    RibbonControl ribbonControl = ComponentManager.Ribbon;
    RibbonTab ribbonTab = ribbonControl.FindTab(ribbonTabTitle);
    //如果没有该选项卡则创建新选项卡
    if (ribbonTab == null)
    {
        ribbonTab = new RibbonTab
        {
            Title = ribbonTabTitle,
            Id = ribbonTabTitle
        };
        ribbonControl.Tabs.Add(ribbonTab);
    }
}
```
CommandMethod是方法的属性标签，用于设置调用该方法的命令。
# 4. 创建创建面板
在创建选项卡下补充以下代码，用于创建面板
```c
//创建面板
RibbonPanel ribbonPanel;
//如果选项卡中没有我们的面板，则新建面板
if (ribbonTab.Panels == null || ribbonTab.Panels.Where(x => x.Source.Title == ribbonPanleTitle).Count() == 0)
{
    RibbonPanelSource ribbonPanelSource = new RibbonPanelSource
    {
        Title = ribbonPanleTitle
    };
    ribbonPanel = new RibbonPanel
    {
        Source = ribbonPanelSource
    };
    ribbonTab.Panels.Add(ribbonPanel);
}
else
{
    ribbonPanel = ribbonTab.Panels.First(x => x.Source.Title == ribbonPanleTitle);
}
```
# 5. 创建按钮
在创建面板代码下补充以下代码，用于创建按钮
```c
//创建按钮
//如果面板中没有我们的按钮，则创建新按钮
if (ribbonPanel.Source == null || ribbonPanel.Source.Items == null || ribbonPanel.Source.Items.Where(x => x.Name == ribbonButtonTitle).Count()== 0) 
{
    RibbonButton ribbonButton = new RibbonButton
    {
        Orientation = System.Windows.Controls.Orientation.Vertical,
        AllowInStatusBar = true,
        Size = RibbonItemSize.Large,
        Name = ribbonButtonTitle,
        ShowText = true,
        Text = ribbonButtonTitle,
        Description = ribbonButtonTitle,
        LargeImage = new BitmapImage(new Uri("pack://application:,,,/CADButtonDemo;component/image/按钮图标.png", UriKind.Absolute)),
        //绑定命令
        CommandHandler = new ButtonCommandHandler(),
        CommandParameter ="test\n"
    };
    ribbonPanel.Source.Items.Add(ribbonButton);
}
```
上面```LargeImage = new BitmapImage(new Uri("pack://application:,,,/CADButtonDemo;component/image/按钮图标.png", UriKind.Absolute)),```为设置按钮图片。```CADButtonDemo```为项目名称，```按钮图标.png```为放置在项目image文件夹中的图片。其他照抄。也可以参考[ “Revit二次开发-创建IURibbon中使用相对地址” ](https://blog.csdn.net/MilletQ/article/details/109074413?spm=1001.2014.3001.5501)这篇文章的方法进行图片设置。
按钮图片属性设置如下：
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/CAD%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9C%A8%E9%80%89%E9%A1%B9%E5%8D%A1%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%8A%9F%E8%83%BD%E6%8C%89%E9%92%AE/cafa4c74e3961c7e206970c744f9ad03.png)
# 6. 按钮绑定命令
创建按钮时，需要绑定按钮命令。代码为：
```c
 CommandHandler = new ButtonCommandHandler(),
 CommandParameter ="test\n"
```
其中，ButtonCommandHandler为自定义类，继承ICommand接口，用于处理命令。
ButtonCommandHandler类的代码如下：
```c
public class ButtonCommandHandler : ICommand
{
    public bool CanExecute(object parameter)
    {
        return true;
    }

    public event EventHandler CanExecuteChanged;

    public void Execute(object parameter)
    {
        //is from Ribbon Button
        RibbonButton ribBtn = parameter as RibbonButton;
        if (ribBtn != null)
        {
            //execute the command 
            Autodesk.AutoCAD.ApplicationServices.Application
              .DocumentManager.MdiActiveDocument
              .SendStringToExecute(
                 (string)ribBtn.CommandParameter, true, false, true);
        }
    }
}
```
```CommandParameter ="test\n"```为设置该按钮触发的命令。这里绑定该按钮触发test命令。其中```\n```是必须加的。模拟cad中的回车命令。代码如下：
```c
[CommandMethod("test")]
public void TestCommand()
{
    //在此输入业务逻辑代码
    //创建两条线
    Line line = new Line(new Point3d(0, 0, 0), new Point3d(1, 1, 0));
    Line line2 = new Line(new Point3d(0, 0, 0), new Point3d(-1, 1, 0));
    //打开CAD块表记录
    using (IDisposable db = HostApplicationServices.WorkingDatabase, trans = (db as Database).TransactionManager.StartTransaction()
blockTable = (trans as Transaction).GetObject((db as Database).BlockTableId, OpenMode.ForRead), blockTableRecord = (trans as Transaction).GetObject((blockTable as BlockTable)[BlockTableRecord.ModelSpace], OpenMode.ForWrite))
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
```
# 7. 开启CAD加载自定义面板
以上代码完成后，使用netload加载CADButtonDemo.dll文件后，在命令行输入，```InitMyRibbon```即可在选项卡生成自定义的按钮。
如需要开启CAD自动加载自定义选项卡需要做如下操作：
①创建配置文件，在项目中添加名为**PackageContents.xml**的文件
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/CAD%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9C%A8%E9%80%89%E9%A1%B9%E5%8D%A1%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%8A%9F%E8%83%BD%E6%8C%89%E9%92%AE/717d56595e0945f9416ac4bdc15c8fcd.png)
在文件中添加如下代码：
```xml
<?xml version="1.0" encoding="utf-8" ?>
<ApplicationPackage SchemaVersion="1.0"
                    AutodeskProduct="插件名称"
                    ProductType="Application"
                    Name="插件名称">
	<RuntimeRequirements SeriesMin="15.0"
						 SeriesMax="25.0"
					  Platform="AutoCAD|AutoCAD*"
					  OS="Win32|Win64" />
	<Components>
		<ComponentEntry AppName="插件名称"
						Version="1.0"
						ModuleName="./CADButtonDemo.dll"
						AppDescription="DigitalStruct Studio定制化CAD插件(插件描述)"
						LoadOnCommandInvocation="True" LoadOnRequest="True">
			<Commands>
				<Command Local="InitMyRibbon" Global="InitMyRibbon" StartupCommand="True" />
			</Commands>
		</ComponentEntry>
	</Components>
</ApplicationPackage>
```
其中**插件名称**可以修改为自己的插件名称，```ModuleName="./CADButtonDemo.dll"```为需要加载的dll名称。```Local="InitMyRibbon" Global="InitMyRibbon"```为创建按钮命令。同```[CommandMethod("InitMyRibbon")]```。
②创建插件文件夹，放入指定文件。
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/CAD%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9C%A8%E9%80%89%E9%A1%B9%E5%8D%A1%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%8A%9F%E8%83%BD%E6%8C%89%E9%92%AE/1bbd92d87d63095f34e5f2200a213569.png)
打开C:\Program Files\Autodesk\ApplicationPlugins文件夹。创建xxx.bundle文件。将生成的dll文件和上述的配置文件放入。
后。打开CAD即可完成按钮创建。效果如下：
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/CAD%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9C%A8%E9%80%89%E9%A1%B9%E5%8D%A1%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%8A%9F%E8%83%BD%E6%8C%89%E9%92%AE/ca23b052bf1fe5a1c57eb70f9885d8a3.png)
# 8. 完整代码
class1文件代码如下：
```c
using Autodesk.AutoCAD.Runtime;
using System;
using System.Linq;
using Autodesk.Windows;
using System.Windows.Media.Imaging;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.Geometry;
using System.Windows.Input;

namespace CADButtonDemo
{
    public class Class1
    {
        //创建按钮命令，在控制台输入InitMyRibbon，可生成选项卡、面板和按钮
        [CommandMethod("InitMyRibbon")]
        public void Init()
        {
            //设置名称参数
            string ribbonTabTitle = "DSS-定制插件";
            string ribbonPanleTitle = "自定义面板";
            string ribbonButtonTitle = "自定义按钮";
            //创建选项卡
            RibbonControl ribbonControl = ComponentManager.Ribbon;
            RibbonTab ribbonTab = ribbonControl.FindTab(ribbonTabTitle);
            //如果没有该选项卡则创建新选项卡
            if (ribbonTab == null)
            {
                ribbonTab = new RibbonTab
                {
                    Title = ribbonTabTitle,
                    Id = ribbonTabTitle
                };
                ribbonControl.Tabs.Add(ribbonTab);
            }
            //创建面板
            RibbonPanel ribbonPanel;
            //如果选项卡中没有我们的面板，则新建面板
            if (ribbonTab.Panels == null || ribbonTab.Panels.Where(x => x.Source.Title == ribbonPanleTitle).Count() == 0)
            {
                RibbonPanelSource ribbonPanelSource = new RibbonPanelSource
                {
                    Title = ribbonPanleTitle
                };
                ribbonPanel = new RibbonPanel
                {
                    Source = ribbonPanelSource
                };
                ribbonTab.Panels.Add(ribbonPanel);
            }
            else
            {
                ribbonPanel = ribbonTab.Panels.First(x => x.Source.Title == ribbonPanleTitle);
            }
            //创建按钮
            //如果面板中没有我们的按钮，则创建新按钮
            if (ribbonPanel.Source == null || ribbonPanel.Source.Items == null || ribbonPanel.Source.Items.Where(x => x.Name == ribbonButtonTitle).Count()== 0) 
            {
                RibbonButton ribbonButton = new RibbonButton
                {
                    Orientation = System.Windows.Controls.Orientation.Vertical,
                    AllowInStatusBar = true,
                    Size = RibbonItemSize.Large,
                    Name = ribbonButtonTitle,
                    ShowText = true,
                    Text = ribbonButtonTitle,
                    Description = ribbonButtonTitle,
                    LargeImage = new BitmapImage(new Uri("pack://application:,,,/CADButtonDemo;component/image/按钮图标.png", UriKind.Absolute)),
                    //绑定命令
                    CommandHandler = new ButtonCommandHandler(),
                    CommandParameter ="test\n"
                };
                ribbonPanel.Source.Items.Add(ribbonButton);
            }
        }
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

    public class ButtonCommandHandler : ICommand
    {
        public bool CanExecute(object parameter)
        {
            return true;
        }

        public event EventHandler CanExecuteChanged;

        public void Execute(object parameter)
        {
            //is from Ribbon Button
            RibbonButton ribBtn = parameter as RibbonButton;
            if (ribBtn != null)
            {
                //execute the command 
                Autodesk.AutoCAD.ApplicationServices.Application
                  .DocumentManager.MdiActiveDocument
                  .SendStringToExecute(
                     (string)ribBtn.CommandParameter, true, false, true);
            }
        }
    }
}
```
完整项目文件如下：
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/CAD%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9C%A8%E9%80%89%E9%A1%B9%E5%8D%A1%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%8A%9F%E8%83%BD%E6%8C%89%E9%92%AE/081a75cc8596da85f6b5335d954cf19f.png)





