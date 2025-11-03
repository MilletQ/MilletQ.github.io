---
title: Revit二次开发-基础流程
date: 2025-11-03 10:44:09
tags: Revit二次开发
---
# 1 开发前准备
## 1.1 安装Revit AddIn-Manager
Revit AddIn-Manager是由Autodesk官方提供的一个插件加载及调用工具，利用该工具，用户可以通过即插即用的方式加载自己开发的插件工具。Revit AddIn-Manager是我们开发过程中常用的客户端调试工具。

**安装步骤：**

第一步：点击Revit SKD下载链接 https：//pan.baidu.com/s/1TBo0ocyR0cNSkRD1SEbGpA  密码：ew51，下载“REVIT\_2018\_SDK\_1.msi”。

第二步：下载完成后双击“REVIT\_2018\_SDK\_1.msi”点击“Next” 

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/7656c1b3aae90b8a8b186d6821e0f49f.png)

第三步：勾选“I accept the terms in the License Agreement”，点击“Next”。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/ea64d83b90e51ca74c4a012918530121.png)

第四步：点击“Change...”可选择安装路径，这里按默认。选择好路径后点”Next“进行下一步

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/b6ec82015fd82ce7bcc1c27ddb68f341.png)

第五步：点击”Install“进行安装

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/45003abfc9fa1e5916f07c49cca20d81.png)

第六步：等待安装完成后点击”Finish“完成安装。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/bc731f7144cfda710e1a688cbf5cd049.png)

第七步：打开看安装文件夹下的”Revit 2018 SDK”，看到如下界面

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/435a2c63e098e7defa4a607e7163627b.png)

第八步：打开“Add-In Manager”文件夹，复制“AddInManager.dll”及“Autodesk.AddInManager.addin”到"C：\ProgramData\Autodesk\Revit\Addins\2018"目录下

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/bcb8aa8befc985bf82dfd5b431ec48d9.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/09255748f4983edd749884cb30393bf2.png)

第九步：打开“Revit 2018”，在“附加模块”选项栏，“外部工具”中即可看到“AddInManager”插件。![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/c671805ee474326f26cbbfc791c408c1.png)

## 1.2 安装Revit Lookup

Revit Lookup是由Autodesk Developer Network （ADN）技术专家Jeremy Tammik开发并开放源码的Revit数据库查看工具。利用Revit Lookup，开发者可以轻易地查看当前Revit文件中所有对象的大部分属性信息，以及对象间的关系，从而快速定位开发过程中遇到的问题。

**安装步骤：**

第一步：点击“Revit Lookup”项目的GitHub地址：[https：//github.com/jeremytammik/RevitLookup](https://github.com/jeremytammik/RevitLookup) 

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/7e0d62c1171cd8b61b0cb2e92e034ad3.png)

第二步：下滑找到“Versions”，点击“[2018.0.0.8](https://github.com/jeremytammik/RevitLookup/releases/tag/2018.0.0.8) for Revit 2018”版本，进入下载页面

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/b71e1e503b1c859580a5ac7e882244cc.png)

第三步：点击“Source code(zip)”下载源代码压缩包

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/fe4cf3ea3a402801e75e8ec0c88c314c.png)

第四步：解压后得到，如下文件。接着进入“CS”文件夹，找到“RevitLookup.addin”复制到"C：\ProgramData\Autodesk\Revit\Addins\2018"目录下。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/0e9c06c58682d4f48c8b28d840c0f83a.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/0c0b39f2812600689365345af6404386.png)

第五步：依次打开“bin“文件夹，打开"Debug"文件夹，找到“RevitLookup.dll”文件，复制到"C：\ProgramData\Autodesk\Revit\Addins\2018"目录下。至此“Revit Lookup”插件安装完成。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/417fe67aa1501bec96c7e72c7100dfac.png)

第六步：打开“Revit 2018”，在“附加模块”选项栏，在最右侧即可看到“Revit Lookup”插件。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/6df60ad33a6179a6297e6f07193def2c.png)

## 1.3 使用Revit AddIn-Manager

AddInMananger有三个模式：1）菜单模式；2）无界面模式；3）只读模式；

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/b02c3e9f0a1f2aae36d5ea2e1e434499.png)

我们主要使用的是第一种模式，第二种类似于重复上一次命令，第三种使用情况较少

打开窗口以后点击“Load”按钮来加载程序文件

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/e5d3e677bc65aac3a74e40d373fb64e9.png)

支持.dll和.exe格式的程序文件，我们加载NaiveMepMini.dll的文件

注意：新建一个单独的文件夹来放置程序文件，否则很可能报错

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/e569e2227ad75d5ab83ce2006502570b.png)

载入程序以后，选中对应的命令，点击“Run”按钮就可以运行了

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/b16446142a6b0c2a44e573f77f92810d.png)

当我们不需要使用插件时，点击“Remove”就可以卸载相关的程序集了

## 1.4 使用Revit Lookup

RevitLookup是Autodesk平台开发的一款不用写代码就可以直观地看到API对象的插件。

下面我们打开“Revit 2018”，在项目中新建一道墙，通过“Revit LookUp”查看这道墙体的属性来了解"Revit LookUp"的基本用法。

首先我们鼠标选中“墙体”，点击“Revit LookUp”工具，选择“”Snoop Current Selection...“

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/efe89ec453e08ce28f2a8db9bbe55b50.png)

之后我们就可以得到当前“墙体”的API属性表。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/1e41dc2e8ff51b26c6e7ebd4fb325dde.png)

表中的“属性“和”方法“是和API中的属性和方法是一一对应的。总的来说，Revit LookUp”工具就是用来查看”Revit“中”构件“的API属性值的插件。下面做简要解读。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/834771809c504bf3a3f423addf3578ab.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/51a2fc28fdf91ef774674e527e4c2e62.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/af6ad7a8352df44c5bf84c7a3297f100.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/e9fc43d0c559c91ee8bd56fc093e6496.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/c6fe46f27cf6099ec84ca00715f93957.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/64633d856a492afed3a43a53502af185.png)

## 1.5 Revit API文档的查询与使用

在安装了Revit SDK之后，文件夹中有个“RevitAPI.chm”文件就是Revit API文档。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/e574c0b49db8adb36896239c2e62d935.png)

双击打开该文档后得到如下界面：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/03f9bb9e146ea703dc4ee60fbe5d071e.png)

下面简要介绍Revit API文档的使用方法：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/9c4b2a8031e8c7a2514768ab3408182c.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/34564cb904043c247bc880eb3efdf9d7.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/46f02fd89c8effe75a589b0d0bf41940.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/fc850e7591fa15bccb2836d248b4c505.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/d5a2e509417e0b2a1fb5147b6b7f8eb9.png)

# 2 HelloWorld入门

## 2.1 新建项目

Visual Studio编写C#程序的第一步是选择一种项目类型并创建新的类库。

（1）从“**文件**”菜单选择**新建**→**项目...**。

（2）从已安装的样板框架中，单击**Visual C#**。

（3）在右边框架内，单击“**类库(.NET Framework)**”。

（4）在“名称“一栏输入"Hello World"作为项目名称，勾选”为解决方案创建目录”。

（5）单击**确定**。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/232b898fa24c01752dd5cd3f4221289c.png)

## 2.2 添加引用

- 如果解决方案资源管理器窗口未打开，则从“视图”菜单中选择解决方案资源管理器。
  
- 在解决方案资源管理器中，右键单击**引用**以显示上下文菜单。
  
- 从上下文菜单中，单击**添加引用**。出现“**添加引用**”对话框。
  
- 在添加引用对话框中，单击**浏览**选项卡。找到 Revit 安装的文件夹，然后单击RevitAPI.dll。例如，安装文件夹的位置通常是**C：\Program Files\Autodesk\Revit 2018\RevitAPI.dll**。Revit APIUI.dll的引用也在该文件夹中。
  

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/ad422773b322f2126c518974e559e449.png)

- **勾选**导入的.dll文件，单击**确定**以选择.dll并关闭对话框。RevitAPI会出现在解决方案资源管理器引用树中。
  
- 请注意，对于新项目，RevitAPI的“复制本地”属性应始终设置为false。这会节省硬盘空间，并避免Visual Studio 调试器不知道使用哪个DLL副本。右键单击RevitAPI和RevitAPIUI，选择属性，并将**“复制本地”设置从true改为false。**
  

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/44364125e59ecdb50b9089ddd03bc40d.png) ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/9233a8a4bdbbe0e21caaec6bf0ec0cff.png)

## 2.3 编写代码

添加下列代码以创建插件

```c
using System；
using System.Collections.Generic；
using System.Linq；
using System.Text；
using System.Threading.Tasks；
using Autodesk.Revit.DB；
using Autodesk.Revit.UI；
using Autodesk.Revit.Attributes；

namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            TaskDialog.Show("Revit"，"Hello World")；
            return Result.Succeeded；
        }
    }
}
```

提示：（1）Visual Studio 智能感知功能可帮助创建实现接口的方法。在上例中Class1之后，添加“IExternalCommand”，使用**“alt”+“回车”**快捷键，呼出智能选项。再回车选择“实现接口”。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/5a128bc5ef5f4a14ed253aea05561a07.png)

（2）每个Revit插件应用程序都必须有一个进入点类来实现IExternalCommand接口，且必须实现Execute()方法。Execute()方法是插件程序的进入点，类似于其他程序中的Main()方法。插件程序进入点类的定义包含在一个程序集内。

## 2.4 使用插件

（1）调出“输出”窗口。在菜单栏点击**视图**→**输出。**

（2）代码编写完成后，在菜单栏点击**生成**→**生成解决方案**，即可在输出窗口看到如下信息：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/d2ef53e82eaf8a6ea30a81bdd45eda3c.png)

其中，红框部分即为输出的dll文件位置。复制此文件位置，打开Revit软件，新建一个项目。在附加模块→外部工具点击“Add-In Manager”，选择“Load”，将复制的地址粘贴到地址栏，点击打开。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/36033713cfe191db793a2b965846bd67.png)

选择我们载入的插件“HelloWorld.Class1”，点击Run，运行。即可得到如下结果：

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/139b0e4168bde2edbde93470487118d8.png)

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/cfd7083829aec4b5b8c00db2d4ebf3f5.png)

## 2.5 调试代码

在调试模式下运行程序可使用断点暂停程序，以便检查变量和对象的状态。如果出现错误，则可以检查程序运行的变量，来推断为什么不是预期的值。

具体代码调试步骤如下：
（1）确保后台有个在运行的Revit项目
（2）点击菜单栏**调试**→**附加到进程**，在右侧筛选进程里面输入"revit"关键字，点击“Revit.exe”，点击**附加**。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/cbabd9130daf49cfda405fc3e677e91c.png)

此时程序已经进入调试状态。![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/0a3ab1078aba666a704fabfc6300837a.png)

（3）鼠标点击**红点位置**，将该行代码打上断点。打开”Revit“软件，按上面步骤运行插件。之后系统自动调整到断点代码处。如下所示：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/e840ca0e413f5de6681d274cc6e1ecbf.png)

（4）此时按”**F11**“让程序**逐语句**进行代码运行，按”**F10**“**逐过程**进行代码运行，当断点代码在循环语句中，可以按”**Shift+F11**“**跳出**循环。

这里我们按F11让程序逐语句进行代码运行。效果如下：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/2d5ea0f74e98b7bc86052f9070a77139.png)

此时代码已经台运行到” return Result.Succeeded；“这行代码中。再按”F11“则程序运行结束，自动退出调试状态。

当我们要反复调试程序时候，只需点**调试**→**重新附加到进程**，Visual Studio 会自动将代码附加到我们上一次附加的进程上。此时我们只需要进行下一步调试即可。

程序调试时，我们可以将我们需要时刻关注的**变量**下拉（或者复制，或者手动输入）到监视窗口，以观察该变量的变化。![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/5ac3e48f0f6823529874a99e4a6b470e.png)
# 3 图元基本交互
## 3.1 过滤

Revit API提供一种机制，用于过滤和迭代Revit 文件中的图元。这是用于获取一组相关图元的最好方式，如文件中所有的墙或门。过滤器也可以用来寻找出一组很具体的图元，如某一特定尺寸的所有的梁。
通过指定过滤器获取图元的基本步骤如下：

(1)新建一个FilteredElementCollector。

(2)对它运用一个或多个过滤器。

(3)获取滤过的图元或图元ID(使用几种方法之一)。

下列代码示例了过滤和迭代文件中图元的基本步骤。

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //应用过滤器，获得所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).WhereElementIsNotElementType().ToList()；
            //获得所有墙体的ID
            string wallIds = "本项目墙体ID如下：\n"；
            foreach (Element wall in walls)
            {
                wallIds = wallIds + wall.Id.ToString() + "\n"；
            }
            TaskDialog.Show("Revit"， wallIds)；
            return Result.Succeeded；
        }
    }
}
```

运行效果如下：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/83daaff430f5271b1082892811e8793c.png)

### 3.1.1 创建图元过滤集

用于图元的迭代和过滤的主类称作FilteredElementCollector。可以用以下三种方式之一来建立：

（1）文档。搜索并过滤文档中的所有图元。

```c
new FilteredElementCollector(Document document)
```

（2）文档和视图。搜索并过滤指定视图中可见的所有图元。

```c
new FilteredElementCollector(Document document， ElementId viewId)
```

（3）文档和图元ID集。搜索并过滤文档中指定的图元。

```c
new FilteredElementCollector(Document document， ICollection<ElementId> elementIds)
```

### 3.1.2 应用过滤器

可以用  ElementFilter 对 FilteredElementCollector 使用过滤器。ElementFilter 是一个类，用于检查图元是否满足某种条件。ElementFilter 类有三个派生类，将图元过滤器划分为三类。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/1ffd3daf40cde357b752177d3fde6dbd.png)

- ElementQucikFilter。**快速过滤器**仅对 EIementRecord 进行操作，是一个低内存占用的类，以一个有限接口来读取图元属性。被快速过滤器丢弃的图元不会展开到内存中。

   ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/275a5cacc7217690890fba3b4eaaaa4d.png)

| 快速过滤器 | 过滤结果 | 快捷方法 |
| --- | --- | --- |
| BoundingBoxContainsPointFilter | 图元的边界框内包含给定点的图元 | 无   |
| BoundingBoxIntersectsFilter | 图元的边界框与给定轮框相交的图元 |     |
| BoundingBoxIsInsideFilter | 图元边界框包含给定轮廓的图元 |     |
| ElementCategoryFilter | 与给定类别相同的图元 | OfCategory OfCategoryId |
| ElementClassFilter | 与给定类相同的图元 | OfClass |
| ElementDesignOptionFilter | 符合一个特定设计选项的图元 | ContainedInDesignOption |
| ElementIsCurveDrivenFilter | 由线驱动的图元 | WhereElementIsCurveDriven |
| ElementIsElementTypeFilter | 是一个“图元类型”的图元 | WhereElementIsElementType WhereElementIsNotElementType |
| ElementMulticategoryFilter | 与任何一组给定的类别匹配的图元 |     |
| ElementMulticlassFilter | 与给定一组类（或派生类）匹配的图元 |     |
| ElementOwnerViewFilter | 某个视图专有的图元 | OwnedByView WhereElementIsViewIndependent |
| ElementStructuralTypeFilter | 与给定结构类型相匹配的图元 |     |
| ElementWorksetFilter | 在指定工作集中的图元 |     |
| ExclusionFilter | 除指定图元以外的所有图元 | Excluding |
| ExtensibleStorageFilter | 基于特定架构id的可扩展存储数据的图元 |     |
| FamilySymbolFilter | 特定族符号的图元 |     |

- ElementSlowFilter。**慢速过滤器**首先需要获取图元并展开到内存中。因此，更为可取的方法是，将慢速过滤器与至少一个快速过滤器结合使用，尽量减少展开到内存的图元数量，以对照此过滤器设置的标准进行评价。慢速过滤器均无快捷方法。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/8c6f02d52bc1a1391de3b1b67cf010ac.png)

| 慢速过滤器 | 过滤结果 |
| --- | --- |
| RoomFilter | 是房间的图元 |
| RoomTagFilter | 是房间标记的图元 |
| AreaFilter | 是面积的图元 |
| AreaTagFilter | 是面积标记的图元 |
| CurveElementFilter | 是给定曲线类型的图元 |
| ElementIntersectsFilter | 与给定图元几何实体相交的图元 |
| ElementLevelFilter | 与给定标高ID相关的图元 |
| ElementParameterFilter | 符合一个或多个过滤规则的图元 |
| ElementPhaseStatusFilter | 对应给定阶段由给定阶段的图元 |
| FamilyInstanceFilter | 给定族实例类型的图元 |
| SpaceFilter | 是空间的图元 |
| SpaceTagFilter | 是空间标记的图元 |
| PrimaryDesignOptionMemberFilter | 属于任何初步设计选项的图元 |
| FamilyStructuralMaterialTypeFilter | 具有给定结构材料类型的族图元 |
| StructuralInstanceUsageFilter | 与给定结构用法相同的族实例 |
| StructuralMaterialTypeFilter | 与给定结构材料类型相同的族实例 |
| StructuralWallUsageFilter | 与给定结构墙用法相同的墙 |
| SelectableInViewFilter | 在指定视图中所有可选择的图元 |

- ElementLogicalFilter。**逻辑过滤器**逻辑组合两个或更多过滤器。Revit 以使过滤器执行最快为优先评估条件，可能会将合成过滤器重新排序。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/e397e3e32c26eab96e1ed8b2b1425a5e.png)

| 逻辑过滤器 | 过滤结果 | 快捷方法 |
| --- | --- | --- |
| LogicalAndFilter | 通过多组过滤器的图元 | WherePass IntersectWith |
| LogicalOrFilter | 多组过滤器中，至少通过一组过滤器的图元 | UnionWith |

### 3.1.3 过滤实例

下面用快速过滤，慢速过滤器和逻辑过滤器找出项目中属于标高2的墙体。

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //创建属于“墙类”的快速过滤器
            ElementClassFilter wallClassFilter = new ElementClassFilter(typeof(Wall))；
            //创建与标高2相关的的慢速过滤器，2607为标高2的ID
            ElementLevelFilter elementLevelFilter = new ElementLevelFilter(new ElementId(2607))；
            //创建逻辑与过滤器，连接两个过滤器
            LogicalAndFilter logicalAndFilter = new LogicalAndFilter(wallClassFilter， elementLevelFilter)；
            //应用逻辑与过滤找属于标高2的墙体
            List<Element> walls = collector.WherePasses(logicalAndFilter).ToList()；  
            //获得所有墙体的ID
            string wallIds = "本项目标高墙体ID如下：\n"；
            foreach (Element wall in walls)
            {
                wallIds = wallIds + wall.Id.ToString() + "\n"；
            }
            TaskDialog.Show("Revit"， wallIds)；
            return Result.Succeeded；
        }
    }
}
```

运行结果如下：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/8aa86d74cd12d30fd9d2759c37b97acd.png)

## 3.2 参数

### 3.2.1 参数类

Revit提供了一个通用机制，给每个图元一组可以编辑的参数。在Revit用户界面中，图元属性对话框中的参数是可见的。本节介绍如何利用Revit平台API来获取和使用内置参数。

本节以”墙体“为例子，了解参数的基本内容。首先我们选中一面墙体，点击”Revit LookUp“。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/fc8f4338483bacc76c69bb979b3be7ec.png)

即可查看该墙体的一个图元属性。在墙体图元中”Paremeters“属性包含了该墙体所有参数。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/fca195d9cd3c02259fd3326180b4e729.png)

点击”Parameters“可得到该墙体的所有属性。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/6d2ae46797e30df6789696557c301c62.png)

这里可以看到，参数是属于”Parameter“类，其中有具有值的属性和方法能够通过”Revit LookUp“查看，所有属性和方法则需要自行通过Revit API文档查找。”Parameter“类文档界面如下：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/31ed46fbd5ed2382bbac650ca3d18125.png)

### 3.2.2 Revit单位

在介绍"Parameter"成员之前，有必要先介绍下Revit单位系统中的基本单位。

| 基本单位 | Revit 单位 | 单位系统 |
| --- | --- | --- |
| 长度  | 英尺（ft） | 英制  |
| 角度  | 弧度  | 公制  |
| 质量  | 千克（kg） | 公制  |
| 时间  | 秒（s） | 公制  |
| 电流  | 安培（A） | 公制  |
| 温度  | 开氏度（K） | 公制  |
| 照度  | 坎德拉（cd） | 公制  |

   如何理解此表格，以墙体的”无连接高度“参数为例。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/6989d5b32f6bfb3f78ec6003778beed7.png) ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/b1af40f239e153844040854ff1e1d59e.png)

在上图，我们可以发现，在”无连接高度“参数的方法中，AsDouble() 是将”无连接高度“的参数值转化为Double值，AsValueString() 是将”无连接高度“的参数值转化为字符串值。但为何double值为26.2467而不是8000？原因在于此double值的单位为英尺，而AsValueString()的单位为项目单位。下图可以看到本项目的长度单位为mm。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/5a34c03c57e0800b8ee693a0100a5398.png)

简而言之，在程序中获得的长度单位为英尺，角度为弧度。英尺转化为毫米一般乘以304.8来转换。

### 3.2.3 参数类成员

| 名称  |     | 描述  |
| --- | --- | --- |
| 方法  | AsDouble | 若参数的值是数值类型的参数，则返回该数值，单位为Revit单位，否则返回默认值“0”。例：无连接高度 |
|     | AsElementId | 若参数的值是ElementId类型的参数，则返回该ElelmentId，否则返回默认值“null”。例：底部约束 |
|     | AsInteger | 若参数的值是bool类型的参数，则值为"true"时，返回值为“1”；值为“false”时，返回值为“0”。当值不为bool类型时，返回默认值“0”。例：房间边界 |
|     | AssociateWithGlobalParameter | 将此参数与同一文档中的全局参数关联。 |
|     | AsString | 若参数的值是字符串类型，则返回该字符串，否则返回”空白“值。例：备注 |
|     | AsValueString | 将值转换为字符串。double转化单位为项目单位的数值字符串；ElementId转化为Id字符串；bool类型转化为”是“或”否“。 |
|     | CanBeAssociatedWithGlobalParameter | 测试此参数是否可以与给定的全局参数关联。 |
|     | CanBeAssociatedWithGlobalParameters | 测试此参数是否可以与任何全局参数关联。 |
|     | Dispose | 使对象立即释放它可能正在使用的任何资源。 |
|     | DissociateFromGlobalParameter | 将此参数与全局参数解关联。 |
|     | Equals | 确定指定对象是否等于当前对象。 |
|     | GetAssociatedGlobalParameter | 返回当前与此参数关联的全局参数(如果有)。 |
|     | GetHashCode | 返回该参数的哈希值 |
|     | GetType | 获取当前实例的类型。 |
|     | Set | Set方法有4个重载，可分别为参数设double值，int32值，字符串，ElementId值 |
|     | SetValueString | 根据输入字符串设置参数值。该方法仅适用于值类型的参数。 |
|     | ToString | 返回表示当前对象的字符串。 |
| 属性  | Definition | 返回定义对象，该对象描述参数的数据类型、名称和其他详细信息。每个参数都由一个Definition定义，该Definition中包含了该参数的名称，参数组，参数类型，单位类型 |
|     | DisplayUnitType | 获取参数对象的项目单位类型。 |
|     | Element | 此参数所属的元素。 |
|     | GUID | 共享参数的Guid。若为该参数非共享参数，则会引发异常。 |
|     | HasValue | 标识参数是否有已分配的值。 |
|     | Id  | 参数id。 |
|     | IsReadOnly | 获取参数的只读属性，即该参数在API内的只读属性。对Revit程序而言。 |
|     | IsShared | 标识参数是否为共享参数。 |
|     | StorageType | 描述参数内部用于存储其值的类型。 |
|     | UserModifiable | 用户是否可以在Revit界面修改该参数的值。对Revit用户而言。 |

### 3.2.4 参数实例

通过墙体的无连接高度参数，批量修改墙体高度

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；  
            //获取墙体修改前无连接高度
            string before = "修改前墙体无连接高度为：\n"+walls.First().LookupParameter("无连接高度").AsValueString()+"\n"；
            //修改高度（修改模型必须在事务中进行，后续介绍）
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //事务开始
            transaction.Start()；
            //修改高度
            foreach (Element wall in walls)
            {
                wall.LookupParameter("无连接高度").Set(4000 / 304.8)；
            }
            //事务介绍
            transaction.Commit()；
            //获取墙体修改后无连接高度
            string after = "修改后墙体无连接高度为：\n" + walls.First().LookupParameter("无连接高度").AsValueString()；
            TaskDialog.Show("Revit"， before+after)；
            return Result.Succeeded；
        }
    }
}
```

修改前

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/901bdc4fd4c55f36a568770e0db21260.png)

修改后

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/36200d4d8eef91970aa10d186daed29a.png)

## 3.3 编辑图元

通过Revit API 平台可以对某个图元进行移动、复制、旋转、对齐、镜像、成组、阵列、删除和锁定等操作。API中的编辑功能类似于Revit用户界面中的命令。

### 3.3.1 移动图元

Revit中移动图元的方法有两种，一种是通过ElementTransformUtils 类的方法进行移动，另一种是通过修改图元的Location属性进行移动。

（1）用ElementTransformUtils 类进行移动

ElementTransformUtils 类提供了两个静态方法来将一个或多个图元从某处移动到别处，如下所示：

```c
public static void MoveElement(Document document， ElementId elementToMove， XYZ translation)；
```

根据指定向量移动文件种的一个图元。

```c
public static void MoveElements(Document document， ICollection<ElementId> elementsToMove， XYZ translation)；
```

根据指定向量移动文件中的一组图元。

注意：

- 当使用MoveElement()或MoveElements()方法时，这些方法不能将基于标高的图元移动到该标高的上方或下方。当图元基于某标高时，不能更改其Z坐标值，但可以将图元放置在同一标高的任何位置上。某些基于标高的图元有一个偏移实例参数可以用来在Z方向移动它们。例如，如果在标高1原点位置(0，0，0)新建一根柱，然后将其移动到新位置(10，20，30)，则柱被放置在位置(10，20，0)，而不是位置(10，20，30)。
  
- 当移动一个或多个图元时，与其相关联的图元也跟着移动。例如，如果有一个窗户的墙移动了，则窗户也会跟着移动。
  
- 被固定的图元不能被移动。
  

**代码示例：使用MoveElements()方法移动所有墙体。**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；
            //遍历所有墙体，收集墙体ID
            List<ElementId> wallIds = new List<ElementId>()；
            foreach (Element wall in walls)
            {
                wallIds.Add(wall.Id)；
            }
            //移动墙体，向上移动200mm
            transaction.Start()；
            ElementTransformUtils.MoveElements(document， wallIds， new XYZ(0， 200 / 304.8， 0))；
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

移动前：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/2b6772123ac7b96fc0a9e69a485090b6.png)

移动后：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/4c38c24dcfe8ebbcaf4213f0d159f4fe.png)

（2）修改图元Location属性进行移动

移动Revit 图元的另一种方法是使用Location及其派生对象。在Revit 平台API中，Location对象提供了图元平移和旋转的能力。使用它的派生对象，如LocationPoint或LocationCurve，可以获得更多的位置信息和控制。如果Location图元向下转换为LoactionCurve对象或LocationPoint对象，则可以直接将曲线或点移动到新的位置上。

当移动图元时，请注意向量（300/304.8，400/304.8，0）不是目标位置而是偏移值。表示向左偏移300mm，向上偏移400mm

**代码示例：修改所有墙体Location属性，将墙体左偏移300mm，向上偏移400mm。**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；
            //遍历所有墙体，修改Location属性，使墙体向左偏移300mm，向上偏移400mm
            transaction.Start()；
            foreach (Element wall in walls)
            {
                (wall.Location as LocationCurve).Move(new XYZ(300 / 304.8， 400 / 304.8， 0))；
            }
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

移动前：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/90f13370647208b3f0d063bbacae3f8d.png)

移动后：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/a775d7edb707071f5ee72d07312a2ce9.png)

### 3.3.2 复制图元

ElementTransformUtils 类提供了几个静态方法，从某处复制一个或多个图元到别处，见表2-8，可以复制到同一个文件或视图内，也可以复制到其他文件或视图内。

```c
CopyElement(Document document， ElementId elementToCopy， XYZ translation)
```

复制一个图元，并将其做指定偏移。

```c
CopyElements(Document document， ICollection<ElementId> elementsToCopy， XYZ translation)
```

复制一组图元，并将其做指定偏移。

```c
CopyElements(Document sourceDocument， ICollection<ElementId> elementsToCopy， Document destinationDocument， Transform transform， CopyPasteOptions options)；
```

将一组图元从指定文档复制到目标文档，并做指定偏移（变换）。

```c
CopyElements(View sourceView， ICollection<ElementId> elementsToCopy， View destinationView， Transform additionalTransform， CopyPasteOptions options)
```

将一组图元从指定视图复制到目标视图，并做指定偏移（变换）。

**代码示例：复制所有墙体，并将其向上偏移2000mm。**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；
            //遍历所有墙体，获取所有墙体ID
            List<ElementId> wallIds = new List<ElementId>()；
            foreach (Element wall in walls)
            {
                wallIds.Add(wall.Id)；
            }
            //复制墙体，并向上偏移2000mm
            transaction.Start()；
            ElementTransformUtils.CopyElements(document， wallIds， new XYZ(0， 2000 / 304.8， 0))；
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

复制前：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/ba587e799926e07f301595885da89c12.png)

复制后：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/d6af183d1ca620b51708bbe2ced67513.png)

### 3.3.3 旋转图元

ElementTransformUtils 类提供了两种静态方法，用于旋转项目中的一个或多个图元。

```c
RotateElement(Document document， ElementId elementToRotate， Line axis， double angle)；
```

将一个图元绕指定旋转轴旋转指定的弧度。

```c
RotateElements(Document document， ICollection<ElementId> elementsToRotate， Line axis， double angle)；
```

将一组图元绕指定的旋转轴旋转指定的弧度。

在这些方法中，旋转角度是以弧度表示的。正的弧度表示绕指定轴逆时针旋转，负的弧度表示顺时针旋转。

**代码示例：将所有墙体绕其自身中点逆时针旋转30°。**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；
            //遍历所有墙体，将墙体绕其自身中点逆时针旋转30°
            transaction.Start()；
            foreach (Element wall in walls)
            {
                //获取墙体的定位线
                Line wallLocaionLine = (wall.Location as LocationCurve).Curve as Line；
                //获取墙体中点
                XYZ midPoint = wallLocaionLine.GetEndPoint(0) + wallLocaionLine.Direction * wallLocaionLine.Length / 2；
                //创建旋转轴
                Line axis = Line.CreateBound(midPoint， new XYZ(midPoint.X， midPoint.Y， midPoint.Z + 10))；
                //旋转墙体
                ElementTransformUtils.RotateElement(document， wall.Id， axis， Math.PI / 6)；
            }
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

旋转前：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/8112a19bbc25d817c32055cf412adff0.png)

旋转后：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/ad239d296098a45d62085221f67bee20.png)

### 3.3.4 对齐图元

ItemFactoryBace.NewAlignment() 方法可以在两个参照之间新建一个锁定对齐。ItemFactoryBace属于Autodesk.Revit.Creation名称空间可在Document.Create.NewAlignment() 下调用。

```c
ItemFactoryBace.NewAlignment(View view， Reference reference1， Reference reference2)
```

这两个参照必须为下列组和之一：

- 两个平表面
  
- 两条线
  
- 直线和点
  
- 直线和参照平面
  
- 2条弧
  
- 2个圆柱面
  

这些参照必须已经是几何对齐的，因为该函数不会强制他们变得对齐。如果对齐可被创建，则返回一个表示锁定对齐的新Dimension对象；否则将引发异常。

NewAlignment()方法还需要一个视图，用来确定对齐的方向

### 3.3.5 镜像图元

ElementTransformUtils 类提供了两静态类来镜像项目中的一个或多个图元。

```c
MirrorElement(Document document， ElementId elementToMirror， Plane plane)
```

将一个图元以一个平面为对称轴进行镜像。

```c
MirrorElements(Document document， ICollection<ElementId> elementsToMirror， Plane plane， bool mirrorCopies)
```

将一组图元以一个平面为对称轴进行镜像，可设置是否保留原图元。

在执行镜像操作之后，即可从Selection.ElementSet 访问新图元。

ElementTransformUtils.CanMirrorElement()和ElementTransformUtils.CanMirrorElements()可用于在尝试镜像一个或一组图元前确定是否可以镜像。

每个族实例都具有Mirrored属性，它显示该族实例是否已被镜像。

**代码示例：在平面视图下，选择一条线，将所有墙体以该线为对称轴进行镜像。**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获取项目UI文档
            UIDocument uIDocument = commandData.Application.ActiveUIDocument；
            //获得本项目文档
            Document document = uIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；
            //遍历所有墙体，获取所有墙体的ID
            List<ElementId> wallIds = new List<ElementId>()；
            foreach (Element wall in walls)
            {
                wallIds.Add(wall.Id)；
            }
            //选择一条线
            Reference lineRe = uIDocument.Selection.PickObject(Autodesk.Revit.UI.Selection.ObjectType.Element，"请选择镜像轴线")；
            DetailLine detailLine = document.GetElement(lineRe) as DetailLine；
            //获得轴线的定位线
            Line locationLine = (detailLine.Location as LocationCurve).Curve as Line；
            //获得定位线的起点和终点
            XYZ startPoint = locationLine.GetEndPoint(0)；
            XYZ endPoint = locationLine.GetEndPoint(1)；
            //创建轴线上方的点
            XYZ topPoint = new XYZ(startPoint.X， startPoint.Y， startPoint.Z + 10)；
            //以三点创建一个平面
            Plane plane = Plane.CreateByThreePoints(startPoint， endPoint， topPoint)；
            //镜像墙体并保留原图元
            transaction.Start()；
            ElementTransformUtils.MirrorElements(document， wallIds， plane， true)；
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

镜像前：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/e3d0821e7636e77a1f8f1fc8a3bba2d6.png)

镜像后：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/67e09bd30f15e3218cd293a8ec343f45.png)

### 3.3.6 成组图元

Revit平台API用 Creation.Document.NewGroup()方法选择一个图元或多个图元与组，然后将它们合并，对于某个组的每个实例，它们之同是有关联的。例如，项目中创建包含一张床、墙壁和窗户的多个实例，如果修改该组中的一面墙，那么该组中的所有实例该类型墙都会改变。由于一次操作就可更改某个组的多个实例，因此大大简化了建筑模型的修改。

```c
NewGroup(ICollection<DB.ElementId> elementIds)
```

Revit 有三种类型的组：模型组、详图组和附属详图组。所有这些组都使用NewGroup()方法来创建。所创建组的类型取决于组内图元的类型。

- 若无任何详图图元，则创建的是个模型组
  
- 如果所有的图元都是详图图元，那么创建的是个详图组。
  
- 如果这两种类型的图元都包括在内，则创建一个包含附属详图组的模型组并返回。注意：图元成组后，可将图元从项目中删除。
  
- 模型组中某个模型图元被删除时，即使应用程序成功返回到用户界面，但若单击该组或鼠标悬停于其上，则它仍然可见。事实上，该模型图元已被删除，并且无法选择或访问该图元。
  
- 当项目中一组实例的最后一个成员被删除、剔除或移除时，模型组实例也就被删除了
  

图元成组后，就不能移动或旋转。如果在已成组的图元上执行这些操作，尽管Move()或Rotate()方法返回true，但实际上图元没有发生任何变化。

如果参照的图元没有成组，则无法将其尺寸和标记成组。如果这样做则API调用会失败。

开发人员可以对参照某个模型组中模型图元的那些尺寸和标记进行分组。这些尺寸和标记被添加到一个附属详图组。你无法单独移动、复制、旋转、阵列或镜像附属详图组，而不对其参照模型组执行相同操作。

**代码示例：将所有墙体成组，并将组名称该为”墙组1“**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；
            //遍历所有墙体，获取所有墙体ID
            List<ElementId> wallIds = new List<ElementId>()；
            foreach (Element wall in walls)
            {
                wallIds.Add(wall.Id)；
            }
            transaction.Start()；
            //成组墙体
            Group wallGroup = document.Create.NewGroup(wallIds)；
            //修改组名
            wallGroup.GroupType.Name = "墙组1"；
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

成组前：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/bcb707bed4712690ed44cc90bbd3a509.png)

成组后：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/2d1fd451551dd3c93f4865ec7cfbbb66.png)

### 3.3.7 创建图元阵列

Revit 平台 API提供了两个类，即LinearArray和 RadialArray来阵列项目中的一个或多个图元。这些类提供静态方法来创建一个或多个选定构件的线性或径向阵列。线性阵列表示从一个点顺着一条线创建的阵列，而径向阵列表示沿弧线创建的阵列。

可以选择同一面墙上的一扇门和一扇窗，然后通过阵列创建门、墙、窗结构布局的多个实例。

LinearArray 和RadialArray 还提供了一些方法，来阵列未被分组和关联的一个或多个图元。虽然类似于阵列图元的 Create()方法，但每个目标图元都独立市其他图元，可对其探作而不影响其他图元。

| **LinearArray 方法** |     |
| --- | --- |
| 成员  | 说明  |
| Create(Document aDoc， View dBView， ElementId id， int count， XYZ translationToAnchorMember， ArrayAnchorMember anchorMember)； | 根据指定数目阵列项目中的单个图元 |
| Create(Document aDoc， View dBView， ICollection<ElementId> ids， int count， XYZ translationToAnchorMember， ArrayAnchorMember anchorMember)； | 根据指定数目阵列项目中的一组图元 |
| ArrayElementsWithoutAssociation(Document aDoc， View dBView， ICollection<ElementId> ids， int count， XYZ translationToAnchorMember， ArrayAnchorMember anchorMember)； | 根据指定数目阵列项目中的单个图元，目标图元与线形阵列不关联。 |
| ArrayElementWithoutAssociation(Document aDoc， View dBView， ElementId id， int count， XYZ translationToAnchorMember， ArrayAnchorMember anchorMember)； | 根据指定数目阵列项目中的一组图元，目标图元与线形阵列不关联。 |

| **RadiaArray 方法** |     |
| --- | --- |
| 成员  | 说明  |
| Create(Document aDoc， View dBView， ElementId id， int count， Line axis， double angle， ArrayAnchorMember anchorMember)； | 根据输入的旋转轴，阵列项目中的单个图元 |
| Create(Document aDoc， View dBView， ICollection<ElementId> ids， int count， Line axis， double angle， ArrayAnchorMember anchorMember)； | 根据输入的旋转轴，阵列项目中的一组图元 |
| ArrayElementsWithoutAssociation(Document aDoc， View dBView， ICollection<ElementId> ids， int count， Line axis， double angle， ArrayAnchorMember anchorMember)； | 根据输入的旋转轴，阵列项目中的单个图元，目标图元与径向阵列不关联 |
| ArrayElementWithoutAssociation(Document aDoc， View dBView， ElementId id， int count， Line axis， double angle， ArrayAnchorMember anchorMember)； | 根据输入的旋转轴，阵列项目中的一组图元，目标图元与径向阵列不关联 |

如果需要创建一个构件的多个实例开间时操控它们，则可使用阵列图元的方法。中的每个实例都可以是组的成员。

注意：使用阵列图元方法，适用以下规则：

(1)在执行线性和径向阵列操作时，依赖于这些阵列图元的图元也会被阵列。

(2)不能成组的那些图元无法阵列。更多信息请参阅 Revit 用户指南中关于组和阵充的限制条件的内容。

(3)大部分注释符号不支持阵列。

**代码示例：在三维视图下，阵列向上出6组墙体，间距500mm**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目的UI文档
            UIDocument uIDocument = commandData.Application.ActiveUIDocument；
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；
            //遍历所有墙体，获取所有墙体ID
            List<ElementId> wallIds = new List<ElementId>()；
            foreach (Element wall in walls)
            {
                wallIds.Add(wall.Id)；
            }
            //阵列墙体，间距500mm，个数6
            transaction.Start()；
            LinearArray.Create(document， uIDocument.ActiveView， wallIds， 6， new XYZ(0， 500 / 304.8， 0)， ArrayAnchorMember.Second)；
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

阵列前：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/79053540b9b4fd22659d1679b5544844.png)

阵列后：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/4c13a2762d30c64ce840479d349d02f8.png)

### 3.3.8 删除图元

Revit 平台API提供了Document.Delete()方法来删除项目中的一个或多个图元。

| 删除成员 |     |
| --- | --- |
| 成员  | 说明  |
| Delete(ElementId elementId) | 使用图元ID删除项目中的单个图元 |
| Delete(ICollection<ElementId> elementIds) | 使用图元IDs删除项目中的多个图元 |

注意：

- 删除图元时，与其关联的子图元也会被删除
  
- 删除图元后，删除图元的参照会失效，如果访问他们会引发异常
  

**代码示例：删除项目中所有墙体**

```c
amespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目的UI文档
            UIDocument uIDocument = commandData.Application.ActiveUIDocument；
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；
            //遍历所有墙体，获取所有墙体ID
            List<ElementId> wallIds = new List<ElementId>()；
            foreach (Element wall in walls)
            {
                wallIds.Add(wall.Id)；
            }
            //删除所有墙体
            transaction.Start()；
            document.Delete(wallIds)；
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

删除前：

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/a54a33328e0660fae49296c05d02d5ec.png)

删除后：

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/f38a87058cf8a8523224a869a3c5979a.png)

### 3.3.9 锁定图元

图元可以锁定，以防其移动。Element.Pinned 属性可用于检查某个图元是否已锁定或未锁定与另一个图元。

当Element.Pinned 设置为true，则不能移动或旋转该图元。

# 4 几何图元

## 4.1 族实例

### 4.1.1 创建单个族实例

通常，创建族实例对象使用Autodesk.Revit.Creation.Document类的NewFamilyInstance()方法，该方法具有12个重载方法。选择使用哪个重载不仅取决于实例的类别，而且与其它位置特征也有关，如该实例对象是否嵌入主体、置于相关参照标高，或直接置于特定的面。

**用NewFamilyInstance()创建实例的选项**

| NewFamilyInstance()参数 | 说明  |
| --- | --- |
| XYZ，FamilySymbol，StructuralType | 在无参照标高或主体图元的任意位置创建实例 |
| XYZ，Famliysymbol，Element，StructuralType | 如果实例对象嵌与墙、楼板或天花板上 |
| XYZ，FamilySymbol，XYZ，Element，StructuralType | 如果对象嵌于墙、楼板或天花板上，并需要非默认的定方向 |
| XYZ，FamilySymbol，Element，Level，StructuralType | 如果对象嵌与墙，楼板或天花板上，并与某个参照标高关联 |
| XYZ，FamilySymbol，Level，StructuralType | 如果对象与某个参照关联 |
| Face，XYZ，XYZ，FamilySymbol | 如果是基于面的对象，并需要非默认的定方向 |
| Reference，Line，FamilySymbol | 如果是个基于面的线性对象，但接受“面参照”而非某个面 |
| XYZ，FamilySymbol，Level，StructuralTpye | 创建基面位于参照标高上的柱。该柱将延伸到模型中临近的可用标高，或以默认柱高延伸（若参照标高上没有合适的标高） |
| XYZ，FamilySymbol，Element，StructuralType | 门窗必须嵌于墙上，若它们可被置于默认方向，则使用此方法 |
| XYZ，FamilySymbol，XYZ，Element，StructuralType | 如果所创实例需要一个非默认的定位方向 |
| XYZ，FamilySymbol，Element，Level，StructuralType | 如果实例需要一个参照标高关联 |
| Curve，FamilySymbol，Level，StructuralType | 根据给定曲线创建基于标高的支撑或梁。这是创建支撑或梁的推荐方法 |
| XYZ，FamilySymbol，StructuralType | 在任意位置创建实例 |
| XYZ，FamilySymbol，Element，Level，StructuralType | 如果实例嵌于某个图元（楼板等）并与参照标高关联 |
| XYZ，FamilySymbol，Level，StructuralType | 若实例与某个参照标高关联 |
| XYZ，FamilySymbol，Element，StructuralType | 如果实例嵌于某个图元（楼板等） |
| Line，FamilySymbol，View | 仅适用于二维族基于线的详图符号 |
| XYZ，FamlySymbol，View | 仅适用于二维族符号 |

在NewFamilyInstance()方法需要设定StructuralType参数，以指定创建族实例的类型。StructuralType值对应族实例类型如下：

| StructuralType值 | 族实例类型 |
| --- | --- |
| NonStructural | 门、桌子等非结构类型 |
| Beam | 梁   |
| Brace | 支撑  |
| Column | 柱   |
| Footing | 基础  |

**代码示例：在所有墙体的两端创建结构柱**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目的UI文档
            UIDocument uIDocument = commandData.Application.ActiveUIDocument；
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；
            //获取结构柱类型
            FamilySymbol columnSymbol = new FilteredElementCollector(document).WhereElementIsElementType().OfClass(typeof(FamilySymbol)).Where(x => x.Name == "UC305x305x97").First() as FamilySymbol；
            //获取标高1
            Level level1 = new FilteredElementCollector(document).WhereElementIsNotElementType().OfClass(typeof(Level)).Where(x => x.Name == "标高 1").First() as Level；
            //遍历所有墙体，创建结构柱
            transaction.Start()；
            foreach (Element wall in walls)
            {
                //获取墙体的定位线
                Line wallLine = (wall.Location as LocationCurve).Curve as Line；
                //创建结构柱
                document.Create.NewFamilyInstance(wallLine.GetEndPoint(0)， columnSymbol， level1， StructuralType.Column)；
                document.Create.NewFamilyInstance(wallLine.GetEndPoint(1)， columnSymbol， level1， StructuralType.Column)；
            }
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

创建前：

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/648bc69ddd1e018ac84176884b0da816.png)

创建后：

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/478b093f4aeff26647e96b27e4f7d384.png)

### 4.1.2 批量创建族实例

一些FamilyInstance 对象需要创建多个位置，在这种情况下，使用该对象所提供的详细的创建方法更为适合。如果实例未创建，则引发异常。调用该方法之前，必须先将类型/符号加载到项目中。

使用Document.NewFamilyInstances2()，通过一次创建多个族实例，可以精简代码并提高性能。此方法有个单独的参数，即描述所创建族实例的FamilyInstanceCreatetionDate 对象列表。

**代码示例：沿X轴，批量创建结构柱**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目的UI文档
            UIDocument uIDocument = commandData.Application.ActiveUIDocument；
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document， "创建事务")；
            //获取结构柱类型
            FamilySymbol columnSymbol = new FilteredElementCollector(document).WhereElementIsElementType().OfClass(typeof(FamilySymbol)).Where(x => x.Name == "UC305x305x97").First() as FamilySymbol；
            //获取标高1
            Level level1 = new FilteredElementCollector(document).WhereElementIsNotElementType().OfClass(typeof(Level)).Where(x => x.Name == "标高 1").First() as Level；
            //构造10个柱子信息
            List<Autodesk.Revit.Creation.FamilyInstanceCreationData> familyInstanceCreationDatas = new List<Autodesk.Revit.Creation.FamilyInstanceCreationData>()；
            for (int i = 1； i <= 10； i++) 
            {
                Autodesk.Revit.Creation.FamilyInstanceCreationData familyInstanceCreationData = new Autodesk.Revit.Creation.FamilyInstanceCreationData(new XYZ(i * 1000 / 304.8， 0， 0)， columnSymbol， level1， StructuralType.Column)；
                familyInstanceCreationDatas.Add(familyInstanceCreationData)；
            }
            //创建结构柱
            transaction.Start()；
            document.Create.NewFamilyInstances2(familyInstanceCreationDatas)；
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

创建前：

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/6387c409c1466517bcbf819019d6af0f.png)

创建后：

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/667409d02f4076789a1077f17794d66c.png)

## 4.2 注释图元

### 4.2.1 尺寸标注

尺寸标注主要有三种类型：临时性尺寸标注(Temporary Dimensions)、永久性尺寸标注(Permanent Dimensions)和高程点标注(Spot Dimensions)。当创建或选择几何图形时，Revit会在构件周围显示临时尺寸标注，这有利于在适当的位置放置构件。

永久性尺寸标注是特意放置的尺寸标注，通过Revit API只能访问和创建永久性尺寸标注和高程点标注。

（1）创建尺寸标注

| 类型  | 方法  | 参数描述 |
| --- | --- | --- |
| 线性尺寸标注 | Creation.Document.NewDimension(View view，Line line，ReferenceArray references) | 参数view是尺寸标注所要创建在的视图，line表示线性尺寸的直线，references是绑定的几何参照。 |
|     | Creation.Document.NewDimension(View view，Line line，ReferenceArray references，DimensionType dimensionType) | 参数view是尺寸标注所要创建在的视图，line 表示线性尺寸的直线，references是绑定的几何参照，dimensionType是尺寸标注的族类型。 |
|     | Creation.FamilyltemFactory.NewLinearDimension( View view，Line line，Reference Array references) | 参数view是尺寸标注所要创建在的视图，line表示线性尺寸的直线，references是绑定的几何参照 |
|     | Creation.FamilyltemFactory.NewLinear Dimension(View view，Line line，ReferenceArray references，DimensionType dimension Type) | 参数 view是尺寸标注所要创建在的视图，line表示线性尺寸的直线，referenes是绑定的几何参照，dimensionType是尺寸标注的族类型 |
| 对齐尺寸标注 | Document.NewAlignment(View view，Reference reference1，Reference reference2) | 参数view 是尺寸标注所要创建在的视图，reference1和 reference2是绑定的几何参照。 |
| 角度尺寸标注 | Creation.FamilyltemFactory.NewAngularDimension(View view，Arc arc，Reference firstRef，Reference secondRef) | 参数view 是尺寸标注所要创建在的视图，arc 表示所要标注的圆弧，firstRef 和aecomdRef是尺寸标注的两个参照，它们必须和圆弧垂直 |
|     | Creation.FamilyltemFactory.NewAngularDimension(View view，Arc arc，Reference firstRef，Reference secondRef，DimensionTypedimensionType) | 参数view 是尺寸标注所要创建在的视图，arc表示所要标注的圆弧，firstRef 和secondRef 是尺寸标注的两个参照，它们必须和圆弧垂直，dimensionType是尺寸标注的族类型 |
|     | AngularDimension.Create(Document document， View dbView， Arc arc， IList<Reference> references， DimensionType dimensionStyle) | 参数document 是创建标注的文档，view 是尺寸标注所要创建在的视图，arc表示所要标注的圆弧，references是绑定的几何参照，它们必须和圆弧垂直，dimensionType是尺寸标注的族类型 |
| 弧长度尺寸标注· | Creation.FamilyItemFactory.NewArcLengthDimension(View view，Arc arc，Reference arcRef，Reference firstRef，Reference secondRef) | 参数view 是尺寸标注所要创建在的视图，arc表示所要标注的圆弧，arcRef 表示所要标注的圆弧的几何参照，firstRef 和 secondRef是尺寸标注的两个参照，它们必须和圆弧相交 |
|     | Creation.FamilyItemFactory.NewArcLengthDimension(View view，Arc arc，Reference arcRef，Reference firstRef，Reference secondRef，DimensionType dimensionType) | 参数view是尺寸标注所要创建在的视图，arc表示所要标注的圆弧，arcRef 表示所要标注的圆弧的几何参照，firstRef 和 secondRef是尺寸标注的两个参照，它们必须和圆弧相交。dimensionType是尺寸标注的族类型 |
| 直径尺寸标注 | Creation.FamilyltemFactory.NewDiameterDimension(View view，Reference arcRef，XYZ origin) | 参数 view是尺寸标注所要创建在的视图，arcRef表示所要标注的圆弧的几何参照，origin 和圆心连线表示尺寸标注所在的线 |
| 径向尺寸标注 | Creation.FamilyltemFactory.NewRadialDimension(View view，Reference arcRef，XYZ origin) | 参数view是尺寸标注所要创建在的视图，arcRef 表示所要标注的圆弧的几何参照，origin和圆心连线表示尺寸标注所在的线 |
|     | Creation.FamilyItemFactory.NewRadialDimension(View view，Reference arcRef，XYZ origin，DimensionType dimensionType) | 参数view是尺寸标注所要创建在的视图，arcRef 表示所要标注的圆弧的几何参照，origin 和圆心连线表示尺寸标注所在的线，dimensionType是尺寸标注的族类型 |
| 高程点标注 | Creation.Document.NewSpotElevation(View view，Reference reference，XYZ origin，XYZ bend，XYZend，XYZ refPt，bool hasLeader) | 参数view是高程点标注所要创建在的视图，reference 是其几何参照，origin是标注的起点，bend是弯曲点，end 是标注的终点，refPt是标注所要测量的点，hasLeader表示是否有箭头。 |
| 高程点坐标标注 | Creation.Document.NewSpotCoordinate(View view，Reference reference，XYZ origin，XYZ bend，XYZ end，XYZ refPt，bool hasLeader) | 参数view是高程点标注所要创建在的视图，reference是其几何参照，origin是标注的起点，bend是弯曲点，end是标注的终点，refPt是标注所要测量的点，hasLeader表示是否有箭头 |

（2）尺寸标注文字修改

在Revit中，可以在如下图所示的对话框中自定义尺寸标注上所显示的文字。（通过双击尺寸标注的文字来调出该对话框）

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/3ff600d27880f39f9ff781e75a333712.png)

尺寸标注文字属性框

可以使用实际的尺寸值再加上附加的文字字段来表示尺寸标注的文字，也可以以随意的文字来替换实际尺寸值。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/f713fc66db6ab3a9ac8730294f6935f3.png)

有附加文字的尺寸标注

Revit API 也提供了相应的接口来读取过修改这些值。

| 属性  | 描述  | 访问  |
| --- | --- | --- |
| Dimension.Above | 文字字段中的“高于” | 可读写 |
| Dimension.Below | 文字字段中的“低于” | 可读写 |
| Dimension.Prefix | 文字字段中的“前缀” | 可读写 |
| Dimension.Suffix | 文字字段中的“后缀” | 可读写 |
| Dimension.VauleString | 文字字段中的“值” | 只读  |
| Dimension.ValueOverride | 替换实际尺寸值的任意文字 | 可读写 |

**代码示例：创建墙体的长度尺寸标注，并修改标注尺寸值为”墙体长度为xxx毫米“**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目的UI文档
            UIDocument uIDocument = commandData.Application.ActiveUIDocument；
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建事务
            Transaction transaction = new Transaction(document，"创建事务")；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList()；
            //获取标高1视图
            View level1View = new FilteredElementCollector(document).WhereElementIsNotElementType().OfClass(typeof(View)).Where(x => x.Name == "标高 1").First() as View；
            //遍历所有墙体，创建尺寸标注
            transaction.Start()；
            foreach (Element wall in walls)
            {
                //获取墙体的定位线
                Line wallLine = (wall.Location as LocationCurve).Curve as Line；
                //创建标注的定位线，墙体定位线向上偏移1500mm
                Line dimensionLine = Line.CreateUnbound(wallLine.GetEndPoint(0) + level1View.UpDirection * 1500 / 304.8， level1View.RightDirection)；
                //创建参照集
                ReferenceArray referenceArray = new ReferenceArray()；
                //定位线
                Line line1 = Line.CreateBound(wallLine.GetEndPoint(0)， wallLine.GetEndPoint(0) + level1View.UpDirection * 1 / 304.8)；
                Line line2 = Line.CreateBound(wallLine.GetEndPoint(1)， wallLine.GetEndPoint(1) + level1View.UpDirection * 1 / 304.8)；
                //定位详图线
                DetailLine detailLine1 = document.Create.NewDetailCurve(level1View， line1) as DetailLine；
                DetailLine detailLine2 = document.Create.NewDetailCurve(level1View， line2) as DetailLine；
                //详图线转参照
                referenceArray.Append(new Reference(detailLine1))；
                referenceArray.Append(new Reference(detailLine2))；
                //创建尺寸标注
                Dimension wallDimension = document.Create.NewDimension(level1View， dimensionLine， referenceArray)；
                //修改尺寸标注值
                wallDimension.ValueOverride = $"墙体长度为{wallDimension.ValueString}毫米"；
            }
            transaction.Commit()；
            return Result.Succeeded；
        }
    }
}
```

标注前：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/aa5b639477c714be77aee5bfdcb89320.png)

标注后：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/4f162d03277b3f042961fb76d0a2cf67.png)

### 4.2.2 详图曲线

详图线和其他注释一样，也是基于视图的。详图线是在视图的草图平面中绘制的。

详图线相对比较简单，类Autodesk.Revit.BD.DetailLine 代表详图线。创建方法如下

```c
Autodesk.Revit.Creation.ItemFactoryBase.NewDetailCurve(View view， Curve geometryCurve)
```

其中，参数view是所要创建的详图线所在的视图，GeometryCurve是其对应的几何线。详图线有两个重要的属性

- DetailLine.GeometryCurve：详图线对应的几何线，可读写。
  
- DetailLine.LineStyle：线样式，可读写。
  

代码示例见尺寸标注代码示例。

### 4.2.3 文字

在Revit API中，类TextNote 代表文字注释元素。

（1）文字的创建

可通过以下方法创建文字注释：

| 方法  | 参数说明 |
| --- | --- |
| TextNote.Create(Document document， ElementId viewId， XYZ position， string text， ElementId typeId) | * document：项目文档 * viewId：文字放置视图的ID * position：文字放置点 * width：文字宽度 * typeId：文字字体类型ID |
| TextNote.Create(Document document， ElementId viewId， XYZ position， string text， TextNoteOptions options) | * document：项目文档 * viewId：文字放置视图的ID * position：文字放置点 * text：文字内容 * options：控制文本注释的行为和外观的选项 |
| TextNote.Create(Document document， ElementId viewId， XYZ position， double width， string text， ElementId typeId) | * document：项目文档 * viewId：文字放置视图的ID * position：文字放置点 * width：文字宽度 * text：文字内容 * typeId：文字字体类型ID |
| TextNote.Create(Document document， ElementId viewId， XYZ position， double width， string text， TextNoteOptions options) | * document：项目文档 * viewId：文字放置视图的ID * position：文字放置点 * width：文字宽度 * text：文字内容 * options：控制文本注释的行为和外观的选项 |

（2）文字的属性修改

可以通过以下属性对文字进行修改，也可通过参数（Paramenter）来访问和修改所需要内容。

| 属性  | 描述  | 访问  |
| --- | --- | --- |
| Height | 文字高度 | 只读  |
| Width | 文字宽度 | 可读写 |
| Text | 文字内容 | 可读写 |
| BaseDirection | 文字的水平方向 | 只读  |
| UpDirection | 文字的垂直方向 | 只读  |
| Symbol | 文字的族类型 | 只读  |
| Coord | 文字的放置点坐标 | 可读写 |
| TextNoteType | 文字字体类型 | 可读写 |

### 4.2.4 标记

对于标记，通过Autodesk.Revit.Creation.Document.NewTag() 创建更为合适。需要参数如下：

**NewTag(View，Element，Boolean，TagMode，TagOrientation，XYZ)**

- View：该标记所要放置的平面视图
  
- Element：该标记的主体图元
  
- Boolean：是否显示标记引线
  
- TagMode：当所要创建的是材料标记时，TagMode应设置TM\_ADDBY\_MATERIAL；当所要创建的是多类别标记时，TagMode应设置TM\_ADDBY\_MUTICATEGORY；其它类别标记TagMode则设置TM\_ADDBY\_CATEGORY
  
- TagOrientation：设置标记的方向（水平或竖直）
  
- XYZ：标记的放置点坐标
  

## 4.4 几何

在Autodesk.Revit.DB命名空间里包含了一些几何图形相关的类型，它们在API中用于几何图形的表示和处理，从基类继承的情况分，API 提供了三大种几何类型来描述和存储几何信息：

- 几何基元类：包括所有从GeometryObject派生出来的子类。
  
- 几何辅助类：包括一些从APIObject派生出来的几何相关的子类和一些值类型。
  
- 几何集合类：包括一些实现了 IEnumerable 或者 IEnumerator接口的几何相关的类型。
  

本章将介绍如何使用各种图形相关的类型，如何从元素中获取几何数据，如何让一个元素进行图形变换等。

用"Revit LookUp"图元的Geometry属性可以查看图元的几何，如下为墙体的几何属性界面：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/71f2c30a91501a4971ab652c1550b757.png)

### 4.4.1 几何基元类

几何基元类在API中描述图形表示，由基类GeometryObject派生，主要有如下的类型：

①轮廓(Profile)，轮廓是可用来生成形状的单条线、一串连接起来的线或闭合的环。可以通过操纵轮廓来修改形状的几何图形。

②面(Face)：三维空间的实体面。其子类型有：平面(PlanarFace)，规则曲面(RuledFace)，旋转面(RevolvedFace)，圆锥面(ConicalFace)，圆柱面(CylindricalFace)，Hermite曲面(HermiteFace)。

③边(Edge)：三维空间实体的边。

④线(Curve)，参数曲线。其子类有：直线(Line)，圆弧线(Arc)，椭圆线(Ellipse)，架旋线(CylindricalHelix)，Hemite样条曲线(HermiteSpline)，NURBS样条曲线(NurbSpline)。

⑤点(Point)：三维空间的点。

⑥几何元素(GeometryElement)：一个元素的几何表示，包含了所有的几何信息。

⑦几何实例(Geometrylnstance)：一个类型图元的实例，可以取得与该实例相关的类型图元的几何信息。

⑧网格(Mesh)：三角化网格用于描述三维面的形状。

⑨实体(Solid)：三维实体。

**（1）几何实例（GeometryInstance）**

几何实例表示了储存在 Revit中默认配置的几何组合，通过各种变换到适当的位置成为一个元素的属性。最普遍的情况是在族实例中应用儿何实例。Revit使用几何实例来存储一份特定族元素类型的几何拷贝，然后在多个族实例中重复使用它。但是并不是所有的族实例都会有几何实例。当由于局部相连，相交，以及其他种种因素影响到实例位置时，Revit只需要唯一一份特定族元素类型的几何表示，这种情况就不会有几何实例，而是用实体来进行几何表示。

几何实例中有SymbolGeometry属性，该属性是生成这个几何实例的类型的几何表示，它使用的是局部坐标系。几何实例也提供了一个Transform属性，表示了从类型的局部坐标系到实例的世界坐标系的坐标变换。

几何实例也提供了GetInstanceGeometry()和GetSymbolGeometry()方法来分别获取其族实例的几何元素和族类型的几何元素。一般来说，从几何实例中可以得到三种类型的数据：

- 线(Curve)：基类线或者子类的线。
  
- 实体(Solid)：包含了面和边。
  

- 几何实例(Instance)：另一个几何实例，用来构造本几何实例。

用户有时候需要使用 Transform属性对取到的几何数据进行坐标变换。

**代码示例：获取桌子几何实例的体积**

打开Revit，在建筑样板下，点击，建筑→构件→放置构件，放置一个桌子实例。首先从族实例中获取到它的几何元素，然后从几何元素中找到其几何实例，再用GetInstanceGeometry() 从几何实例获取其族实例的几何元素，最后遍历几何元素中的所有实体，获取实体的体积。

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取一个桌子的实例
            FamilyInstance desk = collector.OfClass(typeof(FamilyInstance)).Where(x=>(x as FamilyInstance).Symbol.FamilyName=="桌").First() as FamilyInstance；
            //声明体积
            double deskVolume = 0；
            //获取桌子的几何元素
            GeometryElement deskGeo = desk.get_Geometry(new Options())；
            //遍历桌子的几何元素，获取几何实例
            foreach (GeometryObject geometryObject in deskGeo)
            {
                GeometryInstance geometryInstance = geometryObject as GeometryInstance；
                if (geometryInstance != null)
                {
                    //获取几何实例中的几何元素
                    GeometryElement instGeoEle = geometryInstance.GetInstanceGeometry()；
                    //遍历实例中的几何元素，获得所有实体
                    foreach (GeometryObject instGeoObj in instGeoEle)
                    {
                        Solid solid = instGeoObj as Solid；
                        if(solid != null)
                        {
                            //获取所有实体体积
                            deskVolume += solid.Volume；
                        }
                    }
                }
            }
            //对体积进行单位转换（由立方英尺转换为立方米）
            deskVolume = Math.Round(deskVolume * 0.3048 * 0.3048 * 0.3048， 2)；
            //打印信息
            TaskDialog.Show("Revit"， $"该桌子的体积为{deskVolume}m³")；
            return Result.Succeeded；
        }
    }
}
```

运行后：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/ebe2d30a609a91eba014deebcaf9abaa.png)

（2）实体（Solid）

实体类型定义了一个包含了面和边的三维实体，如立方体和长方体，同时可以从它的属性中获取对应的表面积和体积。实体的属性如下：

- Edges：实体的边
  
- Faces：实体的面
  
- SurfaceArea：实体的表面积
  
- Volume：实体的体积
  

 有时API可以取到没有任何边和面的空实体，使用前请先检查对应的属性来确保获取想要的边和面。例如添加 **if(solid != null && solid.Face.Size != 0)**语句判断后再使用。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/346275a18349dfeb49a609eab080bf43.png)

空实体属性

**代码示例：获取墙体的周长**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 ： IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData， ref string message， ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document；
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document)；
            //获取一个墙体的实例
            Wall wall = collector.OfClass(typeof(Wall)).WhereElementIsNotElementType().First() as Wall；
            //声明周长
            double wallPerimeter = 0；
            //获取墙体的几何元素
            GeometryElement deskGeo = wall.get_Geometry(new Options())；
            //遍历墙体的几何元素，获取实体
            foreach (GeometryObject geometryObject in deskGeo)
            {
                Solid solid = geometryObject as Solid；
                if (solid != null && solid.Faces.Size != 0) 
                {
                    //遍历实体的所有边，获取周长
                    foreach (Edge edge in solid.Edges)
                    {
                        wallPerimeter += edge.ApproximateLength；
                    }
                }
            }
            //对体积进行单位转换（由英尺转换为米）
            wallPerimeter = Math.Round(wallPerimeter * 0.3048， 2)；
            //打印信息
            TaskDialog.Show("Revit"， $"该墙体的周长为{wallPerimeter}m")；
            return Result.Succeeded；
        }
    }
}
```

运行后：

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/eed28d633a8ddd631bf43827873dbfd5.png)

### 4.4.2 几何集合类

API提供了下面一些集合类用来者遍历几何数据，所有这些类的方法和属哲类似的。

- 线：CurveArray，CurveArraylterator
  
- 边：EdgeArray，EdgeArraylterator，EdgeArrayArray，EdgeArrayArraylterator
  
- 面：FaceArray，FaceArraylterator
  
- 几何对象：GeometryObjectArray，GeometryObjectArraylterator
  
- 实例：InstanceArray，InstanceArraylterator
  
- 网格：MeshArray，MeshArraylterator
  
- 引用：ReferenceArray，ReferenceArrayIterator
  
- 实体：SolidArray，SolidArrayIterator
  
- Double值：DoubleArray，DoubleArraylterator
  

# 5 事务

## 5.1 事务概述

事务是个类似上下文的对象，它封装了Revit模型中的任何更改。对文件的任何更改只能在该文件的活动事务打开之际进行。试图在事务之外更改文件将引发异常。所作更改不会成为模型的一部分，直到活动事务提交完成。因此，在事务中所作的所有更改都可(通过析构函数)显式或隐式回滚。在任何时候，每个文件只能打开一个事务。一个事务可以包括多个操作。Revit API 中与事务相关的主类有三个：

- Transaction(事务)
  
- SubTransaction(子事务)
  
- TransactionGroup(事务组)
  

本节主要介绍Transaction类，对文件进行更改只需要 Transaction类。而其他的类用于更好地组织更改。要注意的是，在调用该命令时，应用于IExteralCommand 定义的 TransactionMode 属性，会影响 Revit 预期处理事务的方式。回顾事务属性可获得更多信息。

注：若从线程以外或非模态对话框以外启动事务，则将引发异常。事务只能从受支持的API工作流中启动，如部分外部命令、直件、更新器或者回调。

## 5.2 事务类通用方法

所有三个事务相关的类有相同的方法，如下表所示：

| 方法  | 描述  |
| --- | --- |
| Start | 启动事务 |
| Commit | 结束事务，并提交所有修改到文档中 |
| RollBack | 结束事务，并撤销对文档所做的所有修改 |
| GetStatus | 返回当前事务状态 |

除了GetStatus函数会返回当前事务状态外，Start，Commit和RollBack函数也会返回TransactionStatus表示当前操作是否成功。TransactionStatus值包含了如下值：

| 值   | 描述  |
| --- | --- |
| Uninitialized | 事务对象实例化后的初始值，但上下文尚未启动 |
| Started | 事务对象已经成功启动（Start方法已调用） |
| Committed | 事务对象成功提交完成（Commit方法已调用） |
| RolledBack | 事务对象成功回滚（Rollback方法已调用） |
| Pending | 试图提交或回滚事务对象，但因故障而进程尚无法完成，正等待最终用户的响应（在非模态对话框中）。一旦故障处理完成，状态将自动更新（到Committd或RolledBack状态） |

## 5.3 事务

 事务是便于Revit模型作任意更改所需的上下文，++**一次只能打开一个事务**++；不允许嵌套使用。**每个事务必须都有一个名称。**名称可以在创建事务对象的时候赋值，也可以在事务启动的时候赋值。这个“事务名称”在成功提交后会显示在Undo菜单中。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/0436d23e8bb156dd1000c8ad6ad2a7f4.png)

Revit Undo菜单

创建事务的两种方法：

（1）直接声明事务对象

```c
//创建事务对象
Transaction transaction = new Transaction(document， "事务名称")；
//启动事务
transaction.Start()；
 //模型修改内容……

//提交事务
transaction.Commit()；
```

事务名称也可以在事务启动时候赋值（推荐），代码如下：

```c
//创建事务对象
Transaction transaction = new Transaction(document)；
//启动事务
transaction.Start("事务名称")；
 //模型修改内容……

//提交事务
transaction.Commit()；
```

（2）用using创建事务

```c
//创建事务对象
using(Transaction transaction = new Transaction(document， "事务名称"))
{
    //启动事务
    transaction.Start()；
    //模型修改内容……

    //提交事务
    transaction.Commit()；
}
```

# 6 外部事件

## 6.1 外部事件简介

Revit API提供了外部事件框架可以用于非模态对话框。它是特别针对异步处理所开放的事件接口。它和闲置事件(IdlingEvenl)处理类似，但可以由用户自己触发。

要使用外部事件来实现非模态对话框可以通过下面儿步来实现：

- 继承并实现实现外部事件处理接口(IExternalEventHandler)；
  
- 用静态方法ExternalEvent.Create()方法来创建一个外部事件(ExternalEvent)；
  
- 当非模态对话框中某个时候需要调用Revi@方法时，调用ExternalEvent.Raise()；
  
- Revit@会在下个闲置时间(idling time cyele)到来时调用 IExternalEventHandler.Execute()方法的实现。
  

## 6.2 外部事件的创建

调用外部事件类ExternalEvent.Create()方法来创建一个外部事件。该事件所创建的一个实例会被返回给创建者，创建者使用该实例来向 Revit发信号触发该事件。Revit会不时地检查是否有外部事件发信号，如果有就会调用外部事件相应的Execute()函数。

## 6.3 外部事件的触发

调用外部事件类ExternalEvent.Raise()方法来触发一个外部事件。当它被调用后，Revit会等到下一个闲置时间(idling time)来调用注册好的IExternalEventHandler.Execute()方法。

## 6.4 外部事件接口

IExternalEventHandler接口这是外部事件需要实现的接口。实现这个接口的实例会被注册到 Revit中，当每次应的外部事件触发时，该接口的Execute()方法会被调用。IExternalEventHandiler 只有两个接口需要实现：Execute()方法和 GetName()方法。后者要返回事件的名字。下列代码片段展示了一个完整外部事件应用的例子。首先是实现IExternalEventHandler 接口，下面代码当事件被调用时显示一个任务对话框。

```c
public class ExternalEventExamp : IExternalEventHandler
{
    public void Execute(UIApplication app)
    {
        TaskDialog.Show("Revit","示例窗口");
    }
    public string GetName()
    {
        return  "外部事件接口示例代码";
    }
}
```

**代码示例：利用外部事件创建墙体**

打开VisualStudio2017 点击“文件”→“新建”→“项目”，选择WPF应用(.NET Framework)。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/9bc6db2a613cdf914ea5931da62c0c1a.png)

第一步：在名称空间处右键，选择属性。在输出类型，将“Windows 应用程序” 改为“类库”

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/2d3722c14478df8c5c2914ba8fd8f59c.png)

选择属性

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/5be2db5eb395166678334771bb47bdde.png)

将输出类型改为类库

第二步：将App.config 和 App.xaml删除。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/69841a44217b5b6d0f6f6711c11c93c2.png)

删除后资源管理器界面

第三步：创建主程序类（继承IExternalCommand接口），创建外部命令类（继承IEventHandler）。在名称空间右键，选择“添加”→“新建项”→”类“。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/d084e78fb9c90f3067dbdbf46fef20c5.png)

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/fdb844441a0cbf6a02cd2994336ecaa2.png)

第四步：添加”Revit API“和”Revit APIUI“引用，把复制本地改为”False“。完善主程序类代码，代码如下：

```c
namespace WpfApp2
{
    [Transaction(TransactionMode.Manual)]
    class CreatWallMainProgram : IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData, ref string message, ElementSet elements)
        {
            //创建窗口对象
            MainWindow mainWindow = new MainWindow();
            //显示主窗口
            mainWindow.Show();
            return Result.Succeeded;
        }
    }
```

第五步：完善创建墙体外部事件类代码，代码如下：

```c
namespace WpfApp2
{
    class CreatWallEvent : IExternalEventHandler
    {
        //墙体位置属性
        public XYZ  WallLocation { get; set; }
        //墙体高度属性
        public double WallHight { get; set; }
        //墙体长度属性
        public double WallLength { get; set; }
        public void Execute(UIApplication app)
        {
            //获取用户文档;
            Document document = app.ActiveUIDocument.Document;
            //声明事务
            Transaction transaction = new Transaction(document);
            //墙体放置点1
            XYZ point1 = WallLocation;
            //墙体高度点2 
            XYZ point2 = point1 + XYZ.BasisZ * WallHight / 304.8;
            //墙体长度点3
            XYZ point3 = point1 + XYZ.BasisX * WallLength / 304.8;
            //墙体点4
            XYZ point4 = point3 + XYZ.BasisZ * WallHight / 304.8;
            //创建墙体轮廓
            Line line1 = Line.CreateBound(point1, point2);
            Line line2 = Line.CreateBound(point2, point4);
            Line line3 = Line.CreateBound(point4, point3);
            Line line4 = Line.CreateBound(point3, point1);
            List<Curve> curves = new List<Curve>() { line1, line2, line3, line4 };
            //开启事务
            transaction.Start("创建墙体");
            //创建墙体
            Wall.Create(document, curves, true);
            //提交事务
            transaction.Commit();
        }

        public string GetName()
        {
            return "创建墙体";
        }
    }
}
```

第六步：制作Windows窗口，窗口xaml代码如下：

```c
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp2"
        mc:Ignorable="d"
        Title="MainWindow" Height="153.426" Width="192.628" >
    <Grid>
        <Button Content="生成墙体" HorizontalAlignment="Left" Margin="56,82,0,0" VerticalAlignment="Top" Width="74" Click="Button_Click"/>
        <TextBox x:Name="wallHight" HorizontalAlignment="Left" Height="23" Margin="47,18,0,0" TextWrapping="Wrap" VerticalAlignment="Top" Width="120"/>
        <TextBlock HorizontalAlignment="Left" Margin="11,22,0,0" TextWrapping="Wrap" Text="高度：" VerticalAlignment="Top"/>
        <TextBox x:Name="wallLength" HorizontalAlignment="Left" Height="23" Margin="47,46,0,0" TextWrapping="Wrap" VerticalAlignment="Top" Width="120"/>
        <TextBlock HorizontalAlignment="Left" Margin="10,51,0,0" TextWrapping="Wrap" Text="长度：" VerticalAlignment="Top"/>
    </Grid>
</Window>
```

窗体效果如下：

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/cc6bd7614825dee22c3b99ec91489f4c.png)

第七步：完成MainWindow.cs 代码，代码如下：

```c
namespace WpfApp2
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {
        //注册外部事件
        CreatWallEvent creatWallEvent;
        ExternalEvent externalEvent;
        public MainWindow()
        {
            InitializeComponent();
            //初始化外部事件
            creatWallEvent = new CreatWallEvent();
            externalEvent = ExternalEvent.Create(creatWallEvent);
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            //参数传递
            creatWallEvent.WallHight = Convert.ToDouble(wallHight.Text);
            creatWallEvent.WallLength = Convert.ToDouble(wallLength.Text);
            //执行外部命令
            externalEvent.Raise();
        }
    }
}
```

第八步：生成方案，执行插件![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/465c5b36e186032526dfb2d22cb769ac.png) 。

执行效果如下：

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/9db957550def93f5c44cf036b7e09542.png)

# 7 部件和视图

## 7.1 Revit部件

在Revit软件中，部件的创建可以通过选择要成为部件的图元，在修改选项卡中，点击创建部件实现。

 ![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/cc8b5db4f0caae647b34636d6153a993.png)

创建部件

部件创建完成后，可点击“创建视图”按钮，选择要创建的部件视图，完成部件视图创建。

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/a77fe3e290cc596c0e834b7b1837e777.png)

创建部件视图

## 7.2 部件

AssemblyInstance类的静态方法Creat()用于在项目中创建一个新的部件实例。Creat()方法比须在事务内创建，并且必须在行新创建的部件实例上执行任何操作之前提交事务。在事务完成中之后，部件类型才被指定。

创建部件实例的另一个方法是使用现有部要使用现有部件类型来创建部件实例，请使用静态方法Assemblylnstancc.Placelnstance()并指定要用到的部件类型的图元ID，以及用来放置部件的位置。

## 7.3 视图

使用 AsscmblyViewUtils类，可以创建部件实例的各种部件视图，包括正交三维部件视图、详图剖面部件视图，材料提取多类别明细表部件视图、零件清单多类别明细表部件视图以及图纸部件视图。在使用任何这些新创建的部件视图之前，文件必须重新生成。通过上面的示例可发现，创建两个新部件视图后，事务被提交，Commit()方法会自动重新生成文件。

**代码示例：将项目所有墙体创建部件，并修改部件类型名称，创建部件视图**

```c
namespace HelloWord
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 : IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData, ref string message, ElementSet elements)
        {
            //获得本项目文档
            Document document = commandData.Application.ActiveUIDocument.Document;
            //创建事务
            Transaction transaction = new Transaction(document);
            //创建图元过滤集，收集整个文档所有构件
            FilteredElementCollector collector = new FilteredElementCollector(document);
            //获取本项目所有墙体
            List<Element> walls = collector.OfClass(typeof(Wall)).ToList();
            //遍历所有墙体，创建部件
            foreach (Element wall in walls)
            {
                //开启事务
                transaction.Start("创建部件");
                //创建部件
                AssemblyInstance wallAssembly = AssemblyInstance.Create(document, new List<ElementId>() { wall.Id }, wall.Category.Id);
                //提交事务(必须先提交事务，否则找不到部件进行下一步名称修改)
                transaction.Commit();
                //开启事务
                transaction.Start("修改名称，创建视图");
                //修改部件名称为墙体长度*墙体高度
                document.GetElement(wallAssembly.GetTypeId()).Name = wall.LookupParameter("长度").AsValueString()+"*"+ wall.LookupParameter("无连接高度").AsValueString();
                //创建墙体三视图
                ViewSection frontView = AssemblyViewUtils.CreateDetailSection(document, wallAssembly.Id, AssemblyDetailViewOrientation.ElevationFront);
                ViewSection rightView = AssemblyViewUtils.CreateDetailSection(document, wallAssembly.Id, AssemblyDetailViewOrientation.ElevationRight);
                ViewSection topView = AssemblyViewUtils.CreateDetailSection(document, wallAssembly.Id, AssemblyDetailViewOrientation.ElevationTop);
                //提交事务
                transaction.Commit();
            }
            //提交事务
            return Result.Succeeded;
        }
    }
}
```

创建前：

![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/d0c1563601c658bbe7c7529d63dda957.png)

创建后：![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/8e32b9328a89585d9b6a51d10fa73fd3.png)

事务名称显示在Undo菜单中：
![image](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/Revit%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91-%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B/2fda4e90ffc0a2a0b04126159b5c0513.png)