﻿function Test1()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Enters the text 'b' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("b");
  //Enters '[Down]' in the 'textBoxUsername' object.
  Aliases.GUI.FormLogin.textBoxUsername.Keys("[Down]");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(71, 13);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonTraSach' button.
  Aliases.GUI.XtraFormMainThuThu.simpleButtonTraSach.ClickButton();
  //Enters the text 'Lý Thị Trâm' in the 'textBoxTenDocGiaTra' text editor.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.SetText("Lý Thị Trâm");
  //Clicks the 'simpleButtonKiemTraDocGia' button.
  Aliases.GUI.XtraFormTraSach.simpleButtonKiemTraDocGia.ClickButton();
  //Clicks the 'dataGridViewDSMuon' grid cell at row 1, column 'ID'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "ID");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 1, column 'IDMATHEDOCGIA'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "IDMATHEDOCGIA");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 1, column 'TENDOCGIA'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "TENDOCGIA");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 1, column 'IDTHUTHU'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "IDTHUTHU");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 1, column 'HOTENTHUTHU'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "HOTENTHUTHU");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 1, column 'NGAYMUON'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "NGAYMUON");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 1, column 'NGAYTRA'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "NGAYTRA");
  //Clicks the indicator of the 0 row of the dataGridViewSachTra grid.
  Aliases.GUI.XtraFormTraSach.dataGridViewSachTra.ClickRowIndicator(0);
  //Clicks the 'simpleButtonXacNhanTra' button.
  Aliases.GUI.XtraFormTraSach.simpleButtonXacNhanTra.ClickButton();
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'textBoxTenDocGiaTra' object.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.Click(106, 13);
  //Enters the text 'Trần Văn B' in the 'textBoxTenDocGiaTra' text editor.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.SetText("Trần Văn B");
  //Clicks the 'simpleButtonKiemTraDocGia' button.
  Aliases.GUI.XtraFormTraSach.simpleButtonKiemTraDocGia.ClickButton();
  //Clicks the 'dataGridViewDSMuon' grid cell at row 0, column 'IDMATHEDOCGIA'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "IDMATHEDOCGIA");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 0, column 'TENDOCGIA'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "TENDOCGIA");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 0, column 'IDTHUTHU'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "IDTHUTHU");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 0, column 'HOTENTHUTHU'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "HOTENTHUTHU");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 0, column 'NGAYMUON'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "NGAYMUON");
  //Clicks the 'dataGridViewDSMuon' grid cell at row 0, column 'NGAYTRA'.
  Aliases.GUI.XtraFormTraSach.dataGridViewDSMuon.ClickCell(0, "NGAYTRA");
  //Clicks the indicator of the row of the dataGridViewSachTra grid where a new record will be added.
  Aliases.GUI.XtraFormTraSach.dataGridViewSachTra.ClickNewRowIndicator();
  //Clicks the 'simpleButtonXacNhanTra' button.
  Aliases.GUI.XtraFormTraSach.simpleButtonXacNhanTra.ClickButton();
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'textBoxTenDocGiaTra' object.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.Click(105, 6);
  //Enters the text 'Lý Mỹ Cấm' in the 'textBoxTenDocGiaTra' text editor.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.SetText("Lý Mỹ Cấm");
  //Clicks the 'simpleButtonKiemTraDocGia' button.
  Aliases.GUI.XtraFormTraSach.simpleButtonKiemTraDocGia.ClickButton();
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'textBoxTenDocGiaTra' object.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.Click(76, 11);
  //Enters the text '' in the 'textBoxTenDocGiaTra' text editor.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.SetText("");
  //Enters '[BS][BS][BS]' in the 'textBoxTenDocGiaTra' object.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.Keys("[BS][BS][BS]");
  //Clicks the 'simpleButtonKiemTraDocGia' button.
  Aliases.GUI.XtraFormTraSach.simpleButtonKiemTraDocGia.ClickButton();
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Enters the text '!@#$' in the 'textBoxTenDocGiaTra' text editor.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.SetText("!@#$");
  //Clicks the 'simpleButtonKiemTraDocGia' button.
  Aliases.GUI.XtraFormTraSach.simpleButtonKiemTraDocGia.ClickButton();
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Enters the text '' in the 'textBoxTenDocGiaTra' text editor.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.SetText("");
  //Clicks the 'simpleButtonKiemTraDocGia' button.
  Aliases.GUI.XtraFormTraSach.simpleButtonKiemTraDocGia.ClickButton();
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'textBoxTenDocGiaTra' object.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.Click(92, 12);
  //Enters the text 'Lý Văn Bình' in the 'textBoxTenDocGiaTra' text editor.
  Aliases.GUI.XtraFormTraSach.textBoxTenDocGiaTra.SetText("Lý Văn Bình");
  //Clicks the 'simpleButtonKiemTraDocGia' button.
  Aliases.GUI.XtraFormTraSach.simpleButtonKiemTraDocGia.ClickButton();
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
}