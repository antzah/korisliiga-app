import React from 'react'
import { View } from 'react-native'
import BoxScoreCell from './BoxScoreCell';

export default function BoxScoreRow({data, even = false}) {
    const backgroundColor = even ? "#f2f2f2" : "#fff"

    data.fg2 = `${data.fgm2}/${data.fga2}`
    data.fg3 = `${data.fgm3}/${data.fga3}`
    data.ft = `${data.ftm}/${data.fta}`
    data.reb = `${data.dreb}+${data.oreb}`

    if (data.min === "00:00") {
        Object.keys(data).map(key => {
            if (key !== "name") data[key] = "-"
        })
    }

    return (
        <View style={{flexDirection: 'row', backgroundColor, borderTopColor: "#e2e2e2", borderTopWidth: 1}}>
            <BoxScoreCell pid={data.pid} isBolded={true} value={data.name} isName={true} />
            <BoxScoreCell value={data.min} isMin={true} />
            <BoxScoreCell value={data.fg2} />
            <BoxScoreCell value={data.fg3} />
            <BoxScoreCell value={data.ft} />
            <BoxScoreCell value={data.reb} />
            <BoxScoreCell value={data.ast} />
            <BoxScoreCell value={data.stl} />
            <BoxScoreCell value={data.blk} />
            <BoxScoreCell value={data.to} />
            <BoxScoreCell value={data.pf} />
            <BoxScoreCell value={data.pm} />
            <BoxScoreCell value={data.pts} />
            <BoxScoreCell pid={data.pid} isBolded={true} value={data.name} isName={true} />
        </View>
    )
}
