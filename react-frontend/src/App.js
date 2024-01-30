import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [response1, setResponse1] = useState({ data: 'Loading...', status: 'loading' });
  const [response2, setResponse2] = useState({ data: 'Loading...', status: 'loading' });
  const [response3, setResponse3] = useState({ data: 'Loading...', status: 'loading' });
  const [responseGo, setResponseGo] = useState({ data: 'Loading...', status: 'loading' });

  useEffect(() => {
    const urls = [
      { url: 'http://localhost:8000/hello', setResponse: setResponse1 },
      { url: 'http://localhost:8080/hello', setResponse: setResponse2 },
      { url: 'http://localhost:8081/hello', setResponse: setResponse3 }
    ];

    urls.forEach(({ url, setResponse }) => {
      axios.get(url)
          .then(response => setResponse({ data: response.data, status: 'success' }))
          .catch(error => setResponse({ data: 'Error', status: 'error' }));
    });

    axios.get('http://localhost:8000/hello-from-go')
        .then(response => setResponseGo({ data: response.data, status: 'success' }))
        .catch(error => setResponseGo({ data: 'Error', status: 'error' }));
  }, []);


  const getRectangleStyle = (status) => ({
    ...rectangleStyle,
    backgroundColor: status === 'success' ? 'lightgreen' : status === 'error' ? 'red' : 'lightgray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const smallRectangleStyle = {
    ...getRectangleStyle(responseGo.status),
    width: '90%',
    height: '50px',
    margin: '10px 5%',
  };

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <div style={getRectangleStyle(response1.status)}>
          <div>{response1.data}</div>
          <div style={smallRectangleStyle}>{responseGo.data}</div>
        </div>
        <div style={getRectangleStyle(response2.status)}>{response2.data}</div>
        <div style={getRectangleStyle(response3.status)}>{response3.data}</div>
      </div>
    </div>
  );
}


const rectangleStyle = {
  width: '30%',
  height: '300px',
  backgroundColor: 'lightgray',
  border: '2px solid black',
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  overflowWrap: 'break-word',
  padding: '10px',
  color: 'black',
  textShadow: '0px 0px 3px white, 0px 0px 3px white, 0px 0px 3px white, 0px 0px 3px white'
};

export default App;
