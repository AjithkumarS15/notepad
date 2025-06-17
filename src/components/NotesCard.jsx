import React from "react";
import { Trash, Save } from "lucide-react";
const NotesCard = ({ note, id , deleteNote }) => {

  return (
    <div className="flex flex-col justify-between items-center w-64 h-64 bg-gray-800 rounded-lg shadow-lg p-4 m-4">
      <div className="flex justify-center w-full items-center bg-white-600 rounded-lg p-2">
        <p className="text-sm text-white">{id}</p>
      </div>
      <h1 className="text-lg font-bold text-center px-2 overflow-hidden break-words">{note}</h1>
      <div className="flex justify-between w-full  bg-yellow-400 rounded-lg p-2 mt-2">
        <button className="text-red-400 hover:text-red:500" onClick={()=>deleteNote(id)}>
          <Trash />
        </button>
       
      </div>
    </div>
  );
};

export default NotesCard;