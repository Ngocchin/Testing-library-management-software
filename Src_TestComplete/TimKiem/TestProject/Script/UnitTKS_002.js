function TKS_002()
{
  //Runs the "GUI" tested application.
  TestedApps.GUI.Run();
  //Enters the text 'a' in the 'textBoxUsername' text editor.
  Aliases.GUI.FormLogin.textBoxUsername.SetText("a");
  //Clicks the 'textBoxPassword' object.
  Aliases.GUI.FormLogin.textBoxPassword.Click(119, 4);
  //Enters text in the 'textBoxPassword' text editor.
  Aliases.GUI.FormLogin.textBoxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonDangNhap' button.
  Aliases.GUI.FormLogin.buttonDangNhap.ClickButton();
  //Clicks the 'simpleButtonQuanLySach' button.
  Aliases.GUI.XtraFormMainThuThu.simpleButtonQuanLySach.ClickButton();
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(160, 5);
  //Enters the text 'adadsf' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("adadsf");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(160, 5);
  //Clicks the 'XtraFormQuanLySach' object.
  Aliases.GUI.XtraFormQuanLySach.Click(420, 342);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(102, 8);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(146, 4);
  //Drags the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Drag(155, 6, -233, 1);
  //Enters the text '' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(354, 5);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(34, 3);
  //Double-clicks the 'textEditTimSach' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.DblClick(64, 1);
  //Clicks the 'textEditTimSach' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.Click(64, 1);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(37, 5);
  //Enters the text 'gnjdhsdf' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("gnjdhsdf");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(37, 5);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(65, 11);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(67, 9);
  //Drags the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Drag(78, 6, -245, -3);
  //Enters the text '' in the 'textEditTimSach' text editor.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.SetText("");
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(127, 7);
  //Clicks the 'TextBoxMaskBox' object.
  Aliases.GUI.XtraFormQuanLySach.textEditTimSach.TextBoxMaskBox.Click(147, 5);
}