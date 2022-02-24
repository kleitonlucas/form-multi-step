import { BrowserRouter } from "react-router-dom";
import { FormProvider } from "./contexts/FormContext";
import { Router } from "./routes/Router";

const App = () => {
  return (
    <FormProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;