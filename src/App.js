import './App.css'
import categories from './data/categories'
import DirectoryMenu from './components/directory-menu/directory-menu'

function App() {
  return (
    <DirectoryMenu categories={categories} />
  );
}

export default App;
