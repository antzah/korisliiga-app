import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Title, Card, Paragraph } from 'react-native-paper'
import styles from "../styles"

export default function GameCard({game, pressAction}) {
    const {gameId, team1, team2, team1Score, team2Score, timeAndPlace, inProgress} = game

    cardPressed = () => {
        pressAction(gameId)
    }

    return (
        <Card style={styles.card}>
            <TouchableOpacity onPress={this.cardPressed}>
                <Card.Content style={styles.cardContainer}>
                    <View style={styles.cardTitle}>
                        <Title style={styles.cardTitleTitle}>{team1} vs. {team2}</Title>
                        <Paragraph>{timeAndPlace}</Paragraph>
                    </View>
                    <View style={styles.cardScore}>
                        <Title style={styles.cardScoreTitle}>{`${team1Score}–${team2Score}`}</Title>
                        <Paragraph style={styles.cardScoreParagraph}>{inProgress ? "LIVE" : "Lopputulos"}</Paragraph>
                    </View>
                </Card.Content>
            </TouchableOpacity>
        </Card>
    )
}
