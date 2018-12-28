import React, { Component } from 'react'
import { View, BackHandler } from 'react-native'
import { Title, Card, Paragraph } from 'react-native-paper'
import styles from "../styles"
import GameDayPicker from "./GameDayPicker"
import Loading from "../Loading"
import Game from "../Game"
import GameCard from "./GameCard"

export default class Games extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            refreshing: false,
            view: "games"
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (this.state.view === "game" || this.state.view === "loading") {
                this.setState({ view: "games" })
                return true
            }
        });
    }

    _onRefresh = () => {
        this.setState({ refreshing: true }, () => {
            setTimeout(() => {
                this.setState({ refreshing: false })
            }, 1000)
        })
    }

    openGame = () => {
        this.setState({ view: "loading" }, () => {
            setTimeout(() => {
                this.setState({ view: "game" })
            }, 1000)
        })
    }

    goBackToGames = () => {
        this.setState({ view: "games" })
    }

    changeSelectedDate = (date) => {
        this.setState({ date })
    }

    render() {
        return (
            <View>
                {this.state.view === "loading" && <Loading />}
                {this.state.view === "games" && (
                    <View style={styles.container}>
                        <GameDayPicker 
                            date={this.state.date}
                            onDateChange={this.changeSelectedDate} 
                        />
                        <GameCard 
                            pressAction={this.openGame}
                            gameId={104}
                            team1="Ura Basket"
                            team2="Korihait"
                            timeAndPlace="17:00 Kupittaan palloiluhalli"
                            score="83–100"
                            inProgress={false}
                        />
                    </View>
                )}
                {this.state.view === "game" && (
                    <Game onBackButtonTap={this.goBackToGames} />
                )}
            </View>
        )
    }
}
