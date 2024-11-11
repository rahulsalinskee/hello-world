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
      <AdditionWithUseMemo />
    </>
  );
}

export default App;
