function setSizeRange(n) {
    var r = 19, u = 60, t = 100, f = r, i = 300, e = i, o = t, s = i, h = t, c = u, l = i, a = t;
    switch (n) {
    }
    return {
        Thickness: 2,
        OveralWidth: {Min: 25, Max: 450},
        OveralHeight: {Min: r, Max: 300},
        OveralDepth: {Min: 25, Max: 100},
        Section: {
            Width: {Min: 20, Max: t, WarnMax: 60, AlgMin: 20, AlgMax: 60},
            Height: {Min: f, Max: null},
            Count: {Min: 1, Max: 15}
        },
        Compartment: {Height: {Min: 15, Max: i, AlgMin: 20, AlgMax: 50}, Count: {Min: 1, Max: 10}},
        Drawer: {Height: {Min: 20, Max: 40}, Width: {Min: 25, Max: 110}, Depth: {Min: 36, Max: 0}},
        SingleDoor: {Height: {Min: 25, Max: 275}, Width: {Min: 25, Max: 60}},
        DoubleDoor: {Height: {Min: 25, Max: 275}, Width: {Min: 50, Max: 130}},
        Flap: {Height: {Min: 25, Max: 50}, Width: {Min: 25, Max: 90}},
        Interior: {
            ClotheHanger: {Height: {Min: 25, Max: e}, Width: {Min: 25, Max: o}},
            Regal: {Height: {Min: 25, Max: s}, Width: {Min: 25, Max: h}},
            InsideDrawer: {Height: {Min: 20, Max: 40}, Width: {Min: 25, Max: 110}, Depth: {Min: 25, Max: c}},
            VerticalDivider: {Height: {Min: 20, Max: l}, Width: {Min: 20, Max: a}}
        }
    }
}

function Result(n, t, i, r) {
    return {Code: n, Value: t, Message: i, ExtraData: r}
}

function createProductObject() {
    return {
        ConfiguratorSavedId: InitObject.ConfiguratorSavedId,
        Board16MilMeter: 0,
        Board3MilMeter: 0,
        HingCount: 0,
        MagnetCount: 0,
        SteelpipeMeter: 0,
        BastCount: 0,
        RailCount: 0,
        DrawerDepth: 0,
        ClothesHangerCount: 0,
        FeetCount: 0,
        HandleCount: 0,
        HandleItemId: 0,
        DefaultMaterialItemId: 0,
        FlapJackCount: 0,
        DoorCount: 0,
        DrawerCount: 0,
        NeedInstall: 0,
        OveralWidth: 0,
        OveralHeight: 0,
        OveralDepth: 0,
        OveralLength: -1,
        TolerableWeight: 0,
        Weight: 0,
        BackPanelThickness: 0,
        Capacity: 0,
        CategoryId: 0,
        BedJack: -1,
        LargestCompartment: "",
        SmallestCompartment: "",
        AdditionalCost: 0
    }
}

function changeDropDownOptionsValue(n, t, i, r) {
    for (var f = "", e = "", u = t; u <= i; u++) e = r && u == r ? "selected" : "", f += '<option value="' + u + '" ' + e + ">" + u + "<\/option>";
    $("#" + n).html(f)
}

function formatNumber(n) {
    return parseFloat(parseFloat(n).toFixed(2))
}

function ajaxCall(n, t, i) {
    $.ajax({
        url: n,
        type: "POST",
        method: "POST",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: t,
        beforeSend: function () {
            $("#loader").show()
        },
        complete: function () {
            $("#loader").hide()
        },
        success: function (t) {
            if (i(t), n.toLowerCase().indexOf("getitem")) for (var r = 0; r < t.length; r++) priceList.push({
                ItemId: t[r].Id,
                Price: t[r].Price,
                PriceType: t[r].PriceType
            });
            n.toLowerCase().indexOf("getsingleitem") && priceList.push({
                ItemId: t.Id,
                Price: t.Price,
                PriceType: t.PriceType
            })
        },
        error: function (n, t, i) {
            alert(i)
        }
    })
}

function ajaxCallSync(n, t, i) {
    var r;
    return $.ajax({
        url: n,
        type: "POST",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: t,
        "async": !1,
        success: function (t) {
            if (n.toLowerCase().indexOf("getitem") > -1) for (var u = 0; u < t.length; u++) priceList.push({
                ItemId: t[u].Id,
                Price: t[u].Price,
                PriceType: t[u].PriceType
            });
            n.toLowerCase().indexOf("getsingleitem") > -1 && priceList.push({
                ItemId: t.Id,
                Price: t.Price,
                PriceType: t.PriceType
            });
            i && (r = i(t))
        },
        error: function (n, t, i) {
            alert(i)
        }
    }), r
}

function copy(n) {
    var t = document.getElementById(n);
    t.select();
    t.setSelectionRange(0, 99999);
    document.execCommand("copy")
}

function getCurrentUrl(n) {
    var t = window.location.href.toLowerCase(), i = t.substr(0, t.lastIndexOf("design") + 6) + "/";
    return n != undefined && (i += n + "/"), i
}

function arrayIntersection(n, t) {
    return t.filter(function (t) {
        return n.indexOf(t) > -1
    })
}

function infoToolTip(n, t) {
    var u = n.Handle.HandleGroup != -1 && n.Handle.HandleSubGroup != -1 ? "دارد" : "ندارد",
        f = n.Lock != -1 && n.Lock != 0 ? "دارد" : "ندارد", r, i;
    for (t = t && t.length > 0 ? t : "همان جنس بدنه", r = '<table class="table table-striped table-condensed mb10 mt10">', i = 0; i < n.OptionTrace.length; i++) switch (+n.OptionTrace[i].ParentGroup) {
        case 1:
            r += '<tr><td class="success"> آیتم <\/td><td>' + $(".furniture-option-item[group=" + n.OptionTrace[i].ParentGroup + "][subgroup=" + n.OptionTrace[i].SelectedItemId + "] span").text() + "<\/td><\/tr>";
            break;
        case 2:
            r += '<tr><td class="success"> جهت <\/td><td>' + $(".furniture-option-item[group=" + n.OptionTrace[i].ParentGroup + "][subgroup=" + n.OptionTrace[i].SelectedItemId + "] span").text() + "<\/td><\/tr>";
            break;
        case 3:
        case 6:
        case 7:
            r += '<tr><td class="success"> محل قرارگیری <\/td><td>' + $(".furniture-option-item[group=" + n.OptionTrace[i].ParentGroup + "][subgroup=" + n.OptionTrace[i].SelectedItemId + "] span").text() + "<\/td><\/tr>";
            break;
        case 5:
            r += '<tr><td class="success"> جهت <\/td><td>' + $(".furniture-option-item[group=" + n.OptionTrace[i].ParentGroup + "][subgroup=" + n.OptionTrace[i].SelectedItemId + "] span").text() + "<\/td><\/tr>"
    }
    return r += '<tr><td class="success"> دستگیره <\/td><td>' + u + "<\/td><\/tr>", r += '<tr><td class="success"> قفل <\/td><td>' + f + "<\/td><\/tr>", r += '<tr><td class="success"> جنس <\/td><td>' + t + "<\/td><\/tr>", r + "<\/table>"
}

function BatchCalculate(n) {
    for (var i = [{
        Id: 0,
        Price: 0
    }], t = 0; t < n.length; t++) Configurator = n[t].Content, Price2.Area.Body = 0, Price2.Area.Furniture = 0, Price2.Area.BackPanel = 0, Price2.FinalPrice = 0, Price2.CalculateBodyArea(), Price2.ApplyNormalizer(), i.push({
        Id: n[t].Id,
        Price: Price2.BeautifyPrice(Price2.FinalPrice)
    });
    return i
}

function SpecificConfiguratorCalculate(n, t) {
    try {
        return Configurator = t, Object.keys(rawSetting).length === 0 && ajaxCallSync("/Configurator/Ajax/GetConfiguratorRequirement", {}, function (n) {
            InitObject.SetMaterialList(JSON.stringify(n), !0);
            InitObject.SetRequirement(JSON.stringify(n), !0);
            Setting.Fill()
        }), Price2.Area.Body = 0, Price2.Area.Furniture = 0, Price2.Area.BackPanel = 0, Price2.FinalPrice = 0, Price2.CalculateBodyArea(), Price2.ApplyNormalizer(), {
            Id: n,
            Price: Price2.BeautifyPrice(Price2.FinalPrice)
        }
    } catch (i) {
        return {Id: 0, Price: "برای مشاهده قیمت روی طرح کلیک کنید"}
    }
}

function showSpecificPrice(n, t) {
    var i = SpecificConfiguratorCalculate(n, t);
    ID("priceConfigurator" + n).innerHTML = i.Id != 0 ? "<label>" + i.Price + " تومان <\/label>" : "<label>" + i.Price + "<\/label>"
}

function Calculate() {
    Price2.Reset();
    Price2.CalculateBodyArea();
    Price2.ApplyNormalizer();
    Price2.ShowPrice(Price2.FinalPrice);
    setShelfParameters();
    getProductOtherObjects()
}

function FixNumber(n, t) {
    return t = t || 15, +n.toFixed(t)
}

function sessionExist() {
    return ajaxCallSync("/Configurator/Home/SessionExist", {}, function (n) {
        return n && n == !0 ? !0 : !1
    })
}

function helpPage(n) {
    $("[data-pageId]").each(function () {
        var t = $(this);
        parseInt(t.attr("data-pageId")) == n ? t.slideDown(500) : t.slideUp(300)
    });
    $("[data-video]").each(function () {
        var t = $(this);
        parseInt(t.attr("data-video")) == n ? t.show() : t.hide()
    })
}

function removeDuplicates(n) {
    return n.filter(function (t, i) {
        return n.indexOf(t) == i
    })
}

function getFurnitureObjectList() {
    for (var t, i, n, e, r, u = [{
        SectionId: -1,
        CompartmentIdList: [],
        FurnitureId: Furniture.Empty,
        FurnitureUniqueCode: 0
    }], f = 0; f < Configurator.SectionList.length; f++) for (t = Configurator.SectionList[f], i = 0; i < t.ComaprtmentList.length; i++) n = t.ComaprtmentList[i], e = n.FurnitureUniqueCode, e > 0 && (r = u.filter(function (n) {
        return n.FurnitureUniqueCode == e
    }), r.length == 0 ? u.push({
        SectionId: t.Id,
        CompartmentIdList: [n.Id],
        FurnitureId: n.FurnitureId,
        FurnitureUniqueCode: n.FurnitureUniqueCode
    }) : r.length == 1 && r[0].CompartmentIdList.push(n.Id));
    return u.filter(function (n) {
        return n.SectionId > -1
    })
}

function getInteriorObjectList() {
    for (var n, t, i, u = [{
        SectionId: -1,
        CompartmentId: 0,
        InteriorId: Interior.Empty
    }], r = 0; r < Configurator.SectionList.length; r++) for (n = Configurator.SectionList[r], t = 0; t < n.ComaprtmentList.length; t++) i = n.ComaprtmentList[t], i.InteriorId != Interior.Empty && u.push({
        SectionId: n.Id,
        CompartmentId: i.Id,
        InteriorId: i.InteriorId
    });
    return u.filter(function (n) {
        return n.SectionId > -1
    })
}

function getSectionHeightList() {
    for (var t = [], n = 0; n < Configurator.SectionList.length; n++) t.push(Configurator.SectionList[n].Height);
    return t
}

function ID(n) {
    return document.getElementById(n)
}

function getFurnitureUniqueCodeListObject(n) {
    for (var t, i, r = [{
        SectionId: 0,
        CompartmentIdList: [],
        FurnitureId: Furniture.Empty,
        FurnitureUniqueCode: 0
    }], f = getSectionObject(n), u = 0; u < f.ComaprtmentList.length; u++) t = f.ComaprtmentList[u], t.FurnitureUniqueCode > 0 && (i = r.filter(function (n) {
        return n.FurnitureUniqueCode == t.FurnitureUniqueCode
    }), i.length == 0 ? r.push({
        SectionId: n,
        CompartmentIdList: [t.Id],
        FurnitureId: t.FurnitureId,
        FurnitureUniqueCode: t.FurnitureUniqueCode
    }) : i.length == 1 && i[0].CompartmentIdList.push(t.Id));
    return r.filter(function (n) {
        return n.SectionId > 0
    })
}

function getSectionObject(n) {
    var t = Configurator.SectionList.filter(function (t) {
        return t.Id == n
    });
    return t.length == 1 ? t[0] : null
}

function getCompartmentObject(n, t) {
    var r = getSectionObject(n), i = r.ComaprtmentList.filter(function (n) {
        return n.Id == t
    });
    return i.length == 1 ? i[0] : null
}

function getMaterialObjectByItemId(n) {
    var t = MaterialObject.filter(function (t) {
        return t.ItemId == n
    });
    return t.length == 1 ? Result(ResultCode.True, t[0]) : Result(ResultCode.False)
}

function getHandleObjectByItemId(n) {
    var t = HandleObject.filter(function (t) {
        return t.ItemId == n
    });
    return t.length == 1 ? Result(ResultCode.True, t[0]) : Result(ResultCode.False)
}

function getConfiguratorTitle(n) {
    switch (n) {
        case Category.Closet:
            return "کمد";
        case Category.Console:
            return "کنسول";
        case Category.Drawer:
            return "دراور";
        case Category.Library:
            return "کتابخانه";
        case Category.ShoesBox:
            return "جاکفشی";
        case Category.TvStand:
            return "میز تلویزیون";
        case Category.BedSideTable:
            return "پاتختی";
        case Category.Open:
            return "اپن"
    }
}

var SizeRange = setSizeRange(), InitObject = {
        Hash: "", CategoryId: 0, Configurator: null, SavedConfiguratorMaterialPrice: null, IsNewDesign: function () {
            return InitObject.Hash.length == 0 ? !0 : !1
        }, SetMaterialList: function (n, t) {
            var r, i;
            for (MaterialObject = JSON.parse(n), r = "", i = 0; i < MaterialObject.length; i++) MaterialObject[i].Id = i + 1, r += '<button data-color-name="' + MaterialObject[i].ItemName + '" data-materialobject-id="' + (i + 1) + '" style="background-image: url(\'//cdn.idero.ir/file/Configurator/' + MaterialObject[i].ItemHash[0] + "/" + MaterialObject[i].ItemHash + ".jpg')\"><\/button>";
            t && t == !0 || (ID("materialList").innerHTML = r)
        }, SetRequirement: function (n, t) {
            var u, f, i, e, r;
            for (RequirementObject = JSON.parse(n), MaterialObject = RequirementObject.MaterialList, SavedConfiguratorMaterialPrice = JSON.parse(InitObject.SavedConfiguratorMaterialPrice), u = "", f = "", i = 0; i < MaterialObject.length; i++) MaterialObject[i].Id = i + 1, SavedConfiguratorMaterialPrice && SavedConfiguratorMaterialPrice.length > 0 ? (e = Price2.BeautifyPrice(SavedConfiguratorMaterialPrice.filter(n => n.MaterialItemId === MaterialObject[i].ItemId)[0].Price), u += '<button data-color-name="' + MaterialObject[i].ItemName + '" data-server-price="' + e + '" data-materialobject-id="' + (i + 1) + '" style="background-image: url(\'//cdn.idero.ir/file/Configurator/' + MaterialObject[i].ItemHash[0] + "/" + MaterialObject[i].ItemHash + ".jpg')\"><\/button>") : u += '<button data-color-name="' + MaterialObject[i].ItemName + '" data-materialobject-id="' + (i + 1) + '" style="background-image: url(\'//cdn.idero.ir/file/Configurator/' + MaterialObject[i].ItemHash[0] + "/" + MaterialObject[i].ItemHash + ".jpg')\"><\/button>";
            for (HandleObject = RequirementObject.HandleList, r = 0; r < HandleObject.length; r++) HandleObject[r].Id = r + 1, f += '<img data-handleobject-id="' + (r + 1) + '" src="//cdn.idero.ir/file/Configurator/' + HandleObject[r].ItemHash[0] + "/" + HandleObject[r].ItemHash + '.jpg"/>';
            (rawSetting = RequirementObject.Setting, t && t == !0) || (ID("materialList").innerHTML = u, ID("handleList").innerHTML = f)
        }, ConfiguratorSavedId: 0
    }, WoodGroupCode = {
        UNKNOWN: "UNKNOWN",
        NATURAL: "NATURAL",
        PLYWOOD: "PLYWOOD",
        VENEER: "VENEER",
        HIGHGLOSS_PATTERN: "HIGHGLOSS_PATTERN",
        MDF_COLOR: "MDF_COLOR",
        MDF_PATTERN: "MDF_PATTERN"
    }, MaterialObject = [{
        Id: 0,
        GroupId: 0,
        GroupTitle: "",
        GroupHash: "",
        GroupCode: WoodGroupCode.UNKNOWN,
        ItemId: 0,
        Price: 0,
        Color: "",
        Pattern: "",
        ItemTitle: "",
        ItemName: "",
        ItemHash: "",
        UseImage: !0
    }], HandleObject = [{Id: 0, GroupId: 0, ItemId: 0, Price: 0, ItemCode: ""}],
    Furniture = {Empty: 1, Door: 2, DoubleDoor: 3, Drawer: 4, Flap: 5},
    Interior = {Empty: 1, ClotheHanger: 2, InsideDrawer: 3, Regal: 4, VerticalDivider: 5},
    BackPanelThickness = {Unknown: 0, _3mm: 1, _16mm: 2}, FurniturePosition = {Inside: 1, Outside: 2},
    Feet = {No: 0, Yes: 1}, Hood = {No: 0, Yes: 1}, HoodMode = {Hidden: 1, Exposed: 2}, Microwave = {No: 0, Yes: 1}, MicrowaveMode = {BuiltIn: 1, Exposed: 2}, Configurator = {
        CategoryId: 0,
        Dimension: {OveralWidth: 0, OveralHeight: 0, OveralDepth: 0},
        Property: {MaterialItemId: 0, BackPanelThicknessId: 0, FurniturePositionId: 0, FeetId: 0, HandleItemId: 0, HoodId: 0, HoodModeId: 1, MicrowaveId: 0, MicrowaveModeId: 1},
        SectionList: [{
            Id: 0,
            Width: 0,
            Height: 0,
            ComaprtmentList: [{
                Id: 0,
                Height: 0,
                FurnitureId: Furniture.Empty,
                InteriorId: Interior.Empty,
                FurnitureUniqueCode: 0
            }]
        }]
    }, ResultCode = {UserIsDisagree: -2, False: -1, True: 1, UserIsAgree: 2, Routine: 3}, ProductObject, rawSetting = {},
    priceList = [], referenceGroupArray = [{ItemId: undefined, ReferenceGroup: undefined}],
    SIZE = {Small: "Small", Medium: "Medium", Large: "Large"}, Setting = {
        Fill: function () {
            this.Area.Mdf = rawSetting.MdfArea;
            this.Area.Neopan = rawSetting.NeopanArea;
            this.Area.Veneer = rawSetting.VeneerArea;
            this.Area.HighGlass = rawSetting.HighGlassArea;
            this.Area.Multiplex = rawSetting.MultiplexArea;
            this.Area.Mdf3Mil = rawSetting.Mdf3MilArea;
            this.Coefficient.push({
                WoodGroupId: this.WoodType.MdfPattern,
                A: +rawSetting.SmallMdfPatternA,
                B: +rawSetting.SmallMdfPatternB,
                Size: SIZE.Small,
                Min: 0,
                Max: +rawSetting.MediumMdfPatternMin
            }, {
                WoodGroupId: this.WoodType.MdfPattern,
                A: +rawSetting.MediumMdfPatternA,
                B: +rawSetting.MediumMdfPatternB,
                Size: SIZE.Medium,
                Min: +rawSetting.MediumMdfPatternMin,
                Max: +rawSetting.MediumMdfPatternMax
            }, {
                WoodGroupId: this.WoodType.MdfPattern,
                A: +rawSetting.LargeMdfPatternA,
                B: +rawSetting.LargeMdfPatternB,
                Size: SIZE.Large,
                Min: +rawSetting.MediumMdfPatternMax
            }, {
                WoodGroupId: this.WoodType.MdfColor,
                A: +rawSetting.SmallMdfColorA,
                B: +rawSetting.SmallMdfColorB,
                Size: SIZE.Small,
                Min: 0,
                Max: +rawSetting.MediumMdfColorMin
            }, {
                WoodGroupId: this.WoodType.MdfColor,
                A: +rawSetting.MediumMdfColorA,
                B: +rawSetting.MediumMdfColorB,
                Size: SIZE.Medium,
                Min: +rawSetting.MediumMdfColorMin,
                Max: +rawSetting.MediumMdfColorMax
            }, {
                WoodGroupId: this.WoodType.MdfColor,
                A: +rawSetting.LargeMdfColorA,
                B: +rawSetting.LargeMdfColorB,
                Size: SIZE.Large,
                Min: +rawSetting.MediumMdfColorMax
            }, {
                WoodGroupId: this.WoodType.HighGlassPattern,
                A: +rawSetting.SmallHighGlassPatternA,
                B: +rawSetting.SmallHighGlassPatternB,
                Size: SIZE.Small,
                Min: 0,
                Max: +rawSetting.MediumHighGlassPatternMin
            }, {
                WoodGroupId: this.WoodType.HighGlassPattern,
                A: +rawSetting.MediumHighGlassPatternA,
                B: +rawSetting.MediumHighGlassPatternB,
                Size: SIZE.Medium,
                Min: +rawSetting.MediumHighGlassPatternMin,
                Max: +rawSetting.MediumHighGlassPatternMax
            }, {
                WoodGroupId: this.WoodType.HighGlassPattern,
                A: +rawSetting.LargeHighGlassPatternA,
                B: +rawSetting.LargeHighGlassPatternB,
                Size: SIZE.Large,
                Min: +rawSetting.MediumHighGlassPatternMax
            }, {
                WoodGroupId: this.WoodType.NeopanPattern,
                A: +rawSetting.SmallNeopanPatternA,
                B: +rawSetting.SmallNeopanPatternB,
                Size: SIZE.Small,
                Min: 0,
                Max: +rawSetting.MediumNeopanPatternMin
            }, {
                WoodGroupId: this.WoodType.NeopanPattern,
                A: +rawSetting.MediumNeopanPatternA,
                B: +rawSetting.MediumNeopanPatternB,
                Size: SIZE.Medium,
                Min: +rawSetting.MediumNeopanPatternMin,
                Max: +rawSetting.MediumNeopanPatternMax
            }, {
                WoodGroupId: this.WoodType.NeopanPattern,
                A: +rawSetting.LargeNeopanPatternA,
                B: +rawSetting.LargeNeopanPatternB,
                Size: SIZE.Large,
                Min: +rawSetting.MediumNeopanPatternMax
            }, {
                WoodGroupId: this.WoodType.NeopanColor,
                A: +rawSetting.SmallNeopanColorA,
                B: +rawSetting.SmallNeopanColorB,
                Size: SIZE.Small,
                Min: 0,
                Max: +rawSetting.MediumNeopanColorMin
            }, {
                WoodGroupId: this.WoodType.NeopanColor,
                A: +rawSetting.MediumNeopanColorA,
                B: +rawSetting.MediumNeopanColorB,
                Size: SIZE.Medium,
                Min: +rawSetting.MediumNeopanColorMin,
                Max: +rawSetting.MediumNeopanColorMax
            }, {
                WoodGroupId: this.WoodType.NeopanColor,
                A: +rawSetting.LargeNeopanColorA,
                B: +rawSetting.LargeNeopanColorB,
                Size: SIZE.Large,
                Min: +rawSetting.MediumNeopanColorMax
            }, {
                WoodGroupId: this.WoodType.Veneer,
                A: +rawSetting.SmallVeneerA,
                B: +rawSetting.SmallVeneerB,
                Size: SIZE.Small,
                Min: 0,
                Max: +rawSetting.MediumVeneerMin
            }, {
                WoodGroupId: this.WoodType.Veneer,
                A: +rawSetting.MediumVeneerA,
                B: +rawSetting.MediumVeneerB,
                Size: SIZE.Medium,
                Min: +rawSetting.MediumVeneerMin,
                Max: +rawSetting.MediumVeneerMax
            }, {
                WoodGroupId: this.WoodType.Veneer,
                A: +rawSetting.LargeVeneerA,
                B: +rawSetting.LargeVeneerB,
                Size: SIZE.Large,
                Min: +rawSetting.MediumVeneerMax
            }, {
                WoodGroupId: this.WoodType.Multiplex,
                A: +rawSetting.SmallMultiplexA,
                B: +rawSetting.SmallMultiplexB,
                Size: SIZE.Small,
                Min: 0,
                Max: +rawSetting.MediumMultiplexMin
            }, {
                WoodGroupId: this.WoodType.Multiplex,
                A: +rawSetting.MediumMultiplexA,
                B: +rawSetting.MediumMultiplexB,
                Size: SIZE.Medium,
                Min: +rawSetting.MediumMultiplexMin,
                Max: +rawSetting.MediumMultiplexMax
            }, {
                WoodGroupId: this.WoodType.Multiplex,
                A: +rawSetting.LargeMultiplexA,
                B: +rawSetting.LargeMultiplexB,
                Size: SIZE.Large,
                Min: +rawSetting.MediumMultiplexMax,
                Max: 0
            }, {
                WoodGroupId: this.WoodType.SolidWood,
                A: +rawSetting.SmallSolidA,
                B: +rawSetting.SmallSolidB,
                Size: SIZE.Small,
                Min: 0,
                Max: +rawSetting.MediumSolidMin
            }, {
                WoodGroupId: this.WoodType.SolidWood,
                A: +rawSetting.MediumSolidA,
                B: +rawSetting.MediumSolidB,
                Size: SIZE.Medium,
                Min: +rawSetting.MediumSolidMin,
                Max: +rawSetting.MediumSolidMax
            }, {
                WoodGroupId: this.WoodType.SolidWood,
                A: +rawSetting.LargeSolidA,
                B: +rawSetting.LargeSolidB,
                Size: SIZE.Large,
                Min: +rawSetting.MediumSolidMax
            });
            this.Equipment.Hinge = +rawSetting.HingePrice;
            this.Equipment.Magnet = +rawSetting.MagnetPrice;
            this.Equipment.Steelpipe = +rawSetting.SteelpipePrice;
            this.Equipment.Bast = +rawSetting.BastPrice;
            this.Equipment.DrawerRail.push({Min: 20, Max: 24, Name: "_20", Price: +rawSetting.DrawerRail20Price}, {
                Min: 25,
                Max: 29,
                Name: "_25",
                Price: +rawSetting.DrawerRail25Price
            }, {Min: 30, Max: 34, Name: "_30", Price: +rawSetting.DrawerRail30Price}, {
                Min: 35,
                Max: 39,
                Name: "_35",
                Price: +rawSetting.DrawerRail35Price
            }, {Min: 40, Max: 44, Name: "_40", Price: +rawSetting.DrawerRail40Price}, {
                Min: 45,
                Max: 49,
                Name: "_45",
                Price: +rawSetting.DrawerRail45Price
            }, {Min: 50, Max: 54, Name: "_50", Price: +rawSetting.DrawerRail50Price}, {
                Min: 55,
                Max: 59,
                Name: "_55",
                Price: +rawSetting.DrawerRail55Price
            }, {Min: 60, Max: 60, Name: "_60", Price: +rawSetting.DrawerRail60Price});
            this.Equipment.FlapJack = +rawSetting.FlapJack;
            this.Equipment.Feet = +rawSetting.Feet;
            this.Interior.ClothesHanger = +rawSetting.ClothesHangerPrice;
            this.Other.DiscountForje = +rawSetting.DiscountForje;
            this.Other.Mdf3MilPrice = +rawSetting.Mdf3MilPrice
        },
        Area: {
            Mdf: undefined,
            Neopan: undefined,
            Veneer: undefined,
            HighGlass: undefined,
            Multiplex: undefined,
            Solid: 1,
            Mdf3Mil: undefined
        },
        Coefficient: [{
            WoodGroupId: undefined,
            Size: undefined,
            Min: undefined,
            Max: undefined,
            A: undefined,
            B: undefined
        }],
        Equipment: {
            Hinge: undefined,
            Magnet: undefined,
            Steelpipe: undefined,
            Bast: undefined,
            DrawerRail: [{Min: undefined, Max: undefined, Name: undefined, Price: undefined}],
            FlapJack: undefined,
            Feet: undefined
        },
        Interior: {PantographLess90: undefined, PantographGreat90: undefined, ClothesHanger: undefined},
        WoodType: {
            Glass: "Glass",
            Mirror: "Mirror",
            MdfPattern: "MdfPattern",
            MdfColor: "MdfColor",
            HighGlassPattern: "HighGlassPattern",
            HighGlassColor: "HighGlassColor",
            NeopanPattern: "NeopanPattern",
            NeopanColor: "NeopanColor",
            Veneer: "Veneer",
            Multiplex: "Multiplex",
            SolidWood: "SolidWood",
            Unknown: "Unknown",
            Mdf3Mil: "Mdf3Mil"
        },
        Other: {DiscountForje: undefined, Mdf3MilPrice: undefined}
    }, Price2 = {
        DiscountPercentage: 0,
        Area: {Body: 0, Furniture: 0, BackPanel: 0},
        FinalPrice: undefined,
        SetFromSaved: !1,
        CalcOnDefault: !1,
        DiscountCodePercentage: {Id: 0, Percentage: 0},
        Initialize: function () {
            Setting.Fill();
            this.DisableFeatures()
        },
        DisableFeatures: function () {
            var n, t;
            if (Configurator.CategoryId != Category.Closet) for (n = 0; n < Configurator.SectionList.length; n++) for (t = 0; t < Configurator.SectionList[n].ComaprtmentList.length; t++) Configurator.SectionList[n].ComaprtmentList[t].InteriorId = Interior.Empty
        },
        CalculateBodyArea: function () {
            for (var t, c, i, u, f, e, o, r = 0, s = 0, n = [{
                Height: 0,
                SectionIdList: []
            }], h = 0; h < Configurator.SectionList.length; h++) t = Configurator.SectionList[h], r += (t.ComaprtmentList.length + 1) * t.Width, c = n.length > 0 && n[n.length - 1].Height == t.Height ? !0 : !1, c == !0 ? n[n.length - 1].SectionIdList.push(t.Id) : c == !1 && n.push({
                Height: t.Height,
                SectionIdList: [t.Id]
            });
            for (n = n.filter(function (n) {
                return n.Height > 0
            }), i = 0; i < n.length; i++) u = getSectionObject(n[i].SectionIdList[0]), r += (n[i].SectionIdList.length + 1) * u.Height, f = 0, n[i].SectionIdList.forEach(function (n) {
                f += getSectionObject(n).Width
            }), f += (n[i].SectionIdList.length + 1) * SizeRange.Thickness, e = Math.ceil(f / 60) - 2, e = Math.max(0, e), r += e * u.Height, o = Math.ceil(u.Height / 150) - 1, o = Math.max(0, o), r += o * u.Width;
            r *= Configurator.Dimension.OveralDepth;
            s = FixNumber(r / 1e4);
            ProductObject.Board16MilMeter += s;
            ProductObject.OveralWidth = Configurator.Dimension.OveralWidth;
            ProductObject.OveralHeight = Configurator.Dimension.OveralHeight;
            ProductObject.OveralDepth = Configurator.Dimension.OveralDepth;
            this.Area.Body = s
        },
        CalculateBodyXPrice: function () {
            var n = this.GetWoodInfo(this.Area.Body);
            return n.Price
        },
        CalculateXPrice: function () {
            return this.CalculateFurniturePrice() + this.CalculateOptionPrice() + this.Feet() + this.CalculateInteriorPrice()
        },
        CalculateFurniturePrice: function () {
            for (var n, r = 0, i = getFurnitureObjectList(), t = 0; t < i.length; t++) {
                switch (i[t].FurnitureId) {
                    case Furniture.Door:
                    case Furniture.DoubleDoor:
                    case Furniture.Flap:
                        n = this.SingleDoorRule(i[t]);
                        r += n.Price;
                        break;
                    case Furniture.Drawer:
                        n = this.DrawerRule(i[t]);
                        r += n.Price;
                        break;
                    case Furniture.Empty:
                        continue
                }
                this.Area.Furniture += n.Meter;
                ProductObject.Board16MilMeter += n.Meter
            }
            return r
        },
        CalculateOptionPrice: function () {
            return 0 + FixNumber(this.BackPanel())
        },
        SingleDoorRule: function (n, t, i) {
            var f, r, h, c, e, a, v, y, p, w, k;
            t = t || 0;
            i = i || 0;
            f = Furniture.Empty;
            r = 0;
            switch (n.FurnitureId) {
                case Furniture.Door:
                    f = Furniture.Door;
                    r = 1;
                    ProductObject.DoorCount += 1;
                    break;
                case Furniture.DoubleDoor:
                    f = Furniture.DoubleDoor;
                    r = 2;
                    ProductObject.DoorCount += 1;
                    break;
                case Furniture.Flap:
                    f = Furniture.Flap;
                    r = 1;
                    ProductObject.DoorCount += 1;
                    break;
                case Furniture.Drawer:
                    f = Furniture.Drawer;
                    r = 1;
                    ProductObject.DrawerCount += 1
            }
            var d = n.SectionId, l = n.CompartmentIdList, b = getSectionObject(d), o = b.Width, u = 0, s = 0;
            for (h = 0; h < l.length; h++) u += b.ComaprtmentList[l[h] - 1].Height;
            return u += (l.length - 1) * SizeRange.Thickness, c = 0, e = 0, Configurator.Property.FurniturePositionId == FurniturePosition.Inside ? (o = o, u = u) : n.SectionId == 1 || n.SectionId == Configurator.SectionList.length ? (o = o + SizeRange.Thickness + SizeRange.Thickness / 2, u = u + SizeRange.Thickness + SizeRange.Thickness) : (o = o + SizeRange.Thickness / 2 + SizeRange.Thickness / 2, u = u + SizeRange.Thickness + SizeRange.Thickness), s = o * u / 1e4, f != Furniture.Flap && f != Furniture.Drawer ? u < 100 ? (ProductObject.HingCount += r * 2, e += r * 2 * Setting.Equipment.Hinge) : (ProductObject.HingCount += r * 3, e += r * 3 * Setting.Equipment.Hinge) : f === Furniture.Drawer && (ProductObject.RailCount += 1, e += this.GetDrawerRailPrice(i)), Configurator.Property.HandleItemId > 0 ? (ProductObject.HandleCount += r, ProductObject.HandleItemId = Configurator.Property.HandleItemId, e += r * this.GetItemPrice(Configurator.Property.HandleItemId)) : (ProductObject.MagnetCount += r, e += r * Setting.Equipment.Magnet), f == Furniture.Flap && (ProductObject.HingCount += r * 2, ProductObject.FlapJackCount += r * 2, e += r * 2 * Setting.Equipment.Hinge + r * 2 * Setting.Equipment.FlapJack), a = this.GetBodyWoodId(), v = this.GetReferenceGroup(a), s = FixNumber(s), y = s, t > 0 && (y += +t), t > 0 && (p = this.GetBodyWoodId(), w = this.GetReferenceGroup(p), w === Setting.WoodType.SolidWood && (t = this.GetSolidVolume(t)), c = FixNumber(t / this.GetMaterialAreaByMaterial(w)) * this.GetItemPrice(p)), v === Setting.WoodType.SolidWood && (s = this.GetSolidVolume(s)), c += FixNumber(s / this.GetMaterialAreaByMaterial(v)) * this.GetItemPrice(a), k = FixNumber(c + e), {
                Price: k,
                Meter: y
            }
        },
        DrawerRule: function (n) {
            var r = getSectionObject(n.SectionId), c = r.ComaprtmentList[n.CompartmentIdList[0] - 1], e = c - 2, t = 0,
                u = 0, o = SizeRange.Thickness, s, i, h, f;
            return u = Configurator.Property.FurniturePositionId == FurniturePosition.Inside ? 5 : 3.5, s = 5, t = (e * (Configurator.Dimension.OveralDepth - u) * 2 + e * (r.Width - 6) * 2) / 1e4, t = FixNumber(t), i = (Configurator.Dimension.OveralDepth - u + 2 * o) * (r.Width - 6 + 2 * o), ProductObject.Board3MilMeter += FixNumber(i / 1e4), h = this.GetWoodInfo(FixNumber(i / 1e4), !0).Price, f = this.SingleDoorRule(n, t, s), {
                Price: Math.round(f.Price + h),
                Meter: f.Meter,
                DrawerFloorMeter: i
            }
        },
        InternalDrawerRule: function (n, t) {
            var r = getSectionObject(n), p = getCompartmentObject(n, t), e = p.Height, o = e - 2,
                s = Configurator.Dimension.OveralDepth - 2, h = 0, c = 0, l = SizeRange.Thickness, u, a, i, f, v, y;
            return h = o * (s - 5) / 5e3 + o * (r.Width - 6) / 5e3, c = r.Width * e / 1e4, u = h + c, a = this.GetWoodInfo(u), ProductObject.Board16MilMeter += u, ProductObject.DrawerCount += 1, i = 0, Configurator.Property.HandleItemId > 0 ? (ProductObject.HandleCount += 1, ProductObject.HandleItemId = Configurator.Property.HandleItemId, i = this.GetItemPrice(Configurator.Property.HandleItemId)) : (ProductObject.MagnetCount += 1, i = Setting.Equipment.Magnet), f = (s - 5 + 2 * l) * (r.Width - 6 + 2 * l), ProductObject.Board3MilMeter += FixNumber(f / 1e4), v = this.GetWoodInfo(FixNumber(f / 1e4), !0).Price, y = 5, ProductObject.RailCount += 1, a.Price + this.GetDrawerRailPrice(y) + i + v
        },
        BackPanel: function () {
            var e = SizeRange.Thickness, i = 0, r, n, u, t, f;
            for (i += Configurator.SectionList[0].Height * e, r = 0; r < Configurator.SectionList.length; r++) n = Configurator.SectionList[r], u = getSectionObject(n.Id + 1), i += n.Height * n.Width, i += u != null ? Math.max(n.Height, u.Height) : n.Height;
            return t = FixNumber(i / 1e4), Price2.Area.BackPanel = t, Configurator.Property.BackPanelThicknessId == BackPanelThickness._16mm ? (f = this.GetWoodInfo(t), ProductObject.Board16MilMeter += t, ProductObject.BackPanelThickness = 16) : Configurator.Property.BackPanelThicknessId == BackPanelThickness._3mm && (f = this.GetWoodInfo(t, !0), ProductObject.Board3MilMeter += t, ProductObject.BackPanelThickness = 3), f.Price
        },
        Feet: function () {
            if (Configurator.Property.FeetId == Feet.Yes) {
                var n = 4 * Math.ceil(Configurator.Dimension.OveralWidth / 100);
                return ProductObject.FeetCount = n, n * +Setting.Equipment.Feet
            }
            return 0
        },
        CalculateInteriorPrice: function () {
            var i = 0, t, n, f, r;
            if (Configurator.CategoryId == Category.Closet) for (t = getInteriorObjectList(), n = 0; n < t.length; n++) {
                var e = t[n], o = +e.InteriorId, s = getCompartmentObject(t[n].SectionId, t[n].CompartmentId).Height,
                    u = getSectionObject(t[n].SectionId).Width;
                switch (o) {
                    case Interior.InsideDrawer:
                        i += this.InternalDrawerRule(t[n].SectionId, t[n].CompartmentId);
                        break;
                    case Interior.ClotheHanger:
                        ProductObject.ClothesHangerCount += 1;
                        i += +Setting.Interior.ClothesHanger;
                        break;
                    case Interior.Regal:
                        ProductObject.SteelpipeMeter += u / 100;
                        ProductObject.BastCount += 2;
                        i += u / 100 * Setting.Equipment.Steelpipe + 2 * Setting.Equipment.Bast;
                        break;
                    case Interior.VerticalDivider:
                        f = FixNumber(Configurator.Dimension.OveralDepth * s / 1e4);
                        r = this.GetWoodInfo(f);
                        i += r.Price;
                        this.Area.Furniture += r.UsedSheetM2;
                        ProductObject.Board16MilMeter += r.UsedSheetM2
                }
            }
            return i
        },
        GetCurrentCoefficient: function () {
            var i = Configurator.Property.BackPanelThicknessId === BackPanelThickness._16mm ? this.Area.BackPanel : 0,
                n = this.Area.Body + this.Area.Furniture + i, r = this.GetReferenceGroup(this.GetBodyWoodId()),
                t = Setting.Coefficient.filter(function (t) {
                    return t.WoodGroupId == r && n >= t.Min && n <= (t.Max || n)
                })[0];
            return {Size: t.Size, A: t.A, B: t.B}
        },
        GetMaterialAreaByMaterial: function (n) {
            switch (n) {
                case Setting.WoodType.MdfColor:
                case Setting.WoodType.MdfPattern:
                    return Setting.Area.Mdf;
                case Setting.WoodType.HighGlassPattern:
                case Setting.WoodType.HighGlassColor:
                    return Setting.Area.HighGlass;
                case Setting.WoodType.Multiplex:
                    return Setting.Area.Multiplex;
                case Setting.WoodType.NeopanColor:
                case Setting.WoodType.NeopanPattern:
                    return Setting.Area.Neopan;
                case Setting.WoodType.Veneer:
                    return Setting.Area.Veneer;
                case Setting.WoodType.Glass:
                case Setting.WoodType.Mirror:
                case Setting.WoodType.SolidWood:
                    return Setting.Area.Solid;
                case Setting.WoodType.Mdf3Mil:
                    return Setting.Area.Mdf3Mil;
                case Setting.WoodType.Unknown:
                    return
            }
        },
        ApplyNormalizer: function () {
            var n, t = undefined;
            t = this.CalculateBodyXPrice();
            t += this.CalculateXPrice();
            n = this.GetCurrentCoefficient();
            this.FinalPrice = Math.floor(Math.round((n.A * t + n.B) * FixNumber(100 / (100 - Setting.Other.DiscountForje))) / 1e3) * 1e3
        },
        GetItemPrice: function (n) {
            var i = getMaterialObjectByItemId(n), t;
            return i.Code == ResultCode.True ? i.Value.Price : (t = getHandleObjectByItemId(n), t.Code == ResultCode.True ? t.Value.Price : void 0)
        },
        GetReferenceGroup: function (n) {
            var t = getMaterialObjectByItemId(n);
            if (t.Code == ResultCode.True) switch (t.Value.GroupCode) {
                case WoodGroupCode.HIGHGLOSS_PATTERN:
                    return Setting.WoodType.HighGlassPattern;
                case WoodGroupCode.MDF_COLOR:
                    return Setting.WoodType.MdfColor;
                case WoodGroupCode.MDF_PATTERN:
                    return Setting.WoodType.MdfPattern;
                case WoodGroupCode.NATURAL:
                    return Setting.WoodType.SolidWood;
                case WoodGroupCode.PLYWOOD:
                    return Setting.WoodType.Multiplex;
                case WoodGroupCode.VENEER:
                    return Setting.WoodType.Veneer;
                case WoodGroupCode.UNKNOWN:
                default:
                    return Setting.WoodType.Unknown
            } else return Setting.WoodType.Unknown;
            return
        },
        GetDrawerRailPrice: function (n) {
            n = n || 0;
            var t = Configurator.Dimension.OveralDepth - n;
            return t = Math.min(t, 60), ProductObject.DrawerDepth = t, Setting.Equipment.DrawerRail.filter(function (n) {
                return t >= n.Min && t <= n.Max
            })[0].Price
        },
        ShowPrice: function (n) {
            sendPrice(n);
            $("#FinalPrice").text(this.BeautifyPrice(n) + " تومان ");
            $("#FinalPriceWithDiscount").text("قیمت نهایی : " + this.BeautifyPrice(Price2.GetPriceWithDiscount(n)) + " تومان ")
        },
        BeautifyPrice: function (n) {
            return n = parseInt(n), n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        },
        GetSolidVolume: function (n) {
            return FixNumber(+n * .02)
        },
        GetBodyWoodId: function () {
            return ProductObject.DefaultMaterialItemId = Configurator.Property.MaterialItemId, Configurator.Property.MaterialItemId
        },
        GetWoodInfo: function (n, t) {
            var f, e, i, r, u, o;
            return t = t || !1, t == !1 ? (i = +this.GetBodyWoodId(), r = this.GetReferenceGroup(i), f = this.GetMaterialAreaByMaterial(r), e = this.GetItemPrice(i)) : (i = 0, r = this.GetReferenceGroup(i), e = Setting.Other.Mdf3MilPrice, f = Setting.Area.Mdf3Mil), u = n, r === Setting.WoodType.SolidWood && (u = this.GetSolidVolume(n)), o = FixNumber(u / f) * e, {
                WoodId: i,
                ReferenceGroup: r,
                UsedSheetM2: n,
                UsedSheetM3: u,
                Price: o
            }
        },
        Reset: function () {
            this.ShowPrice(0);
            this.Area.Body = 0;
            this.Area.Furniture = 0;
            this.Area.BackPanel = 0;
            this.FinalPrice = 0;
            ProductObject = createProductObject()
        },
        GetPriceWithDiscount: function (n) {
            var t = n || this.FinalPrice;
            return parseInt(t * ((100 - this.DiscountCodePercentage.Percentage) / 100))
        }
    };
$(document).on("keydown keyup focusout", "[data-integer]", function () {
    $(this).val($(this).val().replace(/[^0-9]/gi, ""))
});
$(document).on("click", "#btnDiscountCode", function () {
    var n = $("#txtDiscountCode").val();
    ajaxCallSync("/Configurator/Ajax/GetDiscountCodeInfo", {title: n}, function (n) {
        n.Result.Code <= 0 ? (Price2.DiscountCodePercentage.Id = 0, Price2.DiscountCodePercentage.Percentage = 0, alert(n.Result.Message)) : (Price2.DiscountCodePercentage.Id = n.Id, Price2.DiscountCodePercentage.Percentage = n.DiscountPercentage);
        Calculate()
    })
});
$(".cf-help .item h3").click(function () {
    var n = $(this);
    n.siblings("content").is(":visible") ? n.find("i").html("+") : n.find("i").html("-");
    n.siblings("content").slideToggle(300)
});
$(".cf-faq .item h3").click(function () {
    var n = $(this);
    n.siblings("content").is(":visible") ? n.find("i").addClass("mi-bottom-l").removeClass("mi-top-l") : n.find("i").addClass("mi-top-l").removeClass("mi-bottom-l");
    n.siblings("content").slideToggle(300)
});
document.addEventListener("DOMContentLoaded", function () {
    helpPage(1)
}, !1);