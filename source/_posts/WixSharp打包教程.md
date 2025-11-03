---
title: WixSharp打包教程
date: 2025-11-03 11:29:20
tags: c#
---
# 一、安装WixSharp项目模板

点击VisualStudio-扩展-管理扩展，搜索“WixSaharp”，安装“WixSharp Project Templates”。如下图所示：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/13fb647108b86383a4eb06566a8d110b.png)

# 二、添加WixSharp打包项目

1、右键解决方案，点击添加-新建项目

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/699a6a377a5050a82e09fde6b2fa79d4.png)

2、在弹出的添加新项目模板选择里面，搜索“wix”，找到“WixSharp Managed Setup”项目模板，点击下一步。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/e3e18306ff39e1781e74a45ec966a248.png)

3、点击右下角“创建”创建项目

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/d30ad736d0acc4ce0732a6b866111824.png)

4、点击“Program.cs”进入打包程序文件。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/29372c26497a170b3540d7da4685d477.png)

5、解决方案构成如下：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/4ce26762738dafb08643c38d5ff3f61c.png)

# 三、安装包配置

## 1、安装路径及打包配置

### 1.1、单文件打包

```c
//打包单个EXE文件
var project = new ManagedProject("软件名称",new Dir($@"%ProgramFiles%\制造商名称\软件名称",new File(@"..\WpfApp1\bin\Debug\WpfApp1.exe")));
```

ManagedProject后面填写软件的名称，Dir后面填写安装路径，File后面填写需要打包的文件。其中“..\”的意思为返回上一级目录。

### 1.2、多文件打包

```c
//打包Debug目录下的所有文件
var project = new ManagedProject("软件名称",new Dir($@"%ProgramFiles%\制造商名称\软件名称",new Files(@"..\WpfApp1\bin\Debug\*.*")));
```

打包多个文件，由File变为Files，字符串格式以"\*.\*"结尾，意为匹配所有文件。

### 1.3、创建桌面图标

```c
//打包多个文件并创建桌面快捷方式
var project = new ManagedProject("软件名称", new Dir($@"%ProgramFiles%\制造商名称\软件名称", new Files(@"..\WpfApp1\bin\Debug\*.*", f => !f.EndsWith("WpfApp1.exe")), new File(@"..\WpfApp1\bin\Debug\WpfApp1.exe", new FileShortcut("软件名称", @"%Desktop%"))));
```

先创建Files实例，将除了需要创建桌面快捷方式的文件进行打包，再创建单个File实例，打包EXE文件，并创建快捷方式。其中”f => !f.EndsWith("WpfApp1.exe")“是用于过滤出指定EXE文件。

File中传入”new FileShortcut("软件名称", @"%Desktop%")“进行桌面快捷方式创建，”@"%Desktop%"“为相对的桌面地址。

### 1.4、根据不同功能安装不同文件到不同位置

```c
 //依据功能选项安装不同文件
 //创建不同功能选项
var revit2018 = new Feature("Revit2018", "Revit2018的功能描述") { IsEnabled = false };
var revit2019 = new Feature("Revit2019", "Revit2019的功能描述") { IsEnabled = false };
var revit2020 = new Feature("Revit2020", "Revit2020的功能描述") { IsEnabled = false };
//安装路径及文件配置
var project = new ManagedProject("软件名称", new WixEntity[]
{
     new Dir(@"C:\ProgramData\Autodesk\Revit\Addins\2018", new WixEntity[] { new Files(revit2018, @"..\WpfApp1\bin\Debug\*.*"), new File(revit2018, @"..\WpfApp1\Ribbon2018.addin") }),
     new Dir(@"C:\ProgramData\Autodesk\Revit\Addins\2019", new WixEntity[] { new Files(revit2019, @"..\WpfApp1\bin\Debug\*.*"), new File(revit2019, @"..\WpfApp1\Ribbon2019.addin") }),
     new Dir(@"C:\Users\Administrator\Desktop\新建文件夹", new WixEntity[] { new Files(revit2020, @"..\WpfApp1\bin\Debug\*.*"), new File(revit2020, @"..\WpfApp1\Ribbon2020.addin") })
});
//设置默认功能
project.DefaultFeature = revit2018;
```

以上代码设置了三个功能选项，分别为"Revit2018"，"Revit2019"，”Revit2020“，IsEnabled属性设置为false后，在功能选项下，其默认为不勾选状态。如下图所示：

Dir后面的”2018“参数指的是当勾选，Revit2018功能后，软件会安装在”C:\ProgramData\Autodesk\Revit\Addins\2018“目录下。Files及File后面的”revit2018“是表示该文件归属revit2018功能。

project.DefaultFeature = revit2018，必须设置，如不进行默认功能设置，在功能选项卡则会生成Complete选项。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/22d3cf47670ffb4abbcedd0a12ef1942.png)

## 2、安装包名称设置

```c
//MSI包名称
roject.OutFileName = "软件名称" + $"{DateTime.Now.Year}{DateTime.Now.Month:00}{DateTime.Now.Day:00}{DateTime.Now.Hour:00}{DateTime.Now.Minute:00}";
```

生成的包名效果如下：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/29496dd53a674d9081c46d09ee4b828a.png)

## 3、安装包输出路径设置

```c
//MSI文件输出文件夹
project.OutDir = @"..\";
```

表示生成在Pregram.cs文件的上级目录即”WixSharpSample“文件夹下

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/8f4a1115f0c85e6c994e2b007149a3d0.png)

## 4、安装包UI元素设置

```c
//设置自定义图片
project.ValidateBackgroundImage = false;//关闭背景图片大小验证
project.BackgroundImage = "BackgroundImage-CAD.png";//建议宽度156，高度312
project.BannerImage = "BannerImage-CAD.png";
```

关闭背景图片大小验证后，当设置非156\*312的图片时，会自动调整布局。否则非156\*312图片设置会报错。

BackgroundImage对应下图：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/c54c2115f0873507c06384fe292c55f4.png)

BannerImage对应下图：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/ec10c6eb84d09ea64b6278339850b627.png)

## 5、控制面板信息设置

```c
//设置控制面板制造商名称
project.ControlPanelInfo.Manufacturer = "DigitalStruct Studio";
//设置控制面板图标
project.ControlPanelInfo.ProductIcon = "ShellIcon-CAD.ico";
```

控制面板信息会在软件安装后在控制面板显示。效果如下：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/3752b9b2b9d7cd27a470b40dc9eab1f8.png)

## 6、设置可覆盖安装

```c
//安装新版本时自动卸载旧版本
project.UpgradeCode = new Guid("511EED44-E344-4821-BF25-B42175CE41AC");
project.MajorUpgrade = new MajorUpgrade
{
   AllowSameVersionUpgrades = true,
   DowngradeErrorMessage = "当前安装的版本低于已安装的版，无法再次安装。",
   AllowDowngrades = false,
   chedule = UpgradeSchedule.afterInstallValidate
};
```

通过设置以上代码实现软件安装时自动覆盖安装，无需卸载。

## 7、设置安装包语言

```c
//加载和设置中文配置文件
project.Language = "zh-CN";
project.LocalizationFile = "WixUI_zh-CN.wxl";
```

需要手动载入"WixUI\_zh-CN.wxl"中文配置文件，不然配置project.Language = "zh-CN"不会生效。

## 8、设置用户协议

```c
//设置用户协议文件
project.LicenceFile = "用户协议-CAD.rtf";
```

用户协议必须为.rtf文件格式。

## 9、对话框配置

```c
//设置对话框
project.ManagedUI = new ManagedUI();
project.ManagedUI.Icon = "ShellIcon-CAD.ico";
project.ManagedUI.InstallDialogs.Add(Dialogs.Welcome)
                                .Add(Dialogs.Licence)
                                .Add(Dialogs.SetupType)
                                .Add(Dialogs.Features)
                                .Add(Dialogs.InstallDir)
                                .Add(Dialogs.Progress)
                                .Add(Dialogs.Exit);

project.ManagedUI.ModifyDialogs.Add(Dialogs.MaintenanceType)
                               .Add(Dialogs.Features)
                               .Add(Dialogs.Progress)
                               .Add(Dialogs.Exit);
```

project.ManagedUI.Icon = "ShellIcon-CAD.ico"为设置左上角图标。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/7a58ab9c853dbc45b4379e4bc26ca537.png)

### 9.1安装对话框

**Welcome对话框**

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/235e1a0500d79d6f0519fe7f37bf6c81.png)

**Licence对话框**

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/998964240290c2c6bdb954c8877ba796.png)

**SetupType对话框**

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/6dae63be1862a70099d5c1e34a6d5a43.png)

当选择典型时，会根据project.DefaultFeature = revit2018设置的默认功能进行安装。自定义则进行自定义安装。完整则全部安装。

**Features对话框**

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/4a8bddba367c29044ac5a2d2501c962f.png)

**InstallDir对话框**

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/1affb96ab1e65bfcf75c39f6b99ea589.png)

**Progress对话框**

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/c8db135abe4b637c1531fd83143ba586.png)

**Exit对话框**

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/89592cb36c1bb94dea6137229f9a7884.png)

### 9.2卸载对话框

**MaintenanceType对话框**

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/e9e58a319b94e57c0a7e446bce89aa18.png)

**Features对话框**

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/2e342f614f3a3e1a98974a4dcc5f003a.png)

**Progress对话框**

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/WixSharp%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B/75315ac721d3d6bc97b91dbe41497555.png)

**Exit对话框**
## 10、完整代码
```c
using System;
using System.Windows.Forms;
using WixSharp;
using WixSharp.Forms;

namespace WixSharp_Setup1
{
    internal class Program
    {
        static void Main()
        {
            //打包单个EXE文件
            //var project = new ManagedProject("软件名称",
            //                new Dir($@"%ProgramFiles%\制造商名称\软件名称",
            //                new File(@"..\WpfApp1\bin\Debug\WpfApp1.exe")));


            //打包Debug目录下的所有文件
            //var project = new ManagedProject("软件名称",
            //                new Dir($@"%ProgramFiles%\制造商名称\软件名称",
            //                new Files(@"..\WpfApp1\bin\Debug\*.*")));


            //打包多个文件并创建桌面快捷方式
            //var project = new ManagedProject("软件名称",
            //                new Dir($@"%ProgramFiles%\制造商名称\软件名称",
            //                new Files(@"..\WpfApp1\bin\Debug\*.*", f => !f.EndsWith("WpfApp1.exe")),
            //                new File(@"..\WpfApp1\bin\Debug\WpfApp1.exe", new FileShortcut("软件名称", @"%Desktop%"))));


            ////依据功能选项安装不同文件
            ////创建不同功能选项
            //var revit2018 = new Feature("Revit2018", "Revit2018的功能描述") { IsEnabled = false };
            //var revit2019 = new Feature("Revit2019", "Revit2019的功能描述") { IsEnabled = false };
            //var revit2020 = new Feature("Revit2020", "Revit2020的功能描述") { IsEnabled = false };
            ////安装路径及文件配置
            //var project = new ManagedProject("软件名称",
            //      new Dir(@"C:\ProgramData\Autodesk\Revit\Addins",
            //      new Dir("2018", new WixEntity[] { new Files(revit2018, @"..\WpfApp1\bin\Debug\*.*"), new File(revit2018, @"..\WpfApp1\Ribbon2018.addin") }),
            //      new Dir("2019", new WixEntity[] { new Files(revit2019, @"..\WpfApp1\bin\Debug\*.*"), new File(revit2019, @"..\WpfApp1\Ribbon2019.addin") }),
            //      new Dir("2020", new WixEntity[] { new Files(revit2020, @"..\WpfApp1\bin\Debug\*.*"), new File(revit2020, @"..\WpfApp1\Ribbon2020.addin") })));
            ////设置默认功能
            //project.DefaultFeature = revit2018;

            //依据功能选项安装不同文件
            //创建不同功能选项
            var revit2018 = new Feature("Revit2018", "Revit2018的功能描述") { IsEnabled = false };
            var revit2019 = new Feature("Revit2019", "Revit2019的功能描述") { IsEnabled = false };
            var revit2020 = new Feature("Revit2020", "Revit2020的功能描述") { IsEnabled = false };
            //安装路径及文件配置
            var project = new ManagedProject("软件名称", new WixEntity[]
            {
                new Dir(@"C:\ProgramData\Autodesk\Revit\Addins\2018", new WixEntity[] { new Files(revit2018, @"..\WpfApp1\bin\Debug\*.*"), new File(revit2018, @"..\WpfApp1\Ribbon2018.addin") }),
                new Dir(@"C:\ProgramData\Autodesk\Revit\Addins\2019", new WixEntity[] { new Files(revit2019, @"..\WpfApp1\bin\Debug\*.*"), new File(revit2019, @"..\WpfApp1\Ribbon2019.addin") }),
                new Dir(@"C:\Users\Administrator\Desktop\新建文件夹", new WixEntity[] { new Files(revit2020, @"..\WpfApp1\bin\Debug\*.*"), new File(revit2020, @"..\WpfApp1\Ribbon2020.addin") })
            });
            //设置默认功能
            project.DefaultFeature = revit2018;

            //MSI包名称
            project.OutFileName = "软件名称" + $"{DateTime.Now.Year}{DateTime.Now.Month:00}{DateTime.Now.Day:00}{DateTime.Now.Hour:00}{DateTime.Now.Minute:00}";

            //MSI文件输出文件夹
            project.OutDir = @"..\";

            //设置自定义图片
            project.ValidateBackgroundImage = false;//关闭背景图片大小验证
            project.BackgroundImage = "BackgroundImage-CAD.png";//建议宽度156，高度312
            project.BannerImage = "BannerImage-CAD.png";

            //设置控制面板制造商名称
            project.ControlPanelInfo.Manufacturer = "DigitalStruct Studio";
            //设置控制面板图标
            project.ControlPanelInfo.ProductIcon = "ShellIcon-CAD.ico";

            //安装新版本时自动卸载旧版本
            project.UpgradeCode = new Guid("511EED44-E344-4821-BF25-B42175CE41AC");
            project.MajorUpgrade = new MajorUpgrade
            {
                AllowSameVersionUpgrades = true,
                DowngradeErrorMessage = "当前安装的版本低于已安装的版，无法再次安装。",
                AllowDowngrades = false,
                Schedule = UpgradeSchedule.afterInstallValidate
            };

            //加载和设置中文配置文件
            project.Language = "zh-CN";
            project.LocalizationFile = "WixUI_zh-CN.wxl";

            //设置用户协议文件
            project.LicenceFile = "用户协议-CAD.rtf";

            //设置对话框
            project.ManagedUI = new ManagedUI();
            project.ManagedUI.Icon = "ShellIcon-CAD.ico";
            project.ManagedUI.InstallDialogs.Add(Dialogs.Welcome)
                                            .Add(Dialogs.Licence)
                                            .Add(Dialogs.SetupType)
                                            .Add(Dialogs.Features)
                                            .Add(Dialogs.InstallDir)
                                            .Add(Dialogs.Progress)
                                            .Add(Dialogs.Exit);

            project.ManagedUI.ModifyDialogs.Add(Dialogs.MaintenanceType)
                                           .Add(Dialogs.Features)
                                           .Add(Dialogs.Progress)
                                           .Add(Dialogs.Exit);

            project.Load += Msi_Load;
            project.BeforeInstall += Msi_BeforeInstall;
            project.AfterInstall += Msi_AfterInstall;

            project.BuildMsi();
        }

        static void Msi_Load(SetupEventArgs e)
        {
            if (!e.IsUISupressed && !e.IsUninstalling)
                MessageBox.Show(e.ToString(), "Load");
        }

        static void Msi_BeforeInstall(SetupEventArgs e)
        {
            if (!e.IsUISupressed && !e.IsUninstalling)
                MessageBox.Show(e.ToString(), "BeforeInstall");
        }

        static void Msi_AfterInstall(SetupEventArgs e)
        {
            if (!e.IsUISupressed && !e.IsUninstalling)
                MessageBox.Show(e.ToString(), "AfterExecute");
        }
    }
}
```