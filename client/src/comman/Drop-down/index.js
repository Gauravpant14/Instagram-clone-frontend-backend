import React from 'react'
import PropTypes from 'prop-types'
import { SelectWrap } from './style'
const DropDownList = ({ keyName, data, _handleOnChange }) => {
    return (
        <SelectWrap onChange={_handleOnChange}>
            {data.map((val, index) => (
                <option value={val[keyName]} key={index}>
                    {val.name}
                </option>
            ))}
        </SelectWrap>
    )
}

DropDownList.propTypes = {
    keyName: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    _handleOnChange: PropTypes.func.isRequired,
}

export default DropDownList