import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomePage from "./HomePage";
import PreferenceComponent from "./PreferenceComponent";
import SuggestionsComponents from "./SuggestionsComponents";


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route  path="/preference" element={<PreferenceComponent />} />
          <Route path="/suggestions" element={<SuggestionsComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
