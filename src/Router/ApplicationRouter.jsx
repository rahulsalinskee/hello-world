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
import PerformanceProblemInFilterFunctionality from '../Hooks/UseTransition/PerformanceProblemInFilterFunctionality/PerformanceProblemInFilterFunctionality';
import SolutionForPerformanceInFilterFunctionality from '../Hooks/UseTransition/SolutionForPerformanceInFilterFunctionality/SolutionForPerformanceInFilterFunctionality';
import UseDeferredValueHookPage from '../Pages/UseDeferredValueHookPage';
import SimilarProblemLikeUseTransitionWithoutUsingUseDeferredValueHookApplication from '../Hooks/UseDeferredValue/SimilarProblemLikeUseTransitionWithoutUsingUseDeferredValueHookApplication/SimilarProblemLikeUseTransitionWithoutUsingUseDeferredValueHookApplication';
import SimilarProblemSolutionLikeUseTransitionUsingUseDeferredValueHookApplication from '../Hooks/UseDeferredValue/SimilarProblemSolutionLikeUseTransitionUsingUseDeferredValueHookApplication/SimilarProblemSolutionLikeUseTransitionUsingUseDeferredValueHookApplication';
import CounterApplicationUsingUseDeferredValue from '../Hooks/UseDeferredValue/CounterApplicationUsingUseDeferredValue/CounterApplicationUsingUseDeferredValue';
import UseIdHookPage from '../Pages/UseIdHookPage';
import UseIdApplication from '../Hooks/UseId/UseIdApplication/UseIdApplication';
import CustomHookPage from '../Pages/CustomHookPage';
import CustomHookApplication from '../Hooks/CustomHook/CustomHookApplication/CustomHookApplication';
import ReduxToolKitPage from '../Pages/ReduxToolKitPage';
import ProductComponent from '../ReduxToolKit/ApplicationUsingReduxToolKit/ProductComponent';
import Dashboard from '../ReduxToolKit/ApplicationUsingReduxToolKit/Dashboard';


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
                        <Route path='performance-problem-in-filter-functionality' element={<PerformanceProblemInFilterFunctionality />} />
                        <Route path='solution-for-performance-in-filter-functionality' element={<SolutionForPerformanceInFilterFunctionality />} />
                    </Route>
                    <Route path='/use-deferred-value-hook-page/' element={<UseDeferredValueHookPage />}>
                        <Route path='similar-problem-like-use-transition-without-using-use-deferred-value-hook-application' element={<SimilarProblemLikeUseTransitionWithoutUsingUseDeferredValueHookApplication />} />
                        <Route path='similar-problem-solution-like-use-transition-using-use-deferred-value-hook-application' element={<SimilarProblemSolutionLikeUseTransitionUsingUseDeferredValueHookApplication />} />
                        <Route path='counter-application-using-use-deferred-value-hook' element={<CounterApplicationUsingUseDeferredValue />} />
                    </Route>
                    <Route path='/use-id-hook-application-page/' element={<UseIdHookPage />}>
                        <Route path='use-id-hook-application' element={<UseIdApplication />} />
                    </Route>
                    <Route path='/custom-hook-page/' element={<CustomHookPage />}>
                        <Route path='custom-hook-application' element={<CustomHookApplication />} />
                    </Route>
                    <Route path='/redux-tool-kit-page/' element={<ReduxToolKitPage />}>
                        <Route path='redux-tool-kit-product-dashboard/' element={<Dashboard />}>
                            <Route path='products' element={<ProductComponent />} />
                        </Route>
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