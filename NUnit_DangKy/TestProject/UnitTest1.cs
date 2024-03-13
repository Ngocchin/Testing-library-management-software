using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using FlaUI.UIA3;
using FlaUI.Core;
using FlaUI.Core.AutomationElements;
using System.Text;
using FlaUI.Core.Definitions;
using FlaUI.UIA3.Identifiers;
using FlaUI.Core.Conditions;
using FlaUI.Core.Tools;

namespace TestProject
{
    [TestClass]
    public class UnitTest1
    {
        Application app = FlaUI.Core.Application.Launch(@"H:\QuanLyThuVien\QLTV\QLTV\GUI\bin\Debug\GUI.exe");

        #region
        static string GenerateRandomUsername()
        {
            // Danh sách các ký tự có thể sử dụng trong tên người dùng
            string characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

            // Độ dài mong muốn của tên người dùng
            int usernameLength = 8;

            // Sử dụng StringBuilder để hiệu quả khi cần thêm nhiều ký tự
            StringBuilder username = new StringBuilder();

            Random random = new Random();

            // Tạo tên người dùng bằng cách thêm ngẫu nhiên các ký tự từ danh sách vào StringBuilder
            for (int i = 0; i < usernameLength; i++)
            {
                int index = random.Next(characters.Length);
                username.Append(characters[index]);
            }

            return username.ToString();
        }
        #endregion

        [TestMethod]
        public void TestDangKyThanhCong()
        {

            using (var automation = new UIA3Automation())
            {
                var window = app.GetMainWindow(automation);
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxUsernameReg")).AsTextBox().Enter(GenerateRandomUsername());
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxPasswordReg")).AsTextBox().Enter("b");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxConfirmPasswordReg")).AsTextBox().Enter("b");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxTenHienThi")).AsTextBox().Enter("b");
                window.FindFirstDescendant(cf => cf.ByAutomationId("buttonDangKy")).AsButton().Click();

                var condition = new PropertyCondition(AutomationObjectIds.NameProperty, "Đăng ký mới thành công.");
                var messageBox = Retry.WhileNull(() => app.GetMainWindow(automation).FindFirstDescendant(condition), TimeSpan.FromSeconds(10));
                Assert.IsNotNull(messageBox, "Message box is not displayed");

                var messageBoxText = window.FindFirstDescendant(cf => cf.ByControlType(ControlType.Text)).AsLabel().Text;
                var expectedMessage = "Đăng ký mới thành công.";
                Assert.AreEqual(expectedMessage, messageBoxText, $"Expected message: {expectedMessage}");

            }
        }

        [TestMethod]
        public void TestSaiMk()
        {
            using (var automation = new UIA3Automation())
            {
                var window = app.GetMainWindow(automation);
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxUsernameReg")).AsTextBox().Enter("sdsa");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxPasswordReg")).AsTextBox().Enter("232");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxConfirmPasswordReg")).AsTextBox().Enter("45454");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxTenHienThi")).AsTextBox().Enter("asdsads");
                window.FindFirstDescendant(cf => cf.ByAutomationId("buttonDangKy")).AsButton().Click();

                var condition = new PropertyCondition(AutomationObjectIds.NameProperty, "Xác nhận mật khẩu không trùng khớp.");
                var messageBox = Retry.WhileNull(() => app.GetMainWindow(automation).FindFirstDescendant(condition), TimeSpan.FromSeconds(10));
                Assert.IsNotNull(messageBox, "Message box is not displayed");

                var messageBoxText = window.FindFirstDescendant(cf => cf.ByControlType(ControlType.Text)).AsLabel().Text;
                var expectedMessage = "Xác nhận mật khẩu không trùng khớp.";
                Assert.AreEqual(expectedMessage, messageBoxText, $"Expected message: {expectedMessage}");
            }
        }

        [TestMethod]
        public void TestTrungUsername()
        {
            using (var automation = new UIA3Automation())
            {
                var window = app.GetMainWindow(automation);
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxUsernameReg")).AsTextBox().Enter("a");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxPasswordReg")).AsTextBox().Enter("123");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxConfirmPasswordReg")).AsTextBox().Enter("123");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxTenHienThi")).AsTextBox().Enter("Van Nguyen");
                window.FindFirstDescendant(cf => cf.ByAutomationId("buttonDangKy")).AsButton().Click();

                var condition = new PropertyCondition(AutomationObjectIds.NameProperty, "Tài khoản đã tồn tại.");
                var messageBox = Retry.WhileNull(() => app.GetMainWindow(automation).FindFirstDescendant(condition), TimeSpan.FromSeconds(10));
                Assert.IsNotNull(messageBox, "Message box is not displayed");

                var messageBoxText = window.FindFirstDescendant(cf => cf.ByControlType(ControlType.Text)).AsLabel().Text;
                var expectedMessage = "Tài khoản đã tồn tại.";
                Assert.AreEqual(expectedMessage, messageBoxText, $"Expected message: {expectedMessage}");
            }
        }

        [TestMethod]
        public void TestRongUsername()
        {
            using (var automation = new UIA3Automation())
            {
                var window = app.GetMainWindow(automation);
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxUsernameReg")).AsTextBox().Enter("");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxPasswordReg")).AsTextBox().Enter("123");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxConfirmPasswordReg")).AsTextBox().Enter("123");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxTenHienThi")).AsTextBox().Enter("Van Nguyen");
                window.FindFirstDescendant(cf => cf.ByAutomationId("buttonDangKy")).AsButton().Click();

                var condition = new PropertyCondition(AutomationObjectIds.NameProperty, "Các trường nhập không được để trống.");
                var messageBox = Retry.WhileNull(() => app.GetMainWindow(automation).FindFirstDescendant(condition), TimeSpan.FromSeconds(10));
                Assert.IsNotNull(messageBox, "Message box is not displayed");

                var messageBoxText = window.FindFirstDescendant(cf => cf.ByControlType(ControlType.Text)).AsLabel().Text;
                var expectedMessage = "Các trường nhập không được để trống.";
                Assert.AreEqual(expectedMessage, messageBoxText, $"Expected message: {expectedMessage}");
            }
        }

        [TestMethod]
        public void TestPasswordEasy()
        {
            using (var automation = new UIA3Automation())
            {
                var window = app.GetMainWindow(automation);
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxUsernameReg")).AsTextBox().Enter(GenerateRandomUsername());
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxPasswordReg")).AsTextBox().Enter("123");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxConfirmPasswordReg")).AsTextBox().Enter("123");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxTenHienThi")).AsTextBox().Enter("Van Nguyen");
                window.FindFirstDescendant(cf => cf.ByAutomationId("buttonDangKy")).AsButton().Click();

                var condition = new PropertyCondition(AutomationObjectIds.NameProperty, "Mật khẩu quá dễ đoán, không được mật khẩu là: 123");
                var messageBox = Retry.WhileNull(() => app.GetMainWindow(automation).FindFirstDescendant(condition), TimeSpan.FromSeconds(10));
                Assert.IsNotNull(messageBox, "Message box is not displayed");

                var messageBoxText = window.FindFirstDescendant(cf => cf.ByControlType(ControlType.Text)).AsLabel().Text;
                var expectedMessage = "Mật khẩu quá dễ đoán, không được mật khẩu là: 123";
                Assert.AreEqual(expectedMessage, messageBoxText, $"Expected message: {expectedMessage}");
            }
        }

        [TestMethod]
        public void TestPasswordEmpty()
        {
            using (var automation = new UIA3Automation())
            {
                var window = app.GetMainWindow(automation);
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxUsernameReg")).AsTextBox().Enter("user3");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxPasswordReg")).AsTextBox().Enter("");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxConfirmPasswordReg")).AsTextBox().Enter("123");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxTenHienThi")).AsTextBox().Enter("Van Nguyen");
                window.FindFirstDescendant(cf => cf.ByAutomationId("buttonDangKy")).AsButton().Click();

                var condition = new PropertyCondition(AutomationObjectIds.NameProperty, "Các trường nhập không được để trống.");
                var messageBox = Retry.WhileNull(() => app.GetMainWindow(automation).FindFirstDescendant(condition), TimeSpan.FromSeconds(10));
                Assert.IsNotNull(messageBox, "Message box is not displayed");

                var messageBoxText = window.FindFirstDescendant(cf => cf.ByControlType(ControlType.Text)).AsLabel().Text;
                var expectedMessage = "Các trường nhập không được để trống.";
                Assert.AreEqual(expectedMessage, messageBoxText, $"Expected message: {expectedMessage}");
            }
        }

        [TestMethod]
        public void TestEmptyAll()
        {
            using (var automation = new UIA3Automation())
            {
                var window = app.GetMainWindow(automation);

                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxUsernameReg")).AsTextBox().Enter("");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxPasswordReg")).AsTextBox().Enter("");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxConfirmPasswordReg")).AsTextBox().Enter("");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxTenHienThi")).AsTextBox().Enter("");
                window.FindFirstDescendant(cf => cf.ByAutomationId("buttonDangKy")).AsButton().Click();

                var condition = new PropertyCondition(AutomationObjectIds.NameProperty, "Các trường nhập không được để trống.");
                var messageBox = Retry.WhileNull(() => app.GetMainWindow(automation).FindFirstDescendant(condition), TimeSpan.FromSeconds(10));
                Assert.IsNotNull(messageBox, "Message box is not displayed");

                var messageBoxText = window.FindFirstDescendant(cf => cf.ByControlType(ControlType.Text)).AsLabel().Text;
                var expectedMessage = "Các trường nhập không được để trống.";
                Assert.AreEqual(expectedMessage, messageBoxText, $"Expected message: {expectedMessage}");
            }
        }

        [TestMethod]
        public void TestPasswordNull()
        {
            using (var automation = new UIA3Automation())
            {
                var window = app.GetMainWindow(automation);
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxUsernameReg")).AsTextBox().Enter("usernull");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxPasswordReg")).AsTextBox().Enter(null);
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxConfirmPasswordReg")).AsTextBox().Enter("123");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxTenHienThi")).AsTextBox().Enter("Van Nguyen");
                window.FindFirstDescendant(cf => cf.ByAutomationId("buttonDangKy")).AsButton().Click();

                var condition = new PropertyCondition(AutomationObjectIds.NameProperty, "Các trường nhập không được để trống.");
                var messageBox = Retry.WhileNull(() => app.GetMainWindow(automation).FindFirstDescendant(condition), TimeSpan.FromSeconds(10));
                Assert.IsNotNull(messageBox, "Message box is not displayed");

                var messageBoxText = window.FindFirstDescendant(cf => cf.ByControlType(ControlType.Text)).AsLabel().Text;
                var expectedMessage = "Các trường nhập không được để trống.";
                Assert.AreEqual(expectedMessage, messageBoxText, $"Expected message: {expectedMessage}");
            }
        }

        [TestMethod]
        public void TestEmptyTenHienThi()
        {

            using (var automation = new UIA3Automation())
            {
                var window = app.GetMainWindow(automation);
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxUsernameReg")).AsTextBox().Enter(GenerateRandomUsername());
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxPasswordReg")).AsTextBox().Enter("b");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxConfirmPasswordReg")).AsTextBox().Enter("b");
                window.FindFirstDescendant(cf => cf.ByAutomationId("textBoxTenHienThi")).AsTextBox().Enter("");
                window.FindFirstDescendant(cf => cf.ByAutomationId("buttonDangKy")).AsButton().Click();

                var condition = new PropertyCondition(AutomationObjectIds.NameProperty, "Đăng ký mới thành công.");
                var messageBox = Retry.WhileNull(() => app.GetMainWindow(automation).FindFirstDescendant(condition), TimeSpan.FromSeconds(10));
                Assert.IsNotNull(messageBox, "Message box is not displayed");

                var messageBoxText = window.FindFirstDescendant(cf => cf.ByControlType(ControlType.Text)).AsLabel().Text;
                var expectedMessage = "Đăng ký mới thành công.";
                Assert.AreEqual(expectedMessage, messageBoxText, $"Expected message: {expectedMessage}");
            }
        }
    }
}