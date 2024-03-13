function TKS_003()
{
  //Runs the "GUI" tested application.
  TestedApps.GUI.Run();
  //Enters the text 'a' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("a");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(267, 16);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonQuanLySach' button.
  Aliases.GUI.XtraFormMainThuThu.simpleButtonQuanLySach.ClickButton();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(103, 1);
  //Enters '^![ReleaseLast][ReleaseLast]' in the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Keys("^![ReleaseLast][ReleaseLast]");
  //Enters the text 'truyện' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("truyện");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(105, 4);
  //Enters the text 'ngày' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("ngày");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(105, 4);
  //Enters the text '' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("");
}