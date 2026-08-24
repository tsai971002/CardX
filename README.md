# CardsX Frontend v6

新增會員註冊：
- 註冊按鈕
- 暱稱
- Email
- 台灣手機號碼
- 密碼 / 確認密碼
- 服務條款同意
- 行銷通知選擇
- 註冊後直接進入「我的 CardsX」

目前為 Prototype：
- 不會真的把會員寫入資料庫
- 尚未寄 Email 驗證信
- 尚未發手機 OTP
- 尚未做 Google / Apple Sign-in
- 尚未做 KYC

正式版建議：
- Auth：Supabase Auth / Clerk / Auth0
- Email Verification
- SMS OTP
- 2FA
- KYC 狀態
- Account Security / Login Sessions
