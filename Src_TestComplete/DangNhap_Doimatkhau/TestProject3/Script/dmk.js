function Test8()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Enters the text 'admin' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("admin");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(53, 12);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password2);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonMuonSachAdmin' button.
  Aliases.GUI.frmAdmin.simpleButtonMuonSachAdmin.ClickButton();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormDSNhanVien.textEditUsername.TextBoxMaskBox.Click(72, 0);
  //Enters the text 'phong' in the 'textEditUsername' text editor.
  Aliases.GUI.XtraFormDSNhanVien.textEditUsername.SetText("phong");
  //Clicks the 'simpleButtonDoiMK' button.
  Aliases.GUI.XtraFormDSNhanVien.simpleButtonDoiMK.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static4 object equals 'Chưa có đầy đủ thông tin.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static4, "WndCaption", cmpEqual, "Chưa có đầy đủ thông tin.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.XtraFormDSNhanVien.pictureBox1.Click(22, 17);
  //Clicks the 'pictureBox2' object.
  Aliases.GUI.frmAdmin.pictureBox2.Click(27, 21);
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(26, 28);
}

function Test9()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Enters the text 'admin' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("admin");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(54, 4);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password2);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonMuonSachAdmin' button.
  Aliases.GUI.frmAdmin.simpleButtonMuonSachAdmin.ClickButton();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormDSNhanVien.textEditPassword.TextBoxMaskBox.Click(52, 7);
  //Enters the text '123' in the 'textEditPassword' text editor.
  Aliases.GUI.XtraFormDSNhanVien.textEditPassword.SetText("123");
  //Clicks the 'simpleButtonDoiMK' button.
  Aliases.GUI.XtraFormDSNhanVien.simpleButtonDoiMK.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static4 object equals 'Chưa có đầy đủ thông tin.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static4, "WndCaption", cmpEqual, "Chưa có đầy đủ thông tin.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.XtraFormDSNhanVien.pictureBox1.Click(31, 28);
  //Closes the 'frmAdmin' window.
  Aliases.GUI.frmAdmin.Close();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(26, 35);
}

function Test10()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Enters the text 'admin' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("admin");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(33, 10);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password2);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonMuonSachAdmin' button.
  Aliases.GUI.frmAdmin.simpleButtonMuonSachAdmin.ClickButton();
  //Clicks the 'simpleButtonDoiMK' button.
  Aliases.GUI.XtraFormDSNhanVien.simpleButtonDoiMK.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static4 object equals 'Chưa có đầy đủ thông tin.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static4, "WndCaption", cmpEqual, "Chưa có đầy đủ thông tin.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.XtraFormDSNhanVien.pictureBox1.Click(27, 22);
  //Clicks the 'pictureBox2' object.
  Aliases.GUI.frmAdmin.pictureBox2.Click(13, 25);
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(33, 19);
}

function Test11()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Enters the text 'admin' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("admin");
  //Enters '[Tab]' in the 'textBoxUsername' object.
  Aliases.GUI.FormLogin.textBoxUsername.Keys("[Tab]");
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password2);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonMuonSachAdmin' button.
  Aliases.GUI.frmAdmin.simpleButtonMuonSachAdmin.ClickButton();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormDSNhanVien.textEditUsername.TextBoxMaskBox.Click(37, 3);
  //Enters the text 'phong' in the 'textEditUsername' text editor.
  Aliases.GUI.XtraFormDSNhanVien.textEditUsername.SetText("phong");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormDSNhanVien.textEditPassword.TextBoxMaskBox.Click(30, 0);
  //Enters the text '123' in the 'textEditPassword' text editor.
  Aliases.GUI.XtraFormDSNhanVien.textEditPassword.SetText("123");
  //Clicks the 'simpleButtonDoiMK' button.
  Aliases.GUI.XtraFormDSNhanVien.simpleButtonDoiMK.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static5 object equals 'Không có tài khoản này.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static5, "WndCaption", cmpEqual, "Không có tài khoản này.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.XtraFormDSNhanVien.pictureBox1.Click(20, 27);
  //Clicks the 'pictureBox2' object.
  Aliases.GUI.frmAdmin.pictureBox2.Click(16, 16);
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(17, 22);
}

function Test12()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Enters the text 'admin' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("admin");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(78, 14);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password2);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonMuonSachAdmin' button.
  Aliases.GUI.frmAdmin.simpleButtonMuonSachAdmin.ClickButton();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormDSNhanVien.textEditUsername.TextBoxMaskBox.Click(39, 5);
  //Enters the text 'a' in the 'textEditUsername' text editor.
  Aliases.GUI.XtraFormDSNhanVien.textEditUsername.SetText("a");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormDSNhanVien.textEditPassword.TextBoxMaskBox.Click(10, 3);
  //Enters the text '123' in the 'textEditPassword' text editor.
  Aliases.GUI.XtraFormDSNhanVien.textEditPassword.SetText("123");
  //Clicks the 'simpleButtonDoiMK' button.
  Aliases.GUI.XtraFormDSNhanVien.simpleButtonDoiMK.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static6 object equals 'Đã đổi mật khẩu.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static6, "WndCaption", cmpEqual, "Đã đổi mật khẩu.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.XtraFormDSNhanVien.pictureBox1.Click(23, 27);
  //Clicks the 'pictureBox2' object.
  Aliases.GUI.frmAdmin.pictureBox2.Click(24, 25);
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(17, 25);
}