import { useState } from 'react'

const useInput = (type, name, placeholder) => {
    const [value, setValue] = useState()
    const onChange = (e) =>{
        setValue(e.target.value)
    }
return {
    value,
    onChange,
    type,
    name,
    placeholder
}
}

export default useInput