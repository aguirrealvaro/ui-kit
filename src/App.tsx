/* eslint-disable no-console */
import { FunctionComponent } from "react";

console.log(process.env.MODE);
console.log(process.env.API_HOST);
console.log(process.env.APP_VERSION);

const App: FunctionComponent = () => {
  return <h1>Hello world</h1>;
};

export default App;
