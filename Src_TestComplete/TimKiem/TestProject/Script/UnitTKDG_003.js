function TKDG_003()
{
  //Runs the "GUI" tested application.
  TestedApps.GUI.Run();
  //Clicks the 'textBoxUsername' object.
  Aliases.GUI.FormLogin.textBoxUsername.Click(210, 5);
  //Enters the text 'a' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("a");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(169, 3);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonTheThuVien' button.
  Aliases.GUI.XtraFormMainThuThu.simpleButtonTheThuVien.ClickButton();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(204, 1);
  //Enters '^![ReleaseLast][ReleaseLast]' in the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Keys("^![ReleaseLast][ReleaseLast]");
  //Enters the text 'Công' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("Công");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(204, 1);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(178, 6);
  //Enters the text 'Đ' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("Đ");
  //Enters '![ReleaseLast]' in the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Keys("![ReleaseLast]");
  //Enters the text 'Đại' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("Đại");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(178, 6);
  //Enters the text 'Lê' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("Lê");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(188, 3);
}