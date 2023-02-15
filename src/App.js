import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<Home />}>
          {/* <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
