// import React, { useState } from 'react';
// import { encodeBase64, encodeCaesar } from './Encoder';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [encoding, setEncoding] = useState('base64');

//   const getEncodedMessage = () => {
//     switch (encoding) {
//       case 'base64':
//         return encodeBase64(message);
//       case 'caesar':
//         return encodeCaesar(message, 3); // Shift of 3
//       default:
//         return '';
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h1>🔐 Secret Message Encoder</h1>

//       <input
//         type="text"
//         value={message}
//         placeholder="Enter your secret message"
//         onChange={(e) => setMessage(e.target.value)}
//         style={{ width: '100%', padding: '10px', fontSize: '1rem' }}
//       />

//       <br /><br />

//       <select
//         value={encoding}
//         onChange={(e) => setEncoding(e.target.value)}
//         style={{ padding: '8px', fontSize: '1rem' }}
//       >
//         <option value="base64">Base64</option>
//         <option value="caesar">Caesar Cipher</option>
//       </select>

//       <br /><br />

//       <div style={{ background: '#f3f3f3', padding: '10px' }}>
//         <strong>Encoded Output:</strong>
//         <p>{getEncodedMessage()}</p>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { encodeBase64, encodeCaesar } from './Encoder';
import './App.css'; // ✅ Import the CSS here

const App = () => {
  const [message, setMessage] = useState('');
  const [encoding, setEncoding] = useState('base64');

  const getEncodedMessage = () => {
    switch (encoding) {
      case 'base64':
        return encodeBase64(message);
      case 'caesar':
        return encodeCaesar(message, 3);
      default:
        return '';
    }
  };

  return (
    <div className="app-container">
      <h1>🔐 Secret Message Encoder</h1>

      <label>
        <strong>Enter Message:</strong>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your secret message..."
        />
      </label>

      <label>
        <strong>Choose Encoding:</strong>
        <select
          value={encoding}
          onChange={(e) => setEncoding(e.target.value)}
        >
          <option value="base64">Base64</option>
          <option value="caesar">Caesar Cipher</option>
        </select>
      </label>

      <div className="output-box">
        <strong>Encoded Output:</strong>
        <p>{getEncodedMessage()}</p>
      </div>
    </div>
  );
};

export default App;
