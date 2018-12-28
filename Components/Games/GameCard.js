import React from 'react'
import { View } from 'react-native'
import { Title, Card, Paragraph } from 'react-native-paper'
import styles from "../styles"

export default GameCard = ({pressAction, team1, team2, timeAndPlace, score, inProgress}) => {
    return (
        <Card onPress={pressAction} style={styles.card}>
            <Card.Content style={styles.cardContainer}>
                <View style={styles.cardTitle}>
                    <Title style={styles.cardTitleTitle}>{team1} vs. {team2}</Title>
                    <Paragraph>{timeAndPlace}</Paragraph>
                </View>
                <View style={styles.cardScore}>
                    <Title style={styles.cardScoreTitle}>{score}</Title>
                    <Paragraph style={styles.cardScoreParagraph}>{inProgress ? "LIVE" : "Lopputulos"}</Paragraph>
                </View>
            </Card.Content>
        </Card>
    )
}
