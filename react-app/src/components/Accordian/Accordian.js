import { React, useState, useRef } from 'react'
import './Accordian.css'
import photo from '../../assets/caret.svg'
import EditComment from "../EditComment"
const Accordian = ({ children, toggleText }) => {
    const [expand, setExpansion] = useState('closed')
    const expandCollapse = () => {
        if (expand === 'closed') {
            setExpansion('open')
        } else {
            setExpansion('closed')
        }
    }
    return (
        <div className='accordion-wrapper' cs-state={expand}>
            <div className='accordion-head' onClick={() => expandCollapse()}>
                {toggleText}
                <img className='caret-icon' alt='caret icon open close' src={photo} />
            </div>
            <div className='accordion-body' >
                {children}
            </div>
        </div>
    )
}
export default Accordian;
