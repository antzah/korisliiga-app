import React, { Component } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { Title, Card, Paragraph, Button, Divider } from 'react-native-paper'
import styles from "../styles"
import DatePicker from 'react-native-datepicker'

export default class Games extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            refreshing: false,
            view: "games"
        }
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

    render() {
        return (
            <ScrollView 
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                {this.state.view === "loading" &&
                    <View style={styles.container}>
                        <Title>Loading..</Title>
                    </View>
                }
                {this.state.view === "games" &&
                    <View style={styles.container}>
                        <DatePicker
                            style={{width: "100%", paddingBottom: 16}}
                            date={this.state.date}
                            placeholder="Valitse päivä"
                            format="DD.MM.YYYY"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 48,
                                    backgroundColor: "#eee",
                                    borderColor: "transparent"
                                }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                        <Card onPress={this.openGame} style={styles.card}>
                            <Card.Content style={styles.cardContainer}>
                                <View style={styles.cardTitle}>
                                    <Title style={styles.cardTitleTitle}>Helsinki Seagulls vs. Salon Vilpas</Title>
                                    <Paragraph>18:30 Töölön kisahalli</Paragraph>
                                </View>
                                <View style={styles.cardScore}>
                                    <Title style={styles.cardScoreTitle}>91–99</Title>
                                    <Paragraph style={styles.cardScoreParagraph}>Lopputulos</Paragraph>
                                </View>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card}>
                            <Card.Content style={styles.cardContainer}>
                                <View style={styles.cardTitle}>
                                    <Title style={styles.cardTitleTitle}>Kauhajoen Karhu vs. Ura Basket</Title>
                                    <Paragraph>18:30 Kauhajoen liikuntahalli</Paragraph>
                                </View>
                                <View style={styles.cardScore}>
                                    <Title style={styles.cardScoreTitle}>88–82</Title>
                                    <Paragraph style={styles.cardScoreParagraph}>Lopputulos</Paragraph>
                                </View>
                            </Card.Content>
                        </Card>
                    </View>
                }
                {this.state.view === "game" && 
                    <View style={styles.container}>
                        <Button style={styles.topButton} icon="chevron-left" onPress={this.goBackToGames}>
                            Takaisin
                        </Button>
                        <Title>Single game view</Title>
                    </View>
                }
            </ScrollView>
        )
    }
}
