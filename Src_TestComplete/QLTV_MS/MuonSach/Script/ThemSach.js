function TC005()
{
  TestedApps.GUI.Run();
  let gui = Aliases.GUI;
  let formLogin = gui.FormLogin;
  formLogin.textBoxUsername.SetText("a");
  let textBox = formLogin.textBoxPassword;
  textBox.Click(119, 13);
  textBox.SetText(Project.Variables.Password1);
  formLogin.buttonDangNhap.ClickButton();
  gui.XtraFormMainThuThu.simpleButtonMuonSach.ClickButton();
  let xtraFormMuonSach = gui.XtraFormMuonSach;
  xtraFormMuonSach.dataGridViewDSSach.ClickCell(2, "ID");
  let simpleButton = xtraFormMuonSach.simpleButtonThemMuonSach;
  aqObject.CheckProperty(simpleButton, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.GUI.XtraFormMuonSach.dataGridViewDSSach, "wValue(2, 0)", cmpEqual, 3);
  aqObject.CheckProperty(Aliases.GUI.XtraFormMuonSach.dataGridViewDSSach, "wValue(2, 1)", cmpEqual, "Những người thích đùa");
  simpleButton.ClickButton();
  let dataGridView = xtraFormMuonSach.dataGridViewDSSachChon;
  dataGridView.ClickCell(0, "TENSACH");
  let dataGridViewTextBoxEditingControl = dataGridView.Panel.DataGridViewTextBoxEditingControl;
  dataGridViewTextBoxEditingControl.ClickR(43, 10);
  dataGridViewTextBoxEditingControl.DblClick(39, 5);
  dataGridViewTextBoxEditingControl.DblClick(39, 5);
  dataGridViewTextBoxEditingControl.DblClick(39, 5);
  dataGridViewTextBoxEditingControl.Click(39, 5);
  aqObject.CheckProperty(dataGridViewTextBoxEditingControl, "wText", cmpEqual, "Những người thích đùa");
  aqObject.CheckProperty(Aliases.GUI.XtraFormMuonSach.dataGridViewDSSachChon, "wValue(0, 1)", cmpEqual, "3");
  let xtraFormMainThuThu = gui.XtraFormMainThuThu;
  gui.XtraFormMuonSach.pictureBox1.Click(35, 21);
  xtraFormMainThuThu.Close();
  formLogin.Close();
}
function TC006()
{
  TestedApps.GUI.Run();
  let gui = Aliases.GUI;
  let formLogin = gui.FormLogin;
  formLogin.textBoxUsername.SetText("a");
  let textBox = formLogin.textBoxPassword;
  textBox.Click(110, 11);
  textBox.SetText(Project.Variables.Password1);
  formLogin.buttonDangNhap.ClickButton();
  gui.XtraFormMainThuThu.simpleButtonMuonSach.ClickButton();
  let xtraFormMuonSach = gui.XtraFormMuonSach;
  let simpleButton = xtraFormMuonSach.simpleButtonThemMuonSach;
  aqObject.CheckProperty(simpleButton, "Enabled", cmpEqual, true);
  xtraFormMuonSach.dataGridViewDSSach.ClickCell(5, "ID");
  aqObject.CheckProperty(Aliases.GUI.XtraFormMuonSach.dataGridViewDSSach, "wValue(5, 0)", cmpEqual, 6);
  aqObject.CheckProperty(Aliases.GUI.XtraFormMuonSach.dataGridViewDSSach, "wValue(5, 1)", cmpEqual, "Nhà giả kim");
  aqObject.CheckProperty(Aliases.GUI.XtraFormMuonSach.dataGridViewDSSach, "wValue(5, 5)", cmpEqual, 0);
  simpleButton.ClickButton();
  let dlg = gui.dlg;
  aqObject.CheckProperty(dlg.Static5, "WndCaption", cmpEqual, "Số lượng sách này đã hết.");
  dlg.btnOK.ClickButton();
  let xtraFormMainThuThu = gui.XtraFormMainThuThu;
  gui.XtraFormMuonSach.pictureBox1.Click(35, 21);
  xtraFormMainThuThu.Close();
  formLogin.Close();
}