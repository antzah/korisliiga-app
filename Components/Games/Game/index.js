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
                {
                    name: "A. Woodson",
                    pid: 5798115,
                    started: 1,
                    min: "38:03",
                    fga2: 8,
                    fgm2: 3,
                    fga3: 12,
                    fgm3: 4,
                    fta: 4,
                    ftm: 4,
                    dreb: 3,
                    oreb: 0,
                    ast: 10,
                    stl: 2,
                    blk: 0,
                    to: 2,
                    pf: 2,
                    pm: -15,
                    pts: 21
                },
                {
                    name: "E. Skamo",
                    pid: 71,
                    min: "24:44",
                    started: 1,
                    fga2: 3,
                    fgm2: 3,
                    fga3: 3,
                    fgm3: 2,
                    fta: 1,
                    ftm: 1,
                    dreb: 8,
                    oreb: 0,
                    ast: 2,
                    stl: 2,
                    blk: 1,
                    to: 2,
                    pf: 4,
                    pm: -18,
                    pts: 13
                },
                {
                    name: "E. Gullichsen",
                    pid: 11763,
                    min: "00:00",
                    fga2: 0,
                    fgm2: 0,
                    fga3: 0,
                    fgm3: 0,
                    fta: 0,
                    ftm: 0,
                    dreb: 0,
                    oreb: 0,
                    ast: 0,
                    stl: 0,
                    blk: 0,
                    to: 0,
                    pf: 0,
                    pm: 0,
                    pts: 0
                },
                {
                    name: "V. Hänninen",
                    pid: 11763,
                    min: "30:48",
                    started: 1,
                    fga2: 0,
                    fgm2: 0,
                    fga3: 7,
                    fgm3: 1,
                    fta: 0,
                    ftm: 0,
                    dreb: 4,
                    oreb: 0,
                    ast: 1,
                    stl: 1,
                    blk: 0,
                    to: 3,
                    pf: 5,
                    pm: -11,
                    pts: 3
                },
                {
                    name: "A. Woodson",
                    pid: 5798115,
                    started: 1,
                    min: "38:03",
                    fga2: 8,
                    fgm2: 3,
                    fga3: 12,
                    fgm3: 4,
                    fta: 4,
                    ftm: 4,
                    dreb: 3,
                    oreb: 0,
                    ast: 10,
                    stl: 2,
                    blk: 0,
                    to: 2,
                    pf: 2,
                    pm: -15,
                    pts: 21
                },
                {
                    name: "E. Skamo",
                    pid: 71,
                    min: "24:44",
                    started: 1,
                    fga2: 3,
                    fgm2: 3,
                    fga3: 3,
                    fgm3: 2,
                    fta: 1,
                    ftm: 1,
                    dreb: 8,
                    oreb: 0,
                    ast: 2,
                    stl: 2,
                    blk: 1,
                    to: 2,
                    pf: 4,
                    pm: -18,
                    pts: 13
                },
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
                <BoxScoreRow key={`teamA-${i}`} even={i % 2 == 0} data={this.state.teamARows[i]} />
            )
        }

        for (let i = 0; i < this.state.teamBRows.length; i++) {
            teamBRows.push(
                <BoxScoreRow key={`teamB-${i}`} even={i % 2 == 0} data={this.state.teamBRows[i]} />
            )
        }

        let iA = 0

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
                        { teamARows }
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
