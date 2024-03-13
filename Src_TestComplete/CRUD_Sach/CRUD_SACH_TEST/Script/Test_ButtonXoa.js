function TC09()
{
  //Double-clicks the 'dataGridViewSach' grid cell at row 2, column 'TENNXB'.
  Aliases.GUI.XtraFormQuanLySach.dataGridViewSach.DblClickCell(2, "TENNXB");
  //Checks whether the 'Enabled' property of the Aliases.GUI.XtraFormQuanLySach.dataGridViewSach object equals True.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.dataGridViewSach, "Enabled", cmpEqual, true);
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonXoa.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonXoa.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Clicks the 'simpleButtonXoa' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonXoa.ClickButton();
  //Checks whether the 'Enabled' property of the Aliases.GUI.XtraFormQuanLySach.dataGridViewSach object equals True.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.dataGridViewSach, "Enabled", cmpEqual, true);
}

function TC10()
{
  //Clicks the indicator of the row of the dataGridViewSach grid where a new record will be added.
  Aliases.GUI.XtraFormQuanLySach.dataGridViewSach.ClickNewRowIndicator();
  //Checks whether the 'Enabled' property of the Aliases.GUI.XtraFormQuanLySach.dataGridViewSach object equals True.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.dataGridViewSach, "Enabled", cmpEqual, true);
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonXoa.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonXoa.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Clicks the 'simpleButtonXoa' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonXoa.ClickButton();
  //Checks whether the 'Enabled' property of the Aliases.GUI.XtraFormQuanLySach.dataGridViewSach object equals True.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.dataGridViewSach, "Enabled", cmpEqual, true);
}

function TC11()
{
  //Checks whether the 'Enabled' property of the Aliases.GUI.XtraFormQuanLySach.dataGridViewSach object equals True.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.dataGridViewSach, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox object equals True.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox, "Enabled", cmpEqual, true);
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox object equals ''.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongTon.TextBoxMaskBox, "wText", cmpEqual, "");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox object equals ''.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditTenSach.TextBoxMaskBox, "wText", cmpEqual, "");
  //Checks whether the 'wText' property of the Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox object equals ''.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.textEditSoLuongMuon.TextBoxMaskBox, "wText", cmpEqual, "");
  //Clicks the 'simpleButtonXoa' button.
  Aliases.GUI.XtraFormQuanLySach.simpleButtonXoa.ClickButton();
  //Checks whether the 'ClrFullClassName' property of the Aliases.GUI.XtraFormQuanLySach.simpleButtonXoa.EventClick object equals 'System.Object'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormQuanLySach.simpleButtonXoa.EventClick, "ClrFullClassName", cmpEqual, "System.Object");
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static object equals 'Các trường nhập không được để trống.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static, "WndCaption", cmpEqual, "Các trường nhập không được để trống.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
}