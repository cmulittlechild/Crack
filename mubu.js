/******************************

软件版本：2.28.5
更新时间：2023-8-14
问题反馈：QQ+1513242614

*******************************

[rewrite_local]

^https:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mubu.js

[mitm] 

hostname = api2.mubu.com


*******************************/


var body = $response.body.replace(/vipEndDate":""/g,'vipEndDate":"99999999"')
.replace(/level":\d+/g,'level":1')
$done({ body });