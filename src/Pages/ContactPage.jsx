import React from 'react';
import { NavBarPage } from '../Router/ReactRouterNavBar/NavBarPage/NavBarPage';
import { NavLink, Outlet } from 'react-router-dom';
import '../CSS/Contact.css';

export function ContactPage() {
    return (
        <>
            <NavBarPage />
            <h3>This is Contact Page!</h3>
            {/* ***** This div tag is related to nested route ***** */}
            <div className='nested-route-container'>
                <NavLink to='youtube'>YouTube</NavLink>
                <NavLink to='github'>GitHub</NavLink>
                <NavLink to='twitter'>XIcon</NavLink>
            </div>

            {
                /* ***** 
                 * In order to show the data of nested route components (Here, YouTube, GitHub, Twitter), we need to use Outlet tag.
                 * This is important. If it not implemented, nested component will not be rendered and it's content will not be loaded.
                ***** */
            }
            <Outlet />
        </>
    )
}