function TKDG_001()
{
  //Runs the "GUI" tested application.
  TestedApps.GUI.Run();
  //Clicks the 'textBoxUsername' object.
  Aliases.GUI.FormLogin.textBoxUsername.Click(221, 0);
  //Clicks the 'wndXLMAIN' object.
  Aliases.wps.wndXLMAIN.Click(1825, 25);
  //Clicks the 'textBoxUsername' object.
  Aliases.GUI.FormLogin.textBoxUsername.Click(162, 13);
  //Enters the text 'a' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("a");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(161, 4);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonTheThuVien' button.
  Aliases.GUI.XtraFormMainThuThu.simpleButtonTheThuVien.ClickButton();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(102, 3);
  //Enters '^![ReleaseLast][ReleaseLast]' in the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Keys("^![ReleaseLast][ReleaseLast]");
  //Enters the text 'Nguyễn' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("Nguyễn");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(121, 9);
  //Enters the text 'Hoàng' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("Hoàng");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(129, 10);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(129, 10);
  //Enters the text 'Trâm' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("Trâm");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(129, 10);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(129, 10);
}