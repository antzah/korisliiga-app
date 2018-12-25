import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

export default class Loading extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: 100
            }}>
                <ActivityIndicator size={64} color="red" />
            </View>
        )
    }
}
