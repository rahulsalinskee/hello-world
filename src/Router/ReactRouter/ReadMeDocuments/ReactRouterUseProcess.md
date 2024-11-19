How to use this module

1. Go to App.JS and import it's function by using the following code
import { BrowserRouter, Routes, Route } from 'react-router-dom';

2. Create a BrowserRouter tag inside App.JS file and wrap the entire App.JS file within the BrowserRouter tag. This will allow us to use React Router.

3. Create a Routes tag inside BrowserRouter tag and then again create a Route tag inside Routes tag for each page you want to create.

4. Route tag has two properties, path and element. Path is the path of the page and element is the component of the page.

Example: 

This code is inside ApplicationRouter JSX file.

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>