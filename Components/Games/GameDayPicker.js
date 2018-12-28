import React from 'react'
import DatePicker from 'react-native-datepicker'

export default function GameDayPicker({date, onDateChange}) {
    return (
        <DatePicker
            style={{width: '100%', paddingBottom: 16}}
            date={date}
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
                    backgroundColor: '#eee',
                    borderColor: 'transparent'
                }
            }}
            onDateChange={(date) => onDateChange(date)}
        />
    )
}
