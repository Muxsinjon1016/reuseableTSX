import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import NotFound from "./layout/notFound";
import { Buttons } from "./pages/buttons";
import { Inputs } from "./pages/inputs";
import { Tooltips } from "./pages/tooltips";
import { Modals } from "./pages/modals";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Buttons />} />
          <Route path="inputs" element={<Inputs />} />
          <Route path="tooltips" element={<Tooltips />} />
          <Route path="modals" element={<Modals />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
