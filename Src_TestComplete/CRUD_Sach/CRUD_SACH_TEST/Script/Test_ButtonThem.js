﻿function TC01()
{
  //Enters the text 'b' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("b");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(156, 13);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonQuanLySach' button.
  Aliases.GUI.XtraFormMainThuThu.simpleButtonQuanLySach.ClickButton();
  //Selects the 'Tiểu thuyết' item of the 'comboBoxTheLoai' combo box.
  Aliases.GUI.XtraFormQuanLySach.comboBoxTheLoai.ClickItem("Tiểu thuyết");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox.Click(57, 3);
  //Enters the text 'TT3' in the 'textEditTenSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.SetText("TT4");
  //Selects the 'Ngô Sĩ Liên' item of the 'comboBoxTacGia' combo box.
  Aliases.GUI.XtraFormQuanLySach.comboBoxTacGia.ClickItem("Ngô Sĩ Liên");
  //Selects the 'NXB Giáo dục Việt Nam' item of the 'comboBoxNXB' combo box.
  Aliases.GUI.XtraFormQuanLySach.comboBoxNXB.ClickItem("NXB Giáo dục Việt Nam");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox.Click(79, 12);
  //Enters the text '10' in the 'textEditSoLuongTon' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.SetText("10");
  //Clicks the 'textEditSoLuongMuon' object.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.Click(54, 0);
  //Enters the text '1' in the 'textEditSoLuongMuon' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.SetText("1");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox object equals 'TT3'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox, "wText", cmpEqual, "TT4");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox object equals '10'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox, "wText", cmpEqual, "10");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox object equals '1'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox, "wText", cmpEqual, "1");
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Clicks the 'simpleButtonThem' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.ClickButton();
}

function TC02()
{
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox.Click(145, 6);
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox object equals ''.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox, "wText", cmpEqual, "");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox object equals ''.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox, "wText", cmpEqual, "");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon object equals ''.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon, "wText", cmpEqual, "");
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Clicks the 'simpleButtonThem' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static object equals 'Các trường nhập không được để trống.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static, "WndCaption", cmpEqual, "Các trường nhập không được để trống.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
}

function TC03()
{
  //Rotates the mouse wheel to -3 over the 'dataGridViewSach' object.
  Aliases.GUI.XtraFormQuanLySach.dataGridViewSach.MouseWheel(-3);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox.Click(66, 10);
  //Enters the text 'TT4' in the 'textEditTenSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.SetText("TT4");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox.Click(49, 10);
  //Enters the text '10' in the 'textEditSoLuongTon' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.SetText("10");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox.Click(47, 7);
  //Enters the text '10' in the 'textEditSoLuongMuon' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.SetText("10");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox object equals 'TT4'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox, "wText", cmpEqual, "TT4");
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Clicks the 'simpleButtonThem' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static2 object equals 'Sách này đã tồn tại.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static2, "WndCaption", cmpEqual, "Sách này đã tồn tại.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
}

function TC04()
{
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox.Click(136, 6);
  //Enters the text 'ls1' in the 'textEditTenSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.SetText("ls1");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox.Click(20, 7);
  //Enters the text 'ba' in the 'textEditSoLuongTon' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.SetText("ba");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox.Click(27, 2);
  //Enters the text 'bon' in the 'textEditSoLuongMuon' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.SetText("bon");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox object equals 'ba'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox, "wText", cmpEqual, "ba");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox object equals 'bon'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox, "wText", cmpEqual, "bon");
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Clicks the 'simpleButtonThem' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonThem.ClickButton();
  //Checks whether the 'Enabled' property of the Aliases.devenv.HwndSource_MainWindow.MainWindow.AutoHideRootControl.DockRootControl.DockGroupControl.DockGroupControl.DockGroupControl.WMDocumentGroupContainerControl.DocumentGroupControl.SplitterItemsControl.CrispImage object equals False.
  aqObject.CheckProperty(Aliases.devenv.HwndSource_MainWindow.MainWindow.AutoHideRootControl.DockRootControl.DockGroupControl.DockGroupControl.DockGroupControl.WMDocumentGroupContainerControl.DocumentGroupControl.SplitterItemsControl.CrispImage, "Enabled", cmpEqual, false);
}