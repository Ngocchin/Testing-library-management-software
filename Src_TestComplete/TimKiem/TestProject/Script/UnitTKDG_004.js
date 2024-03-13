function TKDG_004()
{
  //Runs the "GUI" tested application.
  TestedApps.GUI.Run();
  //Enters the text 'a' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("a");
  //Clicks the 'FormLogin' object.
  Aliases.GUI.FormLogin.Click(344, 320);
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(53, 4);
  //Enters '^![ReleaseLast][ReleaseLast]' in the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Keys("^![ReleaseLast][ReleaseLast]");
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonTheThuVien' button.
  Aliases.GUI.XtraFormMainThuThu.simpleButtonTheThuVien.ClickButton();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(139, 5);
  //Enters the text '$%#@!' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("$%#@!\t\t\t\t");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(143, 9);
  //Drags the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Drag(166, 6, -124, 3);
  //Enters the text '$%#@!' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("$%#@!\t");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(124, 7);
  //Drags the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Drag(129, 2, -192, 2);
  //Enters the text ';/.' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText(";/.");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(44, 8);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(223, 5);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(89, 6);
}