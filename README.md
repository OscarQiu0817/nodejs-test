# nodejs-test

若發現安裝完 express 之後, 指令還是不能用, 檢查環境變數的 Path 是否有把 npm 的路徑放進去裡面

npm 路徑可藉由以下指令查看  

npm list -g --depth=0

----

安裝 nodemon : 
npm install -g nodemon

自動偵測 伺服器文件若有修改則自動重新啟動.

----
啟動指令 : 
nodemon .\websocket-server.js
