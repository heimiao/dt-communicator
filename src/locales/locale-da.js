"use strict";
const messages = {
  "TITLE_ACTIVE_CALL": "Ups, der er et aktivt opkald.",
  "MESSAGE_ACTIVE_CALL_HANGUP": "Du er allerede i et opkald. Vil du lægge på?",
  "MESSAGE_ACTIVE_CALL_BACK": "Det ser ud til du sidste gang var i et opkald. Vil du tilbage til det?",
  "TITLE_INCOMING_CALL": "Indkommende kald",
  "MESSAGE_INCOMING_CALL": "Fra ",
  "MESSAGE_NO_HANGUP_CALL": "Der er ikke noget opkald at lægge på.",
  "MESSAGE_ENTER_FILENAME": "Vær venlig at indtaste filnavnet",
  "TITLE_ENABLE_VIDEO": "Vil du slå video til for dette opkald?",
  "MESSAGE_ENABLE_VIDEO": "Video vil være slået til for de næste opkald.",
  "TITLE_INSERT_BANNER": "Vær venlig at indsætte bannerteksten",
  "TITLE_INSERT_CANVAS_ID": "Vær venlig at indsætte Canvas Id'et",
  "TITLE_INSERT_LAYER": "Vær venlig at indsætte laget",
  "TITLE_TRANSFER": "Viderestil gruppen?",
  "MESSAGE_TRANSFER": "Til hvilken destination vil du viderestille opkaldet?",
  "LABEL_TRANSFER": "Destination",
  "MESSAGE_DISPLAY_SETTINGS": "Det er ikke muligt at vise eksempelvisnings indstillinger under et kald",
  "BUTTON_END_CALL": "Afslut kald",
  "BUTTON_CLOSE": "Luk",
  "MESSAGE_PLAY": "Afspil",
  "MESSAGE_STOP": "Stop",
  "MESSAGE_RECORD": "Optag",
  "MESSAGE_STOP_RECORD": "Stop med at optage",
  "MESSAGE_SNAPSHOT": "Snapshot",
  "MESSAGE_VIDEO_MODE": "Videotilstand",
  "MESSAGE_MUTE_MIC": "Slå mikrofon til/fra",
  "MESSAGE_MUTE_VIDEO": "Slå video til/fra",
  "MESSAGE_FULLSCREEN": "Skift fuldskærmstilstand",
  "MESSAGE_SCREENSHARE": "Skærmdeling",
  "MESSAGE_OPEN_CLOSE_CHAT": "Åben/luk chat",
  "MESSAGE_SPEAKER": "Højtaler",
  "MESSAGE_POPUP": "Popup",
  "CHAT_TITLE_MEMBERS": "Medlemmer",
  "CHAT_TITLE": "Chat",
  "CHAT_NO_MEMBERS": "Der er ingen medlemmer at vise.",
  "CHAT_GENERAL": "Generel",
  "CHAT_TITLE_KICK": "Fjern",
  "CHAT_KICK": "Fjern",
  "CHAT_TITLE_VIDEO_FLOOR": "Video niveau",
  "CHAT_FLOOR": "Niveau",
  "CHAT_TITLE_TRANSFER": "Viderestil",
  "CHAT_TRANSFER": "Viderestil",
  "CHAT_BANNER": "Banner",
  "CHAT_TITLE_SET": "Sæt",
  "CHAT_SET": "Sæt",
  "CHAT_TITLE_RESET": "Nulstil",
  "CHAT_RESET": "Nulstil",
  "CHAT_CANVAS": "Canvas",
  "CHAT_CANVAS_IN": "Canvas ind",
  "CHAT_CANVAS_OUT": "Canvas ud",
  "CHAT_PREV": "Forrige",
  "CHAT_NEXT": "Næste",
  "CHAT_LAYER": "Lag",
  "CHAT_AUDIO_VIDEO": "Lyd/Video",
  "CHAT_TITLE_MUTE_UNMUTE_MIC": "Slå mikrofon til/fra",
  "CHAT_MUTE_MIC": "Slå mikrofon fra",
  "CHAT_UNMUTE_MIC": "Slå mikrofon til",
  "CHAT_TITLE_MUTE_UNMUTE_MIC": "Slå video til/fra",
  "CHAT_NO_MESSAGES": "Der er ingen beskeder at vise.",
  "CHAT_SEND_MESSAGE": "Send",
  "CHAT_TYPE_MESSAGE": "Skriv din besked her...",
  "TITLE_CONTRIBUTORS": "Bidragsydere",
  "MESSAGE_CONNECTION_UNTRUSTED": "Denne forbindelse er ikke til at stole på.",
  "MESSAGE_TOGGLE_NAVIGATION": "Vis/skjul navigation",
  "BANDWIDTH_INFO": "Båndbredde information",
  "BANDWIDTH_INFO_INCOMING": "Indkommende:",
  "BANDWIDTH_INFO_OUTGOING": "Udgående:",
  "BANDWIDTH_INFO_VIDEO_RES": "Video opløsning:",
  "IN_CALL": "I opkald:",
  "LAST_CALL": "Sidste opkald:   ",
  "OPEN_NEW_WINDOW": "Åben nyt vindue",
  "CHANGE_LOGIN_INFO": "Rediger loginoplysninger",
  "LOGOUT": "Log ud",
  "ABOUT": "Om",
  "HELP": "Hjælp",
  "CONTRIBUTORS": "Bidragsydere",
  "TITLE_PREVIEW_SETTINGS": "Opsæt indstillinger for kamera og mikrofon",
  "CAMERA__SETTNGS": "Kamera:",
  "MIC_SETTINGS": "Mikrofon:",
  "SAVE": "Gem",
  "LOADING": "Henter",
  "ERRORS" : "Fejl",
  "CALLING_TO": "Ringer til ",
  "CANCELLING": "Annullerer...",
  "DETERMINING_SPEED": "Bestemmer din hastighed...",
  "CALL_HISTORY": "Opkaldshistorik",
  "CLEAR_CALL_HISTORY": "Ryd historik",
  "NO_CALL_HISTORY": "Ingen opkaldshistorik.",
  "ENTER_EXTENSION": "Skriv en udvidelse",
  "CALL_EXTENSION": "Opkaldsudvidelse",
  "LOGIN": "Log ind",
  "LOGIN_INFORMATION": "Log ind oplysninger",
  "SAVE_LOGIN_INFORMATION": "Gem log ind oplysninger",
  "INVALID_LOGIN_FIELDS": "Kontroller felterne nedenfor og prøv igen.",
  "NAME": "Navn",
  "YOUR_NAME": "Dit navn",
  "EMAIL": "Email",
  "YOUR_EMAIL": "Din email",
  "USER": "Bruger",
  "PASSWORD": "Adgangskode",
  "CALLER_ID": "Den ringende parts ID",
  "HOSTNAME": "Hostname",
  "WEBSOCKET_URL": "Websocket URL",
  "SETTINGS": "Indstillinger",
  "DEVICE_SETTINGS": "Enhedsindstillinger",
  "SHARE_DEVICE": "Del enhed",
  "SPEAKER": "Højtaler:",
  "SPEAKER_FEATURE": "Din browser understøtter ikke denne funktion",
  "PREVIEW_SETTINGS": "Vis indstillingerne",
  "REFRESH_DEVICE_LIST": "Opdater enhedslisten",
  "GENERAL_SETTINGS": "Generelle indstillinger:",
  "USE_VIDEO": "Brug video",
  "USE_STEREO_AUDIO": "Stereolyd",
  "USE_STUN": "Brug STUN",
  "SCALE_VIDEO": "Skalér video til at matche kameraopløsningen",
  "ASK_BEFORE_RECOVER": "Spørg før genetablering af kald",
  "BEST_FRAME_RATE": "Bedste billedhastighed:",
  "AUDIO_SETTINGS": "Lydindstillinger:",
  "ECHO_CANCEL": "Fjernelse af ekko",
  "NOISE_SUPPRESSION": "Støjdæmpning",
  "HIGHPASS_FILTER": "High-pass filter",
  "VIDEO_SETTINGS": "Videoindstillinger:",
  "REMOTE_ENCODER": "Dedikeret fjern-enkoder er aktiveret.",
  "AUTO_SPEED_RES": "Bestem automatisk indstillinger for hastighed og opløsning",
  "RECHECK_BANDWIDTH": "Tjek båndbredden før hvert udgående opkald",
  "CHECK_NETWORK_SPEED": "Tjek netværkshastighed",
  "VIDEO_QUALITY": "Videokvalitet:",
  "MAX_INCOMING_BANDWIDTH": "Max indgående båndbredde:",
  "MAX_OUTGOING_BANDWIDTH": "Max udgående båndbredde:",
  "FACTORY_RESET": "Nulstil til fabriksindstillinger",
  "CHECK_RESOLUTION": "Kontrol opløsning.",
  "ERROR_RESOLUTION": "Fejl: internal error checking beslutning",
  "SAVE_DEVICE_SETTINGS": "Gem enhedsindstillinger",
  "BROWSER_COMPATIBILITY": "Tjek browser kompatibilitet.",
  "REFRESH_MEDIA_DEVICES": "Opdater medieenhed.",
  "BROWSER_WITHOUT_WEBRTC": "Fejk: browseren understøtter ikke WebRTC.",
  "CHECK_PERMISSION_MEDIA": "Tjekker medie tilladelser",
  "CHECK_PROVISIONING_CONF": "Konfiguration af provisionering.",
  "CHECK_LOGIN": "Tjekker log ind oplysninger.",
  "CHECK_CONNECTION_SPEED": "Tjek forbindelseshastighed.",
  "ERROR_PERMISSION_MEDIA": "Fejl: Medie tilladelse nægtet",
  "ERROR_PROVISIONING_CONF": "Fejl: Provisioneringen fejlede.",
  "PLEASE_WAIT": "Vent venligst...",
  "CANCEL": "Ophæve",
  "CHAT_TITLE_VOL_MINUS": "Bind -",
  "CHAT_TITLE_VOL_PLUS": "Bind +",
  "CHAT_TITLE_GAIN_MINUS": "Gevinst -",
  "CHAT_TITLE_GAIN_PLUS": "Gevinst +",
  "CHAT_VOL_MINUS": "Bind -",
  "CHAT_VOL_PLUS": "Bind +",
  "CHAT_GAIN_MINUS": "Gevinstn -",
  "CHAT_GAIN_PLUS": "Gevinstn  +",
  "LANGUAGE": "Sprog:",
  "BROWSER_LANGUAGE": "Browser Sprog",
  "BROWSER_SUPPORT_TITLE": "Browser ikke understøttet",
  "BROWSER_SUPPORT_TEXT": "Den browser, du bruger isn't understøttes af vores software. Se venligst nedenfor for alternative browser du kan bruge. Når du har valgt en alternativ browser du'll kunne åbne session link bruger den.",
  "BROWSER_NAME_EDGE": "kant",
  "BROWSER_VERSIONS_EDGE": "Alle",
  "BROWSER_NAME_CHROME": "Chrome",
  "BROWSER_VERSIONS_CHROME": "Alle",
  "BROWSER_NAME_FIREFOX": "Firefox",
  "BROWSER_VERSIONS_FIREFOX": "Alle",
  "BROWSER_NAME_OPERA": "Opera",
  "BROWSER_VERSIONS_OPERA": "Alle",
  "MORE_SETTINGS": "Flere indstillinger",
  "LESS_SETTINGS": "Mindre indstillinger",
  "YOUR_PASSWORD": "Dit kodeord",
  "VERSION": "Oversættelse: ",
  "GIT_REV": "Git Rev: ",
  "POWERED_BY": "Drevet af: ",
  "PREVIOUS": "Tidligere",
  "SET_LAYOUT_POSITION": "Sæt layout position.",
  "ENTER_LAYOUT_POSITION": "Indtast venligst layout position .",
  "LAYOUT_POSITION": "Layout position",
  "DISCONNECTED": "Afbrudt",
  "CONNECTING": "Tilslutning",
  "CONNECTED": "Tilsluttet",
  "COM_STATUS": "Status kommunikation",
  "SCREEN_SHARE": "Skærm Andel",
  "PRESENTER": "Presenter",
  "WATCHING_CANVAS": "ser lærred",
  "INPUT_CANVAS": "Input Canvas",
  "CLEAR_ALERTS": "klare advarsler",
  "NO_LOG": "Ingen Log data",
  "CLICK_DIAL": "Klik for at ringe",
  "SETTINGS_LOGIN": "Log på for at ændre indstillinger",
  "SETTINGS_USER": "indstillinger Ser",
  "SETTINGS_USER_LOGIN": "Login for at ændre brugerindstillinger",
  "MENU_INFO": "Menuen Info",
  "CALL_FROM": "Ringe fra:",
  "ANSWER": "Svar",
  "REJECT": "Afvise",
  "ACTIVE": "aktiv",
  "PLEASE_ENTER": "Angiv et gyldigt ",
  "VIEW_ALERT": "Se alarm log ",
  "NO_CALL": "ingen opkald"
};
module.exports = messages;
