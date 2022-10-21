import { useState } from 'react'

export const useRandomColor = () => {
    const [color, setColor] = useState(null)


    const setRandomColor = () => {
        setColor('#' + Math.floor(Math.random() * 16777215).toString(16))
    }

    !color && setRandomColor()
    
    return [color, setRandomColor]
}
