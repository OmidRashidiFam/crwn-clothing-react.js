// Import categories object
import categories from "../../data/categories";

// Import DirectoryMenu component
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";

// Import HomePageContainer style
import { HomePageContainer } from "./home-page.style";

// Create HomePage component
const HomePage = () => {
  return (
    <HomePageContainer>
      {/* Render DirectoryMenu component with categories prop */}
      <DirectoryMenu categories={categories} />
    </HomePageContainer>
  );
};

// Export HomePage component
export default HomePage;
