// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar.js';
import RightBar from './RightBar.js';
import { useState } from "react";
import AllPages from './AllPages.js';
import NewPage from './newPage.js';
import SinglePage from './SinglePage.js';
import Home from './home.js';

function App() {

  const [page, setPage] = useState('home');

  function pageChange(pages){
    if (pages.includes('new')){
      setPage('new')
    }
    else if (pages.includes('random')){
      setPage('random')
    }
    else{
      setPage('home')
    }
  }
  return (
    <>
      <div className = "row">
          <div className = "col-md-3 bg-secondary p-4">
              <Sidebar pageSelected = { pageChange }/>
          </div>
          <div className = "col-md-9  p-4">
            <RightBar>
              { page === 'new' ? <NewPage/> : (page === 'random' ? <SinglePage random = {true}/> : <Home home = { true }/>)}
            </RightBar>
          </div>
      </div>
    </>
  );
}

export default App;
