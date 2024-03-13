function Test1()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Enters the text 'phong' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("phong");
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static object equals 'Các trường nhập không được để trống.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static, "WndCaption", cmpEqual, "Các trường nhập không được để trống.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(30, 26);
}

function Test2()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(50, 3);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static object equals 'Các trường nhập không được để trống.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static, "WndCaption", cmpEqual, "Các trường nhập không được để trống.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(20, 24);
}


function Test3()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static object equals 'Các trường nhập không được để trống.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static, "WndCaption", cmpEqual, "Các trường nhập không được để trống.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(32, 20);
}

function Test4()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Enters the text 'phong' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("phong");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(42, 3);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static2 object equals 'Tài khoản không tồn tại.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static2, "WndCaption", cmpEqual, "Tài khoản không tồn tại.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(23, 6);
}

function Test5()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Clicks the 'textBoxUsername' object.
  Aliases.GUI.FormLogin.textBoxUsername.Click(100, 14);
  //Enters the text 'admin' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("admin");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(65, 8);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.dlg.Static3 object equals 'Sai mật khẩu.'.
  aqObject.CheckProperty(Aliases.GUI.dlg.Static3, "WndCaption", cmpEqual, "Sai mật khẩu.");
  //Clicks the 'btnOK' button.
  Aliases.GUI.dlg.btnOK.ClickButton();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(19, 18);
}


function Test6()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Clicks the 'textBoxUsername' object.
  Aliases.GUI.FormLogin.textBoxUsername.Click(92, 13);
  //Enters the text 'admin' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("admin");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(25, 9);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password2);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.GUI.frmAdmin object equals 'Quản lý thư viện (Admin)'.
  aqObject.CheckProperty(Aliases.GUI.frmAdmin, "WndCaption", cmpEqual, "Quản lý thư viện (Admin)");
  //Clicks the 'pictureBox2' object.
  Aliases.GUI.frmAdmin.pictureBox2.Click(23, 21);
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(18, 22);
}

function Test7()
{
  //Runs the "setup" tested application.
  TestedApps.setup.Run();
  //Clicks the 'textBoxUsername' object.
  Aliases.GUI.FormLogin.textBoxUsername.Click(90, 8);
  //Enters the text 'a' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("a");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(53, 5);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password3);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'XtraFormMainThuThu' object.
  Aliases.GUI.XtraFormMainThuThu.Click(452, 508);
  //Checks whether the 'WndCaption' property of the Aliases.GUI.XtraFormMainThuThu object equals 'Quản lý thư viện (Thủ thư)'.
  aqObject.CheckProperty(Aliases.GUI.XtraFormMainThuThu, "WndCaption", cmpEqual, "Quản lý thư viện (Thủ thư)");
  //Closes the 'XtraFormMainThuThu' window.
  Aliases.GUI.XtraFormMainThuThu.Close();
  //Clicks the 'pictureBox1' object.
  Aliases.GUI.FormLogin.pictureBox1.Click(34, 20);
}

