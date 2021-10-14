import React from 'react';
import Form from './components/form';

const App = () => {
  return(
    <>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </>  
  )
}

export default App;
