import React from 'react'
import { View, Text } from 'react-native'

export default function BoxScoreCell({value, isName = false, isMin = false, isBolded = false}) {
    const cellWidth = isName ? 100 : (isMin ? 42 : 38)
    const fontWeight = isBolded ? "700" : "400"
    const textAlign = isName ? "left" : "center"

    return (
        <View style={{
            minWidth: cellWidth, 
            padding: 3, 
            borderRightWidth: 1, 
            borderRightColor: "#e2e2e2"
        }}>
            <Text style={{fontSize: 11, fontWeight, textAlign}}>{value}</Text>
        </View>
    )
}
