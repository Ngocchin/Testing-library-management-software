﻿function TC001()
{
  TestedApps.GUI.Run();
  let gui = Aliases.GUI;
  let formLogin = gui.FormLogin;
  let textBox = formLogin.textBoxUsername;
  textBox.SetText("a");
  let textBox2 = formLogin.textBoxPassword;
  textBox2.Click(127, 5);
  textBox2.SetText(Project.Variables.Password1);
  aqObject.CheckProperty(textBox, "wText", cmpEqual, "a");
  aqObject.CheckProperty(textBox2, "Text", cmpEqual, "a");
  formLogin.buttonDangNhap.ClickButton();
  gui.XtraFormMainThuThu.simpleButtonMuonSach.ClickButton();
  let xtraFormMuonSach = gui.XtraFormMuonSach;
  let simpleButton = xtraFormMuonSach.simpleButtonKiemTraDocGia;
  aqObject.CheckProperty(simpleButton, "Enabled", cmpEqual, true);
  textBox = xtraFormMuonSach.textBoxTenDocGiaMuon;
  textBox.SetText("Lê Hoàng Công");
  aqObject.CheckProperty(textBox, "wText", cmpEqual, "Lê Hoàng Công");
  simpleButton.ClickButton();
  aqObject.CheckProperty(xtraFormMuonSach.textBoxMaDocGiaMuon, "wText", cmpEqual, "2005");
  let xtraFormMainThuThu = gui.XtraFormMainThuThu;
  gui.XtraFormMuonSach.pictureBox1.Click(35, 21);
  xtraFormMainThuThu.Close();
  formLogin.Close();
}
function TC002()
{
  TestedApps.GUI.Run();
  let gui = Aliases.GUI;
  let formLogin = gui.FormLogin;
  formLogin.textBoxUsername.SetText("a");
  let textBox = formLogin.textBoxPassword;
  textBox.Click(87, 4);
  textBox.SetText(Project.Variables.Password1);
  formLogin.buttonDangNhap.ClickButton();
  gui.XtraFormMainThuThu.simpleButtonMuonSach.ClickButton();
  let xtraFormMuonSach = gui.XtraFormMuonSach;
  let simpleButton = xtraFormMuonSach.simpleButtonKiemTraDocGia;
  aqObject.CheckProperty(simpleButton, "Enabled", cmpEqual, true);
  textBox = xtraFormMuonSach.textBoxTenDocGiaMuon;
  textBox.SetText("Lý Thị Trâm");
  aqObject.CheckProperty(textBox, "wText", cmpEqual, "Lý Thị Trâm");
  simpleButton.ClickButton();
  let dlg = gui.dlg;
  aqObject.CheckProperty(dlg.Static2, "WndCaption", cmpEqual, "Thẻ thư viện này đã hết hạn.");
  dlg.btnOK.ClickButton();
  let xtraFormMainThuThu = gui.XtraFormMainThuThu;
  gui.XtraFormMuonSach.pictureBox1.Click(35, 21);
  xtraFormMainThuThu.Close();
  formLogin.Close();
}
function TC003()
{
  TestedApps.GUI.Run();
  let gui = Aliases.GUI;
  let formLogin = gui.FormLogin;
  formLogin.textBoxUsername.SetText("a");
  let textBox = formLogin.textBoxPassword;
  textBox.Click(93, 10);
  textBox.SetText(Project.Variables.Password1);
  formLogin.buttonDangNhap.ClickButton();
  gui.XtraFormMainThuThu.simpleButtonMuonSach.ClickButton();
  let xtraFormMuonSach = gui.XtraFormMuonSach;
  textBox = xtraFormMuonSach.textBoxTenDocGiaMuon;
  textBox.SetText("Nguyễn Thị Bích Ngân");
  let simpleButton = xtraFormMuonSach.simpleButtonKiemTraDocGia;
  aqObject.CheckProperty(simpleButton, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(textBox, "wText", cmpEqual, "Nguyễn Thị Bích Ngân");
  simpleButton.ClickButton();
  let dlg = gui.dlg;
  aqObject.CheckProperty(dlg.Static, "WndCaption", cmpEqual, "Độc giả không tồn tại.");
  dlg.btnOK.ClickButton();
  let xtraFormMainThuThu = gui.XtraFormMainThuThu;
  gui.XtraFormMuonSach.pictureBox1.Click(35, 21);
  xtraFormMainThuThu.Close();
  formLogin.Close();
}
function TC004()
{
  TestedApps.GUI.Run();
  let gui = Aliases.GUI;
  let formLogin = gui.FormLogin;
  formLogin.textBoxUsername.SetText("a");
  let textBox = formLogin.textBoxPassword;
  textBox.Click(88, 4);
  textBox.SetText(Project.Variables.Password1);
  formLogin.buttonDangNhap.ClickButton();
  gui.XtraFormMainThuThu.simpleButtonMuonSach.ClickButton();
  let xtraFormMuonSach = gui.XtraFormMuonSach;
  let simpleButton = xtraFormMuonSach.simpleButtonKiemTraDocGia;
  aqObject.CheckProperty(simpleButton, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(xtraFormMuonSach.textBoxTenDocGiaMuon, "wText", cmpEqual, "");
  simpleButton.ClickButton();
  let dlg = gui.dlg;
  aqObject.CheckProperty(dlg.Static3, "WndCaption", cmpEqual, "Trường nhập không được để trống.");
  dlg.btnOK.ClickButton();
  let xtraFormMainThuThu = gui.XtraFormMainThuThu;
  gui.XtraFormMuonSach.pictureBox1.Click(35, 21);
  xtraFormMainThuThu.Close();
  formLogin.Close();
}
function TC011()
{
  TestedApps.GUI.Run();
  let gui = Aliases.GUI;
  let formLogin = gui.FormLogin;
  formLogin.textBoxUsername.SetText("a");
  let textBox = formLogin.textBoxPassword;
  textBox.Click(159, 10);
  textBox.SetText(Project.Variables.Password1);
  formLogin.buttonDangNhap.ClickButton();
  gui.XtraFormMainThuThu.simpleButtonMuonSach.ClickButton();
  let xtraFormMuonSach = gui.XtraFormMuonSach;
  let simpleButton = xtraFormMuonSach.simpleButtonKiemTraDocGia;
  aqObject.CheckProperty(simpleButton, "Enabled", cmpEqual, true);
  textBox = xtraFormMuonSach.textBoxTenDocGiaMuon;
  textBox.SetText("Võ Đình Luân");
  aqObject.CheckProperty(textBox, "wText", cmpEqual, "Võ Đình Luân");
  simpleButton.ClickButton();
  let dlg = gui.dlg;
  aqObject.CheckProperty(dlg.Static4, "WndCaption", cmpEqual, "Độc giả này vẫn đang mượn sách nên không thể cho mượn thêm.");
  dlg.btnOK.ClickButton();
  let xtraFormMainThuThu = gui.XtraFormMainThuThu;
  gui.XtraFormMuonSach.pictureBox1.Click(35, 21);
  xtraFormMainThuThu.Close();
  formLogin.Close();
}