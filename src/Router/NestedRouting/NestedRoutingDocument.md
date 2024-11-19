Nested Route: 
    - It is basically routing inside a route.
    - It is used to create a route inside a route.
    Example:
        - If there is contact page and inside that contact page there are option like contact us through these options: 
            - YouTube
            - Facebook
            - Instagram
            - Twitter
            - GitHub

        Code Example:
            - The changes needs to be done in ContactPage.jsx file and in the file where router is defined. 
            - Here, it is defined in ApplicationRouter JSX file.

Code Change Locations:

1. ContactPage.jsx file code:

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



2. ApplicationRouter JSX file code:

/* Nested Routing - Adding YouTube | Twitter | GitHub in contact page */
          <Route path='/contact/' element={<ContactPage />}>
            <Route path='github' element={<GitHubPage />} />
            <Route path='twitter' element={<TwitterPage />} />
            <Route path='youtube' element={<YouTubePage />} />
          </Route>