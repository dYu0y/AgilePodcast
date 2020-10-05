# AgilePodcast
這是敏捷軟體開發課程的project
目標是能夠快速的開發出能最小的可上市Podcast軟體吸引使用者注意
並在之後快速的更新新功能讓更多的使用者願意付費使用

## 關於初始化與執行
要能使code運作起來請先下載[NPM](https://www.npmjs.com/)至電腦內  
確認有把nmp加入系統路徑後

接著從這個網頁把專案下載下來  
![](https://i.imgur.com/0QV780Z.png)
下載完成後進入專案資料夾  
![](https://i.imgur.com/C1WJ0nm.png)
在箭頭指的位置輸入 **cmd** 並按下 enter 鍵  
此時會跳出一個小黑窗  
![](https://i.imgur.com/8x07TI5.png)
確認路徑無誤後輸入 `npm install` 並按下 enter 執行  
等他跑完後  
再同樣的地方輸入 `npm start` 就應該可以在瀏覽器看到畫面了  
![](https://i.imgur.com/7LQrYVQ.png)

## 安裝到手機上(android)
請先下載 [**android studio**](https://developer.android.com/studio) 至電腦上  
安裝完成後進入 agile_podcast 專案資料夾  
以 **cmd** 開啟小黑窗  
接著複製貼上下面的指令並運行  
**第一次運行**
``` cmd
npm run build --watch&& npx cap copy && npx cap add android && npx cap copy android && npx cap open android
```
**第二次之後**
``` cmd
npm run build --watch&& npx cap copy && npx cap copy android && npx cap open android
```
會看到 **android studio** 被開啟  
接下來按照下面幾篇教學的步驟就可以將APP安裝到手機上了!!  
[教學1](https://yiyingloveart.blogspot.com/2016/01/android-app-app.html)  
[教學2](https://readandplay.pixnet.net/blog/post/183736257)  
