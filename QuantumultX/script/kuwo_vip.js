// 酷我  ^http://vip1\.kuwo\.cn/vip/v2/user/vip
/* {
  "ctime" : 1654572792118,
  "data" : {
    "isNewUser" : "1",
    "vipExpire" : "0",
    "vipOverSeasExpire" : "0",
    "isYearUser" : "0",
    "vip3Expire" : "0",
    "biedAlbum" : "0",
    "vipmAutoPayUser" : "0",
    "time" : "1653204173702",
    "vipmExpire" : "0",
    "luxAutoPayUser" : "0",
    "vipLuxuryExpire" : "0",
    "svipExpire" : "0",
    "svipAutoPayUser" : "0",
    "biedSong" : "0",
    "experienceExpire" : "0"
  },
  "meta" : {
    "desc" : "成功",
    "code" : 200
  }
}
 */
var body = $response.body;
var obj = JSON.parse(body);

var data=obj["data"];
data["vipExpire"]="4070883661000";
data["vipOverSeasExpire"]="4070883661000";
data["isYearUser"]="1";
data["vip3Expire"]="4070883661000";
data["vipmExpire"]="4070883661000";
data["vipLuxuryExpire"]="4070883661000";
data["svipExpire"]="4070883661000";
data["experienceExpire"]="4070883661000";

obj["data"]=data;
body=JSON.stringify(obj);

$done(body);