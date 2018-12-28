import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        paddingTop: 36,
        paddingLeft: 12,
        paddingRight: 12
    },
    card: {
        marginBottom: 8,
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 2
    },
    cardContainer: {
        width: '100%', 
        flexBasis: "auto",
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    cardTitle: {
        width: '75%', 
        marginRight: "5%"
    },
    cardTitleTitle: {
        lineHeight: 22
    },
    cardScore: {
        width: "20%"
    },
    cardScoreTitle: {
        color: "gray",
        textAlign: "center"
    },
    cardScoreParagraph: {
        fontSize: 10,
        textAlign: "center"
    },
    topButton: {
        marginBottom: 12
    },
    boxScoreContainer: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    boxScoreHead: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    boxScoreText: {
        margin: 6
    }
})
