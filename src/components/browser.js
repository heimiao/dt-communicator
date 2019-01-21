import React from 'react';
import VertoBaseComponent from './vertobasecomponent';

const propTypes = {

};

class Browser extends VertoBaseComponent {
  constructor(props) {
    super(props);
  }



  getDefaultStyle(styleName) {
    const styles = {
        browserStyles : {

        },
        pageStyle : {
            fontFamily: 'sans-serif',
            color: 'gray',
            margin: '0rem'
        },
        infoContainerStyle : {
            margin: '0 auto 0 auto',
            width: '44rem'
        },
        headerContainerStyle : {
            backgroundColor: '#CB6969',
            color: '#fff',
            minHeight: '30rem',
            margin: '0 auto',
            fontStyle: 'none',
            marginBottom: '4rem'
        },
        titleStyle : {
            fontSize: '5rem',
            textAlign: 'center',
            paddingTop: '10rem'
        },
        browserIcon : {
            margin: '0 ',
            padding: '0',
            width: '40px',
            height: '40px'
        }
    };

    return (styles[styleName]);
  }

  render() {
    return (
      <div>Browser Not Supported</div>
    );
  }
}

Browser.propTypes = propTypes;

export default Browser;
// reviewed 7/13/2016
