import VertoService from '../../js/vertoService';

// validation steps include
const doValidation = (step=1) => { 
  return dispatch => {
    switch (step) {
      case 1:
        dispatch(doingValidation(step, 'browser', 4));
        //返回
        return dispatch(doBrowserCheck());
      case 2:
        dispatch(doingValidation(step, 'media', 4));
        return dispatch(doMediaCheck());
      case 3:
        dispatch(doingValidation(step, 'resolution', 4));
        return dispatch(doResolutionRefresh());
      case 4:
        dispatch(doingValidation(step, 'login', 4));
        return dispatch(doShowLogin());
    }

  };
};

const doingValidation = (step, title, number, errorObject) => {
  return {
    type: "VALIDATION",
    data: {
      current: step,
      title: title,
      number: number,
      errorObject
    }
  };
};

// browser
const doBrowserCheck = () => {
  return dispatch => {
   /* navigator.mediaDevices.getUserMedia(this.constraints).then(function success(stream) {
    }).catch(function(error) {
      console.error();
    });*/
    navigator.getUserMedia = navigator.getUserMedia ||navigator.webkitGetUserMedia ||navigator.mozGetUserMedia;
    if (!navigator.getUserMedia) {
      dispatch({type: "BNS"});
    } else {
      dispatch(doValidation(2));
    } 

  };
};

// media permissions
const doMediaCheck = () => {
  return dispatch => {
    VertoService.mediaPerm((status)=>{ //permissions
        if (!status) {
          dispatch({
            type: "NO_MEDIA"
          });
        } else {
          dispatch(doValidation(3));
        }
    });
  };
};

// resolution
const doResolutionRefresh = (skipValidation=false, refresh) => {
  if (!refresh){
    return dispatch => {
        dispatch(doingResolutionRefresh());
        VertoService.refreshDevices((status) => {
          if (status){
            const resolutionInstanceData = VertoService.getInstanceData();
            dispatch(doUpdateSettings(resolutionInstanceData));
            if(!skipValidation){
              dispatch(doValidation(4));
            }
          } else {
            dispatch({
              "type": "RESOLUTION_FAILED"
            });
          }
        });
    }
  };
};


const doSpeedTest = () => {
  return dispatch => {
    dispatch(doingSpeedTest());
    VertoService.speedTest((data)=>{
      //console.log('doing speed test : ', data);
      //TODO
      dispatch(doSpeedTestResults(data));
    });
  };
};

const doSpeedTestResults = (data) => {
  const bw = {};
  bw.outgoingBandwidth = data.upKPS ? data.upKPS : undefined ;
  bw.incomingBandwidth = data.downKPS ? data.downKPS : undefined;
  bw.vidQual = data.vidQual ? data.vidQual.label : undefined;
  //console.log('BBBSSSWWWW:', bw);
  return {
    "type": "SPEED_TEST",
    "data": bw,
    'videoQuality': VertoService.getInstanceData().videoQuality
  };
};

const doingSpeedTest = () => {
  return {
    "type": "SPEED_TEST_INPROGRESS"
  };
};

const doingResolutionRefresh = () => {
  // rendering login through navigation
  return {
    "type": "RESOLUTION_REFRESH"
  };
};

const doingDeviceRefresh = () => {
  // rendering login through navigation
  return {
    "type": "DEVICE_REFRESH"
  };
};
//LOGIN
const doShowLogin = () => {
  return (dispatch, getState) => {
    try {
      const state = getState();
      if (state.auth.loginSettings.autologin) {
        dispatch(doSubmitLogin(state.auth.loginSettings));
      } else {
        dispatch ({
          "type": "SHOW_LOGIN"
        });
      }
    } catch(e){
      console.log('eeee', e);
    }
  };
};
// called by click
const doSubmitLogin = (data) => {
  return dispatch => { 
    if (!data.callerid || data.callerid.length == 0 ){
      data.callerid = data.user;
    }
    dispatch(doingLogin(data));
    VertoService.getInstance().login(data);
   // dispatch(doVertoLogin(data)); // this sent the WS request
  };
};
// verto login callback
const doVertoLogin = (success, data) => {
  return dispatch => {
    console.log('登录回调', data);
    if(success){
      dispatch(doVertoLoginValid(data));
      dispatch(doSpeedTest());
    } else {
      dispatch({
        type: "LOGIN_FAILED"
      });
    }
  };
};

const doVertoLoginValid = (data) => {
  return {
    "type": "VERTO_LOGIN",
    "data": data
  };
};

const doingLogin = (data) => {
  return {
    type: "AUTH_SUBMIT_LOGIN",
    data: data
  };
};

// logOUT
// called from verto
const doLogOut = () => {
  return {
    "type": "LOGOUT"
  };
};
// called by client actions
const doSubmitLogOut = () =>{
  return dispatch => {
  VertoService.getInstance().logout();
    // dispatching so we change from not authorized to pending
    // Thunk here

  };
};

// making a phone call
const doIncomingCall = (dialog) =>{
  return dispatch => {
    //console.log('incoming call: ', dialog);

    dispatch({
      type: "INCOMING_CALL",
      data: dialog
    });
  };
};

const doMakeCall = (aPhoneNumber, appSettings) => {
  return dispatch => {
    // console.log('>>>> appSetttings: ', appSettings)
    if (appSettings.settings.testSpeedJoin){
      // dispatches event so we can change screen layout
      dispatch({
        "type": "SPEED_TEST_BEFORE_CALL"
      });
      VertoService.speedTest((data)=>{
        // NOW MAKE CALL
        const callID = VertoService.getInstance().makeCall(aPhoneNumber, appSettings);
        dispatch(doingMakeCall('trying', aPhoneNumber, callID));
      });
    } else {
      const callID = VertoService.getInstance().makeCall(aPhoneNumber, appSettings);
      dispatch(doingMakeCall('trying', aPhoneNumber, callID));
    }
  };
};

const doShareScreen = (appSettings) => {
  return dispatch => {
    VertoService.getInstance().shareScreen(appSettings);
    dispatch({
      "type": "ATTEMPTING_SHARING_SCREEN"
    });
  };
};

const doHangUp = (callId) => {
  return dispatch =>{
    VertoService.getInstance().hangup(callId);
  };
};

const doHold = (callId) => {
  return dispatch =>{
    VertoService.getInstance().hold(callId);
  };
};

const doMuteMic = (callId) => {
  return dispatch =>{
    VertoService.getInstance().muteMic(callId);
  };
};

const doMuteVideo = (callId) => {
  return dispatch =>{
    VertoService.getInstance().muteVideo(callId);
  };
};

const doSendConfCommand = (cmd, params) => {
  return dispatch =>{
    VertoService.getInstance().sendConferenceCommand(cmd, params);
  };
};

const doConferenceData = (confData) =>{
  return {
    "type": "CONFERENCE_DATA",
    "data": confData
  };
};

const doAnswer = (callId) => {
  return dispatch =>{
    VertoService.getInstance().answer(callId);
  };
};

const doHungUp = (dialog) =>{
  return {
    "type": "CALL_HUNG_UP",
    "data": dialog
  };
};

const doMakeCallError = (aErrorObject) =>{
  return {
    "type": "CALLING_ERROR",
    "data": aErrorObject
  };
};

const doingMakeCall = (status, dest, callId, direction) => {
  //console.log('doingMakeCall', dialog);
  return {
    "type": "CALLING",
    "data": {status: status, destination: dest, callId: callId, direction: direction}
  };
};

const doCallHeld = (callID) =>{
  return {
    "type": "CALL_HELD",
    "data": callID
  };
};

const doUpdateSettings = (aData) => {
  return {
    "type": "SETTINGS_UPDATE",
    "data": aData
  };
};

const doSendChat = (message) => {
  return dispatch => {

    VertoService.getInstance().sendConferenceChat(message);
    dispatch(doingSendingChat());
  };
};

const doReceiveChat = (messageObject) => {
  return dispatch =>{
    //console.log('received a chat msssgggg: ', callID, from, message);
    dispatch({
      type: 'RECEIVED_CHAT_MESSAGE',
      data: messageObject
    });
  };
};

const doingSendingChat = () => {
  return {
    type: 'SENDING_CHAT_MESSAGE'
  };
};

const doClearHistory = () => {
  return dispatch =>{
    dispatch({
      type: 'CLEARING_HISTORY'
    });
  };
};

export { doValidation, doBrowserCheck, doResolutionRefresh,
  doSubmitLogin, doShowLogin, doVertoLogin, doSubmitLogOut, doLogOut,
  doMakeCall, doMakeCallError, doIncomingCall, doSpeedTest, doShareScreen,
  doingMakeCall, doHungUp, doHangUp, doAnswer, doMuteMic, doConferenceData, doHold, doMuteVideo, doCallHeld,
  doSendChat, doReceiveChat, doingSendingChat,doSendConfCommand, doClearHistory };
// reviewed on
