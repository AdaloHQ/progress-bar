import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper';

class ProgressBBar extends Component {

	render() {
		const { colorr,  CurrentValue, MaxValue} = this.props
		if(MaxValue <= 0){
			var x = 1
		}
		else {
			var x = MaxValue
		}
		return (
		 <ProgressBar progress={CurrentValue/x} color={colorr} backgroundColor ={Colors.red800} />
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default ProgressBBar
