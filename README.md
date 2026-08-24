# CardsX Frontend v4

更新：
- 取消北中南實體合作驗卡中心
- CardsX 驗證總部設定於高雄
- 賣家成交後必須寄卡至總部驗證
- 驗證通過顯示 CardsX Verified
- 每張驗證實體卡建立唯一 CardsX ID
- 每次成交自動產生新的隨機、不重複 Transaction ID
- 最近成交紀錄新增：成交卡牌 / CardsX ID / 交易序號
- 新增完整驗證流程 UI
- 保留 Vault / Bid / Ask / 最近成交價 / 市場走勢

正式後端需在資料庫對 Transaction ID 設 UNIQUE constraint，碰撞時自動重新生成。
