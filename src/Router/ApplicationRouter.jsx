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
import { PostDataUsingAxios } from '../Axios/PostData/PostDataUsingAxios';
import { PutPostDeleteDataUsingAxios } from '../Axios/PutPostDeleteData/PutPostDeleteDataUsingAxios';
import ComponentWithoutLazyLoader from '../LazyLoadingData/WithoutLazyLoading/ComponentWithoutLazyLoader';
import ComponentWithLazyLoader from '../LazyLoadingData/WithLazyLoading/ComponentWithLazyLoader';
import { ReducerHooksPage } from '../Pages/ReducerHooksPage';
import { CounterAppWithUseState } from '../Hooks/UseReducer/CounterAppWithUseState/CounterAppWithUseState';
import { CounterAppWithUseReducer } from '../Hooks/UseReducer/CounterAppWithUseReducer/CounterAppWithUseReducer';
import UseLayoutEffectApplication from '../Hooks/UseLayoutEffect/WithUseLayoutEffect/UseLayoutEffectApplication';
import UseSyncExternalStoreApplication from '../Hooks/UseSyncExternalStore/UseSyncExternalStoreApplication/UseSyncExternalStoreApplication';
import UseSyncExternalStoreHookPage from '../Pages/UseSyncExternalStoreHookPage';
import CounterApplicationUsingUseSyncExternalStoreHook from '../Hooks/UseSyncExternalStore/CounterApplicationUsingUseSyncExternalStoreHook/CounterApplicationUsingUseSyncExternalStoreHook';
import UseTransitionHookPage from '../Pages/UseTransitionHookPage';
import CountApplicationWithoutIsPending from '../Hooks/UseTransition/UseTransitionWithoutIsPendingApplication/CountApplicationWithoutIsPending';
import PerformanceProblemInSearchFunctionality from '../Hooks/UseTransition/PerformanceProblemInSearchFunctionality/PerformanceProblemInSearchFunctionality';
import SolutionForPerformanceInSearchFunctionality from '../Hooks/UseTransition/SolutionForPerformanceInSearchFunctionality/SolutionForPerformanceInSearchFunctionality';

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
                        <Route path='postDataUsingAxios' element={<PostDataUsingAxios />} />
                        <Route path='PutDeleteDataUsingAxios' element={<PutPostDeleteDataUsingAxios />} />
                    </Route>
                    <Route path='/use-reducer-hook/' element={<ReducerHooksPage />}>
                        <Route path='without-use-reducer' element={<CounterAppWithUseState />} />
                        <Route path='with-use-reducer' element={<CounterAppWithUseReducer />} />
                        <Route path='use-layout-effect-hook' element={<UseLayoutEffectApplication />} />
                    </Route>
                    <Route path='/use-sync-external-store-hook-page/' element={<UseSyncExternalStoreHookPage />}>
                        <Route path='use-sync-external-store-application' element={<UseSyncExternalStoreApplication />} />
                        <Route path='counter-application-using-use-sync-external-store-hook' element={<CounterApplicationUsingUseSyncExternalStoreHook />} />
                    </Route>
                    <Route path='/use-transition-hook-page/' element={<UseTransitionHookPage />}>
                        <Route path='count-application-without-is-pending' element={<CountApplicationWithoutIsPending />} />
                        <Route path='performance-problem-in-search-functionality' element={<PerformanceProblemInSearchFunctionality />} />
                        <Route path='solution-for-performance-in-search-functionality' element={<SolutionForPerformanceInSearchFunctionality />} />
                    </Route>
                    <Route path='/dashboard' element={<DashboardPage />} />
                    {/* UseParams Hook: 1. Need to add route (Here, route is 'firstName' and 'lastName' variable) for DashboardPage 2. We need to use this (variable name) route in DashboardPage JXS file */}
                    <Route path='/dashboard/:firstName/:lastName' element={<DashboardPage />} />
                    {/* UseNavigate Hook: Need to add route here for UseNavigate Hook. In this case ProductPage and CartPage needs to be added in Route. */}
                    <Route path='/product' element={<ProductPage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/component-without-lazy-loader' element={<ComponentWithoutLazyLoader />} />
                    <Route path='/component-with-lazy-loader' element={<ComponentWithLazyLoader />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </Router >
        </>
    )
}