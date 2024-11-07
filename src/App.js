import { MainPageComponent } from './Components/CardComponent/MainPageComponent';
import { ContainerComponent } from './Components/ContainerComponent';
import InputForm from './Components/Forms/ControlledComponent/InputFormControlledComponent';
import { ThemeChange } from './Events/ThemeChange';
import { CounterUseEffect } from './Hooks/UseEffect/CounterUseEffect';
import { Counter } from './Hooks/UseState/Counter';
import { DigitalClock } from './Hooks/UseState/DigitalClock';


function App() {
  return (
    <>
      {/* <ContainerComponent /> */}
      {/* <MainPageComponent /> */}
      {/* <Counter /> */}
      {/* <DigitalClock /> */}
      {/* <ThemeChange /> */}
      {/* <InputForm /> */}
      <CounterUseEffect />
    </>
  );
}

export default App;
