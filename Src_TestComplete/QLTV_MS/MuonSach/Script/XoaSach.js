﻿function TC007()
{
  TestedApps.GUI.Run();
  let gui = Aliases.GUI;
  let formLogin = gui.FormLogin;
  formLogin.textBoxUsername.SetText("a");
  let textBox = formLogin.textBoxPassword;
  textBox.Click(94, 18);
  textBox.SetText(Project.Variables.Password1);
  formLogin.buttonDangNhap.ClickButton();
  gui.XtraFormMainThuThu.simpleButtonMuonSach.ClickButton();
  let xtraFormMuonSach = gui.XtraFormMuonSach;
  let dataGridView = xtraFormMuonSach.dataGridViewDSSach;
  dataGridView.ClickCell(0, "ID");
  dataGridView.ClickCell(0, "TENSACH");
  aqObject.CheckProperty(Aliases.GUI.XtraFormMuonSach.dataGridViewDSSach, "wValue(0, 0)", cmpEqual, 1);
  dataGridView.ClickCellR(0, "TENSACH");
  aqObject.CheckProperty(Aliases.GUI.XtraFormMuonSach.dataGridViewDSSach, "wValue(0, 1)", cmpEqual, "Cho tôi xin một vé đi tuổi thơ");
  let simpleButton = xtraFormMuonSach.simpleButtonThemMuonSach;
  aqObject.CheckProperty(simpleButton, "Enabled", cmpEqual, true);
  let simpleButton2 = xtraFormMuonSach.simpleButtonXoaMuonSach;
  aqObject.CheckProperty(simpleButton2, "Enabled", cmpEqual, true);
  simpleButton.ClickButton();
  dataGridView = xtraFormMuonSach.dataGridViewDSSachChon;
  dataGridView.ClickCell(0, "TENSACH");
  let dataGridViewTextBoxEditingControl = dataGridView.Panel.DataGridViewTextBoxEditingControl;
  aqObject.CheckProperty(dataGridViewTextBoxEditingControl, "wSelection", cmpEqual, "Cho tôi xin một vé đi tuổi thơ");
  dataGridViewTextBoxEditingControl.ClickR(67, 8);
  dataGridView.ClickColumnHeaderXY("TENSACH", 73, 13);
  aqObject.CheckProperty(Aliases.GUI.XtraFormMuonSach.dataGridViewDSSachChon, "wValue(0, 1)", cmpEqual, "1");
  simpleButton2.ClickButton();
  let xtraFormMainThuThu = gui.XtraFormMainThuThu;
  gui.XtraFormMuonSach.pictureBox1.Click(35, 21);
  xtraFormMainThuThu.Close();
  formLogin.Close();
}