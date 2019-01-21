import React from 'react';
import themes from '../themes/theme-styles.js';

const objectMerge = require('object-merge');

class VertoBaseComponent extends React.Component {
	
  constructor(props) {
    super(props);
  }
  
  findWrappedMethods(obj={},methodName){
    if (!methodName) return;
    if (obj[methodName])return obj;
    if(obj['getWrappedInstance']){
      return this.findWrappedMethods(obj['getWrappedInstance'](), methodName);
    }
    return;
  }
  
  getClassName() {
    const xName = Object.getPrototypeOf(this.constructor).name;
    return xName.toLowerCase() === 'vertobasecomponent' ? this.constructor.name : xName;
  }
  applyThemeStyle(styleName, styles) {
    const componentName = this.getClassName().toLowerCase();
    if(themes[window.theme.value][componentName] && themes[window.theme.value][componentName][styleName]) {
      return( objectMerge( styles, themes[window.theme.value][componentName][styleName]));
    } else{
      return( styles );
    }
  }
  getCompStyle(styleName) {
    return this.props.compStyle && this.props.compStyle[styleName] ? this.props.compStyle[styleName] :  this.props.compStyle ;
  }

  getStyle(styleName) {
    const styles = this.getDefaultStyle(styleName);
    let styleReturn = styles;
    if(window.theme && (window.theme.value != 'default')) {
      styleReturn = this.applyThemeStyle(styleName, styles);
    }
    const compStyle = this.getCompStyle();
    if(compStyle && compStyle[styleName]) {
      styleReturn = objectMerge(styleReturn, compStyle[styleName]);
    }
    return styleReturn;
  }

}

export default VertoBaseComponent;

