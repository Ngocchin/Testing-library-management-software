function TKS_001()
{
  //Runs the "GUI" tested application.
  TestedApps.GUI.Run();
  //Enters the text 'a' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("a");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(158, 4);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonQuanLySach' button.
  Aliases.GUI.XtraFormMainThuThu.simpleButtonQuanLySach.ClickButton();
  //Enters '^![ReleaseLast][ReleaseLast]' in the 'dataGridViewSach' object.
  Aliases.GUI.XtraFormQuanLySach.dataGridViewSach.Keys("^![ReleaseLast][ReleaseLast]");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(314, 2);
  //Enters the text 'cho tôi' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("cho tôi");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(314, 2);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(314, 2);
  //Enters the text 'xin một' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("xin một");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(314, 2);
  //Enters the text 'đại' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("đại");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(314, 2);
  //Enters the text 'sử ký' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("sử ký");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(314, 2);
}