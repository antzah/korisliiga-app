import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Title, Button } from 'react-native-paper'
import styles from "../../styles"
import BoxScoreHeader from "./BoxScoreHeader"
import BoxScoreRow from "./BoxScoreRow"

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamARows: [
                ["E. Gullichsen", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
                ["A. Woodson", "38:03", "7-20", "4-11", "4-4", "3", "0", "10", "2", "0", "3", "3", "-11", "21"]
            ],
            teamBRows: [
            ],
        }
    }


    render() {
        let teamARows = []
        let teamBRows = []

        for (let i = 0; i < this.state.teamARows.length; i++) {
            teamARows.push(
                <BoxScoreRow key={`teamA-${i}`} data={this.state.teamARows[i]} />
            )
        }

        for (let i = 0; i < this.state.teamBRows.length; i++) {
            teamBRows.push(
                <BoxScoreRow key={`teamB-${i}`} data={this.state.teamBRows[i]} />
            )
        }

        return (
            <View style={styles.container}>
                <Button 
                    style={styles.topButton} 
                    icon="chevron-left" 
                    onPress={this.props.onBackButtonTap}
                >
                    Takaisin
                </Button>
                <Title>Ura Basket</Title>
                <ScrollView horizontal={true}>
                    <View>
                        <BoxScoreHeader />
                        {teamARows}
                    </View>
                </ScrollView>
                <Title>Korihait</Title>
                <ScrollView horizontal={true}>
                    <View>
                        <BoxScoreHeader />
                        {teamBRows}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
