import React  from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import styles from '../scss/master.scss'

export default function Header() {
    return (
        <nav className='header'>
            <span>
                <a href="/"> Home </a>
            </span>
            <span>
                <a href="/page1"> Page1 </a>
            </span>
            <span>
                <a href="/page2"> Page2 </a>
            </span>
        </nav>
    );
};