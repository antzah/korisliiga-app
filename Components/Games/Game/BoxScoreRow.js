import React from 'react'
import { View } from 'react-native'
import BoxScoreCell from './BoxScoreCell';

export default function BoxScoreRow({data}) {
    const rebs = `${data[5]}+${data[6]}` === "-+-" ? "-" : `${data[5]}+${data[6]}`

    return (
        <View style={{flexDirection: 'row', borderTopColor: "#e2e2e2", borderTopWidth: 1}}>
            <BoxScoreCell value={data[0]} isName={true} />
            <BoxScoreCell value={data[1]} isMin={true} />
            <BoxScoreCell value={data[2]} />
            <BoxScoreCell value={data[3]} />
            <BoxScoreCell value={data[4]} />
            <BoxScoreCell value={rebs} />
            <BoxScoreCell value={data[7]} />
            <BoxScoreCell value={data[8]} />
            <BoxScoreCell value={data[9]} />
            <BoxScoreCell value={data[10]} />
            <BoxScoreCell value={data[11]} />
            <BoxScoreCell value={data[12]} />
            <BoxScoreCell value={data[13]} />
            <BoxScoreCell value={data[0]} isName={true} />
        </View>
    )
}
