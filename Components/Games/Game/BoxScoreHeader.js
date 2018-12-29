import React from 'react'
import { View } from 'react-native'
import BoxScoreCell from './BoxScoreCell';

export default function BoxScoreHeader() {
    return (
        <View style={{flexDirection: 'row'}}>
            <BoxScoreCell isBolded={true} value="Pelaaja" isName={true} />
            <BoxScoreCell isBolded={true} value="MIN" isMin={true} />
            <BoxScoreCell isBolded={true} value="2PT" />
            <BoxScoreCell isBolded={true} value="3PT" />
            <BoxScoreCell isBolded={true} value="FT" />
            <BoxScoreCell isBolded={true} value="REB" />
            <BoxScoreCell isBolded={true} value="AST" />
            <BoxScoreCell isBolded={true} value="STL" />
            <BoxScoreCell isBolded={true} value="BLK" />
            <BoxScoreCell isBolded={true} value="TO" />
            <BoxScoreCell isBolded={true} value="PF" />
            <BoxScoreCell isBolded={true} value="+/-" />
            <BoxScoreCell isBolded={true} value="PTS" />
            <BoxScoreCell isBolded={true} value="Pelaaja" isName={true} />
        </View>
    )
}
