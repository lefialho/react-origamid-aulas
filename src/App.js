// import { ExercicioJSX } from './jsx/exercicio';
// import { ExercicioJSX } from './jsx/exercicio';
// import { AulaEvent } from './event/Aula';
// import { AulaJSX } from './jsx/Aula';
// import { Aula2JSX } from './jsx/Aula2';
// import { ExercicioJSX2 } from './jsx/exercicio2';
// import { Form } from './jsx/Components/Form/Form';
// import { ExercicioComponents } from './jsx/Components/Exercicio/Exercicio';
// import { AulaUseState } from './hooks/UseState/Aula';

import { AulaUseEffect } from './hooks/useEffect/Aula';
import { Tab } from './tabs/Tab';
import { TabWithObj } from './tabs/TabWithObj';

export function App() {
  return (
    <>
      <AulaUseEffect />
      <Tab />
      <TabWithObj />
      {/* <AulaUseState /> */}
      {/* <ExercicioComponents /> */}
      {/* <Form /> */}
      {/* {<AulaEvent />} */}
      {/* <ExercicioJSX /> */}
      {/* <ExercicioJSX2 /> */}
      {/* <AulaJSX /> */}
      {/* <Aula2JSX /> */}
    </>
  );
}
