---
title: Revit二次开发-使用DataStorage进行数据存储
date: 2025-11-03 11:26:43
tags: Revit二次开发
---
# 1. 简要介绍
通常情况下，在Revit中存储数据一般会使用项目参数等可见的参数进行数据存储与使用，这些参数是可以被用户查和修改的，但在某些情况一些程序敏感数据不希望用户查看或修改时，可以使用Revit的DataStorage类进行数据的创建，写入和读取。

DataStorage的数据存储主要分为字段创建、数据写入、数据读取。
 - 字段创建：可出创建三种字段类型，分别为单字段、列表字段和字典字段。不同类型的字段对应的不同的字段添加方法。创建字典字段时需要定义两个字段字段的值类型。单字段和列表字段则只需要定义一个。字段的GUID不可重复。字段的单位类型需要和存入的数据相匹配。如存入数字，需要设置字段单位类型```UnitType.UT_Length```或其他。
 - 数据写入：数据写入时需要匹配写入数据的单位。如本案例中写入的是1200.2单位为mm。无单位时候需要设置```DisplayUnitType.DUT_UNDEFINED```
 - 数据读取：数据读取同理，需要设置读取的单位。如本案例读取的单位为m，读取的值则为1.2002。无单位时则需设置```DisplayUnitType.DUT_UNDEFINED```
# 2. 实现代码
```csharp
using Autodesk.Revit.Attributes;
using Autodesk.Revit.DB;
using Autodesk.Revit.DB.ExtensibleStorage;
using Autodesk.Revit.UI;
using System;
using System.Collections.Generic;
using System.Linq;

namespace dataStorage
{
    [Transaction(TransactionMode.Manual)]
    public class Class1 : IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData, ref string message, ElementSet elements)
        {
            Document doc = commandData.Application.ActiveUIDocument.Document;
            Transaction transaction = new Transaction(doc);
            //创建文档数据库(可替换成构件)
            List<Element> eles = new FilteredElementCollector(doc).OfClass(typeof(DataStorage)).Where(x => x.Name == "文档数据库").ToList();
            Element dataStorage;
            if (eles.Count != 0)
            {
                dataStorage = eles.First();
            }
            else
            {
                transaction.Start("创建文档数据库");
                dataStorage = DataStorage.Create(doc);
                dataStorage.Name = "文档数据库";
                transaction.Commit();
            }


            //创建字段
            bool isSimpleBuild = false;
            bool isArrayBuild = false;
            bool isMapBuild = false;
            transaction.Start("创建文档参数");
            //单字段
            isSimpleBuild = BuildField(dataStorage, new Guid("34B6239D-42FF-7076-D211-BEC5E64CD172"), "文档单属性", AccessLevel.Public, AccessLevel.Public, false, typeof(double), UnitType.UT_Length);
            //列表字段
            isArrayBuild = BuildField(dataStorage, new Guid("BBF63B09-907B-E7C6-A598-8EC9B4D28A88"), "文档列表属性", AccessLevel.Public, AccessLevel.Public, true, typeof(double), UnitType.UT_Length);
            //字段字段
            isMapBuild = BuildField(dataStorage, new Guid("9F2398BC-B703-8362-6137-27435FE49AB4"), "文档字典属性", AccessLevel.Public, AccessLevel.Public, typeof(string), typeof(double), UnitType.UT_Length);
            transaction.Commit();


            //填写数据
            transaction.Start("填写文档参数");
            bool isSimpleSet = false;
            bool isArraySet = false;
            bool isMapSet = false;
            //单字段
            isSimpleSet = SetField(dataStorage, "文档单属性", 1200.2, DisplayUnitType.DUT_MILLIMETERS);
            //列表字段
            IList<double> listString = new List<double>() { 1200.2, 1500.5 };
            isArraySet = SetField(dataStorage, "文档列表属性", listString, DisplayUnitType.DUT_MILLIMETERS);
            //字典字段 
            IDictionary<string, double> myDictionary = new Dictionary<string, double>();
            myDictionary.Add("1", 1200.2);
            isMapSet = SetField(dataStorage, "文档字典属性", myDictionary, DisplayUnitType.DUT_MILLIMETERS);
            transaction.Commit();


            //读取数据 
            double simpleValue = GetField<double>(dataStorage, "文档单属性", DisplayUnitType.DUT_METERS);
            IList<double> arrayValue = GetField<IList<double>>(dataStorage, "文档列表属性", DisplayUnitType.DUT_METERS);
            IDictionary<string, double> mapValue = GetField<IDictionary<string, double>>(dataStorage, "文档字典属性", DisplayUnitType.DUT_METERS);


            //输出结果 
            TaskDialog.Show("Revit", $"单属性创建：{isSimpleBuild}\n列表属性创建：{isArrayBuild}\n字典属性创建：{isMapBuild}\n" +
            $"单属性填写：{isSimpleSet}\n列表属性填写：{isArraySet}\n字典属性填写：{isMapSet}\n"
            + $"单属性值：{simpleValue}\n列表属性值：{arrayValue.First()}\n字典属性值：{mapValue.First()}");
            return Result.Succeeded;
        }


        /// <summary>
        /// 创建字段
        /// </summary>
        /// <param name="dataStorage">存储元素，可以是项目文档，也可以是构件</param>
        /// <param name="fieldGuid">字段GUID</param>
        /// <param name="fieldName">字段名称</param>
        /// <param name="readAccessLevel">字段读取权限</param>
        /// <param name="writeAccessLevel">字段写入权限</param>
        /// <param name="isArrayType">字段是否为列表</param>
        /// <param name="keyType">字典关键字类型</param>
        /// <param name="fieldType">字段类型</param>
        /// <param name="unitType">字段单位类型</param>
        /// <returns>如果字段创建成功则返回True，否则返回false</returns>
        bool BuildField(Element dataStorage, Guid fieldGuid, string fieldName, AccessLevel readAccessLevel, AccessLevel writeAccessLevel, bool isArrayType, Type keyType, Type fieldType, UnitType unitType)
        {
            //文档属性是否创建成功
            bool isBuildSucceed = false;
            //获取指定属性
            Schema specifiedSchema = Schema.Lookup(fieldGuid);
            if (specifiedSchema == null)
            {
                bool hasSameName = false;
                foreach (Schema schema in Schema.ListSchemas())
                {
                    if (schema.SchemaName == fieldName)
                    {
                        hasSameName = true;
                        break;
                    }
                }
                if (!hasSameName)
                {
                    SchemaBuilder schemaBuilder = new SchemaBuilder(fieldGuid);
                    schemaBuilder.SetSchemaName(fieldName);
                    schemaBuilder.SetReadAccessLevel(readAccessLevel);
                    schemaBuilder.SetWriteAccessLevel(writeAccessLevel);
                    FieldBuilder fieldBuilder;
                    if (keyType == null)
                    {
                        if (isArrayType)
                        {
                            fieldBuilder = schemaBuilder.AddArrayField(fieldName, fieldType);
                        }
                        else
                        {
                            fieldBuilder = schemaBuilder.AddSimpleField(fieldName, fieldType);
                        }
                    }
                    else
                    {
                        fieldBuilder = schemaBuilder.AddMapField(fieldName, keyType, fieldType);
                    }
                    if (unitType != UnitType.UT_Undefined)
                    {
                        fieldBuilder.SetUnitType(unitType);
                    }
                    schemaBuilder.Finish();
                    isBuildSucceed =true;
                }
                else
                {
                    throw new ArgumentException($"“{fieldName}”参数名称已存在无法创建，请修改参数名称后继续", "fieldGuid");
                }
            }
            else
            {
                if (specifiedSchema.SchemaName == fieldName)
                {
                    Entity entity = dataStorage.GetEntity(specifiedSchema);
                    if (entity.Schema == null)
                    {
                        entity = new Entity(specifiedSchema);
                        dataStorage.SetEntity(entity);
                        isBuildSucceed = true;
                    }
                    else
                    {
                        if (entity.Schema.SchemaName == specifiedSchema.SchemaName)
                        {
                            dataStorage.SetEntity(entity);
                            isBuildSucceed = true;
                        }
                        else
                        {
                            throw new ArgumentException("参数创建失败，请试试更换参数名称或GUID后继续");
                        }
                    }
                }
                else
                {
                    throw new ArgumentException($"GUID“{fieldGuid.ToString()}”对应的参数名称为{specifiedSchema.SchemaName}，请修改参数名称后继续", fieldName);
                }
            }
            return isBuildSucceed;
        }
        /// <summary>
        /// 创建单字段或列表字段
        /// </summary>
        /// <param name="dataStorage">存储元素，可以是项目文档，也可以是构件</param>
        /// <param name="fieldGuid">字段GUID</param>
        /// <param name="fieldName">字段名称</param>
        /// <param name="readAccessLevel">字段读取权限</param>
        /// <param name="writeAccessLevel">字段写入权限</param>
        /// <param name="isArrayType">字段是否为列表字段</param>
        /// <param name="fieldType">字段类型</param>
        /// <param name="unitType">字段单位类型</param>
        /// <returns>如果字段创建成功则返回True，否则返回false</returns>
        /// <inheritdoc cref="ExtensibleStorage" path="remarks|example" />
        bool BuildField(Element dataStorage, Guid fieldGuid, string fieldName, AccessLevel readAccessLevel, AccessLevel writeAccessLevel, bool isArrayType, Type fieldType, UnitType unitType) => BuildField(dataStorage, fieldGuid, fieldName, readAccessLevel, writeAccessLevel, isArrayType, null, fieldType, unitType);
        /// <summary>
        /// 创建字典字段
        /// </summary>
        /// <param name="dataStorage">存储元素，可以是项目文档，也可以是构件</param>
        /// <param name="fieldGuid">字段GUID</param>
        /// <param name="fieldName">字段名称</param>
        /// <param name="readAccessLevel">字段读取权限</param>
        /// <param name="writeAccessLevel">字段写入权限</param>
        /// <param name="keyType">字典关键字类型</param>
        /// <param name="fieldType">字典数值类型</param>
        /// <param name="unitType">字典数值单位</param>
        /// <returns>如果字段创建成功则返回True，否则返回false</returns>
        /// <inheritdoc cref="ExtensibleStorage" path="remarks|example" />
        bool BuildField(Element dataStorage, Guid fieldGuid, string fieldName, AccessLevel readAccessLevel, AccessLevel writeAccessLevel, Type keyType, Type fieldType, UnitType unitType) => BuildField(dataStorage, fieldGuid, fieldName, readAccessLevel, writeAccessLevel, false, keyType, fieldType, unitType);
        /// <summary>
        /// 在指定字段存储数据
        /// </summary>
        /// <typeparam name="T">存储数据类型</typeparam>
        /// <param name="dataStorage">存储元素，可以是项目文档，也可以是构件</param>
        /// <param name="fieldName">字段名称</param>
        /// <param name="fieldValue">存储数据值</param>
        /// <param name="displayUnitType">存储数据单位</param>
        /// <returns>如果数据储存成功则返回True，否则返回False</returns>
        /// <inheritdoc cref="ExtensibleStorage" path="remarks|example" />
        bool SetField<T>(Element dataStorage, string fieldName, T fieldValue, DisplayUnitType displayUnitType)
        {
            bool isSetSucceed = false;
            //获取指定属性
            Schema specifiedSchema = null;
            foreach (Schema schema in Schema.ListSchemas())
            {
                if (schema.SchemaName == fieldName)
                {
                    specifiedSchema = schema;
                    break;
                }
            }
            if (specifiedSchema != null)
            {
                Field field = specifiedSchema.GetField(fieldName);
                if (field != null)
                {
                    Entity entity = dataStorage.GetEntity(specifiedSchema);
                    if (entity.Schema == null || entity.Schema.GUID != specifiedSchema.GUID)
                    {
                        entity = new Entity(specifiedSchema);
                    }
                    if (displayUnitType == DisplayUnitType.DUT_UNDEFINED)
                    {
                        entity.Set(field, fieldValue);
                    }
                    else
                    {
                        entity.Set(field, fieldValue, displayUnitType);
                    }
                    dataStorage.SetEntity(entity);
                    isSetSucceed = true;
                }
            }
            return isSetSucceed;
        }
        /// <summary>
        /// 从指定字段读取数据
        /// </summary>
        /// <typeparam name="T">读取的数据类型</typeparam>
        /// <param name="dataStorage">存储元素，可以是项目文档，也可以是构件</param>
        /// <param name="fieldName">字段名称</param>
        /// <param name="displayUnitType">读取的数据单位</param>
        /// <returns>如果数据读取成功则返回True，否则返回False</returns>
        /// <inheritdoc cref="ExtensibleStorage" path="remarks|example" />
        T GetField<T>(Element dataStorage, string fieldName, DisplayUnitType displayUnitType)
        {
            T value = default(T);
            //获取指定属性
            Schema specifiedSchema = null;
            foreach (Schema schema in Schema.ListSchemas())
            {
                if (schema.SchemaName == fieldName)
                {
                    specifiedSchema = schema;
                    break;
                }
            }
            if (specifiedSchema != null)
            {
                Field field = specifiedSchema.GetField(fieldName);
                if (field != null)
                {
                    Entity entity = dataStorage.GetEntity(specifiedSchema);
                    if (entity.Schema != null && entity.Schema.GUID == specifiedSchema.GUID)
                    {
                        if (displayUnitType == DisplayUnitType.DUT_UNDEFINED)
                        {
                            value = entity.Get<T>(field);
                        }
                        else
                        {
                            value = entity.Get<T>(field, displayUnitType);
                        }
                    }
                    else
                    {
                        value = default(T);
                    }
                }
            }
            return value;
        }
    }
}

```
# 3. 实现效果
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/6c19648c3478b1023bc5c434f99d7ad9.png)
# 4. 数据查看
可使用RevitLookup插件查看数据存储情况。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/fcf3fe76786b29f2f9fd0bd3b42b6295.png)
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/72fc6f8bc393f4121af128db9d7ee981.png)


