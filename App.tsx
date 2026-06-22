import React, { useState } from 'react';

function App() {
  const [note, setNote] = useState<string>('');
  const [saveMessage, setSaveMessage] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
    setSaveMessage(''); // Clear save message when user types again
  };

  const handleSave = () => {
    console.log("Note saved:", note);
    setSaveMessage("Note saved successfully!");
    // In a real app, you would send the note to a backend or save to local storage here.
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Simple Notepad</h1>
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 resize-none mb-4"
          placeholder="Start typing your notes here..."
          value={note}
          onChange={handleChange}
        ></textarea>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleSave}
        >
          Save Note
        </button>
        {saveMessage && (
          <p className="mt-4 text-center text-green-600 font-medium">{saveMessage}</p>
        )}
      </div>
    </div>
  );
}

export default App;
