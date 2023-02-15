import './App.css';

function App() {

  const categories = [
    {
      id: '1',
      title: 'Hats'
    },
    {
      id: '2',
      title: 'Jackets'
    },
    {
      id: '3',
      title: 'Snekers'
    },
    {
      id: '4',
      title: 'Womens'
    },
    {
      id: '5',
      title: 'Mens'
    },
  ]

  return (
    <div className="categories_container">
      {categories.map(({ id, title }) => (
        <div className='category_card' key={id}>
          <div className='category_card_img' />
          <div className='category_card_body'>
            <h2 className='category_card_body-title'>{title}</h2>
            <p className='category_card_body-subtitle'>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
