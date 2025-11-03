---
title: .Net平台开源可编辑Excel库ClosedXML，可代替Aspose.Cells
date: 2025-11-03 11:37:34
tags: c#
---
# 1. 库的引用
右键项目，点击**管理NuGet程序包**在浏览选项卡中输入**ClosedXML**，点击右侧箭头进行安装。
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/7b997f14d0d7c245e2ff9d791b315520.png#pic_center)
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/f3063b52c88e9a9d8e024aba538db694.png#pic_center)
# 2. API的使用
## 2.1 创建工作簿
```c
//新建工作簿
XLWorkbook workbook = new XLWorkbook();
//打开现有工作簿
XLWorkbook workbook2 = new XLWorkbook("C:\\Users\\Administrator\\Desktop\\ClosedXML_API_Test\\sampleWorkbook.xlsx");
```
## 2.2 创建工作表
```c
//创建工作表
IXLWorksheet worksheet = workbook.AddWorksheet("Sample Sheet");
```
## 2.3 字体设置
```c
IXLCell a1 = worksheet.Cell("A1");
a1.Value = "字体设置";
//1、更换字体
a1.Style.Font.FontName="宋体";
//2、调整字号
a1.Style.Font.FontSize=20;
//3、加粗
a1.Style.Font.Bold = true;
//4、斜体
a1.Style.Font.Italic = true;
//5、下划线
a1.Style.Font.Underline = XLFontUnderlineValues.Single;
//6、字体颜色
a1.Style.Font.FontColor = XLColor.Blue;
```
## 2.4 单元格设置
```c
//单元格设置
IXLCell a2 = worksheet.Cell("A2");
a2.Value = "单元格设置长长长长长长长";
//1、边框
a2.Style.Border.TopBorder = XLBorderStyleValues.Thin;
a2.Style.Border.BottomBorder = XLBorderStyleValues.Thin;
a2.Style.Border.LeftBorder = XLBorderStyleValues.Thin;
a2.Style.Border.RightBorder = XLBorderStyleValues.Thin;
//2、填充颜色
a2.Style.Fill.BackgroundColor = XLColor.Red;
//3、竖直对齐方式
a2.Style.Alignment.Vertical = XLAlignmentVerticalValues.Bottom;
//4、水平对其方式
a2.Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Right;
//5、自动换行
a2.Style.Alignment.WrapText = true;
//6、单元格格式
IXLCell a3 = worksheet.Cell("A3");
a3.Value = 0.003125;
a3.Style.NumberFormat.NumberFormatId = (int)XLPredefinedFormat.Number.PercentPrecision2;
```
## 2.5 行高
```c
//行高
IXLCell a4 = worksheet.Cell("A4");
a4.Value = "行高90";
worksheet.Row(4).Height = 90;
```
## 2.6 列宽
```c
//列宽
IXLCell b1 = worksheet.Cell("B1");
b1.Value = "列宽60";
worksheet.Column(2).Width = 60;
```
## 2.7 合并单元格
```c
//合并单元格
IXLCell c1 = worksheet.Cell("C1");
IXLCell d1 = worksheet.Cell("D1");
c1.Value = "合并单元格";
worksheet.Range(c1, d1).Merge();
```
## 2.8 插入公式
```c
//插入公式
worksheet.Cell("C2").FormulaA1 = "MID(C1, 2, 1)";
```
## 2.9 查找
```c
//查找
string  id = worksheet.Search("列宽").First().Address.ToString(XLReferenceStyle.A1);
worksheet.Cell("B4").Value = $"查找列宽的位置为：{id}";
```
## 2.10 富文本
```c
//富文本
IXLCell c4 = worksheet.Cell("C4");
IXLRichText c4RichText = c4.CreateRichText();
c4RichText.AddText("富").SetBold(true).SetFontSize(30);
c4RichText.AddText("文本").SetFontColor(XLColor.Red);
```
## 2.11 保存工作簿
```c
//保存工作簿
//1、保存
workbook.Save();
//2、另存为
workbook.SaveAs("C:\\Users\\Administrator\\Desktop\\ClosedXML_API_Test\\HelloWorld.xlsx");
```
# 3. 完整代码
```c
using ClosedXML.Excel;
using System.Linq;

namespace ClosedXML_API_Test
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //创建工作簿
            //新建工作簿
            XLWorkbook workbook = new XLWorkbook();
            //打开现有工作簿
            //XLWorkbook workbook2 = new XLWorkbook("C:\\Users\\Administrator\\Desktop\\ClosedXML_API_Test\\sampleWorkbook.xlsx");
            //创建工作表
            IXLWorksheet worksheet = workbook.AddWorksheet("Sample Sheet");

            IXLCell a1 = worksheet.Cell("A1");
            a1.Value = "字体设置";
            //1、更换字体
            a1.Style.Font.FontName = "宋体";
            //2、调整字号
            a1.Style.Font.FontSize = 20;
            //3、加粗
            a1.Style.Font.Bold = true;
            //4、斜体
            a1.Style.Font.Italic = true;
            //5、下划线
            a1.Style.Font.Underline = XLFontUnderlineValues.Single;
            //6、字体颜色
            a1.Style.Font.FontColor = XLColor.Blue;

            //单元格设置
            IXLCell a2 = worksheet.Cell("A2");
            a2.Value = "单元格设置长长长长长长长";
            //1、边框
            a2.Style.Border.TopBorder = XLBorderStyleValues.Thin;
            a2.Style.Border.BottomBorder = XLBorderStyleValues.Thin;
            a2.Style.Border.LeftBorder = XLBorderStyleValues.Thin;
            a2.Style.Border.RightBorder = XLBorderStyleValues.Thin;
            //2、填充颜色
            a2.Style.Fill.BackgroundColor = XLColor.Red;
            //3、竖直对齐方式
            a2.Style.Alignment.Vertical = XLAlignmentVerticalValues.Bottom;
            //4、水平对其方式
            a2.Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Right;
            //5、自动换行
            a2.Style.Alignment.WrapText = true;
            //6、单元格格式
            IXLCell a3 = worksheet.Cell("A3");
            a3.Value = 0.003125;
            a3.Style.NumberFormat.NumberFormatId = (int)XLPredefinedFormat.Number.PercentPrecision2;

            //行高
            IXLCell a4 = worksheet.Cell("A4");
            a4.Value = "行高90";
            worksheet.Row(4).Height = 90;

            //列宽
            IXLCell b1 = worksheet.Cell("B1");
            b1.Value = "列宽60";
            worksheet.Column(2).Width = 60;

            //合并单元格
            IXLCell c1 = worksheet.Cell("C1");
            IXLCell d1 = worksheet.Cell("D1");
            c1.Value = "合并单元格";
            worksheet.Range(c1, d1).Merge();

            //插入公式
            worksheet.Cell("C2").FormulaA1 = "MID(C1, 2, 1)";

            //查找
            string id = worksheet.Search("列宽").First().Address.ToString(XLReferenceStyle.A1);
            worksheet.Cell("B4").Value = $"查找列宽的位置为：{id}";

            //富文本
            IXLCell c4 = worksheet.Cell("C4");
            IXLRichText c4RichText = c4.CreateRichText();
            c4RichText.AddText("富").SetBold(true).SetFontSize(30);
            c4RichText.AddText("文本").SetFontColor(XLColor.Red);

            //保存工作簿
            ////1、保存
            //workbook.Save();
            //2、另存为
            workbook.SaveAs("C:\\Users\\Administrator\\Desktop\\ClosedXML_API_Test\\HelloWorld.xlsx");
        }
    }
}

```
# 4. 效果展示
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/b1d46ae7edba176ca0b7746a84f516d3.png#pic_center)
# 5. 解决无法读取xls格式文件问题
## 5.1 使用Aspose.Cells免费版库进行格式转换
在**NuGet包管理器**中搜索并安装Aspose.Cells库
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/240148eae2422bae897909dad0ae8ccf.png)
安装完成后，执行以下代码进行格式转换：
```c
Workbook workbook = new Workbook("C:\\Users\\Administrator\\Desktop\\ClosedXML_API_Test\\convertFormat.xls");
workbook.Save("C:\\Users\\Administrator\\Desktop\\ClosedXML_API_Test\\convertFormatAspose.xlsx",SaveFormat.Xlsx);
workbook.Dispose();
```
转换后效果如下：
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/3607ebc5888e227072f42269c876d938.png)
**存在问题**：免费版会多一个水印，不过不影响使用
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/e0e5088d4294a696fbaee97d792c5495.png)
## 5.2 使用NPOI库进行内容复制
在**NuGet包管理器**中搜索并安装NPOI库
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/f8edc4ae991fc7ae1566500c50183b20.png)
安装完成后，执行以下代码进行内容复制：
```c
// 读取xls格式文件
FileStream fs = new FileStream("C:\\Users\\Administrator\\Desktop\\ClosedXML_API_Test\\convertFormat.xls", FileMode.Open, FileAccess.Read);
HSSFWorkbook workbook = new HSSFWorkbook(fs);

// 创建xlsx格式文件
XSSFWorkbook newWorkbook = new XSSFWorkbook();

// 遍历所有sheet
for (int i = 0; i < workbook.NumberOfSheets; i++)
{
    ISheet sheet = workbook.GetSheetAt(i);
    ISheet newSheet = newWorkbook.CreateSheet(sheet.SheetName);

    //复制合并单元格
    for (int k = 0; k < sheet.NumMergedRegions; k++)
    {
        CellRangeAddress cellRangeAddress = sheet.GetMergedRegion(k);
        if (sheet.IsMergedRegion(cellRangeAddress))
        {
            newSheet.AddMergedRegion(cellRangeAddress);
        }
    }


    // 遍历所有row
    for (int j = 0; j <= sheet.LastRowNum; j++)
    {
        IRow row = sheet.GetRow(j);
        IRow newRow = newSheet.CreateRow(j);
        //复制行高
        newRow.Height = row.Height;

        // 遍历所有cell
        if (row != null)
        {
            for (int k = row.FirstCellNum; k < row.LastCellNum; k++)
            {
                ICell cell = row.GetCell(k);
                ICell newCell = newRow.CreateCell(k);

                // 复制cell的值和类型
                if (cell != null)
                {
                    //设置列宽
                    newCell.Sheet.SetColumnWidth(cell.ColumnIndex, cell.Sheet.GetColumnWidth(cell.ColumnIndex));

                    //逐个复制样式
                    ICellStyle style = newWorkbook.CreateCellStyle();
                    style.Alignment = cell.CellStyle.Alignment;
                    style.BorderBottom = cell.CellStyle.BorderBottom;
                    style.BorderDiagonal = cell.CellStyle.BorderDiagonal;
                    style.BorderDiagonalColor = cell.CellStyle.BorderDiagonalColor;
                    style.BorderDiagonalLineStyle = cell.CellStyle.BorderDiagonalLineStyle;
                    style.BorderLeft = cell.CellStyle.BorderLeft;
                    style.BorderRight = cell.CellStyle.BorderRight;
                    style.BorderTop = cell.CellStyle.BorderTop;
                    style.BottomBorderColor = cell.CellStyle.BottomBorderColor;
                    style.DataFormat = cell.CellStyle.DataFormat;
                    style.FillBackgroundColor = cell.CellStyle.FillBackgroundColor;
                    style.FillForegroundColor = cell.CellStyle.FillForegroundColor;
                    style.FillPattern = cell.CellStyle.FillPattern;
                    style.Indention = cell.CellStyle.Indention;
                    style.IsHidden = cell.CellStyle.IsHidden;
                    style.IsLocked = cell.CellStyle.IsLocked;
                    style.LeftBorderColor = cell.CellStyle.LeftBorderColor;
                    style.RightBorderColor = cell.CellStyle.RightBorderColor;
                    style.Rotation = cell.CellStyle.Rotation;
                    style.ShrinkToFit = cell.CellStyle.ShrinkToFit;
                    style.TopBorderColor = cell.CellStyle.TopBorderColor;
                    style.VerticalAlignment = cell.CellStyle.VerticalAlignment;
                    style.WrapText = cell.CellStyle.WrapText;

                    //复制字体
                    var cellFont = cell.CellStyle.GetFont(workbook);
                    IFont font = newWorkbook.CreateFont();
                    font.Color = cellFont.Color;
                    font.FontHeight = cellFont.FontHeight;
                    font.FontHeightInPoints = cellFont.FontHeightInPoints;
                    font.FontName = cellFont.FontName;
                    font.IsBold = cellFont.IsBold;
                    font.IsItalic = cellFont.IsItalic;
                    font.IsStrikeout = cellFont.IsStrikeout;
                    font.TypeOffset = cellFont.TypeOffset;
                    font.Underline = cellFont.Underline;
                    style.SetFont(font);

                    newCell.CellStyle = style;

                    newCell.SetCellType(cell.CellType);
                    switch (cell.CellType)
                    {
                        case CellType.Blank:
                            newCell.SetCellValue(cell.StringCellValue);
                            break;
                        case CellType.Boolean:
                            newCell.SetCellValue(cell.BooleanCellValue);
                            break;
                        case CellType.Error:
                            newCell.SetCellValue(cell.ErrorCellValue);
                            break;
                        case CellType.Formula:
                            newCell.SetCellFormula(cell.CellFormula);
                            break;
                        case CellType.Numeric:
                            newCell.SetCellValue(cell.NumericCellValue);
                            break;
                        case CellType.String:
                            newCell.SetCellValue(cell.StringCellValue);
                            break;
                        case CellType.Unknown:
                            newCell.SetCellValue(cell.StringCellValue);
                            break;
                    }
                }
            }
        }
    }
}

// 写入xlsx格式文件
FileStream newFs = new FileStream("C:\\Users\\Administrator\\Desktop\\ClosedXML_API_Test\\convertFormatNPOI.xlsx", FileMode.Create, FileAccess.Write);
newWorkbook.Write(newFs);

// 关闭文件流
newFs.Close();
fs.Close();
```
复制效果如下：
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/014b51a5b9a51614460f68484158be87.png)
**存在问题**：
1、对于以下这种提示损坏的xls文件，NPOI和Sylvan.Data.Excel均无法打开，但Aspose.Cells可打开。
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/3ce716175134a43ae93dfbf8f721587c.png)
2、NPOI将xls转换为xlsx的方式并非进行格式转换，而是进行内容1：1复制，但**富文本无法进行复制**！
## 5.3 使用Sylvan.Data.Excel库进行格式转换
在**NuGet包管理器**中搜索并安装Sylvan.Data.Excel库
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/48d49ce94ed624574892127133acb00a.png)
执行以下代码进行格式转换：
```c
ExcelDataReader edr = ExcelDataReader.Create("C:\\Users\\Administrator\\Desktop\\ClosedXML_API_Test\\convertFormat.xls");
// 创建一个ExcelDataWriter对象，写入xlsx文件
ExcelDataWriter edw = ExcelDataWriter.Create("C:\\Users\\Administrator\\Desktop\\ClosedXML_API_Test\\convertFormatSylvan.xlsx");
// 将ExcelDataReader对象中的数据写入到ExcelDataWriter对象中
edw.Write(edr);
// 关闭ExcelDataReader对象
edr.Close();
// 关闭ExcelDataWriter对象
edw.Dispose();
```
转换效果如下：
![在这里插入图片描述](https://raw.githubusercontent.com/MilletQ/MilletQ.github.io/refs/heads/main/images/.Net%E5%B9%B3%E5%8F%B0%E5%BC%80%E6%BA%90%E5%8F%AF%E7%BC%96%E8%BE%91Excel%E5%BA%93ClosedXML%EF%BC%8C%E5%8F%AF%E4%BB%A3%E6%9B%BFAspose.Cells/12a1e537ff1f282f0e18fed734b90b01.png)
**存在问题**：转换后无法保留单元格格式，仅可用于内容查询。



