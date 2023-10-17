import './content.scss'
import image from '../../assets/logoNCC.png'
import css from '../../assets/css-icon.png'
import html from '../../assets/html-icon.png'
import url from '../../assets/url-icon.png'
import Footer from '../footer/footer'

const Content = () => {
    return (
        <>
            <div className="content-container">
                <div className="content-logo">
                    <img className="logo" src={image} />
                </div>
                <div className="content-text">
                    <div className="text-background">
                        <h2 className="text-header">Lorem ipsum dolor sit asmet?</h2>
                        <p className="text-footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
                    </div>
                </div>
                <div className="content-item">
                    <ul>
                        <li>
                            <h2 className="item-title">Lorem ipsum dolor sit amet</h2>
                            <div className="item-header">
                                <img className='item-logo' src={css} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </p>
                            </div>
                            <p className="item-footer">ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                        </li>
                        <li>
                            <h2 className="item-title">Lorem ipsum dolor sit amet</h2>
                            <div className="item-header">
                                <img className='item-logo' src={html} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </p>
                            </div>
                            <p className="item-footer">ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                        </li>
                        <li>
                            <h2 className="item-title">Lorem ipsum dolor sit amet</h2>
                            <div className="item-header">
                                <img className='item-logo' src={url} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </p>
                            </div>
                            <p className="item-footer">ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Content;