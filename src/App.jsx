import React, { useState } from "react";
import {Search, Plus, StickyNote} from "lucide-react";
import NotesCard from "./components/NotesCard";

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Subscribe" },
    { id: 2, title: "Note App" },
  ]);
  const [text, setText] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const addNote = () => {
    if (text.length == 0) {
      setText("Please Write Something");
      return;
    }
    setNotes((prev) => [
      ...prev,
      { id: new Date().toLocaleString(), title: text },
    ]);
    setText("");
    setIsToggle(false);
  };
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };
  return (
    <div className="min-h-screen h-auto flex flex-col bg-white-500 text-white overflow-x-hidden p-7">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold flex items-center gap-3 text-yellow-400 ">
         NOTEPAD  APP <StickyNote size={35} className="text-yellow-400" /> 
        </h1>

        <p className="font-semibold text-gray-400 text-lg text-center">
          Write the content
        </p>
       
        <h1 className="text-2xl text-black font-bold">
           Search <Search size={50} className="text-red-400"/></h1>
      </div>

       
      <div
        className="flex flex-col items-center gap-2 mt-12 w-full bg-gradient-to-br from-orange-600 to-pink-500 rounded-lg p-8 shadow-lg cursor-pointer hover:scale-102 transition-all duration-300 ease-in-out"
        onClick={() => setIsToggle(true)}
      >
               <Plus size={50} />
        <h1 className="text-2xl text-white font-bold"> Notes Add</h1>
      </div>
      {isToggle ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-purple-500 md:h-1/2 md:w-2/7 bg-gray-900 rounded-lg flex flex-col items-center gap-2 p-8">
          <h1 className="md:text-3xl text-xl font-semibold">
            Write Your Notes..
          </h1>
          <textarea
            name="note"
            id="note"
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="tex-white bg-gray-700 rounded-lg w-full h-full "
          ></textarea>
          <div className="flex gap-2">
            <button
              className="bg-yellow-600 px-6 py-2 rounded-lg mt-4"
              onClick={addNote}
            >
              Add
            </button>
            <button
              className="bg-orange-600 px-6 py-2 rounded-lg mt-4"
              onClick={() => setIsToggle(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {notes.length > 0 ? (
        <div className="flex flex-wrap  items-center gap-4 mt-10 my-40">
          {notes.map((note) => (
            <NotesCard
              id={note.id}
              note={note.title}
              key={note.id}
              deleteNote={deleteNote}
            />
          ))}
        </div>
      ) : (
        " Notes not here"
      )}
    </div>
  );
};

export default App;