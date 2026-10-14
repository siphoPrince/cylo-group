import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingForBusiness from "./pages/LandingForBusiness";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingForBusiness />} />
                {/* Anything else → back to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;