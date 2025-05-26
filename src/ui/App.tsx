import { Routes, Route } from 'react-router-dom'
import Login from './user_account/Login.tsx'
import Register from './user_account/SignUp.tsx';
import LanguageSelect from "./user_account/SelectLanguage.tsx";
import FolderStructureSelection from "./user_account/SelectFolderStructure.tsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/language" element={<LanguageSelect/>}/>
            <Route path="/folderSelection" element={<FolderStructureSelection/>}/>
        </Routes>
    )
}

export default App

