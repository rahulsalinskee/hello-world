import { MainPageComponent } from './Components/CardComponent/MainPageComponent';
import { ContainerComponent } from './Components/ContainerComponent';
import InputForm from './Components/Forms/ControlledComponent/InputFormControlledComponent';
import { ThemeChange } from './Events/ThemeChange';
import { CounterUseEffect } from './Hooks/UseEffect/CounterUseEffect';
import { MessageLetterCountUsingUseState } from './Hooks/UseRef/MessageLetterCountUsingUseState';
import { Counter } from './Hooks/UseState/Counter';
import { DigitalClock } from './Hooks/UseState/DigitalClock';
import { MessageLetterCountUsingUseRef } from './Hooks/UseRef/MessageLetterCountUsingUseRef';
// import { A } from './Hooks/UseContext/PropDrilling/Problem/A';
import { A } from './Hooks/UseContext/PropDrilling/Solution/A';
import { Dashboard } from './Hooks/UseContext/DisplayNameUsingUseContext/Dashboard';
// import { Dashboard } from './Hooks/UseContext/DisplayNameUsingContextAPI/Dashboard';
// import { AdditionWithoutUseMemo } from './Hooks/UseMemo/ProblemWithoutUseMemo/AdditionWithoutUseMemo';
import { AdditionWithUseMemo } from './Hooks/UseMemo/SolutionWithUseMemo/AdditionWithUseMemo';
import WithoutCallBack from './Hooks/UseCallBack/ProblemWithoutCallBack/WithoutCallBack/WithoutCallBack';
import CallBackWithMemoFunction from './Hooks/UseCallBack/ProblemWithoutCallBack/UsingHigherOrderMemoFunction/CallBackWithMemoFunction';
import AdditionIncludesTodoListWithCallBack from './Hooks/UseCallBack/SolutionWithCallBack/WithCallBack/AdditionIncludesTodoListWithCallBack';
import AlarmClockIcon from './MaterialUiIcon/AlarmClockIcon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage } from './Router/Pages/AboutPage';
import { ContactPage } from './Router/Pages/ContactPage';
import { HomePage } from './Router/Pages/HomePage';
import { LoginPage } from './Router/Pages/LoginPage';
import { ErrorPage } from './Router/Pages/ErrorPage';
import { TwitterPage } from './Router/Pages/TwitterPage';
import { GitHubPage } from './Router/Pages/GitHubPage';
import { YouTubePage } from './Router/Pages/YouTubePage';


function App() {
  return (
    <>
      {/* <ContainerComponent /> */}
      {/* <MainPageComponent /> */}
      {/* <Counter /> */}
      {/* <DigitalClock /> */}
      {/* <ThemeChange /> */}
      {/* <InputForm /> */}
      {/* <CounterUseEffect /> */}
      {/* <MessageLetterCountUsingUseState /> */}
      {/* <MessageLetterCountUsingUseRef /> */}
      {/* <A /> */}
      {/* <A /> */}
      {/* <Dashboard /> */}
      {/* <Dashboard /> */}
      {/* <AdditionWithoutUseMemo /> */}
      {/* <AdditionWithUseMemo /> */}
      {/* <WithoutCallBack /> */}
      {/* <CallBackWithMemoFunction /> */}
      {/* <AdditionIncludesTodoListWithCallBack /> */}
      {/* <AlarmClockIcon /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          /* Nested Routing - Adding YouTube | Twitter | GitHub in contact page */
          <Route path='/contact/' element={<ContactPage />}>
            <Route path='github' element={<GitHubPage />} />
            <Route path='twitter' element={<TwitterPage />} />
            <Route path='youtube' element={<YouTubePage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
