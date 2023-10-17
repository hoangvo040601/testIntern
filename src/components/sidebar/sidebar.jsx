import './sidebar.scss'
import cusor from '../../assets/cusor.png'
const SideBar =()=>{
    return (
        <div className="sideBar-container">
            <ul>
                <li >Home</li>
                <li >Services</li>
                <li >
                    <span>New</span>
                    <img className='cusor' src={cusor}/>
                </li >
                <li >Blog</li>
                <li >Contact</li>
            </ul>
        </div>  
    )
}

export default SideBar;