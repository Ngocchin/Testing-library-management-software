﻿function TC05()
{
  //Clicks the 'dataGridViewSach' grid cell at row 2, column 'TENNXB'.
  Aliases.GUI.XtraFormQuanLySach.dataGridViewSach.ClickCell(2, "TENNXB");
  //Clicks the 'DataGridViewTextBoxEditingControl' object.
  Aliases.GUI.XtraFormQuanLySach.dataGridViewSach.DataGridViewEditingPanel.DataGridViewTextBoxEditingControl.Click(57, 6);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox.Click(46, 2);
  //Enters the text 'TC1' in the 'textEditTenSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.SetText("TC1");
  //Selects the 'Truyện cười' item of the 'comboBoxTheLoai' combo box.
  Aliases.GUI.XtraFormQuanLySach.comboBoxTheLoai.ClickItem("Truyện cười");
  //Selects the 'Nguyễn Nhật Ánh' item of the 'comboBoxTacGia' combo box.
  Aliases.GUI.XtraFormQuanLySach.comboBoxTacGia.ClickItem("Nguyễn Nhật Ánh");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox.Click(34, 10);
  //Enters the text '10' in the 'textEditSoLuongMuon' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.SetText("10");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox object equals 'TC1'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox, "wText", cmpEqual, "TC1");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox object equals '10'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox, "wText", cmpEqual, "10");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.comboBoxTheLoai.ComboBoxChildNativeWindow object equals 'Truyện cười'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.comboBoxTheLoai.ComboBoxChildNativeWindow, "wText", cmpEqual, "Truyện cười");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.comboBoxTacGia.ComboBoxChildNativeWindow object equals 'Nguyễn Nhật Ánh'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.comboBoxTacGia.ComboBoxChildNativeWindow, "wText", cmpEqual, "Nguyễn Nhật Ánh");
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Clicks the 'simpleButtonCapNhat' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.ClickButton();
  //Checks whether the 'Enabled' property of the Aliases.GUI.XtraFormQuanLySach.dataGridViewSach object equals True.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.dataGridViewSach, "Enabled", cmpEqual, true);
}

function TC06()
{
  //Double-clicks a cell in the 'TENSACH' column of the dataGridViewSach grid to add a new record.
  Aliases.GUI.XtraFormQuanLySach.dataGridViewSach.DblClickNewRowCell("TENSACH");
  //Double-clicks a cell in the 'TENNXB' column of the dataGridViewSach grid to add a new record.
  Aliases.GUI.XtraFormQuanLySach.dataGridViewSach.DblClickNewRowCell("TENNXB");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox.Click(69, 10);
  //Enters the text 'aa' in the 'textEditTenSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.SetText("aa");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox.Click(29, 5);
  //Enters the text '1' in the 'textEditSoLuongTon' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.SetText("1");
  //Clicks the 'textEditSoLuongMuon' object.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.Click(37, 1);
  //Enters the text '1' in the 'textEditSoLuongMuon' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.SetText("1");
  //Clicks the 'simpleButtonCapNhat' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.ClickButton();
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox object equals 'aa'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox, "wText", cmpEqual, "aa");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox object equals '1'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox, "wText", cmpEqual, "1");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox object equals '1'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox, "wText", cmpEqual, "1");
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Checks whether the 'Enabled' property of the Aliases.GUI.XtraFormQuanLySach.dataGridViewSach object equals True.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.dataGridViewSach, "Enabled", cmpEqual, true);
}

function TC07()
{
  //Double-clicks the 'dataGridViewSach' grid cell at row 2, column 'TENNXB'.
  Aliases.GUI.XtraFormQuanLySach.dataGridViewSach.DblClickCell(2, "TENNXB");
  //Clicks the 'textEditTenSach' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.Click(98, 1);
  //Enters the text '' in the 'textEditTenSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTenSach.SetText("");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox object equals ''.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox, "wText", cmpEqual, "");
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Clicks the 'simpleButtonCapNhat' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static object equals 'Các trường nhập không được để trống.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static, "WndCaption", cmpEqual, "Các trường nhập không được để trống.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
}

function TC08()
{
  //Double-clicks the 'dataGridViewSach' grid cell at row 0, column 'TENNXB'.
  Aliases.GUI.XtraFormQuanLySach.dataGridViewSach.DblClickCell(0, "TENNXB");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox.Click(36, 4);
  //Enters the text 'ba' in the 'textEditSoLuongTon' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.SetText("ba");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox object equals 'ba'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox, "wText", cmpEqual, "ba");
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Clicks the 'simpleButtonCapNhat' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonCapNhat.ClickButton();
  //Checks whether the 'Enabled' property of the Aliases.devenv.HwndSource_MainWindow.MainWindow.AutoHideRootControl.DockRootControl.DockGroupControl.DockGroupControl.DockGroupControl.WMDocumentGroupContainerControl.DocumentGroupControl.SplitterItemsControl.Canvas object equals True.
  aqObject.CheckProperty(Aliases.devenv.HwndSource_MainWindow.MainWindow.AutoHideRootControl.DockRootControl.DockGroupControl.DockGroupControl.DockGroupControl.WMDocumentGroupContainerControl.DocumentGroupControl.SplitterItemsControl.Canvas, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.devenv.HwndSource_MainWindow.MainWindow.AutoHideRootControl.DockRootControl.DockGroupControl.DockGroupControl.DockGroupControl.WMDocumentGroupContainerControl.DocumentGroupControl.SplitterItemsControl.ExceptionDescription object equals True.
  aqObject.CheckProperty(Aliases.devenv.HwndSource_MainWindow.MainWindow.AutoHideRootControl.DockRootControl.DockGroupControl.DockGroupControl.DockGroupControl.WMDocumentGroupContainerControl.DocumentGroupControl.SplitterItemsControl.ExceptionDescription, "Enabled", cmpEqual, true);
}