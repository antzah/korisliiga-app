import React, { Component } from 'react'
import { View } from 'react-native'
import { Title, Button } from 'react-native-paper'
import styles from "../styles"

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button 
                    style={styles.topButton} 
                    icon="chevron-left" 
                    onPress={this.props.onBackButtonTap}
                >
                    Takaisin
                </Button>
                <Title>Single game view</Title>
            </View>
        )
    }
}
