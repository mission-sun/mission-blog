#!/bin/sh
# rm -rf node_modules

echo "执行的文件名：$0";
echo "第一个参数为：$1";
set="set";
echo "第一个参数为：$set";
if [ $1 == $set ]
then
    pm2 deploy ecosystem.config.js production setup
else pm2 deploy ecosystem.config.js production
fi

# echo "第二个参数为：$2";
# echo "第三个参数为：$3";