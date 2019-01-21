"use strict";
const messages = {
  "TITLE_ACTIVE_CALL": "囧，正在通话中",
  "MESSAGE_ACTIVE_CALL_HANGUP": "好像正在通话中，你想挂断吗？",
  "MESSAGE_ACTIVE_CALL_BACK": "好像上次还有个电话没有挂断？你想恢复上次的通话吗？",
  "TITLE_INCOMING_CALL": "新来电",
  "MESSAGE_INCOMING_CALL": "来自 ",
  "MESSAGE_NO_HANGUP_CALL": "没有可挂断的电话",
  "MESSAGE_ENTER_FILENAME": "请输入文件名",
  "TITLE_ENABLE_VIDEO": "你想为当前通话开启视频吗？",
  "MESSAGE_ENABLE_VIDEO": "开启视频将在下次通话生效",
  "TITLE_INSERT_BANNER": "请输入标题文本",
  "TITLE_INSERT_CANVAS_ID": "请选择一个画布ID",
  "TITLE_INSERT_LAYER": "请输入一个层",
  "TITLE_TRANSFER": "转移方？",
  "MESSAGE_TRANSFER": "你想把该电话转移到什么号码？",
  "LABEL_TRANSFER": "目的地",
  "MESSAGE_DISPLAY_SETTINGS": "通话中不能预览",
  "BUTTON_END_CALL": "挂断",
  "BUTTON_CLOSE": "关闭",
  "MESSAGE_PLAY": "播放",
  "MESSAGE_STOP": "停止",
  "MESSAGE_RECORD": "录音/录像",
  "MESSAGE_STOP_RECORD": "停止录音/录像",
  "MESSAGE_SNAPSHOT": "抓拍",
  "MESSAGE_VIDEO_MODE": "停止发送视频",
  "MESSAGE_MUTE_MIC": "静音/恢复",
  "MESSAGE_MUTE_VIDEO": "停止视频/恢复",
  "MESSAGE_FULLSCREEN": "全屏",
  "MESSAGE_SCREENSHARE": "屏幕共享",
  "MESSAGE_OPEN_CLOSE_CHAT": "打开/关闭聊天",
  "MESSAGE_SPEAKER": "喇叭",
  "MESSAGE_POPUP": "弹出",
  "CHAT_TITLE_MEMBERS": "成员",
  "CHAT_TITLE": "聊天",
  "CHAT_NO_MEMBERS": "没有成员",
  "CHAT_GENERAL": "一般",
  "CHAT_TITLE_KICK": "踢出",
  "CHAT_KICK": "踢出",
  "CHAT_TITLE_VIDEO_FLOOR": "视频Floor",
  "CHAT_FLOOR": "Floor",
  "CHAT_TITLE_TRANSFER": "转移",
  "CHAT_TRANSFER": "转移",
  "CHAT_BANNER": "标题",
  "CHAT_TITLE_SET": "设置",
  "CHAT_SET": "设置",
  "CHAT_TITLE_RESET": "重置",
  "CHAT_RESET": "重置",
  "CHAT_CANVAS": "画布",
  "CHAT_CANVAS_IN": "入画布",
  "CHAT_CANVAS_OUT": "出画布",
  "CHAT_PREV": "上一个",
  "CHAT_NEXT": "下一个",
  "CHAT_LAYER": "层",
  "CHAT_AUDIO_VIDEO": "音频/视频",
  "CHAT_TITLE_MUTE_UNMUTE_MIC": "静音/恢复",
  "CHAT_MUTE_MIC": "静音",
  "CHAT_UNMUTE_MIC": "恢复",
  "CHAT_TITLE_MUTE_UNMUTE_MIC": "停止/恢复视频",
  "CHAT_NO_MESSAGES": "没有可显示的消息",
  "CHAT_SEND_MESSAGE": "发送",
  "CHAT_TYPE_MESSAGE": "请在此输入消息",
  "TITLE_CONTRIBUTORS": "贡献者",
  "MESSAGE_CONNECTION_UNTRUSTED": "本连接不是可信的连接",
  "MESSAGE_TOGGLE_NAVIGATION": "导航",
  "BANDWIDTH_INFO": "带宽信息",
  "BANDWIDTH_INFO_INCOMING": "接收：",
  "BANDWIDTH_INFO_OUTGOING": "发送：",
  "BANDWIDTH_INFO_VIDEO_RES": "视频分辨率：",
  "IN_CALL": "通话中：",
  "LAST_CALL": "最近通话：  ",
  "OPEN_NEW_WINDOW": "打开新窗口",
  "CHANGE_LOGIN_INFO": "修改登录信息",
  "LOGOUT": "退出登录",
  "ABOUT": "关于",
  "HELP": "帮助",
  "CONTRIBUTORS": "贡献者",
  "TITLE_PREVIEW_SETTINGS": "设置摄像头和麦克风",
  "CAMERA_SETTINGS": "摄像头：",
  "MIC_SETTINGS": "麦克风",
  "SAVE": "保存",
  "LOADING": "加载中",
  "ERRORS" : "错误",
  "CALLING_TO": "正在呼叫 ",
  "CANCELLING": "正在取消",
  "DETERMINING_SPEED": "检查网速...",
  "CALL_HISTORY": "通话历史",
  "CLEAR_CALL_HISTORY": "清除历史记录",
  "NO_CALL_HISTORY": "尚无任何通话",
  "ENTER_EXTENSION": "输入号码",
  "CALL_EXTENSION": "呼叫",
  "LOGIN": "登录",
  "LOGIN_INFORMATION": "登录信息",
  "SAVE_LOGIN_INFORMATION": "保存登录信息",
  "INVALID_LOGIN_FIELDS": "请检查下面的项目并重试",
  "NAME": "姓名",
  "YOUR_NAME": "你的姓名",
  "EMAIL": "电子邮件",
  "YOUR_EMAIL": "你的电子邮件",
  "USER": "用户名",
  "PASSWORD": "密码",
  "CALLER_ID": "主叫号码",
  "HOSTNAME": "主机名",
  "WEBSOCKET_URL": "Websocket URL",
  "SETTINGS": "设置",
  "DEVICE_SETTINGS": "设备设置",
  "SHARE_DEVICE": "共享设备",
  "SPEAKER": "喇叭：",
  "SPEAKER_FEATURE": "你的浏览器好像不支持该设置",
  "PREVIEW_SETTINGS": "预览设置",
  "REFRESH_DEVICE_LIST": "刷新设备列表",
  "GENERAL_SETTINGS": "通话设置：",
  "USE_VIDEO": "启用视频",
  "USE_STEREO_AUDIO": "立体声",
  "USE_STUN": "启用STUN",
  "SCALE_VIDEO": "自动缩放远端视频到本地摄像头分辨率",
  "ASK_BEFORE_RECOVER": "在恢复上一次通话前询问",
  "BEST_FRAME_RATE": "最佳帧率：",
  "AUDIO_SETTINGS": "音频设置：",
  "ECHO_CANCEL": "回声消除",
  "NOISE_SUPPRESSION": "噪声抑制",
  "HIGHPASS_FILTER": "高通滤波",
  "VIDEO_SETTINGS": "视频设置：",
  "REMOTE_ENCODER": "已启用专用远端编码器",
  "AUTO_SPEED_RES": "根据网速自动选择最佳分辨率",
  "RECHECK_BANDWIDTH": "每次通话前重新检查网速",
  "CHECK_NETWORK_SPEED": "检查网速",
  "VIDEO_QUALITY": "视频质量：",
  "MAX_INCOMING_BANDWIDTH": "最大接收带宽：",
  "MAX_OUTGOING_BANDWIDTH": "最大发送带宽：",
  "FACTORY_RESET": "恢复出厂设置",
  "SAVE_DEVICE_SETTINGS": "保存设备设置",
  "CHECK_RESOLUTION": "检查分辨率",
  "ERROR_RESOLUTION": "错误：内部错误检查分辨率",
  "BROWSER_COMPATIBILITY": "检查浏览器兼容性",
  "REFRESH_MEDIA_DEVICES": "检查媒体设备",
  "BROWSER_WITHOUT_WEBRTC": "错误：浏览器不支持WebRTC",
  "CHECK_PERMISSION_MEDIA": "检查媒体使用权限",
  "CHECK_PROVISIONING_CONF": "自在自动配置",
  "CHECK_LOGIN": "正在检查登录信息",
  "CHECK_CONNECTION_SPEED": "检查网速",
  "ERROR_PERMISSION_MEDIA": "错误：未授权使用麦克风或摄像头",
  "ERROR_PROVISIONING_CONF": "错误：自动配置失败",
  "PLEASE_WAIT": "请稍候...",
  "CANCEL": "取消",
  "CHAT_TITLE_VOL_MINUS": "音量-",
  "CHAT_TITLE_VOL_PLUS": "音量+",
  "CHAT_TITLE_GAIN_MINUS": "增益-",
  "CHAT_TITLE_GAIN_PLUS": "增益+",
  "CHAT_VOL_MINUS": "音量-",
  "CHAT_VOL_PLUS": "音量+",
  "CHAT_GAIN_MINUS": "增益-",
  "CHAT_GAIN_PLUS": "增益+",
  "LANGUAGE": "语言：",
  "BROWSER_LANGUAGE": "浏览器语言",
  "BROWSER_SUPPORT_TITLE": "不支持的浏览器",
  "BROWSER_SUPPORT_TEXT": "您正在使用的浏览器不被我们的软件支持。请参阅下面的其他浏览器就可以使用。一旦你选择了其他浏览器，你就可以访问使用它的会话链接。",
  "BROWSER_NAME_EDGE": "边缘",
  "BROWSER_VERSIONS_EDGE": "所有",
  "BROWSER_NAME_CHROME": "Chrome",
  "BROWSER_VERSIONS_CHROME": "所有",
  "BROWSER_NAME_FIREFOX": "Firefox",
  "BROWSER_VERSIONS_FIREFOX": "所有",
  "BROWSER_NAME_OPERA": "Opera",
  "BROWSER_VERSIONS_OPERA": "所有",
  "MORE_SETTINGS": "更多设置",
  "LESS_SETTINGS": "少设置",
  "YOUR_PASSWORD": "你的密码",
  "VERSION": "版: ",
  "GIT_REV": "git的轉: ",
  "POWERED_BY": "供電: ",
  "PREVIOUS": "以前",
  "SET_LAYOUT_POSITION": "設置佈局位置。",
  "ENTER_LAYOUT_POSITION": "請輸入佈局位置.",
  "LAYOUT_POSITION": "佈局位置",
  "DISCONNECTED": "斷開的",
  "CONNECTING": "連",
  "CONNECTED": "連接的",
  "COM_STATUS": "通信狀態。",
  "SCREEN_SHARE": "屏幕共享",
  "PRESENTER": "主持人",
  "WATCHING_CANVAS": "看著畫布",
  "INPUT_CANVAS": "輸入帆布",
  "CLEAR_ALERTS": "清除警報",
  "NO_LOG": "沒有日誌數據",
  "CLICK_DIAL": "點擊撥號",
  "SETTINGS_LOGIN": "登錄更改設置",
  "SETTINGS_USER": "用戶設置",
  "SETTINGS_USER_LOGIN": "登錄更改用戶設置",
  "MENU_INFO": "信息菜單",
  "CALL_FROM": "來電者：",
  "ANSWER": "回答",
  "REJECT": "拒絕",
  "ACTIVE": "活性",
  "PLEASE_ENTER": "請輸入有效 ",
  "VIEW_ALERT": "查看警報日誌",
  "NO_CALL": "沒有呼叫"
  };
  module.exports = messages;
