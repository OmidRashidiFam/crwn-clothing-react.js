import './home-page.scss'
import categories from '../../data/categories'
import DirectoryMenu from '../../components/directory-menu/directory-menu'

const HomePage = () => {
  return (
    <div className="homePage">
      <DirectoryMenu categories={categories} />
    </div>);
}

export default HomePage;