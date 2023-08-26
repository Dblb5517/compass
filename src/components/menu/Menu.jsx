import AccordionMenu from '../accordionMenu/AccordionMenu';
import './menu.scss';

const Menu=()=>{
    return(
        <div className='menu'>
         <div className="menuStyle">
            <div className="menuTitle">
                
            </div>
            <div className='menuOptions'>
                <span>
                    Tests
                </span>
                <AccordionMenu />
            </div>
         </div>
        </div>
    )

}

export default Menu;