import React, { Component } from 'react'
import { View, ScrollView, BackHandler } from 'react-native'
import styles from "../styles"
import GameDayPicker from "./GameDayPicker"
import Loading from "../Loading"
import Game from "./Game"
import GameCard from "./GameCard"

export default class Games extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            refreshing: false,
            gameId: null,
            view: "game",
            games: [
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Ura Basket",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
                {
                    gameId: 104,
                    team1: "Vika Peli",
                    team2: "Korihait",
                    team1Score: 83,
                    team2Score: 100,
                    timeAndPlace: "17:00 Kupittaan palloiluhalli",
                    inProgress: false
                },
            ]
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
            <ScrollView>
                {this.state.view === "loading" && <Loading />}
                {this.state.view === "games" && (
                    <View style={styles.container}>
                        <GameDayPicker 
                            date={this.state.date}
                            onDateChange={this.changeSelectedDate} 
                        />
                        { this.state.games.map(game => {
                            return (
                                <GameCard 
                                    key={game.gameId}
                                    game={game}
                                    pressAction={this.openGame}
                                />
                            )
                        })}
                    </View>
                )}
                {this.state.view === "game" && (
                    <Game 
                        gameId={this.state.gameId}
                        onBackButtonTap={this.goBackToGames}
                    />
                )}
            </ScrollView>
        )
    }
}
