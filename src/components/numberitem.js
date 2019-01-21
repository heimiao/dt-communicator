import React from 'react';
import VertoBaseComponent from './vertobasecomponent';
//import SvgIcons from './svgIcons';
import Radium from 'radium';

const propTypes = {
  compStyle : React.PropTypes.object,
  cbClick: React.PropTypes.func.isRequired,
  cbKeyPress : React.PropTypes.func,
  keyValue: React.PropTypes.string,
  keyString : React.PropTypes.string
};

class NumberItem extends VertoBaseComponent {
  constructor(props) {
    super(props);
    this.state = {'onHover': false, 'onFocus': false};

    this.numberClicked = this.numberClicked.bind(this);
  }

  numberClicked(){
    this.props.cbClick(this.props.keyValue);
  }

 
  getDefaultStyle(styleName) {
    const styles = {
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '33.33%',
        backgroundColor: '#fff',
        cursor: 'pointer',
        padding: '0px',
        margin: '5px',
        transition: 'box-shadow .2s ease',
        outline: 'none',
        ':hover': {
          boxShadow: '2px 2px 5px #ddd, -2px 2px 5px #ddd'
        }

      },
      keyValue: {
        padding: '10px 0px',
        color: '#26ccda',
        fontSize: '30px',
        fontWeight: '300'
      },
      keyString: {
        color: '#ccc',
        fontSize: '11px'
      }
    };
    return (styles[styleName]);
  }

  render(){
    return (
      <div
          href="#"
          className="numberItemCont"
          tabIndex="0"
          style={{...this.getStyle('container')}}
          onFocus={()=>{
            this.setState({...this.state, onFocus: true});
          }}
          onClick={this.numberClicked}
          >
        <div
            tabIndex="0"
            className="numberItemKeyVal"
            style={{...this.getStyle('keyValue')}}>
              {this.props.keyValue}
        </div>
        <div
            className="numberItemKeyString"
            style={{...this.getStyle('keyString')}}>
              {this.props.keyString}
        </div>
      </div>
    );
  }
}

NumberItem.propTypes = propTypes;

export default Radium(NumberItem);
// reviewed on 7/14/2016
