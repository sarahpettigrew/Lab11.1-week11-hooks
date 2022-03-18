import React from 'react';
import './App.css';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };
  const searchedStories = stories.filter( function(story) {
    return story.title.includes(searchTerm);
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>
    
      <Search onSearch={handleSearch} searchTerm={searchTerm} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const Search = (props) => {
  // implementation not here anymore
  //const [searchTerm, setSearchTerm] = React.useState('');

      // implementation not here anymore 
  // const handleChange = event => {
  //   setSearchTerm(event.target.value);
  // };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={props.searchTerm} onChange={props.onSearch} />

      <p>Searching for <strong>{props.searchTerm}</strong>. </p>
    </div>
  );
};


const List = props =>
  props.list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));
export default App;
