import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage } from '../Pages/AboutPage';
import { ContactPage } from '../Pages/ContactPage';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { ErrorPage } from '../Pages/ErrorPage';
import { TwitterPage } from '../Pages/TwitterPage';
import { GitHubPage } from '../Pages/GitHubPage';
import { YouTubePage } from '../Pages/YouTubePage';
import { DashboardPage } from '../Pages/DashboardPage';
import { ProductPage } from '../Hooks/UseNavigate/NavigationWithHelpOfUseNavigate/ProductPage';
import CartPage from '../Hooks/UseNavigate/NavigationWithHelpOfUseNavigate/CartPage';

export function ApplicationRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    {/* Nested Routing - Adding YouTube | Twitter | GitHub in contact page */}
                    <Route path='/contact/' element={<ContactPage />}>
                        <Route path='github' element={<GitHubPage />} />
                        <Route path='twitter' element={<TwitterPage />} />
                        <Route path='youtube' element={<YouTubePage />} />
                    </Route>
                    <Route path='/dashboard' element={<DashboardPage />} />
                    {/* UseParams Hook: 1. Need to add route (Here, route is 'firstName' and 'lastName' variable) for DashboardPage 2. We need to use this (variable name) route in DashboardPage JXS file */}
                    <Route path='/dashboard/:firstName/:lastName' element={<DashboardPage />} />
                    {/* UseNavigate Hook: Need to add route here for UseNavigate Hook. In this case ProductPage and CartPage needs to be added in Route. */}
                    <Route path='/product' element={<ProductPage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </Router>
        </>
    )
}