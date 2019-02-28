import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的'
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
    console.log('hide')
   }

  render () {
    return (
      <View className='index'>
        <Text>我的页面</Text>
      </View>
    )
  }
}

