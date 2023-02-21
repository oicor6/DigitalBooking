import { useState } from 'react'

const useInput = (type, name) => {
    const [value, setValue] = useState()
    const onChange = (e) =>{
        setValue(e.target.value)
    }
    
return {
    value,
    onChange,
    type,
    name
}
}

export default useInput