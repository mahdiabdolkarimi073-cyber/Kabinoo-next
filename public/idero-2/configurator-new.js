function setDefaultDesignObject(n) {
    switch (n) {
        case Category.Library:
            Configurator = {
                CategoryId: n,
                Dimension: { OveralWidth: 158, OveralHeight: 130, OveralDepth: 36 },
                Property: {
                    BackPanelThicknessId: BackPanelThickness._3mm,
                    FeetId: Feet.Yes,
                    FurniturePositionId: FurniturePosition.Inside,
                    HandleItemId: 0,
                    HandleModeId: 0,
                    MaterialItemId: 1549
                },
                SectionList: [{
                    Id: 1,
                    Width: 50,
                    Height: 130,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 2,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 3,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 4,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }, {
                    Id: 2,
                    Width: 50,
                    Height: 130,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 2,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 3,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 4,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }, {
                    Id: 3,
                    Width: 50,
                    Height: 130,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 2,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 3,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 4,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }]
            };
            break;
        case Category.TvStand:
            Configurator = {
                CategoryId: n,
                Dimension: { OveralWidth: 158, OveralHeight: 48, OveralDepth: 45 },
                Property: {
                    BackPanelThicknessId: BackPanelThickness._3mm,
                    FeetId: Feet.Yes,
                    FurniturePositionId: FurniturePosition.Inside,
                    HandleItemId: 0,
                    HandleModeId: 0,
                    MaterialItemId: 1549
                },
                SectionList: [{
                    Id: 1,
                    Width: 50,
                    Height: 48,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 21,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 2,
                        Height: 21,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }, {
                    Id: 2,
                    Width: 50,
                    Height: 48,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 44,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }, {
                    Id: 3,
                    Width: 50,
                    Height: 48,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 44,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }]
            };
            break;
        case Category.Console:
            Configurator = {
                CategoryId: n,
                Dimension: { OveralWidth: 128, OveralHeight: 74, OveralDepth: 45 },
                Property: {
                    BackPanelThicknessId: BackPanelThickness._3mm,
                    FeetId: Feet.Yes,
                    FurniturePositionId: FurniturePosition.Inside,
                    HandleItemId: 0,
                    HandleModeId: 0,
                    MaterialItemId: 1549
                },
                SectionList: [{
                    Id: 1,
                    Width: 40,
                    Height: 74,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 70,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }, {
                    Id: 2,
                    Width: 40,
                    Height: 74,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 70,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }, {
                    Id: 3,
                    Width: 40,
                    Height: 74,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 70,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }]
            };
            break;
        case Category.Closet:
            Configurator = {
                CategoryId: n,
                Dimension: { OveralWidth: 126, OveralHeight: 194, OveralDepth: 60 },
                Property: {
                    BackPanelThicknessId: BackPanelThickness._3mm,
                    FeetId: Feet.Yes,
                    FurniturePositionId: FurniturePosition.Inside,
                    HandleItemId: 0,
                    HandleModeId: 0,
                    MaterialItemId: 1549,
                    ClosetMode: "simple"
                },
                SectionList: [{
                    Id: 1,
                    Width: 60,
                    Height: 194,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 190,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }, {
                    Id: 2,
                    Width: 60,
                    Height: 194,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 190,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }]
            };
            break;
        case Category.Open:
            Configurator = {
                CategoryId: n,
                Dimension: { OveralWidth: 120, OveralHeight: 80, OveralDepth: 60 },
                Property: {
                    BackPanelThicknessId: BackPanelThickness._3mm,
                    FeetId: Feet.Yes,
                    FurniturePositionId: FurniturePosition.Inside,
                    HandleItemId: 0,
                    HandleModeId: 0,
                    MaterialItemId: 1549,
                    HoodId: Hood.No,
                    HoodModeId: HoodMode.Hidden,
                    MicrowaveId: Microwave.No,
                    MicrowaveModeId: MicrowaveMode.BuiltIn
                },
                SectionList: [{
                    Id: 1,
                    Width: 60,
                    Height: 80,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 20,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 2,
                        Height: 20,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 3,
                        Height: 20,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 4,
                        Height: 20,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }, {
                    Id: 2,
                    Width: 60,
                    Height: 80,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 20,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 2,
                        Height: 20,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 3,
                        Height: 20,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 4,
                        Height: 20,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }]
            };
            break;
        case Category.ShoesBox:
            Configurator = {
                CategoryId: n,
                Dimension: { OveralWidth: 106, OveralHeight: 66, OveralDepth: 36 },
                Property: {
                    BackPanelThicknessId: BackPanelThickness._3mm,
                    FeetId: Feet.Yes,
                    FurniturePositionId: FurniturePosition.Inside,
                    HandleItemId: 0,
                    HandleModeId: 0,
                    MaterialItemId: 1549
                },
                SectionList: [{
                    Id: 1,
                    Width: 50,
                    Height: 66,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 2,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }, {
                    Id: 2,
                    Width: 50,
                    Height: 66,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 2,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }]
            };
            break;
        case Category.Drawer:
            Configurator = {
                CategoryId: n,
                Dimension: { OveralWidth: 126, OveralHeight: 98, OveralDepth: 36 },
                Property: {
                    BackPanelThicknessId: BackPanelThickness._3mm,
                    FeetId: Feet.Yes,
                    FurniturePositionId: FurniturePosition.Inside,
                    HandleItemId: 0,
                    HandleModeId: 0,
                    MaterialItemId: 1549
                },
                SectionList: [{
                    Id: 1,
                    Width: 60,
                    Height: 98,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 2,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 3,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }, {
                    Id: 2,
                    Width: 60,
                    Height: 98,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 2,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }, {
                        Id: 3,
                        Height: 30,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }]
            };
            break;
        case Category.BedSideTable:
            Configurator = {
                CategoryId: n,
                Dimension: { OveralWidth: 60, OveralHeight: 58, OveralDepth: 45 },
                Property: {
                    BackPanelThicknessId: BackPanelThickness._3mm,
                    FeetId: Feet.Yes,
                    FurniturePositionId: FurniturePosition.Inside,
                    HandleItemId: 0,
                    HandleModeId: 0,
                    MaterialItemId: 1549
                },
                SectionList: [{
                    Id: 1,
                    Width: 56,
                    Height: 58,
                    ComaprtmentList: [{
                        Id: 1,
                        Height: 26,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: generateNewUniqueCode(),
                        FurnitureId: Furniture.Drawer
                    }, {
                        Id: 2,
                        Height: 26,
                        InteriorId: Interior.Empty,
                        FurnitureUniqueCode: 0,
                        FurnitureId: Furniture.Empty
                    }]
                }]
            }
    }
    drawView();
    window.parent.postMessage({ code: 99, message: 'state', data: Configurator }, '*');
}

function setDesignObject(n) {
    Configurator = JSON.parse(n)
}

function setConfigurator() {
    const isNotNew = InitObject.IsNewDesign() == !1;
    console.log("isNotNew", isNotNew, InitObject)
    isNotNew ? setDesignObject(InitObject.Configurator) : setDefaultDesignObject(InitObject.CategoryId)
}

function generateNewSectionObject(n) {
    for (var i, e, r, o, f = Configurator.SectionList[Configurator.SectionList.length - 1], t = cloneArray(f.ComaprtmentList), u = 0; u < t.length; u++) (i = t[u], i.FurnitureUniqueCode !== 0) && (e = i.FurnitureUniqueCode, r = t.filter(function (n) {
        return n.FurnitureUniqueCode === e
    }), r.length === 1 ? i.FurnitureUniqueCode = generateNewUniqueCode() : r.length > 1 && (o = generateNewUniqueCode(), r.forEach(function (n) {
        n.FurnitureUniqueCode = o
    })));
    return { Id: -1, Width: n, Height: f.Height, ComaprtmentList: t }
}

function generateNewCompartmentObject(n) {
    return { Id: -1, Height: n, FurnitureId: Furniture.Empty, InteriorId: Interior.Empty, FurnitureUniqueCode: 0 }
}

function reAssignSectionsId() {
    for (var n = 0; n < Configurator.SectionList.length; n++) Configurator.SectionList[n].Id = n + 1
}

function reAssignCompartmentsId() {
    for (var i, n, t = 0; t < Configurator.SectionList.length; t++) for (i = getSectionObject(Configurator.SectionList[t].Id), n = 0; n < i.ComaprtmentList.length; n++) i.ComaprtmentList[n].Id = n + 1
}

function cloneConfigurator() {
    return cloneArray(Configurator)
}

function range_wrap(n) {
    $(".range-wrap").each(function () {
        var i = $(this), t = i.children("input"), r = t.attr("min"), u = t.attr("max");
        n === !0 && (i.append(`<i class="r-min">${r}</i>`), i.append(`<i class="r-max">${u}</i>`));
        t.off("input change").on("input change", function () {
            var n = Number((t.val() - r) * 100 / (u - r));
            i.children(".range-value").html("<span>" + t.val() + "<\/span>");
            i.children(".range-value").css("left", n + "%");
            t.css("background", "linear-gradient(to right, #67a898 0%, #67a898 " + n + "%, #fff " + n + "%, white 100%)")
        });
        t.change()
    })
}

function split_range_wrap(n) {
    $(".split-range-wrap").each(function () {
        var i = $(this), t = i.children("input"), u = t.data("val").split(","), f = t.attr("min"), e = t.attr("max"), r;
        if (n === !0) for (i.append('<div class="i-bot"><\/div>'), r = u.length - 1; r >= 0; r--) i.children(".i-bot").append(`<i>${u[r]}</i>`);
        t.on("input change", function () {
            var n = Number((t.val() - f) * 100 / (e - f));
            i.children(".range-value").html('<span id="overalDepthValue">' + u[t.val() - 1] + "<\/span>");
            i.children(".range-value").css("left", n + "%");
            t.css("background", "linear-gradient(to right, #67a898 0%, #67a898 " + n + "%, #fff " + n + "%, white 100%)")
        });
        t.change()
    })
}

function windowMouseUp(n) {
    var t = $("#configuratorView,[data-hideable],#tourPanel");
    t.is(n.target) || t.has(n.target).length !== 0 || TempObject.MouseStatus == MouseStatus.DownOnHorizontalBorder || TempObject.MouseStatus == MouseStatus.DownOnVerticalBorder || TempObject.MouseStatus == MouseStatus.DownOnUpperBorder || hideExtras()
}

function windowResize() {
    var n = ID("configuratorView");
    renderer.setSize(n.clientWidth, n.clientHeight);
    camera.aspect = n.clientWidth / n.clientHeight;
    camera.updateProjectionMatrix();
    TempObject.CurrentWindowWidth != $(window).width() && (togglePageLoaderVisibility(!0), hideExtras(), TempObject.Tour.IsEnabled = !1, TempObject.Tour.CurrentId = 0, drawView(), setUI(), TempObject.CurrentWindowWidth = $(window).width(), rePositionCamera(!0), range_wrap(!1), split_range_wrap(!1), setConfigBasedOnDevice(), togglePageLoaderVisibility(!1))
}

function overalWidthRangeInput() {
    var n = parseInt(this.value), i = Configurator.SectionList.length,
        t = reAssignWidthOfAllSections(makeEqual(n, i, SizeRange.Section.Width.AlgMin, SizeRange.Section.Width.AlgMax), !1);
    t.Code == ResultCode.True ? (Configurator.Dimension.OveralWidth = n, drawView(), generateSectionCountDropDown(), setUI(), Calculate(), changePersonagePosition()) : t.Code == ResultCode.False && (this.value = Configurator.Dimension.OveralWidth)
}

function overalWidthRangeMouseUp() {
    setNewAction();
    rePositionCamera()
}

function overalHeightRangeMouseUp() {
    setNewAction();
    rePositionCamera()
}

function overalHeightRangeInput() {
    for (var n, t, u, f = parseInt(this.value), o = getMaxSectionHeight(), r = f - o, e = [], i = 0; i < Configurator.SectionList.length; i++) e.push({
        SectionId: Configurator.SectionList[i].Id,
        Height: Configurator.SectionList[i].Height + r
    });
    if (n = changeSectionHeight(e), n.Code == ResultCode.True) {
        for (t = 0; t < n.Value.length; t++) u = getSectionObject(n.Value[t].SectionId), r = n.Value[t].Height - u.Height, u.Height += r;
        Configurator.Dimension.OveralHeight = f;
        setSectionHeightRange();
        drawView();
        generateSectionCountDropDown();
        setUI();
        Calculate()
    } else n.Code == ResultCode.False && (this.value = Configurator.Dimension.OveralHeight)
}

function closetModeInputInput() {
    var isStepped = this.checked;
    Configurator.Property = Configurator.Property || {};
    Configurator.Property.ClosetMode = isStepped ? "stepped" : "simple";
    drawView();
    setNewAction();
    Calculate()
}

function hoodInputInput() {
    var hasHood = this.checked;
    Configurator.Property.HoodId = hasHood ? Hood.Yes : Hood.No;
    ID("hoodModeWrapper").style.display = hasHood ? "" : "none";
    if (!hasHood) {
        Configurator.Property.HoodModeId = HoodMode.Hidden;
        $("#hoodModeInput").prop("checked", false);
    }
    drawView();
    setNewAction();
    Calculate()
}

function hoodModeInputInput() {
    Configurator.Property.HoodModeId = this.checked ? HoodMode.Exposed : HoodMode.Hidden;
    drawView();
    setNewAction();
    Calculate()
}

function microwaveInputInput() {
    var hasMicrowave = this.checked;
    Configurator.Property.MicrowaveId = hasMicrowave ? Microwave.Yes : Microwave.No;
    ID("microwaveModeWrapper").style.display = hasMicrowave ? "" : "none";
    if (!hasMicrowave) {
        Configurator.Property.MicrowaveModeId = MicrowaveMode.BuiltIn;
        $("#microwaveModeInput").prop("checked", false);
    }
    drawView();
    setNewAction();
    Calculate()
}

function microwaveModeInputInput() {
    Configurator.Property.MicrowaveModeId = this.checked ? MicrowaveMode.Exposed : MicrowaveMode.BuiltIn;
    drawView();
    setNewAction();
    Calculate()
}

function overalDepthRangeMouseUp() {
    setNewAction()
}

function overalDepthRangeInput() {
    var t = parseInt(ID("overalDepthValue").innerText), n = chekcItemsByDepthChange(t);
    switch (n.Code) {
        case ResultCode.UserIsDisagree:
            return setOveralDepth(), !1;
        case ResultCode.UserIsAgree:
            removeFurnitures(n.Value.FurnitureArray);
            removeInteriors(n.Value.InteriorArray)
    }
    Configurator.Dimension.OveralDepth = t;
    drawView();
    setUI();
    Calculate()
}

function sectionCountDropDownInput() {
    var t = parseInt(this.value), i = Configurator.Dimension.OveralWidth,
        n = reAssignWidthOfAllSections(makeEqual(i, t, SizeRange.Section.Width.Min, SizeRange.Section.Width.Max), !0);
    n.Code == ResultCode.True ? (drawView(), setNewAction(), Calculate()) : n.Code == ResultCode.False && (this.value = Configurator.SectionList.length)
}

function txtCompartmentHeightInput() {
    txtCompartmentHeight(this.value, this)
}

function txtCompartmentCountInput() {
    var i = parseInt(this.value), n = TempObject.SectionId, r = getSectionObject(n),
        u = makeEqual(r.Height, i, SizeRange.Compartment.Height.Min, SizeRange.Compartment.Height.Max),
        t = reAssignHeightOfAllCompartments([{ SectionId: n, CompartmentHeightArray: u }]);
    t.Code == ResultCode.True ? (drawView(), setNewAction(), Calculate()) : t.Code == ResultCode.False && (this.value = getSectionObject(n).ComaprtmentList.length)
}

function txtSectionWidthInput() {
    txtSectionWidth(this.value, this)
}

function txtSectionHeightInput() {
    txtSectionHeight(this.value, this)
}

function bptInputInput() {
    var n = this.checked;
    n == !1 ? Configurator.Property.BackPanelThicknessId = BackPanelThickness._3mm : n == !0 && (Configurator.Property.BackPanelThicknessId = BackPanelThickness._16mm);
    drawView();
    setNewAction();
    Calculate()
}

function fpInputInput(n) {
    var t = this.checked;
    t == !1 ? Configurator.Property.FurniturePositionId = FurniturePosition.Outside : t == !0 && (Configurator.Property.FurniturePositionId = FurniturePosition.Inside);
    showTooltip(n.target, "fpInput", t);
    drawView();
    setNewAction();
    Calculate()
}

function feetInputInput(n) {
    var t = this.checked;
    t == !1 ? Configurator.Property.FeetId = Feet.No : t == !0 && (Configurator.Property.FeetId = Feet.Yes);
    showTooltip(n.target, "feetInput", t);
    setNewAction();
    Calculate();
    drawView();
    toggleFeetHint()
}

function handleInputInput() {
    handleInputEvent();
    setNewAction()
}

function nextTourClick() {
    TempObject.Tour.CurrentId++;
    showTour()
}

function exitTourCLick() {
    TempObject.Tour.CurrentId = 0;
    TempObject.Tour.IsEnabled = !1;
    showTour()
}

function btnTourClick() {
    TempObject.Tour.CurrentId = 1;
    TempObject.Tour.IsEnabled = !0;
    CurrentViewMode = ViewMode.Main;
    drawView();
    showTour()
}

function windowFocus() {
    firstFrameId = renderer.info.render.frame;
    firstSeconds = performance.now() / 1e3
}

function makeEqual(n, t, i, r) {
    var u, f, e;
    for (n -= (t + 1) * SizeRange.Thickness, u = Math.floor(n / t); u > r;) n -= SizeRange.Thickness, u = Math.floor(n / ++t);
    while (u < i && t > 1) n += SizeRange.Thickness, u = Math.floor(n / --t);
    for (f = [], e = 0; e < t - 1; e++) f.push(u);
    return f.push(n - (t - 1) * u), f.length == 1 && f[0] < i && (f[0] = i), f
}

function makeUnEqual(n, t, i, r, u) {
    var h, f, c, o, s, e;
    if (i < r || i > u) return n;
    for (h = n[t], f = i - h, n[t] = i, c = t + 1, o = t + 1; o < n.length; o++) if (e = n[o] - r, e <= f) n[o] = r, f -= e; else return n[o] -= f, n;
    for (s = t - 1; s >= 0; s--) if (e = n[s] - r, e == 0 && f >= 0) continue; else if (e <= f) n[s] = r, f -= e; else return n[s] -= f, n;
    return n
}

function reAssignWidthOfAllSections(n, t) {
    var r, i, f, u;
    if (checkSectionWidthListRange(n, t).Code == ResultCode.False) return Result(ResultCode.False);
    r = chekcItemsByWidthChange(n);
    switch (r.Code) {
        case ResultCode.UserIsDisagree:
            return Result(ResultCode.False);
        case ResultCode.UserIsAgree:
            removeFurnitures(r.Value.FurnitureArray);
            removeInteriors(r.Value.InteriorArray)
    }
    if (n.length == Configurator.SectionList.length) for (i = 0; i < n.length; i++) Configurator.SectionList[i].Width = n[i]; else if (n.length < Configurator.SectionList.length) {
        for (i = 0; i < n.length; i++) Configurator.SectionList[i].Width = n[i];
        Configurator.SectionList.length = n.length
    } else if (n.length > Configurator.SectionList.length) {
        for (i = 0; i < Configurator.SectionList.length; i++) Configurator.SectionList[i].Width = n[i];
        for (f = Configurator.SectionList.length, u = f; u < n.length; u++) Configurator.SectionList.push(generateNewSectionObject(n[u]));
        reAssignSectionsId()
    }
    return Result(ResultCode.True)
}

function reAssignHeightOfAllCompartments(n, t) {
    var e, f, r, u, i, s, o;
    if (t) for (i = 0; i < n.length; i++) {
        var h = n[i].CompartmentHeightArray, l = getSectionObject(n[i].SectionId),
            c = checkSumOfCompartmentsHeight(t, h);
        if (c.Code == ResultCode.False) return Result(ResultCode.False)
    }
    e = chekcItemsByHeightChange(n);
    switch (e.Code) {
        case ResultCode.UserIsDisagree:
            return Result(ResultCode.False);
        case ResultCode.UserIsAgree:
            removeFurnitures(e.Value.FurnitureArray);
            removeInteriors(e.Value.InteriorArray)
    }
    for (f = 0; f < n.length; f++) if (r = n[f].CompartmentHeightArray, u = getSectionObject(n[f].SectionId), r.length == u.ComaprtmentList.length) for (i = 0; i < r.length; i++) u.ComaprtmentList[i].Height = r[i]; else if (r.length < u.ComaprtmentList.length) {
        for (i = 0; i < r.length; i++) u.ComaprtmentList[i].Height = r[i];
        u.ComaprtmentList.length = r.length
    } else if (r.length > u.ComaprtmentList.length) {
        for (i = 0; i < u.ComaprtmentList.length; i++) u.ComaprtmentList[i].Height = r[i];
        for (s = u.ComaprtmentList.length, o = s; o < r.length; o++) u.ComaprtmentList.unshift(generateNewCompartmentObject(r[o]));
        reAssignCompartmentsId()
    }
    return Result(ResultCode.True)
}

function changeSectionHeight(n) {
    for (var i, u, r = [], t = 0; t < n.length; t++) {
        if (i = getSectionObject(n[t].SectionId), i == null) return Result(ResultCode.False);
        n[t].Height = getSectionHeightInRange(n[t].Height);
        r.push({
            SectionId: i.Id,
            CompartmentHeightArray: makeEqual(n[t].Height, i.ComaprtmentList.length, SizeRange.Compartment.Height.Min, SizeRange.Compartment.Height.Max)
        })
    }
    return u = reAssignHeightOfAllCompartments(r), Result(u.Code, n)
}

function getValidWidth(n, t, i, r) {
    var u = n - ((t - 1) * i + (t + 1) * SizeRange.Thickness), i;
    return u = Math.min(u, r), i = t > 1 ? i : u, { Max: u, Min: i }
}

function getValidCountRange(n, t, i, r) {
    var u = parseInt((n - SizeRange.Thickness) / (t + SizeRange.Thickness)), f;
    return u = Math.min(u, r), f = makeEqual(n, 1, t, i).length, { Max: u, Min: f }
}

function canUseFurniture(n, t, i) {
    return canUseFurnitureByHeight(n, i) && canUseFurnitureByWidth(t, i) && canUseFurnitureByDepth(Configurator.Dimension.OveralDepth, i)
}

function canUseFurnitureByWidth(n, t) {
    switch (t) {
        case Furniture.Empty:
            return !0;
        case Furniture.Door:
            return n >= SizeRange.SingleDoor.Width.Min && n <= SizeRange.SingleDoor.Width.Max;
        case Furniture.DoubleDoor:
            return n >= SizeRange.DoubleDoor.Width.Min && n <= SizeRange.DoubleDoor.Width.Max;
        case Furniture.Drawer:
            return n >= SizeRange.Drawer.Width.Min && n <= SizeRange.Drawer.Width.Max;
        case Furniture.Flap:
            return n >= SizeRange.Flap.Width.Min && n <= SizeRange.Flap.Width.Max
    }
}

function canUseFurnitureByHeight(n, t) {
    switch (t) {
        case Furniture.Empty:
            return !0;
        case Furniture.Door:
            return n >= SizeRange.SingleDoor.Height.Min && n <= SizeRange.SingleDoor.Height.Max;
        case Furniture.DoubleDoor:
            return n >= SizeRange.DoubleDoor.Height.Min && n <= SizeRange.DoubleDoor.Height.Max;
        case Furniture.Drawer:
            return n >= SizeRange.Drawer.Height.Min && n <= SizeRange.Drawer.Height.Max;
        case Furniture.Flap:
            return n >= SizeRange.Flap.Height.Min && n <= SizeRange.Flap.Height.Max
    }
}

function canUseFurnitureByDepth(n, t) {
    switch (t) {
        case Furniture.Empty:
            return !0;
        case Furniture.Door:
            return !0;
        case Furniture.DoubleDoor:
            return !0;
        case Furniture.Drawer:
            return n >= SizeRange.Drawer.Depth.Min;
        case Furniture.Flap:
            return !0
    }
}

function canUseInterior(n, t, i) {
    return canUseInteriorByHeight(n, i) && canUseInteriorByWidth(t, i) && canUseInteriorByDepth(Configurator.Dimension.OveralDepth, i)
}

function canUseInteriorByWidth(n, t) {
    switch (t) {
        case Interior.Empty:
            return !0;
        case Interior.ClotheHanger:
            return n >= SizeRange.Interior.ClotheHanger.Width.Min;
        case Interior.InsideDrawer:
            return n >= SizeRange.Interior.InsideDrawer.Width.Min && n <= SizeRange.Interior.InsideDrawer.Width.Max;
        case Interior.Regal:
            return n >= SizeRange.Interior.Regal.Width.Min;
        case Interior.VerticalDivider:
            return n >= SizeRange.Interior.VerticalDivider.Width.Min
    }
}

function canUseInteriorByHeight(n, t) {
    switch (t) {
        case Interior.Empty:
            return !0;
        case Interior.ClotheHanger:
            return n >= SizeRange.Interior.ClotheHanger.Height.Min;
        case Interior.InsideDrawer:
            return n >= SizeRange.Interior.InsideDrawer.Height.Min && n <= SizeRange.Interior.InsideDrawer.Height.Max;
        case Interior.Regal:
            return n >= SizeRange.Interior.Regal.Height.Min;
        case Interior.VerticalDivider:
            return n >= SizeRange.Interior.VerticalDivider.Height.Min
    }
}

function canUseInteriorByDepth(n, t) {
    switch (t) {
        case Interior.Empty:
            return !0;
        case Interior.ClotheHanger:
            return !0;
        case Interior.InsideDrawer:
            return n >= SizeRange.Interior.InsideDrawer.Depth.Min;
        case Interior.Regal:
            return !0;
        case Interior.VerticalDivider:
            return !0
    }
}

function removeFurnitures(n) {
    for (var i, r, t = 0; t < n.length; t++) for (i = 0; i < n[t].CompartmentIdList.length; i++) r = getCompartmentObject(n[t].SectionId, n[t].CompartmentIdList[i]), r.FurnitureId = Furniture.Empty, r.FurnitureUniqueCode = 0
}

function removeInteriors(n) {
    for (var i, t = 0; t < n.length; t++) i = getCompartmentObject(n[t].SectionId, n[t].CompartmentId), i.InteriorId = Interior.Empty
}

function generateNumberSet(n, t) {
    for (var u = Math.min(n, t), f = Math.max(n, t), r = [], i = u; i <= f; i++) r.push(i);
    return r
}

function extendCompartments(n, t) {
    t = removeDuplicates(t);
    var f = getCompartmentObject(n, t[0]), e = getCompartmentObject(n, t[t.length - 1]), r = [], u = [], i = [];
    return f.FurnitureUniqueCode > 0 && (r = getCompartmentIdListByUniqueCode(n, f.FurnitureUniqueCode)), e.FurnitureUniqueCode > 0 && (u = getCompartmentIdListByUniqueCode(n, e.FurnitureUniqueCode)), i.push.apply(i, t), r.length > 0 && i.push.apply(i, r), u.length > 0 && i.push.apply(i, u), i = removeDuplicates(i), i.sort(function (n, t) {
        return n - t
    })
}

function txtCompartmentHeight(n, t, i) {
    var r;
    if (TempObject.CanChangeCompartmentHeight != !1 && (r = checkCompartmentHeightRange(n).Code, r != ResultCode.False)) {
        r == ResultCode.True && (TempObject.LastValidValue = n);
        var f = parseInt(n), e = getCompartmentHeightList(TempObject.SectionId),
            o = makeUnEqual(e, getIndexOfCompartmentById(TempObject.SectionId, TempObject.StartCompartmentId), f, SizeRange.Compartment.Height.Min, SizeRange.Compartment.Height.Max),
            s = getSectionObject(TempObject.SectionId), u = reAssignHeightOfAllCompartments([{
                SectionId: TempObject.SectionId,
                CompartmentHeightArray: o
            }], s.Height);
        drawView();
        u.Code == ResultCode.True ? (t && furniturUsability(TempObject.SectionId, TempObject.CompartmentIdList), (i === undefined || i === !0) && setNewAction(), Calculate()) : u.Code == ResultCode.False && t && (t.value = getCompartmentObject(TempObject.SectionId, TempObject.StartCompartmentId).Height)
    }
}

function txtSectionHeight(n, t, i) {
    var f = checkSectionHeightRange(n).Code, e, r, u, o;
    f != ResultCode.False && (f == ResultCode.True && (TempObject.LastValidValue = n), e = parseInt(n), r = changeSectionHeight([{
        SectionId: TempObject.SectionId,
        Height: e
    }]), r.Code == ResultCode.True ? (u = getSectionObject(TempObject.SectionId), o = r.Value[0].Height - u.Height, u.Height += o, drawView(), (i === undefined || i === !0) && setNewAction(), Calculate()) : r.Code == ResultCode.False && t && (t.value = getSectionObject(TempObject.SectionId).Height))
}

function txtSectionWidth(n, t, i) {
    var u = parseInt(n), f = getSectionWidthList(), e = getIndexOfSectionById(TempObject.SectionId),
        o = makeUnEqual(f, e, u, SizeRange.Section.Width.Min, SizeRange.Section.Width.Max),
        r = reAssignWidthOfAllSections(o, !0);
    r.Code == ResultCode.True ? (drawView(), setTxtSectionWidthUI(n), (i === undefined || i === !0) && setNewAction(), Calculate()) : r.Code == ResultCode.False && t && (t.value = getSectionObject(TempObject.SectionId).Width)
}

function needInstallation() {
    ProductObject.NeedInstall = 1;
    var n = Configurator.Dimension.OveralWidth, t = Configurator.SectionList.map(function (n) {
        return n.Height
    });
    return Configurator.CategoryId === Category.Closet ? !0 : n >= 400 ? !0 : t.filter(function (n) {
        return n >= 220
    }).length > 0 ? !0 : t.filter(function (t) {
        return t >= 180 && t < 220 && (t / n >= 4 || n >= 150)
    }).length > 0 ? !0 : t.filter(function (t) {
        return t >= 150 && t < 180 && t / n >= 3
    }).length > 0 ? !0 : t.filter(function (t) {
        return t >= 100 && t < 150 && n >= 200
    }).length > 0 ? !0 : t.filter(function (t) {
        return t >= 75 && t < 100 && n >= 220
    }).length > 0 ? !0 : t.filter(function (t) {
        return t >= 50 && t < 75 && n >= 250
    }).length > 0 ? !0 : t.filter(function (t) {
        return t >= 25 && t < 50 && n >= 300
    }).length > 0 ? !0 : (ProductObject.NeedInstall = 0, !1)
}

function getMaxSectionHeight() {
    for (var t = [], n = 0; n < Configurator.SectionList.length; n++) t.push(Configurator.SectionList[n].Height);
    return Math.max.apply(null, t)
}

function getCompartmentHeightList(n) {
    for (var i = getSectionObject(n), r = [], t = 0; t < i.ComaprtmentList.length; t++) r.push(i.ComaprtmentList[t].Height);
    return r
}

function getSectionWidthList() {
    for (var t = [], n = 0; n < Configurator.SectionList.length; n++) t.push(Configurator.SectionList[n].Width);
    return t
}

function getSectionHeightList() {
    for (var t = [], n = 0; n < Configurator.SectionList.length; n++) t.push(Configurator.SectionList[n].Height);
    return t
}

function getIndexOfCompartmentById(n, t) {
    var i = getSectionObject(n);
    return i.ComaprtmentList.findIndex(function (n) {
        return n.Id == t
    })
}

function getIndexOfSectionById(n) {
    return Configurator.SectionList.findIndex(function (t) {
        return t.Id == n
    })
}

function getValidCompartmentHeightRangeBySection(n) {
    var t = getSectionObject(n), i = t.ComaprtmentList.length;
    return getValidWidth(t.Height, i, SizeRange.Compartment.Height.Min, SizeRange.Compartment.Height.Max)
}

function getValidSectionWidthRange() {
    return getValidWidth(Configurator.Dimension.OveralWidth, Configurator.SectionList.length, SizeRange.Section.Width.Min, SizeRange.Section.Width.Max)
}

function getValidCountRangeByOveral() {
    return getValidCountRange(Configurator.Dimension.OveralWidth, SizeRange.Section.Width.Min, SizeRange.Section.Width.Max, SizeRange.Section.Count.Max)
}

function getValidCountRangeBySection(n) {
    var t = getSectionObject(n);
    return getValidCountRange(t.Height, SizeRange.Compartment.Height.Min, SizeRange.Compartment.Height.Max, SizeRange.Compartment.Count.Max)
}

function getClasses(n, t) {
    var u = getCompartmentObject(n, t), r = getCompartmentIdListByUniqueCode(n, u.FurnitureUniqueCode), i = "";
    if (u.FurnitureId != Furniture.Empty && r.length > 1 && u.Id != r[r.length - 1] && (i += " furnitured no-top-border no-bottom-border "), u.FurnitureId != Furniture.Empty && r.length > 1 && u.Id == r[r.length - 1] && (i += " no-top-border "), r.length == 1 || r.length > 1 && u.Id == r[r.length - 1]) switch (u.FurnitureId) {
        case Furniture.Empty:
            i += "";
            break;
        case Furniture.Door:
            i += " furnitured door";
            break;
        case Furniture.DoubleDoor:
            i += " furnitured double-door";
            break;
        case Furniture.Drawer:
            i += " furnitured drawer";
            break;
        case Furniture.Flap:
            i += " furnitured flap";
            break;
        default:
            i += ""
    }
    i += " ";
    switch (u.InteriorId) {
        case Interior.Empty:
            i += "";
            break;
        case Interior.ClotheHanger:
            i += "interiored clothe-hanger";
            break;
        case Interior.InsideDrawer:
            i += "interiored inside-drawer";
            break;
        case Interior.Regal:
            i += "interiored regal";
            break;
        case Interior.VerticalDivider:
            i += "interiored vertical-divider";
            break;
        default:
            i += ""
    }
    return i
}

function getCompartmentIdListByUniqueCode(n, t) {
    for (var r, u = [], f = getSectionObject(n), i = 0; i < f.ComaprtmentList.length; i++) r = f.ComaprtmentList[i], r.FurnitureUniqueCode == t && u.push(r.Id);
    return removeDuplicates(u)
}

function getShelfParameters() {
    var n = Math.ceil((Price2.Area.Body + Price2.Area.Furniture) * .016 * 720), t = 0, i, r;
    return Configurator.Property.BackPanelThicknessId == BackPanelThickness._16mm ? t = Math.ceil(Price2.Area.BackPanel * .016 * 720) : Configurator.Property.BackPanelThicknessId == BackPanelThickness._3mm && (t = 0), n = n - n % 10 + 10, i = 50, r = n + t, ProductObject.TolerableWeight = i, ProductObject.Weight = r, {
        Height: Configurator.Dimension.OveralHeight,
        Width: Configurator.Dimension.OveralWidth,
        Depth: Configurator.Dimension.OveralDepth,
        Load: i,
        Weight: r
    }
}

function getSectionHeightInRange(n) {
    return n < SizeRange.Section.Height.Min ? SizeRange.Section.Height.Min : n
}

function getClientX(n) {
    return n.changedTouches ? n.changedTouches[0].clientX : n.clientX
}

function getClientY(n) {
    return n.changedTouches ? n.changedTouches[0].clientY : n.clientY
}

function getColorOrPattern() {
}

function getCapacity() {
    for (var n, t, u, r = 0, f = Configurator.Dimension.OveralDepth, i = 0; i < Configurator.SectionList.length; i++) for (n = Configurator.SectionList[i], t = 0; t < n.ComaprtmentList.length; t++) u = n.ComaprtmentList[t], r += n.Width * u.Height * f;
    return FixNumber(r / 1e6)
}

function getLargestCompartmentSize() {
    for (var n, t, u, i = 0, f = 0, e = Configurator.Dimension.OveralDepth, o = {
        Width: 0,
        Height: 0,
        Depth: 0
    }, r = 0; r < Configurator.SectionList.length; r++) for (n = Configurator.SectionList[r], t = 0; t < n.ComaprtmentList.length; t++) u = n.ComaprtmentList[t], i = n.Width * u.Height * e, i > f && (f = i, o = {
        Width: n.Width,
        Height: u.Height,
        Depth: e
    });
    return o
}

function getSmallestCompartmentSize() {
    for (var n, t, f, i = 0, e = Configurator.Dimension.OveralWidth * Configurator.Dimension.OveralHeight * Configurator.Dimension.OveralDepth, r = Configurator.Dimension.OveralDepth, o = {
        Width: Configurator.SectionList[0].Width,
        Height: Configurator.SectionList[0].ComaprtmentList[0].Height,
        Depth: r
    }, u = 0; u < Configurator.SectionList.length; u++) for (n = Configurator.SectionList[u], t = 0; t < n.ComaprtmentList.length; t++) f = n.ComaprtmentList[t], i = n.Width * f.Height * r, i < e && (e = i, o = {
        Width: n.Width,
        Height: f.Height,
        Depth: r
    });
    return o
}

function getProductOtherObjects() {
    var n = getLargestCompartmentSize(), t = getSmallestCompartmentSize();
    ProductObject.Capacity = getCapacity();
    ProductObject.LargestCompartment = n.Width + " * " + n.Height + " * " + n.Depth;
    ProductObject.SmallestCompartment = t.Width + " * " + t.Height + " * " + t.Depth;
    ProductObject.Board16MilMeter = FixNumber(ProductObject.Board16MilMeter);
    ProductObject.Board3MilMeter = FixNumber(ProductObject.Board3MilMeter)
}

function drawView() {
    switch (CurrentViewMode) {
        case ViewMode.Main:
            drawMainView();
            break;
        case ViewMode.Sizing:
            drawSizingView()
    }
    finalizeDesignUI()
}

function drawMainView() {
    createConfiguratorMesh()
}

function drawSizingView() {
    var f = ID("configuratorView"), v = Configurator.Dimension.OveralWidth, y = Configurator.Dimension.OveralHeight,
        s = f.getBoundingClientRect(), p = Math.min((s.width - 50) / v, (s.height - 150) / y, 2), t, r, o, u, n;
    TempObject.ScaleFactor.Sizing = p;
    var h = getMaxSectionHeight(), c = 1,
        i = '<div class="size-wrapper"><div class="size-conf-depth" style="width:' + TempObject.ScaleFactor.Sizing * Configurator.Dimension.OveralDepth + "px; height:" + TempObject.ScaleFactor.Sizing * h + 'px"><span class="size-conf-depth-value">' + Configurator.Dimension.OveralDepth + '<\/span><span class="size-conf-height-value">' + h + '<\/span><\/div><table id = "sizingViewTable" ><tbody><tr>',
        l = "", e = "",
        a = "وجود پایه‌ها برای تراز شدن محصول شما ضروری است.  توجه کنید که پایه‌ها بین 3 تا 5 سانتی متر محصول شما را بلندتر می‌کند؛ یعنی بیشینه ارتفاع محصول شما " + (Configurator.Dimension.OveralHeight + 5) + " سانتی متر است. ";
    for (t = 0; t < Configurator.SectionList.length; t++) {
        for (r = Configurator.SectionList[t], i += '<td style="width:' + TempObject.ScaleFactor.Sizing * r.Width + 'px">', l += '<td  style="width:' + TempObject.ScaleFactor.Sizing * r.Width + 'px;"><div><span class="size-sec-width">' + r.Width + "<\/span><\/div><\/td>", e += Configurator.SectionList.length == 1 ? '<td class="feet-single"><\/td>' : t == 0 ? '<td class="feet-right"><\/td>' : t == Configurator.SectionList.length - 1 ? '<td class="feet-left"><\/td>' : "<td><\/td>", n = 0; n < Configurator.SectionList[t].ComaprtmentList.length; n++) o = Configurator.SectionList[t].ComaprtmentList[n], i += '<div style="height:' + TempObject.ScaleFactor.Sizing * o.Height + 'px;"><span class="size-comp-count">' + c + '<\/span><span  class="size-comp-height">' + o.Height + "<\/span><\/div>", ++c;
        i += "<\/td>"
    }
    for (Configurator.Property.FeetId == Feet.No && (e = "", a = ""), i += "<\/tr><\/tbody><tfoot><tr>" + e + "<\/tr><tr>" + l + '<\/tr><tr><td colspan="' + Configurator.SectionList.length + '"><div class="size-conf-width">' + Configurator.Dimension.OveralWidth + '<\/div><\/td><\/tr><tr><td colspan="' + Configurator.SectionList.length + '"><div style="max-width: fit-content;" data-feet-hint>' + a + "<\/div><\/td><\/tr><\/tfoot><\/table>", u = removeDuplicates(getSectionHeightList()).sort(function (n, t) {
        return n - t
    }), n = 0; n < u.length; n++) i += '<div class="size-conf-height" style="height:' + TempObject.ScaleFactor.Sizing * u[n] + 'px"><span class="value">' + u[n] + "<span><\/div>";
    i += "<\/div>";
    f.innerHTML = "";
    f.insertAdjacentHTML("beforeend", i)
}

function finalizeDesignUI() {
    CurrentViewMode === ViewMode.Sizing && ($("#sizingViewTable").css({ "border-spacing": "" + TempObject.ScaleFactor.Sizing * 3 + "px 0px" }), $("#sizingViewTable tbody div").css({ "border-width": "" + TempObject.ScaleFactor.Sizing * 1 + "px " + TempObject.ScaleFactor.Sizing * 2 + "px" }), $("#sizingViewTable tbody td div:first-child()").css({ "border-top-width": "" + TempObject.ScaleFactor.Sizing * 2 + "px" }), $("#sizingViewTable tbody td div:last-child()").css({ "border-bottom-width": "" + TempObject.ScaleFactor.Sizing * 2 + "px" }))
}

function setUI() {
    var i = $("#overalWidthRange"), t, u, r, n, f, e;
    i.attr("min", SizeRange.OveralWidth.Min);
    i.attr("max", SizeRange.OveralWidth.Max);
    i.val(Configurator.Dimension.OveralWidth);
    i.change();
    t = $("#overalHeightRange");
    t.attr("min", SizeRange.OveralHeight.Min);
    t.attr("max", SizeRange.OveralHeight.Max);
    if (Configurator.CategoryId === Category.Open) {
        t.attr("max", 90);
        if (Configurator.Dimension.OveralHeight > 90) {
            Configurator.Dimension.OveralHeight = 90;
        }
    }
    t.val(Configurator.Dimension.OveralHeight);
    t.change();
    generateSectionCountDropDown();
    ID("sectionCountDropDown").value = Configurator.SectionList.length;
    $("#fpInput").prop("checked", Configurator.Property.FurniturePositionId == FurniturePosition.Inside ? !0 : !1);
    $("#bptInput").prop("checked", Configurator.Property.BackPanelThicknessId == BackPanelThickness._16mm ? !0 : !1);
    $("#feetInput").prop("checked", Configurator.Property.FeetId == Feet.Yes ? !0 : !1);
    $("#handleInput").prop("checked", Configurator.Property.HandleItemId != 0 ? !0 : !1);
    $("#handleModeInput").prop("checked", Configurator.Property.HandleModeId == HandleMode.Hidden ? !0 : !1);
    var handleModeWrapper = ID("handleModeWrapper");
    if (handleModeWrapper) {
        handleModeWrapper.style.display = Configurator.Property.HandleItemId != 0 ? "" : "none";
    }
    var closetModeContainer = ID("closetModeContainer");
    if (closetModeContainer) {
        closetModeContainer.style.display = Configurator.CategoryId === Category.Closet ? "" : "none";
    }
    if (Configurator.CategoryId === Category.Closet) {
        $("#closetModeInput").prop("checked", Configurator.Property.ClosetMode === "stepped" ? !0 : !1);
    }
    var hoodContainer = ID("hoodContainer");
    if (hoodContainer) {
        hoodContainer.style.display = Configurator.CategoryId === Category.Open ? "" : "none";
    }
    var microwaveContainer = ID("microwaveContainer");
    if (microwaveContainer) {
        microwaveContainer.style.display = Configurator.CategoryId === Category.Open ? "" : "none";
    }
    var hoodMobileBtn = ID("hoodMobileBtn");
    if (hoodMobileBtn) {
        hoodMobileBtn.style.display = Configurator.CategoryId === Category.Open ? "" : "none";
    }
    var microwaveMobileBtn = ID("microwaveMobileBtn");
    if (microwaveMobileBtn) {
        microwaveMobileBtn.style.display = Configurator.CategoryId === Category.Open ? "" : "none";
    }
    var closetModeMobileBtn = ID("closetModeMobileBtn");
    if (closetModeMobileBtn) {
        closetModeMobileBtn.style.display = Configurator.CategoryId === Category.Closet ? "" : "none";
    }
    if (Configurator.Property.HoodId !== undefined) {
        $("#hoodInput").prop("checked", Configurator.Property.HoodId == Hood.Yes);
        $("#hoodModeInput").prop("checked", Configurator.Property.HoodModeId == HoodMode.Exposed);
        ID("hoodModeWrapper").style.display = Configurator.Property.HoodId == Hood.Yes ? "" : "none";
    }
    if (Configurator.Property.MicrowaveId !== undefined) {
        $("#microwaveInput").prop("checked", Configurator.Property.MicrowaveId == Microwave.Yes);
        $("#microwaveModeInput").prop("checked", Configurator.Property.MicrowaveModeId == MicrowaveMode.Exposed);
        ID("microwaveModeWrapper").style.display = Configurator.Property.MicrowaveId == Microwave.Yes ? "" : "none";
    }
    n = getMaterialObjectByItemId(Configurator.Property.MaterialItemId);
    n.Code == ResultCode.True ? (updateSelectedMaterialUI(n.Value.Id), setDesignColor(n.Value.Color, n.Value.UseImage)) : n.Code == ResultCode.False && (u = updateSelectedMaterialUI(), r = getMaterialByObjectId(u), setDesignColor(r.Value.Color, r.Value.UseImage), Configurator.Property.MaterialItemId = r.Value.ItemId, alert("رنگ استفاده شده در طراحی این محصول غیرفعال است، لطفا رنگ دیگری انتخاب کنید"));
    Configurator.Property.HandleItemId > 0 ? (n = getHandleObjectByItemId(Configurator.Property.HandleItemId), n.Code == ResultCode.True ? updateSelectedHandleUI(n.Value.Id) : n.Code == ResultCode.False && (f = updateSelectedHandleUI(), e = getHandleByObjectId(f), Configurator.Property.HandleItemId = e.Value.ItemId, alert("دستگیره استفاده شده در طراحی این محصول غیرفعال است، لطفا مدل دستگیره دیگری انتخاب کنید"))) : handleInputEvent("false")
}

function setOveralDepth(n) {
    n = n || Configurator.Dimension.OveralDepth;
    var vals = getDepthValuesForCategory(Configurator.CategoryId);
    var depthEl = $("#overalDepthRange");
    depthEl.attr("max", vals.length);
    depthEl.data("val", vals.join(","));
    ID("overalDepthValue").innerText = n;
    var i = vals.indexOf("" + n);
    depthEl.val(i + 1);
    depthEl.change();
    var wrap = depthEl.closest(".split-range-wrap");
    if (wrap.length) {
        wrap.find(".i-bot").remove();
        for (var r = vals.length - 1; r >= 0; r--) wrap.append('<i style="display:none">' + vals[r] + '</i>');
        wrap.find(".i-bot").remove();
        var bot = $('<div class="i-bot"></div>');
        for (var r2 = vals.length - 1; r2 >= 0; r2--) bot.append('<i>' + vals[r2] + '</i>');
        wrap.append(bot);
    }
    var noteEl = ID("depthNote");
    if (Configurator.CategoryId === Category.Closet) {
        noteEl.innerText = "عمق ۶۰ سانتی‌متر برای کمد زمینی مناسب است";
        noteEl.style.display = "";
    } else {
        noteEl.innerText = "";
        noteEl.style.display = "none";
    }
}

function getDepthValuesForCategory(catId) {
    switch (catId) {
        case Category.Closet:
            return [30, 35, 60];
        case Category.Open:
            return [60, 80, 90, 100];
        default:
            return [25, 36, 45, 60, 70];
    }
}

function generateSectionCountDropDown() {
    for (var t = "", i = getValidCountRangeByOveral(), n = i.Min; n < i.Max + 1; n++) t += '<option value="' + n + '">' + n + "<\/option>";
    ID("sectionCountDropDown").innerHTML = t
}

function fillCompartmentCountDropDown(n) {
    var t = getValidCountRangeBySection(n.Id);
    ID("txtCompartmentCount").min = t.Min;
    ID("txtCompartmentCount").max = t.Max;
    ID("txtCompartmentCount").value = n.ComaprtmentList.length
}

function fillCompartmentHeightDropDown(n, t) {
    if (t.length == 1) {
        TempObject.CanChangeCompartmentHeight = !0;
        ID("txtCompartmentHeight").classList.remove("disable-furniture");
        var i = getValidCompartmentHeightRangeBySection(n);
        ID("txtCompartmentHeight").style.display = "";
        ID("txtCompartmentHeight").min = i.Min;
        ID("txtCompartmentHeight").max = i.Max;
        ID("txtCompartmentHeight").value = getCompartmentObject(n, t[0]).Height
    } else TempObject.CanChangeCompartmentHeight = !1, ID("txtCompartmentHeight").classList.add("disable-furniture")
}

function furniturUsability(n, t) {
    var u = checkValidationOfFurnitureUseability(n, t), r = "", i = "";
    u.TrueArray.forEach(function (n) {
        r += '[data-furniture-item="' + n + '"],'
    });
    u.FalseArray.forEach(function (n) {
        i += '[data-furniture-item="' + n + '"],'
    });
    r.length > 0 && (r = r.substring(0, r.length - 1), addEventToMultiHandler(r, "click", furnitureFunc), removeClassFromMultiElement(r, "disable-furniture"));
    i.length > 0 && (i = i.substring(0, i.length - 1), removeEventFromMultiHandler(i, "click", furnitureFunc), removeClassFromMultiElement(i, "selected-furniture"), addClassToMultiElement(i, "disable-furniture"))
}

function InteriorUsability(n, t) {
    var u = checkValidationOfInterioreUseability(n, t), r = "", i = "";
    u.TrueArray.forEach(function (n) {
        r += '[data-interior-item="' + n + '"],'
    });
    u.FalseArray.forEach(function (n) {
        i += '[data-interior-item="' + n + '"],'
    });
    r.length > 0 && (r = r.substring(0, r.length - 1), addEventToMultiHandler(r, "click", interiorFunc), removeClassFromMultiElement(r, "disable-interior"));
    i.length > 0 && (i = i.substring(0, i.length - 1), removeEventFromMultiHandler(i, "click", interiorFunc), removeClassFromMultiElement(i, "select-interior"), addClassToMultiElement(i, "disable-interior"))
}

function updateSelectedHandleUI(n) {
    return removeClassFromMultiElement("[data-handleobject-id]", "selected-handle"), n > 0 ? (addClassToMultiElement('[data-handleobject-id="' + n + '"]', "selected-handle"), n) : (addClassToMultiElement("[data-handleobject-id]:first-child", "selected-handle"), parseInt(document.querySelector("[data-handleobject-id]:first-child").getAttribute("data-handleobject-id")))
}

function updateSelectedMaterialUI(n) {
    return removeClassFromMultiElement("[data-materialobject-id]", "selected-material"), n > 0 ? (addClassToMultiElement('[data-materialobject-id="' + n + '"]', "selected-material"), n) : (addClassToMultiElement("[data-materialobject-id]:first-child", "selected-material"), parseInt(document.querySelector("[data-materialobject-id]:first-child").getAttribute("data-materialobject-id")))
}

function configPanelItems(n) {
    var i = ID("furnitureItems"), t = ID("interiorItems"), r = document.querySelector("#furnitureItemsLi button"),
        u = document.querySelector("#interiorItemsLi button");
    removeClassFromMultiElement("ul.head button", "active");
    switch (n) {
        case "furnitureItems":
            i.style.display = "block";
            t != null && (t.style.display = "none", r.classList.add("active"));
            break;
        case "interiorItems":
            i.style.display = "none";
            t != null && (t.style.display = "block", u.classList.add("active"))
    }
}

function setTxtSectionWidthUI(n) {
    n > SizeRange.Section.Width.WarnMax ? ID("txtSectionWidth").classList.add("warnMax") : ID("txtSectionWidth").classList.remove("warnMax")
}

function showTooltip(n, t, i) {
    var f = n.getBoundingClientRect(), e = f.left, o = f.top, u = $("#tooltipPanel"), r = "";
    u.show();
    u.css("left", e + window.scrollX - 100 + "px");
    u.css("top", o + window.scrollY - 200 + "px");
    switch (t) {
        case "fpInput":
            i == !0 ? r = "/design/configure/dar2.jpg" : i == !1 && (r = "/design/configure/dar1.jpg");
            break;
        case "handleInput":
            i == !0 ? r = "/design/configure/withHandle.jpg" : i == !1 && (r = "/design/configure/withoutHandle.jpg");
            break;
        case "handleItems":
            r = n.getAttribute("src").replace(/.([^.]*)$/, "_200.$1");
            break;
        case "feetInput":
            i == !0 ? r = "/design/configure/feet-yes.jpg" : i == !1 && (r = "/design/configure/feet-no.jpg")
    }
    u.find("img").attr("src", r)
}

function showTour() {
    var t = getConfiguratorTitle(Configurator.CategoryId), f = [{
        Id: 1,
        Message: "با این عرض " + t + " رو انتخاب کن.",
        Notice: 'با دکمه های <img src="/design/configure/keyboard.png">  می تونی عدد دلخواهت رو تعیین کنی.',
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 2,
        Message: "با این ارتفاع " + t + " رو انتخاب کن.",
        Notice: 'با دکمه های <img src="/design/configure/keyboard.png"> می تونی عدد دلخواهت رو تعیین کنی.',
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 3,
        Message: "با این عمق " + t + " رو انتخاب کن.",
        Notice: "",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 4,
        Message: "تعداد ستون ها رو می‌ تونی اینجا انتخاب کنی.",
        Notice: "تعداد ستون های مجاز رو سیستم با توجه به عرض کلی " + t + " مشخص می‌کنه.",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 5,
        Message: "رنگ " + t + " رو اینجا انتخاب کن.",
        Notice: "",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 6,
        Message: "برای تغییر عرض، ارتفاع و تعداد طبقات ستون، زیر ستون رو کلیک کن.",
        Notice: "",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !0
    }, {
        Id: 7,
        Message: "برای اضافه کردن درب یا کشو یا فلپ به طبقه یا تغییر ارتفاع طبقه یا یراق داخلی در کمد، روی طبقه کلیک کن.",
        Notice: "",
        NextButton: !0,
        HideExtra: !0,
        FreePosition: !0
    }, {
        Id: 8,
        Message: "اگر می‌خواهید چند طبقه در یک ستون، دارای درب مشترک و یکپارچه باشند، کلیک چپ را نگه دارید و روی آن‌ها بکشید تا به طور همزمان انتخاب شوند.",
        Notice: "",
        NextButton: !0,
        HideExtra: !0,
        FreePosition: !0
    }, {
        Id: 9,
        Message: "اینجا مشخص کن که می خوای درب یا کشو درون چارچوب طبقه قرار بگیره یا روش",
        Notice: "",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 10,
        Message: "اینجا مشخص کن آیا تمام درب و کشو ها دستگیره داشته باشن یا خیر",
        Notice: "",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 11,
        Message: "اینجا مشخص کن که می خوای پشت " + t + " از ورقی به ضخامت 3 میلیمتر استفاده شود یا 16 میلیمتر",
        Notice: "",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 12,
        Message: "آیا می خوای " + t + " پایه‌ای برای تراز کردن داشته باشد یا خیر",
        Notice: "ارتفاع این پایه به ارتفاع " + t + " اضافه می شود",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 13,
        Message: "قیمت نهایی " + t + " خودت رو در اینجا می بینی.",
        Notice: "با هر تغییری تو طراحی، قیمت تغییر می کنه.",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 14,
        Message: "اگر می خوای از اول طراحی رو شروع کنی اینجا رو کلیک کن.",
        Notice: "",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, { Id: 15, Message: "اینم دکمه آندو.", Notice: "", NextButton: !0, HideExtra: !1, FreePosition: !1 }, {
        Id: 16,
        Message: "ابعاد دقیق رو اینجا ببین و برای بازگشت به حالت عادی، دوباره روش کلیک کن.",
        Notice: "",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 17,
        Message: "اینجا می ‌تونی طراحی خودتو ذخیره کنی تا بعدا بهش دسترسی داشته باشی",
        Notice: "",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }, {
        Id: 18,
        Message: "در پایان برای اضافه کردن طرح " + t + " به سبد خرید، این جا رو کلیک کن.",
        Notice: "",
        NextButton: !0,
        HideExtra: !1,
        FreePosition: !1
    }], n = $("#tourPanel"), i, r;
    if (n.show(), document.querySelectorAll(".tour-node").forEach(function (n) {
        return n.classList.remove("tour-node")
    }), i = f.filter(function (n) {
        return n.Id == TempObject.Tour.CurrentId
    })[0], !i) {
        TempObject.Tour.CurrentId = 0;
        TempObject.Tour.IsEnabled = !1;
        n.hide();
        return
    }
    if (n.find("span.message").html(i.Message), n.find("span.notice").html(i.Notice), i.NextButton == !1 ? n.find("#nextTour").css("display", "none") : n.find("#nextTour").css("display", ""), i.HideExtra == !0 && hideExtras(), i.FreePosition === !1) {
        var e = document.querySelector('[data-tour-id="' + TempObject.Tour.CurrentId + '"]'),
            u = e.getBoundingClientRect(), o = u.left, s = u.top;
        n.css("left", o + window.scrollX + "px");
        n.css("top", s + window.scrollY + u.height + 40 + "px")
    } else r = ID("configuratorView").getBoundingClientRect(), n.css("left", r.left + r.width / 2 - n[0].clientWidth / 2 + "px"), n.css("top", r.top - n[0].clientHeight + window.scrollY + "px");
    i.Id == f.length ? n.find("#nextTour").text("پایان") : n.find("#nextTour").text("بعدی");
    e.classList.add("tour-node")
}

function stopClick(n) {
    if (TempObject.Tour.IsEnabled == !0) {
        if ($(n.target).hasClass("tour-node") || $(n.target).parents(".tour-node").length > 0 || $(n.target).hasClass("modal") || $(n.target).parents(".modal").length > 0 || $(n.target).parents("#tourPanel").length > 0 || $(n.target).hasClass("config-panel") || $(n.target).parents(".config-panel").length > 0) return;
        n.stopPropagation();
        n.preventDefault()
    }
    return
}

function alignedCompartments(n) {
    for (var u, i, o, s, f, e, r = [{
        SectionId: 0,
        CompartmentId: 0,
        Height: 0
    }], t = 0; t < Configurator.SectionList.length; t++) for (u = SizeRange.Thickness, i = Configurator.SectionList[t].ComaprtmentList.length - 1; i >= 0; i--) o = r.filter(function (n) {
        n.CompartmentId > i + 1
    }) || {}, o.forEach(function (n) {
        u += n.Height + SizeRange.Thickness
    }), u += Configurator.SectionList[t].ComaprtmentList[i].Height + SizeRange.Thickness, r.push({
        SectionId: Configurator.SectionList[t].Id,
        CompartmentId: Configurator.SectionList[t].ComaprtmentList[i].Id,
        Height: u
    });
    s = (n && n === !0) == 1 ? TempObject.StartCompartmentId : TempObject.StartCompartmentId + 1;
    f = r.filter(function (n) {
        return n.SectionId == TempObject.SectionId && n.CompartmentId == s
    });
    f.length > 0 && (currentCompartmentHeight = f[0].Height, e = r.filter(function (n) {
        return n.Height == currentCompartmentHeight
    }), e.length > 1 && e.forEach(function (n) {
        MeshWithAlignerHelperList.push(n);
        var t = getObjectByUserData(n.SectionId, n.CompartmentId, [MeshType.HorizontalBorder, MeshType.UpperBorder]),
            i = t.material.clone();
        i.color.setHex(65280);
        t.material = i
    }))
}

function removeAlignerHelper() {
    for (var i, n, t = 0; t < MeshWithAlignerHelperList.length; t++) i = getObjectByUserData(MeshWithAlignerHelperList[t].SectionId, MeshWithAlignerHelperList[t].CompartmentId, [MeshType.HorizontalBorder, MeshType.UpperBorder]), n = i.material.clone(), n.color.setHex(16777215), TempObject.SelectedTexture.UseImage === !0 ? (n.map = configuratorPattern, n.needsUpdate = !0) : TempObject.SelectedTexture.UseImage === !1 && n.color.set(TempObject.SelectedTexture.SolidColor), i.material = n;
    MeshWithAlignerHelperList = []
}

function setShelfParameters() {
    var n = getShelfParameters();
    ID("shelf-param-height").textContent = n.Height + " سانتیمتر";
    ID("shelf-param-width").textContent = n.Width + " سانتیمتر";
    ID("shelf-param-depth").textContent = n.Depth + " سانتیمتر";
    ID("shelf-param-load").textContent = n.Load + " کیلوگرم";
    ID("shelf-param-weight").textContent = n.Weight + " کیلوگرم"
}

function showCompartmentConfigPanel(n) {
    var u = n.pageX, f = n.pageY, i = ID("compartmentConfigPanel"), t, r;
    $("#compartmentConfigPanel").show();
    t = ID("configuratorView").getBoundingClientRect();
    r = t.left + t.width / 2 - i.clientWidth / 2;
    i.style.left = r + "px";
    i.style.top = t.top + window.scrollY + "px"
}

function showSectionConfigPanel(n) {
    hideExtras();
    var f = getClientX(n), e = getClientY(n), i = ID("sectionConfigPanel");
    $("#sectionConfigPanel").show();
    var u = i.getBoundingClientRect(), r = ID("configuratorView").getBoundingClientRect(), t = f - i.clientWidth / 2;
    t < r.left && (t += r.left - t);
    t + u.width > r.right && (t -= t + u.width - r.right);
    i.style.left = t + "px";
    i.style.top = r.bottom + window.scrollY - i.clientHeight + "px"
}

function setConfigBasedOnDevice() {
    var r = document.querySelectorAll("[data-container]"), i, t, u, n;
    if (false) {
        if (ID("mobileContainer").children.length > 0) return;
        for (n = 0; n < r.length; n++) i = r[n].querySelector("[data-config]"), ID("mobileContainer").appendChild(i), toggleDisplayStatus([i], "none");
        ID("mobileContainer").children[0].style.display = "";
        ID("rightConfig").style.display = "none";
        ID("bottomConfig").style.display = "none";
        ID("mobileButtonContainer").style.display = "";
        toggleShadowStatus(!1);
        ID("btnTour").style.display = "none"
    } else {
        for (n = 0; n < ID("mobileContainer").children.length;) t = ID("mobileContainer").children[n], u = t.getAttribute("data-config"), document.querySelector('[data-container="' + u + '"]').appendChild(t), t.style.display = "";
        ID("rightConfig").style.display = "";
        ID("bottomConfig").style.display = "";
        ID("mobileButtonContainer").style.display = "none";
        toggleShadowStatus(!0);
        ID("btnTour").style.display = ""
    }
}

function setShelveTexture() {
    color = TempObject.SelectedTexture.SolidColor;
    (new THREE.TextureLoader).load("https://cdn.idero.ir/file/Configurator/" + TempObject.SelectedTexture.Image[0] + "/" + TempObject.SelectedTexture.Image + "_200.jpg", function (n) {
        configuratorPattern = n;
        shelveMaterial.color.setHex(16777215);
        edgedShelveMaterial.color.setHex(16777215);
        shadyShelveMaterial.color.setHex(16777215);
        shelveMaterial.map = null;
        edgedShelveMaterial.map = null;
        shadyShelveMaterial.map = null;
        shelveMaterial.needsUpdate = !0;
        edgedShelveMaterial.needsUpdate = !0;
        shadyShelveMaterial.needsUpdate = !0;
        TempObject.SelectedTexture.UseImage === !0 ? (shelveMaterial.map = n, edgedShelveMaterial.map = n, shadyShelveMaterial.map = n, shelveMaterial.needsUpdate = !0, edgedShelveMaterial.needsUpdate = !0, shadyShelveMaterial.needsUpdate = !0) : TempObject.SelectedTexture.UseImage === !1 && (shelveMaterial.color = new THREE.Color(color), edgedShelveMaterial.color = new THREE.Color(color), shadyShelveMaterial.color = new THREE.Color(color))
    })
}

function togglePageLoaderVisibility(n) {
    $("#pageLoader").toggle(n)
}

function cloneArray(n) {
    return JSON.parse(JSON.stringify(n))
}

function handleInputEvent(n) {
    var t, i, r;
    n && $("#handleInput").prop("checked", n == "false" ? !1 : !0);
    t = $("#handleInput").prop("checked");
    t == !1 ? (ID("handleList").style.display = "none", Configurator.Property.HandleItemId = 0) : t == !0 && (ID("handleList").style.display = "", i = updateSelectedHandleUI(0), r = getHandleByObjectId(i), Configurator.Property.HandleItemId = r.Value.ItemId);
    n && n.toLowerCase() == "false" || showTooltip(ID("handleInput"), "handleInput", t);
    Calculate();
    drawView()
}

function handleModeInputInput() {
    var isHidden = this.checked;
    Configurator.Property.HandleModeId = isHidden ? HandleMode.Hidden : HandleMode.Visible;
    if (isHidden) {
        ID("handleList").style.display = "none";
    } else if ($("#handleInput").prop("checked")) {
        ID("handleList").style.display = "";
    }
    drawView();
    setNewAction();
    Calculate()
}

function furnitureItemClick(n) {
    var f = parseInt(n.getAttribute("data-furniture-item")), e = TempObject.SectionId, r = TempObject.CompartmentIdList,
        t, o, i, s, u;
    switch (f) {
        case Furniture.Empty:
            t = 0;
            break;
        case Furniture.Door:
            t = generateNewUniqueCode();
            break;
        case Furniture.DoubleDoor:
            t = generateNewUniqueCode();
            break;
        case Furniture.Drawer:
            if (o = checkFurnitureByExistenceOfInterior(e, r[0], Furniture.Drawer), o.Code == ResultCode.True) t = generateNewUniqueCode(); else {
                alert("به دلیل وجود یراق داخلی در این سلول، امکان اضافه کردن کشو وجود ندارد.");
                return
            }
            break;
        case Furniture.Flap:
            t = generateNewUniqueCode();
            break;
        default:
            return
    }
    for (removeClassFromMultiElement("[data-furniture-item]", "selected-furniture"), i = 0; i < r.length; i++) s = r[i], u = getCompartmentObject(e, s), u.FurnitureId = f, u.FurnitureUniqueCode = t;
    drawView();
    setNewAction();
    Calculate()
}

function interiorItemClick(n) {
    var t = parseInt(n.getAttribute("data-interior-item")), i = TempObject.SectionId, r = TempObject.CompartmentIdList;
    if (!(r.length > 1)) {
        var u = r[0], f = getCompartmentObject(i, u), e = checkInteriorByExistenceOfFurniture(i, u, t);
        if (e.Code == ResultCode.False) {
            alert("به دلیل وجود کشو در این سلول، امکان اضافه کردن یراق داخلی وجود ندارد.");
            return
        }
        f.InteriorId = t;
        removeClassFromMultiElement("[data-interior-item]", "selected-interior");
        addClassToMultiElement('[data-interior-item="' + t + '"]', "selected-interior");
        setNewAction();
        drawView();
        Calculate()
    }
}

function handleClick(n) {
    var t = parseInt(n.target.getAttribute("data-handleobject-id")), i = getHandleByObjectId(t);
    Configurator.Property.HandleItemId = i.Value.ItemId;
    setUI();
    drawView();
    setNewAction();
    Calculate()
}

function handleOver(n) {
    showTooltip(n.target, "handleItems")
}

function materialClick(n) {
    var i = parseInt(n.target.getAttribute("data-materialobject-id")), t = getMaterialByObjectId(i);
    Configurator.Property.MaterialItemId = t.Value.ItemId;
    TempObject.SelectedTexture.UseImage = t.Value.UseImage;
    TempObject.SelectedTexture.SolidColor = t.Value.SolidColor;
    TempObject.SelectedTexture.Image = t.Value.Image;
    setUI();
    drawView();
    setNewAction();
    Calculate();
    setShelveTexture()
}

function mobileButtonClick(n) {
    var t = n.target.getAttribute("data-mobile-button-name");
    toggleDisplayStatus(ID("mobileContainer").children, "none");
    ID("mobileContainer").querySelector("[data-config=" + t + "]").style.display = ""
}

function toggleDisplayStatus(n, t) {
    for (var i = 0; i < n.length; i++) n[i].style.display = t
}

function getHandleByObjectId(n) {
    var t = HandleObject.filter(function (t) {
        return t.Id == n
    });
    return t.length == 1 ? Result(ResultCode.True, t[0]) : Result(ResultCode.False)
}

function getMaterialByObjectId(n) {
    var t = MaterialObject.filter(function (t) {
        return t.Id == n
    });
    return t.length == 1 ? Result(ResultCode.True, t[0]) : Result(ResultCode.False)
}

function getHandleObjectByItemId(n) {
    var t = HandleObject.filter(function (t) {
        return t.ItemId == n
    });
    return t.length == 1 ? Result(ResultCode.True, t[0]) : Result(ResultCode.False)
}

function hideExtras() {
    $("[data-hideable]").hide();
    TempObject.SectionId = 0;
    TempObject.CompartmentIdList = [];
    removeHelper();
    MeshWithHelperList = []
}

function addEventToMultiHandler(n, t, i) {
    document.querySelectorAll(n).forEach(function (n) {
        n.addEventListener(t, i)
    })
}

function removeEventFromMultiHandler(n, t, i) {
    document.querySelectorAll(n).forEach(function (n) {
        n.removeEventListener(t, i)
    })
}

function addClassToMultiElement(n, t) {
    t.length > 0 && document.querySelectorAll(n).forEach(function (n) {
        t.split(" ").forEach(function (t) {
            n.classList.add(t)
        })
    })
}

function removeClassFromMultiElement(n, t) {
    document.querySelectorAll(n).forEach(function (n) {
        t.split(" ").forEach(function (t) {
            n.classList.remove(t)
        })
    })
}

function generateNewUniqueCode() {
    return Math.random()
}

function setNewAction() {
    actionList.push(cloneConfigurator())
}

function getLastAction() {
    return actionList.length >= 2 ? (actionList.pop(), cloneArray(actionList[actionList.length - 1])) : cloneArray(actionList[0])
}

function undo() {
    Configurator = getLastAction();
    setUI();
    setShelveTexture();
    drawView();
    rePositionCamera();
    changePersonagePosition()
}

function changeView() {
    switch (CurrentViewMode) {
        case ViewMode.Sizing:
            CurrentViewMode = ViewMode.Main;
            init3D(!1);
            animate();
            break;
        case ViewMode.Main:
            CurrentViewMode = ViewMode.Sizing;
            cancelAnimationFrame(animationRequestedId)
    }
    drawView()
}

function save(n) {
    var e = "", a = ID("ConfiguratorCanvas"), t = document.createElement("canvas"), u, i, r, f, o, s, h, c, l;
    t.setAttribute("width", 256);
    t.setAttribute("height", 256);
    u = t.getContext("2d");
    u.fillStyle = "#FFFFFF";
    u.fillRect(0, 0, t.width, t.height);
    i = t.width;
    r = t.height;
    renderer.render(scene, camera);
    f = renderer.domElement.width / renderer.domElement.height;
    f >= 1 ? r = i / f : i = r / f;
    o = (t.width - i) / 2;
    s = (t.height - r) / 2;
    u.drawImage(renderer.domElement, 0, 0, renderer.domElement.width, renderer.domElement.height, o, s, i, r);
    e = t.toDataURL("image/jpg");
    h = Price2.GetPriceWithDiscount();
    Mode = n == "true" ? RequestMode.ShoppingCart : RequestMode.Save;
    c = JSON.stringify(Configurator);
    l = JSON.stringify(ProductObject);
    const finalData = {
        content: c,
        categoryId: Configurator.CategoryId,
        mode: Mode,
        imageData: e,
        finalPrice: h,
        needInstallation: needInstallation(),
        productObject: l,
        baseUrlHash: ID("baseUrlHash").value
    };

    saveInitObject({ Configurator: c });
    window.parent.postMessage({
        type: "SAVE",
        message: "SAVE",
        code: 200,
        data: finalData
    })
}

function reset() {
    setConfigurator();
    setUI();
    setShelveTexture();
    drawView();
    rePositionCamera(!0);
    setNewAction();
    Calculate();
    changePersonagePosition()
}

function setTempObjectCompartmentIdList(n, t) {
    TempObject.CompartmentIdList = generateNumberSet(n, t)
}

function setDesignColor(n, t) {
    n = n || "000";
    TempObject.SelectedTexture.UseImage = t;
    TempObject.SelectedTexture.SolidColor = "#" + n;
    var i = getMaterialObjectByItemId(Configurator.Property.MaterialItemId);
    i.Code === ResultCode.True && (TempObject.SelectedTexture.Image = i.Value.ItemHash);
    finalizeDesignUI(!0)
}

function toggleFeetHint() {
    Configurator.Property.FeetId == Feet.Yes ? document.querySelectorAll("[data-feet-hint]").forEach(function (n) {
        return n.style.display = ""
    }) : document.querySelectorAll("[data-feet-hint]").forEach(function (n) {
        return n.style.display = "none"
    })
}

function setSectionHeightRange() {
    SizeRange.Section.Height.Max = Configurator.Dimension.OveralHeight
}

function checkIsArray(n) {
    return Array.isArray(n)
}

function checkIsNumber(n) {
    return isNaN(n) ? !1 : !0
}

function checkValidationOfCompartmentHeight(n) {
    for (var t = 0; t < n.length; t++) if (n[t] < SizeRange.Compartment.Height.Min || n[t] > SizeRange.Compartment.Height.Max) return !1;
    return !0
}

function checkValidationOfFurnitureUseability(n, t) {
    var r = [], u = [], c;
    r.push(Furniture.Empty);
    var l = getSectionObject(n), f = l.Width, i = 0, s, h, e, o;
    return t.length > 1 ? (t = removeDuplicates(t), t.forEach(function (t) {
        i += getCompartmentObject(n, t).Height
    }), i += (t.length - 1) * SizeRange.Thickness, e = !1, o = !1) : (c = getCompartmentObject(n, t[0]), i = c.Height, e = canUseFurniture(i, f, Furniture.Drawer), o = canUseFurniture(i, f, Furniture.Flap)), s = canUseFurniture(i, f, Furniture.Door), h = canUseFurniture(i, f, Furniture.DoubleDoor), s == !0 ? r.push(Furniture.Door) : u.push(Furniture.Door), h == !0 ? r.push(Furniture.DoubleDoor) : u.push(Furniture.DoubleDoor), e == !0 ? r.push(Furniture.Drawer) : u.push(Furniture.Drawer), o == !0 ? r.push(Furniture.Flap) : u.push(Furniture.Flap), {
        TrueArray: r,
        FalseArray: u
    }
}

function checkValidationOfInterioreUseability(n, t) {
    var r = [], i = [];
    if (r.push(Interior.Empty), t.length > 1) return i.push(Interior.ClotheHanger), i.push(Interior.InsideDrawer), i.push(Interior.Regal), i.push(Interior.VerticalDivider), {
        TrueArray: r,
        FalseArray: i
    };
    var e = getSectionObject(n), o = getCompartmentObject(n, t[0]), u = e.Width, f = o.Height,
        s = canUseInterior(f, u, Interior.ClotheHanger), h = canUseInterior(f, u, Interior.InsideDrawer),
        c = canUseInterior(f, u, Interior.Regal), l = canUseInterior(f, u, Interior.VerticalDivider);
    return s == !0 ? r.push(Interior.ClotheHanger) : i.push(Interior.ClotheHanger), h == !0 ? r.push(Interior.InsideDrawer) : i.push(Interior.InsideDrawer), c == !0 ? r.push(Interior.Regal) : i.push(Interior.Regal), l == !0 ? r.push(Interior.VerticalDivider) : i.push(Interior.VerticalDivider), {
        TrueArray: r,
        FalseArray: i
    }
}

function chekcItemsByWidthChange(n) {
    for (var e, r, i, f, u = [], o = Math.min(Configurator.SectionList.length, n.length), t = 0; t < o; t++) for (i = 0; i < Configurator.SectionList[t].ComaprtmentList.length; i++) canUseFurnitureByWidth(n[t], Configurator.SectionList[t].ComaprtmentList[i].FurnitureId) == !1 && u.push({
        SectionId: Configurator.SectionList[t].Id,
        CompartmentIdList: [Configurator.SectionList[t].ComaprtmentList[i].Id]
    });
    for (e = Math.min(Configurator.SectionList.length, n.length), r = [], t = 0; t < e; t++) for (i = 0; i < Configurator.SectionList[t].ComaprtmentList.length; i++) canUseInteriorByWidth(n[t], Configurator.SectionList[t].ComaprtmentList[i].InteriorId) == !1 && r.push({
        SectionId: Configurator.SectionList[t].Id,
        CompartmentId: Configurator.SectionList[t].ComaprtmentList[i].Id
    });
    return f = Result(ResultCode.Routine), (u.length > 0 || r.length > 0) && (TempObject.MouseStatusCode = MouseStatus.Up, f = confirm("با انجام این تغییر، یک یا چند در/کشو و یا یراق داخلی حذف می‌شوند. آیا هنوز تمایل به انجام تغییرات دارید؟") == !1 ? Result(ResultCode.UserIsDisagree) : Result(ResultCode.UserIsAgree, {
        FurnitureArray: u,
        InteriorArray: r
    }), removeHelperForMovingMesh(), rePositionCamera()), f
}

function chekcItemsByHeightChange(n) {
    for (var r, i, f, e, o, c, u, h, s = [], t = 0; t < n.length; t++) for (r = getFurnitureUniqueCodeListObject(n[t].SectionId), i = 0; i < r.length; i++) f = 0, r[i].CompartmentIdList.forEach(function (i) {
        f += i <= n[t].CompartmentHeightArray.length ? n[t].CompartmentHeightArray[i - 1] : 0
    }), f += (r[i].CompartmentIdList.length - 1) * SizeRange.Thickness, canUseFurnitureByHeight(f, r[i].FurnitureId) == !1 && s.push({
        SectionId: n[t].SectionId,
        CompartmentIdList: r[i].CompartmentIdList
    });
    for (e = [], t = 0; t < n.length; t++) for (o = getSectionObject(n[t].SectionId), c = Math.min(o.ComaprtmentList.length, n[t].CompartmentHeightArray.length), u = 0; u < c; u++) canUseInteriorByHeight(n[t].CompartmentHeightArray[u], o.ComaprtmentList[u].InteriorId) == !1 && e.push({
        SectionId: n[t].SectionId,
        CompartmentId: o.ComaprtmentList[u].Id
    });
    return h = Result(ResultCode.Routine), (s.length > 0 || e.length > 0) && (TempObject.MouseStatusCode = MouseStatus.Up, h = confirm("با انجام این تغییر، یک یا چند در/کشو و یا یراق داخلی حذف می‌شوند. آیا هنوز تمایل به انجام تغییرات دارید؟") == !1 ? Result(ResultCode.UserIsDisagree) : Result(ResultCode.UserIsAgree, {
        FurnitureArray: s,
        InteriorArray: e
    }), removeHelperForMovingMesh(), rePositionCamera()), h
}

function chekcItemsByDepthChange(n) {
    for (var r, i, f, u = [], t = 0; t < Configurator.SectionList.length; t++) for (i = 0; i < Configurator.SectionList[t].ComaprtmentList.length; i++) canUseFurnitureByDepth(n, Configurator.SectionList[t].ComaprtmentList[i].FurnitureId) == !1 && u.push({
        SectionId: Configurator.SectionList[t].Id,
        CompartmentIdList: [Configurator.SectionList[t].ComaprtmentList[i].Id]
    });
    for (r = [], t = 0; t < Configurator.SectionList.length; t++) for (i = 0; i < Configurator.SectionList[t].ComaprtmentList.length; i++) canUseInteriorByDepth(n, Configurator.SectionList[t].ComaprtmentList[i].InteriorId) == !1 && r.push({
        SectionId: Configurator.SectionList[t].Id,
        CompartmentId: Configurator.SectionList[t].ComaprtmentList[i].Id
    });
    return f = Result(ResultCode.Routine), (u.length > 0 || r.length > 0) && (TempObject.MouseStatusCode = MouseStatus.Up, f = confirm("با انجام این تغییر، یک یا چند در/کشو و یا یراق داخلی حذف می‌شوند. آیا هنوز تمایل به انجام تغییرات دارید؟") == !1 ? Result(ResultCode.UserIsDisagree) : Result(ResultCode.UserIsAgree, {
        FurnitureArray: u,
        InteriorArray: r
    }), removeHelperForMovingMesh(), rePositionCamera()), f
}

function checkInteriorByExistenceOfFurniture(n, t, i) {
    var r = getCompartmentObject(n, t), u = r.FurnitureId;
    return i != Interior.Empty && u == Furniture.Drawer ? Result(ResultCode.False) : Result(ResultCode.True)
}

function checkFurnitureByExistenceOfInterior(n, t, i) {
    var r = getCompartmentObject(n, t), u = r.InteriorId;
    return u != Interior.Empty && i == Furniture.Drawer ? Result(ResultCode.False) : Result(ResultCode.True)
}

function checkSumOfCompartmentsHeight(n, t) {
    for (var i = 0, r = 0; r < t.length; r++) i += t[r];
    return i += (t.length + 1) * SizeRange.Thickness, i == n ? Result(ResultCode.True) : Result(ResultCode.False)
}

function checkCompartmentHeightRange(n) {
    return n < SizeRange.Compartment.Height.Min || n > SizeRange.Compartment.Height.Max ? Result(ResultCode.False) : Result(ResultCode.True)
}

function checkSectionHeightRange(n) {
    return n < SizeRange.Section.Height.Min || n > SizeRange.Section.Height.Max ? Result(ResultCode.False) : Result(ResultCode.True)
}

function checkSectionWidthRange(n) {
    return n < SizeRange.Section.Width.Min || n > SizeRange.Section.Width.Max ? Result(ResultCode.False) : Result(ResultCode.True)
}

function checkSectionWidthListRange(n, t) {
    for (var r = 0, i = 0; i < n.length; i++) {
        if (checkSectionWidthRange(n[i]).Code == ResultCode.False) return Result(ResultCode.False);
        r += n[i]
    }
    return (r += (n.length + 1) * SizeRange.Thickness, t == !0 && r != Configurator.Dimension.OveralWidth) ? Result(ResultCode.False) : Result(ResultCode.True)
}

function checkIfIsVerticalBorder(n) {
    var t = parseInt($(n.target).css("border-left-width"));
    return n.offsetX < t + 10 ? Result(ResultCode.True) : Result(ResultCode.False)
}

function _checkIfIsHorizontalBorder(n) {
    var t = parseInt($(n.target).css("border-top-width"));
    return n.offsetY < t + 10 ? Result(ResultCode.True) : Result(ResultCode.False)
}

function checkIfIsHorizontalBorder(n) {
    prepareRaycaster(n);
    var t = raycaster.intersectObjects(scene.children, !0);
    return t.length > 0 && t[0].object.userData.ClickAction == ClickAction.ChangeCompartmentHeight ? Result(ResultCode.True) : Result(ResultCode.False)
}

function colorHexToDecimal(hex) {
	if (hex.startsWith("#")) {
		hex = hex.slice(1);
	}
	return parseInt(hex, 16);
}

function background() {
    var n = [], u;
    const color1 = colorHexToDecimal("#e4c9bb");
    const color2 = colorHexToDecimal("#d7fff4");
    n.push(new THREE.MeshBasicMaterial({ color: color1, side: THREE.DoubleSide }));
    n.push(new THREE.MeshBasicMaterial({ color: color2, side: THREE.DoubleSide }));
    n.push(new THREE.MeshBasicMaterial({ color: color2, side: THREE.DoubleSide }));
    n.push(new THREE.MeshBasicMaterial({ color: color2, side: THREE.DoubleSide, depthWrite: !1 }));
    n.push(new THREE.MeshBasicMaterial({ color: color1, side: THREE.DoubleSide }));
    n.push(new THREE.MeshBasicMaterial({ color: color1, side: THREE.DoubleSide }));
    var t = 3300, i = 3300, r = new THREE.BoxBufferGeometry(5e3, t, i), f = new THREE.Mesh(r, n);
    r.translate(0, t / 2, i / 2);
    scene.add(f);
    u = (new THREE.TextureLoader).load("/other/ruler", function () {
        var t = new THREE.MeshBasicMaterial({ map: u.clone(), transparent: !0 }), n;
        t.map.needsUpdate = !0;
        n = new THREE.Mesh(new THREE.PlaneBufferGeometry(personageWidth, personageHeight), t);
        n.name = "personage";
        scene.add(n);
        changePersonagePosition()
    })
}

function changePersonagePosition() {
    var n = getMeshByName("personage");
    n.position.set(Configurator.Dimension.OveralWidth / 2 + personageWidth / 2 + 10, personageHeight / 2 - 5, 1)
}

function light() {
    scene.add(ambientLight);
    changeLightPosition();
    scene.add(pointLight)
}

function changeLightPosition() {
    pointLight.position.set(camera.position.x, Configurator.Dimension.OveralHeight + 50, Configurator.Dimension.OveralHeight * 2)
}

function toggleShadowStatus(n) {
    n === !0 ? (shadyWhiteMaterial.map = shadowTexture, shadyShelveMaterial.map = shadowTexture) : (shadyWhiteMaterial.map = null, shadyShelveMaterial.map = null);
    shadyWhiteMaterial.needsUpdate = !0;
    shadyShelveMaterial.needsUpdate = !0
}

function init3D(n) {
    var t = ID("configuratorView");
    camera = new THREE.PerspectiveCamera(fov, t.clientWidth / t.clientHeight, 1, 3300);
    renderer = new THREE.WebGLRenderer({ antialias: !0, logarithmicDepthBuffer: !1 });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(t.clientWidth, t.clientHeight);
    renderer.domElement.id = "ConfiguratorCanvas";
    t.innerHTML = "";
    t.appendChild(renderer.domElement);
    shelveMaterial = new THREE.MeshPhysicalMaterial({ side: THREE.DoubleSide });
    edgedShelveMaterial = new THREE.MeshPhysicalMaterial({
        side: THREE.DoubleSide,
        polygonOffset: !0,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1
    });
    shadyShelveMaterial = new THREE.MeshPhysicalMaterial({ transparent: !0, side: THREE.DoubleSide });
    whiteMaterial = new THREE.MeshBasicMaterial({ color: 16777215, side: THREE.DoubleSide });
    shadyWhiteMaterial = new THREE.MeshBasicMaterial({
        color: 16777215,
        side: THREE.DoubleSide,
        transparent: !0,
        depthWrite: !1
    });
    sectionConfigMaterial = new THREE.MeshBasicMaterial({
        color: 16777215,
        side: THREE.DoubleSide,
        transparent: !0,
        opacity: 0
    });
    toggleShadowStatus(!0);
    setShelveTexture();
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !1;
    controls.enablePan = !1;
    controls.screenSpacePanning = !1;
    controls.enableZoom = !1;
    controls.minAzimuthAngle = Math.PI / -3;
    controls.maxAzimuthAngle = Math.PI / 3;
    controls.minPolarAngle = Math.PI / 8;
    controls.maxPolarAngle = Math.PI / 2;
    rePositionCamera(!0);
    n && n === !0 && (light(), background())
}

function rotateCameraOnOrbitX(n) {
    var t = n * Math.PI / 180, i = camera.position.x, r = camera.position.z;
    camera.position.x = i * Math.cos(t) + r * Math.sin(t);
    camera.position.z = r * Math.cos(t) - i * Math.sin(t);
    controls.update()
}

function rotateCameraOnOrbitY(n) {
    var t = n * Math.PI / 180, i = camera.position.y, r = camera.position.z;
    camera.position.y = i * Math.cos(t) + r * Math.sin(t);
    camera.position.z = r * Math.cos(t) - i * Math.sin(t);
    controls.update()
}

function createEdge(n, t, i, r) {
    var f = new THREE.PlaneBufferGeometry(t, i, 1, 1), e = new THREE.EdgesGeometry(f),
        o = new THREE.LineBasicMaterial({ color: "#000000", linewidth: 1, transparent: !0, opacity: .2 }),
        u = new THREE.LineSegments(e, o);
    u.position.z += r / 2 + .1;
    u.userData.MeshType = MeshType.Edge;
    n.add(u)
}

function makeIndent(n, t, i, r) {
    var f = SizeRange.Thickness, e = 0, o = 0, u;
    (i.FurnitureId === Furniture.Door || i.FurnitureId === Furniture.DoubleDoor) && Configurator.Property.FurniturePositionId === FurniturePosition.Inside && (u = getCompartmentIdListByUniqueCode(t.Id, i.FurnitureUniqueCode).sort(function (n, t) {
        return n - t
    }).slice(1), u.length > 0 && u.indexOf(i.Id) > -1 && (e = f));
    i.InteriorId === Interior.InsideDrawer && r > 0 && t.ComaprtmentList[r - 1].InteriorId === Interior.InsideDrawer && (o = 3 * f);
    n.position.z -= Math.max(e, o)
}

function createSectionMesh(n) {
    var i = Configurator.Dimension.OveralDepth, t = SizeRange.Thickness, f = getSectionObject(n),
        l = getSectionObject(n + 1), e = f.Width, w = l != null ? Math.max(f.Height, l.Height) : f.Height,
        r = new THREE.Group,
        g = Configurator.Property.BackPanelThicknessId == BackPanelThickness._3mm ? whiteMaterial : shadyShelveMaterial,
        nt = new THREE.BoxBufferGeometry(t, w, i), b = new THREE.BoxBufferGeometry(e, t, i),
        a = new THREE.Mesh(nt, shelveMaterial), v = new THREE.Mesh(b, shelveMaterial), k, h, c, o, u, s, d, p;
    for (v.position.set(e / 2 + t, t / 2, i / 2), v.userData = setUserData(MeshType.LowerBorder, MeshDisplayStatus.None, ClickAction.ConfigSection, n), r.add(v), k = new THREE.PlaneBufferGeometry(e, 4 * i), h = new THREE.Mesh(k, sectionConfigMaterial), h.position.set(e / 2 + t, t / 2, i), h.rotateX(Math.PI / 2), h.userData = setUserData(MeshType.SectionConfig, MeshDisplayStatus.None, ClickAction.ConfigSection, n), r.add(h), c = t, o = f.ComaprtmentList.length - 1; o >= 0; o--) {
        u = f.ComaprtmentList[o];
        s = new THREE.Mesh(b, shelveMaterial);
        s.position.set(e / 2 + t, u.Height + c + t / 2, i / 2);
        o == 0 ? s.userData = setUserData(MeshType.UpperBorder, MeshDisplayStatus.None, ClickAction.ChangeSectionHeight, n, u.Id) : (s.userData = setUserData(MeshType.HorizontalBorder, MeshDisplayStatus.None, ClickAction.ChangeCompartmentHeight, n, u.Id), makeIndent(s, f, u, o));
        r.add(s);
        var tt = e + t, it = u.Height + t,
            rt = Configurator.Property.BackPanelThicknessId == BackPanelThickness._3mm ? .3 : 1.6,
            ut = new THREE.BoxBufferGeometry(tt, it, rt), y = new THREE.Mesh(ut, g);
        y.position.set(e / 2 + t, u.Height / 2 + c, rt / 2 + 0.05);
        y.userData = setUserData(MeshType.Backpanel, MeshDisplayStatus.None, ClickAction.ConfigCompartment, n, u.Id);
        r.add(y);
        c += u.Height + t
    }
    return a.position.set(t / 2, w / 2, i / 2), l != null && (a.userData = setUserData(MeshType.VerticalBorder, MeshDisplayStatus.None, ClickAction.ChangeSectionWidth, n)), r.add(a), n == 1 && (d = new THREE.BoxBufferGeometry(t, f.Height, i), p = new THREE.Mesh(d, shelveMaterial), p.position.set(e + 3 / 2 * t, f.Height / 2, i / 2), r.add(p)), r.add(createFurnitureMesh(n)), Configurator.CategoryId === Category.Closet && r.add(createInteriorMesh(n)), r
}

function setUserData(n, t, i, r, u, f, e) {
    return u = u || 0, f = f || u, e = e || {}, {
        MeshType: n,
        MeshDisplayStatus: t,
        ClickAction: i,
        SectionId: r,
        StartCompartmentId: u,
        EndCompartmentId: f,
        ExtraData: e
    }
}

function createFurnitureMesh(n) {
    for (var t, r = new THREE.Group, u, f = getFurnitureUniqueCodeListObject(n), i = 0; i < f.length; i++) t = f[i], u = t.CompartmentIdList.length == 1 ? createSingleFurnitureMesh(n, t.CompartmentIdList[0]) : createCommonFurnitureMesh(n, t.CompartmentIdList), r.add(u);
    return r
}

function createSingleFurnitureMesh(n, t) {
    var h = SizeRange.Thickness, o = getSectionObject(n), f = o.Width, s = new THREE.Group, u,
        i = getCompartmentObject(n, t), e = o.ComaprtmentList.filter(function (n) {
            return n.Id > t
        }), r = 0;
    e.length > 0 && (e.forEach(function (n) {
        r += n.Height
    }), r += e.length * h);
    switch (i.FurnitureId) {
        case Furniture.Door:
            u = createDoorMesh(n, [i.Id], f, i.Height, r);
            break;
        case Furniture.DoubleDoor:
            u = createDoubleDoorMesh(n, [i.Id], f, i.Height, r);
            break;
        case Furniture.Flap:
            u = createFlapMesh(n, i.Id, f, i.Height, r);
            break;
        case Furniture.Drawer:
            u = createDrawerMesh(n, i.Id, f, i.Height, r)
    }
    return s.add(u), s
}

function createCommonFurnitureMesh(n, t) {
    var o = SizeRange.Thickness, f = getSectionObject(n), s = f.Width, h = new THREE.Group, e,
        c = f.ComaprtmentList.filter(function (n) {
            return t.indexOf(n.Id) >= 0
        }), l = c[0], r = 0, u, i;
    c.forEach(function (n) {
        r += n.Height
    });
    r += (t.length - 1) * o;
    u = f.ComaprtmentList.filter(function (n) {
        return n.Id > Math.max.apply(null, t)
    });
    i = 0;
    u.length > 0 && (u.forEach(function (n) {
        i += n.Height
    }), i += u.length * o);
    switch (l.FurnitureId) {
        case Furniture.Door:
            e = createDoorMesh(n, t, s, r, i);
            break;
        case Furniture.DoubleDoor:
            e = createDoubleDoorMesh(n, t, s, r, i)
    }
    return h.add(e), h
}

function createDoorMesh(n, t, i, r, u) {
    var b = Configurator.Dimension.OveralDepth, o = SizeRange.Thickness, f = i, c = r, l = o, v = 0, y = 0, a = 0,
        s = gapFactor, p, e, h, w;
    return Configurator.Property.FurniturePositionId == FurniturePosition.Outside ? (f += 2 * s * o, c += 2 * s * o, a += l) : Configurator.Property.FurniturePositionId == FurniturePosition.Inside && (s = 0), v += (1 - s) * o + f / 2, y += (1 - s) * o + c / 2 + u, a += b - l / 2, p = new THREE.BoxBufferGeometry(f, c, l), e = new THREE.Mesh(p, edgedShelveMaterial), e.position.set(v, y, a), h = "right", n > Configurator.SectionList.length / 2 && (h = "left"), e.userData = t.length == 1 ? setUserData(MeshType.Door, MeshDisplayStatus.Close, ClickAction.ConfigCompartment, n, t[0], t[0], {
        Size: f,
        Direction: h
    }) : setUserData(MeshType.Door, MeshDisplayStatus.Close, ClickAction.ConfigCompartment, n, Math.min.apply(null, t), Math.max.apply(null, t), {
        Size: f,
        Direction: h
    }), createEdge(e, f, c, l), w = createHandle(Furniture.Door, f, h), e.add(w), e
}

function createDoubleDoorMesh(n, t, i, r, u) {
    var k = Configurator.Dimension.OveralDepth, o = SizeRange.Thickness, f = i / 2, c = r, l = o, w = 0, b = 0, y = 0,
        a = 0, s = gapFactor, v;
    Configurator.Property.FurniturePositionId == FurniturePosition.Outside ? (f += s * o, c += 2 * s * o, a += l) : Configurator.Property.FurniturePositionId == FurniturePosition.Inside && (s = 0);
    w += (1 - s) * o + f / 2;
    b += (1 - s) * o + 3 * f / 2;
    y += (1 - s) * o + c / 2 + u;
    a += k - l / 2;
    var p = new THREE.Group, d = new THREE.BoxBufferGeometry(f, c, l), e = new THREE.Mesh(d, edgedShelveMaterial),
        h = e.clone();
    return e.position.set(w, y, a), h.position.set(b, y, a), t.length == 1 ? (e.userData = setUserData(MeshType.DoubleDoor, MeshDisplayStatus.Close, ClickAction.ConfigCompartment, n, t[0], t[0], {
        Size: f,
        Direction: "left"
    }), h.userData = setUserData(MeshType.DoubleDoor, MeshDisplayStatus.Close, ClickAction.ConfigCompartment, n, t[0], t[0], {
        Size: f,
        Direction: "right"
    })) : (e.userData = setUserData(MeshType.DoubleDoor, MeshDisplayStatus.Close, ClickAction.ConfigCompartment, n, Math.min.apply(null, t), Math.max.apply(null, t), {
        Size: f,
        Direction: "left"
    }), h.userData = setUserData(MeshType.DoubleDoor, MeshDisplayStatus.Close, ClickAction.ConfigCompartment, n, Math.min.apply(null, t), Math.max.apply(null, t), {
        Size: f,
        Direction: "right"
    })), createEdge(e, f, c, l), createEdge(h, f, c, l), v = createHandle(Furniture.DoubleDoor, f, "left"), e.add(v), v = createHandle(Furniture.DoubleDoor, f, "right"), h.add(v), p.add(e), p.add(h), p
}

function createFlapMesh(n, t, i, r, u) {
    var b = Configurator.Dimension.OveralDepth, o = SizeRange.Thickness, h = i, f = r, c = o, y = 0, a = 0, v = 0,
        s = gapFactor, p, e, l, w;
    return Configurator.Property.FurniturePositionId == FurniturePosition.Outside ? (h += 2 * s * o, f += 2 * s * o, v += c) : Configurator.Property.FurniturePositionId == FurniturePosition.Inside && (s = 0), y += (1 - s) * o + h / 2, a += (1 - s) * o + f / 2 + u, v += b - c / 2, p = new THREE.BoxBufferGeometry(h, f, c), e = new THREE.Mesh(p, edgedShelveMaterial), e.position.set(y, a, v), l = "up", a <= ConstObject.FlapHeightThreshold && (l = "down"), e.userData = setUserData(MeshType.Flap, MeshDisplayStatus.Close, ClickAction.ConfigCompartment, n, t, t, {
        Size: f,
        Direction: l
    }), createEdge(e, h, f, c), w = createHandle(Furniture.Flap, f, l), e.add(w), e
}

function createDrawerMesh(n, t, i, r, u) {
    var w = Configurator.Dimension.OveralDepth, f = SizeRange.Thickness, ut = whiteMaterial, s = i, d = r, c = w, l = i,
        a = r, b = f, g = 0, nt = 0, k = 0, v = gapFactor, e, h, tt, p, it, o, rt;
    Configurator.Property.FurniturePositionId == FurniturePosition.Outside ? (l += 2 * v * f, a += 2 * v * f, k += b) : Configurator.Property.FurniturePositionId == FurniturePosition.Inside && (v = 0);
    g += (1 - v) * f + l / 2;
    nt += (1 - v) * f + a / 2 + u;
    k += w - f / 2;
    e = new THREE.Shape;
    e.moveTo(0, 0);
    e.lineTo(0, c);
    e.lineTo(s, c);
    e.lineTo(s, 0);
    e.lineTo(0, 0);
    h = new THREE.Path;
    h.moveTo(f, f);
    h.lineTo(f, c - f);
    h.lineTo(s - f, c - f);
    h.lineTo(s - f, f);
    e.holes.push(h);
    var ft = { steps: 1, depth: d * .75 - f, bevelEnabled: !1 }, et = new THREE.ExtrudeBufferGeometry(e, ft),
        y = new THREE.Mesh(et, shelveMaterial);
    return scene.add(y), y.rotateX(270 * Math.PI / 180), y.position.set(-s / 2, -a / 2, 0), tt = new THREE.PlaneBufferGeometry(s - 2 * f, c - 3 * f), p = new THREE.Mesh(tt, ut), p.rotateX(Math.PI / 2), p.position.set(0, -d / 2 + .1, -w / 2), it = new THREE.BoxBufferGeometry(l, a, b), o = new THREE.Mesh(it, edgedShelveMaterial), o.userData = setUserData(MeshType.Drawer, MeshDisplayStatus.Close, ClickAction.ConfigCompartment, n, t, t, {}), createEdge(o, l, a, b), o.position.set(g, nt, k), rt = createHandle(Furniture.Drawer, l), o.add(y), o.add(p), o.add(rt), o
}

function createInteriorMesh(n) {
    for (var i, s = SizeRange.Thickness, e = getSectionObject(n), f = e.Width, r = new THREE.Group, t, u = getSectionObject(n).Height, o = 0; o < e.ComaprtmentList.length; o++) {
        i = e.ComaprtmentList[o];
        switch (i.InteriorId) {
            case Interior.Regal:
                t = createRegalMesh(f, i.Height, u);
                r.add(t);
                break;
            case Interior.VerticalDivider:
                t = createVerticalDividerMesh(f, i.Height, u);
                r.add(t);
                break;
            case Interior.InsideDrawer:
                t = createInsideDrawerMesh(n, i.Id, f, i.Height, u);
                r.add(t);
                break;
            case Interior.ClotheHanger:
                t = createClotheHangerMesh(f, u);
                r.add(t)
        }
        u -= i.Height + s
    }
    return r
}

function createRegalMesh(n, t, i) {
    var w = Configurator.Dimension.OveralDepth, s = SizeRange.Thickness, r = n, v = 0, y = 0, h = 0, c = 8, f, l, u, o,
        a;
    v += r / 2 + s;
    y += i - c;
    h += w / 2 + 1;
    f = 0;
    Configurator.Dimension.OveralDepth <= 45 && (r = Configurator.Dimension.OveralDepth - 5, h = r / 2, f = 1, l = new THREE.CylinderGeometry(1, 1, 8, 64));
    var b = new THREE.CylinderBufferGeometry(2, 2, r, 64),
        p = new THREE.MeshPhysicalMaterial({ metalness: .5, roughness: 0, color: 16777215, side: THREE.DoubleSide }),
        e = new THREE.Mesh(b, p);
    return e.rotateX(f * 90 * Math.PI / 180), e.rotateZ((f - 1) * 90 * Math.PI / 180), e.position.set(v, y, h), u = new THREE.Group, u.add(e), l && (o = new THREE.Mesh(l, p), o.position.set(n / 2 + s, i - c / 2, 0), u.add(o), a = o.clone(), a.position.set(n / 2 + s, i - c / 2, r), u.add(a)), u
}

function createVerticalDividerMesh(n, t, i) {
    var a = Configurator.Dimension.OveralDepth, r = SizeRange.Thickness, v = r, e = t, o = a - r, s = 0, h = 0, c = 0,
        l, u, f;
    return s += n / 2, h += i - e / 2 - r, c += o / 2, l = new THREE.BoxBufferGeometry(v, e, o), u = new THREE.Mesh(l, shelveMaterial), u.position.set(s, h, c), f = new THREE.Group, f.add(u), f
}

function createClotheHangerMesh(n, t) {
    var v = SizeRange.Thickness, y = n, u = 3, f = 0, e = 0, o = 0, i, s, h, r;
    f += y / 2 + v;
    e += -13 + t;
    o += 0;
    i = new THREE.Group;
    s = new THREE.MeshPhysicalMaterial({ metalness: .5, roughness: 0, color: 16777215, side: THREE.DoubleSide });
    i.rotateY(Math.PI / 1);
    i.position.set(f, e, o);
    h = new THREE.CylinderBufferGeometry(1, 1, 5, 64);
    r = new THREE.Mesh(h, s);
    r.rotateX(Math.PI / 2);
    var c = r.clone(), l = r.clone(), a = n / 4;
    return r.position.set(a, 0, -u), c.position.set(0, 0, -u), l.position.set(-a, 0, -u), i.add(r), i.add(c), i.add(l), i
}

function createInsideDrawerMesh(n, t, i, r, u) {
    var y = Configurator.Dimension.OveralDepth, f = SizeRange.Thickness, ut = whiteMaterial, b = 4 * f, o = i, k = r,
        c = y - b, l = i, a = r, d = f, g = 0, nt = 0, p = 0, tt = gapFactor, e, s, it, v, rt;
    l += 2 * tt * f;
    a += 2 * tt * f;
    p += d;
    g += f + l / 2;
    nt += -f + -a / 2 + u;
    p += y - b;
    e = new THREE.Shape;
    e.moveTo(0, 0);
    e.lineTo(0, c);
    e.lineTo(o, c);
    e.lineTo(o, 0);
    e.lineTo(0, 0);
    s = new THREE.Path;
    s.moveTo(f, f);
    s.lineTo(f, c - f);
    s.lineTo(o - f, c - f);
    s.lineTo(o - f, f);
    e.holes.push(s);
    var ft = { steps: 1, depth: k * .75 - f, bevelEnabled: !1 }, et = new THREE.BoxBufferGeometry(l, a, d),
        h = new THREE.Mesh(et, shelveMaterial), ot = new THREE.ExtrudeBufferGeometry(e, ft),
        w = new THREE.Mesh(ot, shelveMaterial);
    return w.rotateX(270 * Math.PI / 180), w.position.set(-o / 2, -a / 2, 0), h.add(w), it = new THREE.PlaneBufferGeometry(o - 2 * f, c - 3 * f), v = new THREE.Mesh(it, ut), v.rotateX(Math.PI / 2), v.position.set(0, -k / 2 + .1, -y / 2), h.position.set(g, nt, p), h.userData = setUserData(MeshType.InsideDrawer, MeshDisplayStatus.Close, ClickAction.ConfigCompartment, n, t), rt = createHandle(Furniture.Drawer, l), h.add(v), h.add(rt), h
}

function createConfiguratorMesh() {
    var n, i, t, r;
    for (scene.remove(currentConfiguratorMesh), n = new THREE.Group, i = 0, t = Configurator.SectionList.length - 1; t >= 0; t--) {
        var u = Configurator.SectionList[t], e = u.Width, f = createSectionMesh(u.Id);
        f.position.set(i, 0, 0);
        i += e + SizeRange.Thickness;
        n.add(f)
    }
    r = 0;
    Configurator.Property.FeetId == Feet.Yes && (n.add(createFeetMesh()), r = 3);
    n.name = "ConfiguratorMesh";
    scene.add(n);
    n.position.set(Configurator.Dimension.OveralWidth / -2, r, 0);
    currentConfiguratorMesh = n
}

function createFeetMesh() {
    for (var s = Configurator.Dimension.OveralDepth, u = 3, n = 2, h = new THREE.CylinderBufferGeometry(n, n, u), c = new THREE.MeshPhysicalMaterial({
        roughness: 0,
        color: "#000000"
    }), l = new THREE.Mesh(h, c), f = 4 * Math.ceil(Configurator.Dimension.OveralWidth / 100), i = f / 2, e = new THREE.Group, o, r, t = 0; t < f; t++) o = t >= i ? s - n : n, r = l.clone(), r.position.set(t % i * (Configurator.Dimension.OveralWidth / (i - 1)) + Math.pow(-1, t) * n, u / -2, o), e.add(r);
    return e
}

function createHandle(n, t, i) {
    var o, s, h, c, u = 1, f = 5, l = HandleCode.Unknown,
        a = getHandleObjectByItemId(Configurator.Property.HandleItemId), e, v, r, y, p;
    if (Configurator.Property.HandleModeId === HandleMode.Hidden) return new THREE.Mesh(new THREE.BoxGeometry(0, 0, 0), new THREE.MeshBasicMaterial());
    a.Code === ResultCode.True && (l = a.Value.ItemCode);
    switch (l) {
        case HandleCode.Tookar:
            o = 4;
            s = 4;
            c = 2.5;
            r = new THREE.CylinderBufferGeometry(o / 2, s / 2, c, 15, 1, !1, 0, 2 * Math.PI);
            r.rotateX(Math.PI / 2);
            switch (n) {
                case Furniture.Door:
                    i == "left" && (u = -1, f = -5);
                    r.translate(u * -t / 2 + f, 0, 1);
                    break;
                case Furniture.DoubleDoor:
                    i == "left" && (u = -1, f = -5);
                    r.translate(u * -t / 2 + f, 0, 1);
                    break;
                case Furniture.Drawer:
                    r.translate(0, 0, 1);
                    break;
                case Furniture.Flap:
                    i == "down" && (u = -1, f = -5);
                    r.translate(0, u * -t / 2 + f, 1)
            }
            break;
        case HandleCode.DoPich:
            o = 10;
            s = 4;
            h = 1;
            c = 1;
            e = new THREE.Shape;
            e.moveTo(0, 0);
            e.lineTo(0, s);
            e.lineTo(o, s);
            e.lineTo(o, 0);
            e.lineTo(o - 1, 0);
            e.lineTo(o - 1, s - 1);
            e.lineTo(h, s - 1);
            e.lineTo(h, 0);
            v = { steps: 1, depth: c, bevelEnabled: !1 };
            r = new THREE.ExtrudeBufferGeometry(e, v);
            switch (n) {
                case Furniture.Door:
                    i == "left" && (u = -1, f = -5 - h);
                    r.rotateZ(Math.PI / 2);
                    r.rotateY(Math.PI / 2);
                    r.translate(u * -t / 2 + f, -s, 0);
                    break;
                case Furniture.DoubleDoor:
                    i == "left" && (u = -1, f = -5 - h);
                    r.rotateZ(Math.PI / 2);
                    r.rotateY(Math.PI / 2);
                    r.translate(u * -t / 2 + f, -s, 0);
                    break;
                case Furniture.Drawer:
                    r.rotateX(Math.PI / 2);
                    r.translate(-o / 2, 0, 0);
                    break;
                case Furniture.Flap:
                    i == "down" && (u = -1, f = -5 - h);
                    r.rotateX(Math.PI / 2);
                    r.translate(-o / 2, u * -t / 2 + f, 0)
            }
    }
    return y = new THREE.MeshBasicMaterial({ color: 0 }), p = new THREE.Mesh(r, y), p
}

function setHandlePosition(n, t, i, r, u, f) {
    var e = 1;
    switch (n) {
        case Furniture.Door:
            t.translate(-u / 2 + 5, -r, 0);
            break;
        case Furniture.DoubleDoor:
            f == "left" && (e = 0);
            t.translate(e * -u / 2 + 5, -r, 0);
            break;
        case Furniture.Drawer:
            t.translate(-i / 2, 0, 0);
            break;
        case Furniture.Flap:
            t.translate(-i / 2, -u / 2 + 5, 0)
    }
    return t
}

function removeHelper(n, t) {
    for (var r, i = 0; i < MeshWithHelperList.length; i++) for (r = 0; r < MeshWithHelperList[i].Mesh.children.length; r++) if (n && t) {
        if (MeshWithHelperList[i].Mesh.children[r].name === "SelectedMeshHelper" && MeshWithHelperList[i].SectionId === n && (t.indexOf(MeshWithHelperList[i].StartCompartmentId) > -1 || t.indexOf(MeshWithHelperList[i].EndCompartmentId) > -1)) {
            MeshWithHelperList[i].Mesh.remove(MeshWithHelperList[i].Mesh.children[r]);
            break
        }
    } else if (MeshWithHelperList[i].Mesh.children[r].name === "SelectedMeshHelper") {
        MeshWithHelperList[i].Mesh.remove(MeshWithHelperList[i].Mesh.children[r]);
        break
    }
}

function createHelperForSelectedMesh() {
    var u = TempObject.SectionId, r = TempObject.CompartmentIdList, i, n;
    for (removeHelper(), i = 0; i < r.length; i++) if (n = getObjectByUserData(u, r[i], [MeshType.Backpanel]), !(n.children.filter(function (n) {
        return n.name === "SelectedMeshHelper"
    }).length > 0)) {
        var f = n.geometry.parameters.width, e = n.geometry.parameters.height,
            o = new THREE.MeshBasicMaterial({ color: "#999999", transparent: !0, opacity: .5 }),
            s = new THREE.BoxBufferGeometry(f, e, 1), t = new THREE.Mesh(s, o);
        t.position.set(0, 0, 2);
        t.userData = cloneArray(n.userData);
        t.userData.MeshType = MeshType.Helper;
        n.add(t);
        t.name = "SelectedMeshHelper";
        MeshWithHelperList.push({
            Mesh: n,
            SectionId: n.userData.SectionId,
            StartCompartmentId: n.userData.StartCompartmentId,
            EndCompartmentId: n.userData.EndCompartmentId
        })
    }
}

function toggleEdgeVisibility(n, t) {
    for (var i = 0; i < n.children.length; i++) if (n.children[i].userData.MeshType === MeshType.Edge) {
        n.children[i].visible = t;
        break
    }
}

function toggleMeshDisplayStatus(n, t, i) {
    var e = 1, r = 1, u = 0, s = 0, f, o;
    i === MeshDisplayStatus.Close && (toggleEdgeVisibility(n, !0), e = -1);
    i === MeshDisplayStatus.Open && toggleEdgeVisibility(n, !1);
    Configurator.Property.FurniturePositionId === FurniturePosition.Outside && (s = SizeRange.Thickness);
    n.userData.MeshDisplayStatus = i;
    switch (t) {
        case Furniture.Door:
            return o = n.userData.ExtraData.Direction, o == "left" && (r = -1), u = e * r * 45 * Math.PI / 180, f = n.userData.ExtraData.Size, n.rotateY(u), n.position.x += e * r * (f / 2) * (1 - Math.cos(u)), n.position.z += r * (f / 2 - s) * Math.sin(u), n;
        case Furniture.DoubleDoor:
            return o = n.userData.ExtraData.Direction, f = n.userData.ExtraData.Size, o == "left" && (r = -1), u = e * r * 45 * Math.PI / 180, n.rotateY(u), n.position.x += e * r * (f / 2) * (1 - Math.cos(u)), n.position.z += r * (f / 2 - s) * Math.sin(u), n;
        case Furniture.Flap:
            return o = n.userData.ExtraData.Direction, o == "down" && (r = -1), u = e * r * -45 * Math.PI / 180, f = n.userData.ExtraData.Size, n.rotateX(u), n.position.z -= r * (f / 2) * Math.sin(u), n.position.y += e * r * (f / 2) * (1 - Math.cos(u)), n;
        case Furniture.Drawer:
            return n.position.z += e * 20, n
    }
}

function animate() {
    if (renderer.info.render.frame === 1 && windowFocus(), renderer.info.render.frame === firstFrameId + 299) {
        ID("speedTestLoader").style.display = "none";
        var n = performance.now() / 1e3;
        300 / (n - firstSeconds) < 55 ? (ID("badTestResult").style.display = "", ID("goodTestResult").style.display = "none") : (ID("goodTestResult").style.display = "", ID("badTestResult").style.display = "none")
    }
    animationRequestedId = requestAnimationFrame(animate);
    renderer.render(scene, camera);
    changeLightPosition()
}

function prepareRaycaster(n) {
    var t = renderer.domElement.getBoundingClientRect();
    pointer.x = (getClientX(n) - t.left) / (t.right - t.left) * 2 - 1;
    pointer.y = -((getClientY(n) - t.top) / (t.bottom - t.top)) * 2 + 1;
    raycaster.setFromCamera(pointer, camera)
}

function toggleAllMeshDisplayStatus() {
    for (var t, i, r, f, u, e, o, n = 0; n < Configurator.SectionList.length; n++) for (t = Configurator.SectionList[n], i = 0; i < t.ComaprtmentList.length; i++) if (r = t.ComaprtmentList[i], r.FurnitureId !== Furniture.Empty) for (f = getAllObjectsByUserData(t.Id, r.Id, [MeshType.Door, MeshType.DoubleDoor, MeshType.Drawer, MeshType.Flap]), u = 0; u < f.length; u++) e = f[u], o = MeshDisplayStatus.Close, e.userData.MeshDisplayStatus !== MeshDisplayStatus.Open && (o = MeshDisplayStatus.Open), toggleMeshDisplayStatus(e, r.FurnitureId, o)
}

function createHelperForMovingMesh(n) {
    var t = n.clone(), i;
    t.material = n.material.clone();
    i = new THREE.Vector3(0, 0, 0);
    i.setFromMatrixPosition(n.matrixWorld);
    t.position.copy(i);
    t.material.transparent = !0;
    t.material.opacity = .3;
    t.userData.MeshType = MeshType.MovingHelper;
    scene.add(t)
}

function removeHelperForMovingMesh() {
    for (var t = getAllObjectsByMeshType([MeshType.MovingHelper]), n = 0; n < t.length; n++) scene.remove(t[n])
}

function onMouseDown(n) {
    var t, i, r, u, f, e;
    if (n.preventDefault(), hideExtras(), prepareRaycaster(n), t = raycaster.intersectObjects(scene.children, !0), i = 0, t.length > 0 && t[i].object.userData.ClickAction) {
        controls.enabled = !1;
        switch (t[i].object.userData.ClickAction) {
            case ClickAction.ConfigCompartment:
                TempObject.MouseStatusCode = MouseStatus.Down;
                TempObject.SectionId = t[i].object.userData.SectionId;
                TempObject.StartCompartmentId = t[i].object.userData.StartCompartmentId;
                TempObject.CompartmentIdList = [TempObject.StartCompartmentId];
                createHelperForSelectedMesh();
                r = t[i].object;
                u = MeshDisplayStatus.Close;
                r.userData.MeshDisplayStatus !== MeshDisplayStatus.Open && (u = MeshDisplayStatus.Open);
                switch (t[i].object.userData.MeshType) {
                    case MeshType.Door:
                        toggleMeshDisplayStatus(r, Furniture.Door, u);
                        break;
                    case MeshType.DoubleDoor:
                        toggleMeshDisplayStatus(r, Furniture.DoubleDoor, u);
                        break;
                    case MeshType.Flap:
                        toggleMeshDisplayStatus(r, Furniture.Flap, u);
                        break;
                    case MeshType.Drawer:
                        toggleMeshDisplayStatus(r, Furniture.Drawer, u)
                }
                break;
            case ClickAction.ConfigSection:
                showSectionConfigPanel(n);
                TempObject.SectionId = t[i].object.userData.SectionId;
                TempObject.CompartmentId = 0;
                f = getSectionObject(TempObject.SectionId);
                fillCompartmentCountDropDown(f);
                e = getValidSectionWidthRange();
                ID("txtSectionWidth").min = e.Min;
                ID("txtSectionWidth").max = e.Max;
                ID("txtSectionWidth").value = f.Width;
                setTxtSectionWidthUI(f.Width);
                ID("txtSectionHeight").min = SizeRange.Section.Height.Min;
                ID("txtSectionHeight").max = Configurator.Dimension.OveralHeight;
                ID("txtSectionHeight").value = f.Height;
                break;
            case ClickAction.ChangeCompartmentHeight:
                TempObject.MouseStatusCode = MouseStatus.DownOnHorizontalBorder;
                TempObject.CanChangeCompartmentHeight = !0;
                TempObject.SectionId = t[i].object.userData.SectionId;
                TempObject.StartCompartmentId = t[i].object.userData.StartCompartmentId;
                --TempObject.StartCompartmentId;
                createHelperForMovingMesh(t[i].object);
                break;
            case ClickAction.ChangeSectionHeight:
                TempObject.MouseStatusCode = MouseStatus.DownOnUpperBorder;
                TempObject.CanChangeCompartmentHeight = !1;
                TempObject.SectionId = t[i].object.userData.SectionId;
                TempObject.StartCompartmentId = t[i].object.userData.StartCompartmentId;
                TempObject.MouseStatusCode = MouseStatus.DownOnUpperBorder;
                createHelperForMovingMesh(t[i].object);
                break;
            case ClickAction.ChangeSectionWidth:
                TempObject.MouseStatusCode = MouseStatus.DownOnVerticalBorder;
                TempObject.SectionId = t[i].object.userData.SectionId;
                TempObject.SectionId == Configurator.SectionList.length && (TempObject.SectionId = 0);
                createHelperForMovingMesh(t[i].object)
        }
    } else t.length > 0 && (TempObject.MouseStatusCode = MouseStatus.DownOnEnvironment);
    return
}

function onMouseMove(n) {
    var r, e, u, f, t, o, i;
    prepareRaycaster(n);
    switch (TempObject.MouseStatusCode) {
        case MouseStatus.Down:
            if (i = raycaster.intersectObjects(scene.children, !0), r = 0, i.length > 0 && i[r].object.userData.ClickAction) switch (i[r].object.userData.ClickAction) {
                case ClickAction.ConfigCompartment:
                    TempObject.EndCompartmentId = i[r].object.userData.EndCompartmentId;
                    setTempObjectCompartmentIdList(TempObject.StartCompartmentId, TempObject.EndCompartmentId);
                    createHelperForSelectedMesh()
            }
            break;
        case MouseStatus.DownOnHorizontalBorder:
            if (TempObject.SectionId == 0 || TempObject.StartCompartmentId == 0) return;
            e = getCompartmentObject(TempObject.SectionId, TempObject.StartCompartmentId);
            t = 0;
            getClientY(n) - TempObject.LastMousePosition.Y > 0 ? t = 1 : getClientY(n) - TempObject.LastMousePosition.Y < 0 && (t = -1);
            u = parseInt(e.Height + t);
            txtCompartmentHeight(u, null, !1);
            alignedCompartments();
            TempObject.LastMousePosition.Y = getClientY(n);
            break;
        case MouseStatus.DownOnUpperBorder:
            f = getSectionObject(TempObject.SectionId);
            t = 0;
            getClientY(n) - TempObject.LastMousePosition.Y > 0 ? t = 1 : getClientY(n) - TempObject.LastMousePosition.Y < 0 && (t = -1);
            u = parseInt(f.Height - t);
            txtSectionHeight(u, null, !1);
            alignedCompartments(!0);
            TempObject.LastMousePosition.Y = getClientY(n);
            break;
        case MouseStatus.DownOnVerticalBorder:
            if (TempObject.SectionId == 0) return;
            f = getSectionObject(TempObject.SectionId);
            t = 0;
            getClientX(n) - TempObject.LastMousePosition.X > 0 ? t = 1 : getClientX(n) - TempObject.LastMousePosition.X < 0 && (t = -1);
            o = parseInt(f.Width - t);
            txtSectionWidth(o, null, !1);
            TempObject.LastMousePosition.X = getClientX(n);
            break;
        default:
            if (i = raycaster.intersectObjects(scene.children, !0), i.length > 0) {
                ID("configuratorView").classList.remove();
                switch (i[0].object.userData.MeshType) {
                    case MeshType.LowerBorder:
                    case MeshType.SectionConfig:
                        ID("configuratorView").style.cursor = "url(/design/configure/gear.png), default";
                        break;
                    case MeshType.HorizontalBorder:
                    case MeshType.UpperBorder:
                        ID("configuratorView").style.cursor = "row-resize";
                        break;
                    case MeshType.VerticalBorder:
                        ID("configuratorView").style.cursor = "col-resize";
                        break;
                    case MeshType.Backpanel:
                    case MeshType.Door:
                    case MeshType.DoubleDoor:
                    case MeshType.Drawer:
                    case MeshType.Flap:
                    case MeshType.InsideDrawer:
                        ID("configuratorView").style.cursor = "url(/design/configure/2.png), default";
                        break;
                    default:
                        ID("configuratorView").style.cursor = "auto"
                }
            }
    }
}

function onMouseUp(n) {
    var i, t, r, u;
    if (removeAlignerHelper(), removeHelperForMovingMesh(), TempObject.MouseStatusCode == MouseStatus.DownOnHorizontalBorder || TempObject.MouseStatusCode == MouseStatus.DownOnUpperBorder || TempObject.MouseStatusCode == MouseStatus.DownOnVerticalBorder) {
        TempObject.MouseStatusCode = MouseStatus.Up;
        setNewAction();
        return
    }
    if (controls.enabled = !0, rePositionCamera(), TempObject.MouseStatusCode = MouseStatus.Up, prepareRaycaster(n), i = raycaster.intersectObjects(scene.children, !0), i.length > 0 && i[0].object.userData.ClickAction) switch (i[0].object.userData.ClickAction) {
        case ClickAction.ConfigCompartment:
            TempObject.EndCompartmentId = i[0].object.userData.EndCompartmentId;
            break;
        default:
            return
    } else return;
    if (showCompartmentConfigPanel(n), configPanelItems("furnitureItems"), removeClassFromMultiElement("[data-furniture-item]", "selected-furniture"), removeClassFromMultiElement("[data-interior-item]", "selected-interior"), t = generateNumberSet(TempObject.StartCompartmentId, TempObject.EndCompartmentId), t = extendCompartments(TempObject.SectionId, t), TempObject.StartCompartmentId = t[0], TempObject.EndCompartmentId = t[t.length - 1], TempObject.StartCompartmentId == TempObject.EndCompartmentId) {
        var u = getCompartmentObject(TempObject.SectionId, TempObject.StartCompartmentId), f = u.FurnitureId,
            e = u.InteriorId;
        addClassToMultiElement('[data-furniture-item="' + f + '"]', "selected-furniture");
        addClassToMultiElement('[data-interior-item="' + e + '"]', "selected-interior");
        TempObject.CompartmentIdList = [TempObject.StartCompartmentId];
        furniturUsability(TempObject.SectionId, TempObject.CompartmentIdList);
        InteriorUsability(TempObject.SectionId, TempObject.CompartmentIdList);
        fillCompartmentHeightDropDown(TempObject.SectionId, TempObject.CompartmentIdList)
    } else for (TempObject.CompartmentIdList = generateNumberSet(TempObject.StartCompartmentId, TempObject.EndCompartmentId), r = 0; r < TempObject.CompartmentIdList.length; r++) u = getCompartmentObject(TempObject.SectionId, TempObject.CompartmentIdList[r]), furniturUsability(TempObject.SectionId, TempObject.CompartmentIdList), InteriorUsability(TempObject.SectionId, TempObject.CompartmentIdList), fillCompartmentHeightDropDown(TempObject.SectionId, TempObject.CompartmentIdList)
}

function onRotatorMouseDown(n) {
    n.preventDefault();
    hideExtras();
    TempObject.MouseStatusCode = MouseStatus.DownOnRotator;
    TempObject.MousePositionOnRotator.Init.X = getClientX(n);
    TempObject.MousePositionOnRotator.Init.Y = getClientY(n);
    controls.enabled = !1
}

function onRotatorMouseMove(n) {
    if (TempObject.MouseStatusCode === MouseStatus.DownOnRotator) {
        var r = ID("rotator").getBoundingClientRect(), u = r.left - TempObject.MousePositionOnRotator.Init.X,
            f = TempObject.MousePositionOnRotator.Init.X - r.right, t = 0, i = 0;
        getClientX(n) - TempObject.MousePositionOnRotator.Last.X > 0 ? t = 2 : getClientX(n) - TempObject.MousePositionOnRotator.Last.X < 0 && (t = -2);
        getClientY(n) - TempObject.MousePositionOnRotator.Last.Y > 0 ? i = 2 : getClientY(n) - TempObject.MousePositionOnRotator.Last.Y < 0 && (i = -2);
        rotateCameraOnOrbitX(t);
        rotateCameraOnOrbitY(i);
        TempObject.MousePositionOnRotator.Last.X = getClientX(n);
        TempObject.MousePositionOnRotator.Last.Y = getClientY(n)
    }
}

function onRotatorMouseUp() {
    TempObject.MouseStatusCode = MouseStatus.Up;
    controls.enabled = !0;
    rePositionCamera();
    TempObject.MousePositionOnRotator.Last.X = 0;
    TempObject.MousePositionOnRotator.Last.Y = 0;
    TempObject.MousePositionOnRotator.Init.X = 0;
    TempObject.MousePositionOnRotator.Init.Y = 0
}

function getMeshByName(n) {
    return scene.getObjectByProperty("name", n)
}

function rePositionCamera(n) {
    var t, r, l;
    n = n || !1;
    t = 0;
    r = 0;
    camera.aspect >= 1 ? (t = 100, r = t * (1 + camera.aspect)) : (t = 200, r = t * (2 + camera.aspect));
    var e = fov * Math.PI / 180, a = Configurator.Dimension.OveralHeight / (2 * Math.tan(e / 2)),
        v = 360 * Math.atan(Math.tan(e / 2) * camera.aspect) / Math.PI, y = v * Math.PI / 180,
        p = Math.abs(Configurator.Dimension.OveralWidth / (2 * Math.tan(y / 2))), w = FixNumber(Math.max(a + t, p + r)),
        b = camera.position.x, k = camera.position.y, d = camera.position.z, g = controls.target.y, o = 0,
        u = ConstObject.LineOfSight, s = w, f = Configurator.Dimension.OveralHeight / 2;
    if (Configurator.Dimension.OveralHeight <= ConstObject.LineOfSight && (u = Configurator.Dimension.OveralHeight / 2), n === !0) {
        camera.position.set(o, u, s);
        controls.target = new THREE.Vector3(0, f, 0);
        controls.update();
        rotateCameraOnOrbitX(-35);
        return
    }
    var h = 10, i = 500 / h, nt = FixNumber((o - b) / i, 10), tt = FixNumber((u - k) / i, 10),
        it = FixNumber((s - d) / i, 10), rt = FixNumber((f - g) / i, 10), c = 1;
    repositionCameraFlag !== !0 && (l = setInterval(function () {
        repositionCameraFlag = !0;
        camera.position.set(camera.position.x + nt, camera.position.y + tt, camera.position.z + it);
        controls.target.y += rt;
        controls.update();
        c++;
        c > i && (clearInterval(l), repositionCameraFlag = !1, controls.target.y = f, controls.update())
    }, h))
}

function getObjectByUserData(n, t, i) {
    var r;
    return scene.traverse(function (u) {
        if (i.indexOf(u.userData.MeshType) > -1 && u.userData.SectionId === n && u.userData.StartCompartmentId === t) {
            r = u;
            return
        }
    }), r
}

function getAllObjectsByUserData(n, t, i) {
    var r = [];
    return scene.traverse(function (u) {
        i.indexOf(u.userData.MeshType) > -1 && u.userData.SectionId === n && u.userData.StartCompartmentId === t && r.push(u)
    }), r
}

function getAllObjectsByMeshType(n) {
    var t = [];
    return scene.traverse(function (i) {
        n.indexOf(i.userData.MeshType) > -1 && t.push(i)
    }), t
}

var actionList = [], currentConfiguratorMesh, ClickAction = {
    ConfigCompartment: 1,
    ConfigSection: 2,
    ChangeCompartmentHeight: 3,
    ChangeSectionHeight: 4,
    ChangeSectionWidth: 5
}, MouseStatus = {
    Up: 1,
    Down: 2,
    DownOnHorizontalBorder: 3,
    DownOnVerticalBorder: 4,
    DownOnUpperBorder: 5,
    DownOnEnvironment: 6,
    DownOnRotator: 7,
    OverOnLowerBorder: 8,
    OverOnVerticalBorder: 9,
    OverOnHorizontalBorder: 10
}, ViewMode = { Main: 1, Sizing: 2 }, CurrentViewMode = ViewMode.Main, TempObject = {
    SectionId: 0,
    CompartmentIdList: [],
    StartCompartmentId: 0,
    EndCompartmentId: 0,
    SelectedTexture: { UseImage: !0, SolidColor: "", Image: "" },
    FurnitureColor: "",
    MouseStatusCode: MouseStatus.Up,
    CanChangeCompartmentHeight: !0,
    ScaleFactor: { Main: 1, Sizing: 1 },
    LastValidValue: 0,
    Tour: { IsEnabled: !1, CurrentId: 1 },
    CurrentWindowWidth: 0,
    LastMousePosition: { X: 0, Y: 0 },
    MousePositionOnRotator: { Init: { X: 0, Y: 0 }, Last: { X: 0, Y: 0 } }
}, ConstObject = { MobileWidth: 972, FlapHeightThreshold: 150, LineOfSight: 150 },
    RequestMode = { Save: 1, ShoppingCart: 2 }, HandleCode = { Unknown: "Unknown", Tookar: "Tookar", DoPich: "DoPich" }, HandleMode = { Visible: 0, Hidden: 1 },
    MeshType = {
        Door: 1,
        DoubleDoor: 2,
        Drawer: 3,
        Flap: 4,
        Regal: 5,
        InsideDrawer: 6,
        VerticalDivider: 7,
        ClotheHanger: 8,
        Feet: 9,
        UpperBorder: 10,
        VerticalBorder: 11,
        HorizontalBorder: 12,
        LowerBorder: 13,
        Handle: 14,
        Backpanel: 15,
        Helper: 16,
        Edge: 17,
        MovingHelper: 18,
        SectionConfig: 19
    }, MeshDisplayStatus = { None: 1, Close: 2, Open: 3 };
window.onload = function () {
    if (ProductObject = createProductObject(), TempObject.CurrentWindowWidth = $(window).width(), CurrentViewMode = ViewMode.Main, setConfigurator(), setSectionHeightRange(), toggleFeetHint(), Price2.Initialize(), setUI(), shadowTexture = (new THREE.TextureLoader).load("/design/configure/backpanelShadow.png"), init3D(!0), animate(), drawView(), toggleAllMeshDisplayStatus(), configPanelItems("furnitureItems"), addEventToMultiHandler("[data-handleobject-id]", "click", handleFunc), addEventToMultiHandler("[data-handleobject-id]", "mouseover", handleOverFunc), addEventToMultiHandler("[data-materialobject-id]", "click", materialFunc), addEventToMultiHandler("[data-mobile-button-name]", "click", mobileButtonFunc), Calculate(), setNewAction(), range_wrap(!0), setConfigBasedOnDevice(), togglePageLoaderVisibility(!1), needInstallation(), isLoggedIn) {
        ID("btnCompletedDesign").onclick = n;

        function n() {
            console.log("HERE")
            save("true")
        }
    } else {
        $("#btnCompletedDesign").addClass("disabled");
        ID("btnCompletedDesign").onclick = n;

        function n() {
            alert("جهت افزودن به سبد خرید، به حساب کاربری خود وارد شوید. بهتر است ابتدا بر روی دکمه ذخیره طرح در بالای رسام کلیک کنید و آدرس یکتای این طرح را ذخیره کنید و بعد از ورود به حساب کاربری خود، از همین آدرس استفاده نمایید.")
        }
    }
    // Hide UI elements
    // const uiElements = [
    //     'pageLoader', 'speedTest', 'dimensionPanel', 'dimensionPanelMobile',
    //     'mobilePanel', 'configPanel', 'sectionConfigPanel', 'tourPanel', 'sharePanel'
    // ];
    // uiElements.forEach(id => {
    //     const element = document.getElementById(id);
    //     if (element) element.style.display = 'none';
    // });

    // Send initial controls and state
    window.parent.postMessage({ code: 100, message: 'controls', data: getAvailableControls() }, '*');
    window.parent.postMessage({ code: 99, message: 'state', data: Configurator }, '*');
    window.opener && window.opener.postMessage({ code: 1, message: "window load complete" }, "https://admin.idero.ir/")
};

setInterval(() => {
    window.parent.postMessage({ code: 100, message: 'controls', data: getAvailableControls() }, '*');
}, 5000);

// Override control event handlers to send state updates
const originalInputs = getAvailableControls().map(o => o.id);
originalInputs.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('input', (e) => {
            if (!e?.isTrusted) return;
            const data = {
                id,
                value: element.type === "checkbox" ? e.checked || element.checked : e?.target?.value || e.value
            }
            console.log("change", data);
            window.parent.postMessage({ code: 101, message: 'change', data }, '*');
            sendPrice();
        });
    }
});


// Get available controls
function getAvailableControls() {
    const inputs = Array.from(document.querySelectorAll("input, select")).filter(input => {
        const container = input.closest("[data-container]") || input.closest(".col-sm-6") || input.closest(".item");
        if (!container) return true;
        let el = container;
        while (el && el !== document.body) {
            if (el.style && el.style.display === "none") return false;
            el = el.parentElement;
        }
        return true;
    });

    return inputs.map(input => {
        function findLabel(e = input, _try = 0) {
            const item = e.closest("div.item") || e.closest("div.col-sm-6");
            if (!item) return "";
            const label = item.querySelector("b,p,span");
            return label?.innerText || "";
        }
        if (input.type === "checkbox") {
            const options = Array.from(input?.closest("div")?.querySelectorAll("label") || []);
            input.options = options.map((o, i) => ({
                innerText: o.innerText,
                value: i === 0 ? "true" : "false"
            }))
        }
        if (input.getAttribute("data-type") === "button-list") {
            const buttons = Array.from(input.closest("div.item")?.querySelectorAll("button"));

            input.options = buttons.map((o, i) => {
                o.id = "button-color-" + i;
                return ({
                    innerText: o.getAttribute("data-color-name"),
                    value: o.id,
                    extra: o.style.backgroundImage.split("\"")[1]
                });
            })
        }
        return {
            label: findLabel(),
            id: input.id || input.class,
            value: input.type === "checkbox" ? input.checked : (input.value || input.checked),
            ...input.options && ({
                options: Array.from(input.options).map(o => ({ label: o.innerText, value: o.value, extra: o.extra || undefined }))
            }),
            min: +input.min,
            max: +input.max,
            tag: input.tagName.toLowerCase(),
            type: input.getAttribute("data-type") || input.type,
            marks: input.getAttribute("data-val")?.split(",")?.map?.((o, i) => ({
                label: o + "",
                value: i + 1
            })) || []
        }
    });
}

function sendPrice(n) {
    window.parent.postMessage({ code: 105, message: 'price', data: n || Price2.GetPriceWithDiscount() }, "*");
}

// PostMessage handler
window.addEventListener('message', (event) => {
    const { command, data } = event.data || {};
    console.log(command, data);
    switch (command) {
        case 'setCategory':
            setDefaultDesignObject(data.CategoryId);
            break;
        case 'getState':
            window.parent.postMessage({ code: 99, message: 'state', data: Configurator }, event.origin);
            break;
        case "Price":
            sendPrice();
            break;
        case "Save":
            save("true");
            break;
        case 'getControls':
            window.parent.postMessage({ code: 100, message: 'controls', data: getAvailableControls() }, event.origin);
            break;
        case "Click":
            document.querySelector(data.path)?.click();
            break;
        case "Eval":
            eval(data?.value)
            break;
        case 'setControlValue': {
            const element = document.getElementById(data.id);
            if (element) {
                if (element.type === 'checkbox' || typeof data.value === "boolean" || data.value === "true" || data.value === "false") {
                    const value = typeof data.value === "boolean" ? data.value : data.value === "on" ? data.value === "on" : data.value === "true";
                    console.log(element, "CHECKBOX", element.type, value)
                    element.checked = value;
                } else {
                    element.value = data.value;
                }
                const payload = {};
                const changeEvent = new Event('input', payload);
                element.dispatchEvent(changeEvent);
                element.dispatchEvent(new Event('change', payload));
                if (typeof element.oninput === 'function') {
                    element.oninput.call(element, changeEvent);
                }
                if (typeof element.onchange === 'function') {
                    element.onchange.call(element, new Event('change', payload));
                }
            }
            break;
        }
    }
});

window.addEventListener("message", n => {
    n.data.mode == 1 && window.opener && window.opener.postMessage({
        code: 99,
        message: "child load complete",
        data: ProductObject
    }, "https://admin.idero.ir/")
});
split_range_wrap(!0);
window.onmouseup = windowMouseUp;
window.onresize = windowResize;
document.onclick = stopClick;
document.onmousedown = stopClick;
document.onmouseup = stopClick;
ID("overalWidthRange").oninput = overalWidthRangeInput;
ID("overalWidthRange").onmouseup = overalWidthRangeMouseUp;
ID("overalWidthRange").ontouchend = overalWidthRangeMouseUp;
ID("overalWidthRange").onkeyup = overalWidthRangeMouseUp;
ID("overalHeightRange").onmouseup = overalHeightRangeMouseUp;
ID("overalHeightRange").ontouchend = overalHeightRangeMouseUp;
ID("overalHeightRange").onkeyup = overalHeightRangeMouseUp;
ID("overalHeightRange").oninput = overalHeightRangeInput;
ID("overalDepthRange").onmouseup = overalDepthRangeMouseUp;
ID("overalDepthRange").oninput = overalDepthRangeInput;
ID("closetModeInput").oninput = closetModeInputInput;
ID("sectionCountDropDown").oninput = sectionCountDropDownInput;
ID("txtCompartmentHeight").oninput = txtCompartmentHeightInput;
ID("txtCompartmentHeight").addEventListener("focusout", function () {
    checkCompartmentHeightRange(this.value).Code == ResultCode.False && (this.value = TempObject.LastValidValue)
});
ID("txtCompartmentCount").oninput = txtCompartmentCountInput;
ID("txtSectionWidth").oninput = txtSectionWidthInput;
ID("txtSectionWidth").addEventListener("focusout", function () {
    checkSectionWidthRange(this.value).Code == ResultCode.False && (this.value = TempObject.LastValidValue)
});
ID("txtSectionHeight").oninput = txtSectionHeightInput;
ID("txtSectionHeight").addEventListener("focusout", function () {
    checkSectionHeightRange(this.value).Code == ResultCode.False && (this.value = TempObject.LastValidValue);
    var n = getSectionObject(TempObject.SectionId);
    fillCompartmentCountDropDown(n)
});
ID("bptInput").oninput = bptInputInput;
ID("fpInput").oninput = fpInputInput;
ID("feetInput").oninput = feetInputInput;
ID("handleInput").oninput = handleInputInput;
ID("handleModeInput").oninput = handleModeInputInput;
ID("hoodInput").oninput = hoodInputInput;
ID("hoodModeInput").oninput = hoodModeInputInput;
ID("microwaveInput").oninput = microwaveInputInput;
ID("microwaveModeInput").oninput = microwaveModeInputInput;
ID("nextTour").onclick = nextTourClick;
ID("exitTour").onclick = exitTourCLick;
window.onfocus = windowFocus;
var furnitureFunc = function () {
    furnitureItemClick(this)
}, interiorFunc = function () {
    interiorItemClick(this)
}, handleFunc = function (n) {
    handleClick(n)
}, handleOverFunc = function (n) {
    handleOver(n)
}, materialFunc = function (n) {
    materialClick(n)
}, mobileButtonFunc = function (n) {
    mobileButtonClick(n)
};
var scene = new THREE.Scene, controls, camera, renderer, raycaster = new THREE.Raycaster, pointer = new THREE.Vector2,
    fov = 20, gapFactor = .3, shelveMaterial, whiteMaterial, shadyWhiteMaterial, shadyShelveMaterial,
    edgedShelveMaterial, sectionConfigMaterial, MeshWithHelperList = [], MeshWithAlignerHelperList = [],
    personageWidth = 28, personageHeight = 187, pointLight = new THREE.PointLight(16777215, .5),
    ambientLight = new THREE.AmbientLight(16777215, .5), shadowTexture, configuratorPattern = "", firstSeconds = 0,
    firstFrameId = 0, animationRequestedId = 0, repositionCameraFlag = !1;
ID("configuratorView").onmousedown = onMouseDown;
ID("configuratorView").onmousemove = onMouseMove;
ID("configuratorView").onmouseup = onMouseUp;
ID("configuratorView").ontouchstart = onMouseDown;
ID("configuratorView").ontouchmove = onMouseMove;
ID("configuratorView").ontouchend = onMouseUp;
ID("rotator").onmousedown = onRotatorMouseDown;
ID("rotator").onmousemove = onRotatorMouseMove;
ID("rotator").onmouseup = onRotatorMouseUp;
ID("rotator").ontouchstart = onRotatorMouseDown;
ID("rotator").ontouchmove = onRotatorMouseMove;
ID("rotator").ontouchend = onRotatorMouseUp;