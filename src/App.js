import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />}>
          {/* <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
