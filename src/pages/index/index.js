import Taro, { Component } from '@tarojs/taro'
// import { View, Text } from '@tarojs/components'
import './index.less';

export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = {isToggleOn: true}
  }

  config = {
    navigationBarTitleText: '首页'
  }

 

  componentWillMount () {
     console.log('willpage')
   }

  componentDidMount () { 
    console.log('didpage')
  }

  componentWillUnmount () { }

  componentDidShow () { 
    console.log('showpage')
  }

  componentDidHide () {
    console.log('hidepage')
   }

   
  onChangeName=()=>{
      console.log(1210)
    
      //  this.setState({
      //      name:'thyile'
      //  })
   }

   

  onClick = (e) => {
    e.stopPropagation()
    console.log(1212)
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }


  render () {
    return (
      <view className='index'>
       
       <button onClick={this.onClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
       </view>
    )
  }
}

