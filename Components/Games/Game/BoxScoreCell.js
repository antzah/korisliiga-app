import React from 'react'
import { View, Text } from 'react-native'
import { Button } from "react-native-paper"
import { WebBrowser } from "expo"

export default function BoxScoreCell({value, isName = false, isMin = false, isBolded = false, pid = null}) {
    const cellWidth = isName ? 100 : (isMin ? 42 : 38)
    const fontWeight = isBolded ? "700" : "400"
    const textAlign = isName ? "left" : "center"

    openPlayerCard = () => {
        WebBrowser.openBrowserAsync(`https://www.basket.fi/basket/sarjat/pelaaja/?season_id=103769&player_id=${pid}&league_id=4`)
    }

    return (
        <View style={{
            minWidth: cellWidth, 
            padding: 3, 
            borderRightWidth: 1, 
            borderRightColor: "#e2e2e2"
        }}>
            { pid !== null && (
                <Button 
                    onPress={this.openPlayerCard} 
                    mode="text"
                    compact={true}
                    theme={{ width: 100, height: 12 }}
                    style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, marginTop: -5 }}
                >
                    <Text style={{fontSize: 10, letterSpacing: 0}}>{value}</Text>
                </Button>
            )}
            { pid === null && (
                <Text style={{fontSize: 12, fontWeight, textAlign}}>{value}</Text>
            )}
        </View>
    )
}
