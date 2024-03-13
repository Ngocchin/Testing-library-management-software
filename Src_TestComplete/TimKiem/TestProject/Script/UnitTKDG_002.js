function TKDG_002()
{
  //Runs the "GUI" tested application.
  TestedApps.GUI.Run();
  //Clicks the 'textBoxUsername' object.
  Aliases.GUI.FormLogin.textBoxUsername.Click(243, 11);
  //Enters the text 'a' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("a");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(208, 13);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonTheThuVien' button.
  Aliases.GUI.XtraFormMainThuThu.simpleButtonTheThuVien.ClickButton();
  //Clicks the 'textEditTimDocGia' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.Click(197, 17);
  //Enters the text '' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(201, 8);
  //Enters the text 'vádf' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("vádf");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(206, 4);
  //Drags the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Drag(200, 6, -216, 0);
  //Enters the text '' in the 'textEditTimDocGia' text editor.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.SetText("");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(58, 7);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(224, 8);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(215, 11);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormTheThuVien.textEditTimDocGia.TextBoxMaskBox.Click(210, 10);
}