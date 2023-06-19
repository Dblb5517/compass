import { useState } from 'react';
import './header.scss';
import data from '../../data';

const Header=()=>{

    const [value, setValue] =useState('');

    let name = 'Davo'

    const search=(e)=>{
        console.log(e.target.value)
    }

    return(
        <div className='header'>
            <div className="compass">
                <span>
                    Student
                </span>
                <div className='logo'>
                    
                </div>
                <span>
                    Compass
                </span>
            </div>
            <div className="searchBar">
                <div className='searchBox'>
                    <input type='text' className='search' onChange={search}/>
                    <div className='searchIcon'></div>
                </div>
                <div className='resultBoxCover'>
                    <div className='resultBox'>
                        {data.map((item)=>{
                            return (
                                <div>{item.title}</div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Header;