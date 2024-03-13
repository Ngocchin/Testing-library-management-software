function TKS_004()
{
  //Runs the "GUI" tested application.
  TestedApps.GUI.Run();
  //Enters the text 'a' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("a");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(289, 4);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'XtraFormMainThuThu' object.
  Aliases.GUI.XtraFormMainThuThu.Click(949, 95);
  //Clicks the 'simpleButtonQuanLySach' button.
  Aliases.GUI.XtraFormMainThuThu.simpleButtonQuanLySach.ClickButton();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(21, 4);
  //Enters the text '$%#@!' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("$%#@!");
  //Double-clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.DblClick(82, 8);
  //Enters the text ';/.' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText(";/.");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(45, 4);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(258, 11);
}