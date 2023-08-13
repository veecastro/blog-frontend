import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
