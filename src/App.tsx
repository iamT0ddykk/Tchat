import { useState } from "react";
import "./styles/App.css";
import { Chat } from "./components/Chat";

//fazer form
//adicionar login real

function App() {
  const [inputvalue, setInputValue] = useState("");

  const [userName, setUserName] = useState("");
  const [userColor, setUserColor] = useState("#ffff");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserColor(e.target.value);
  }

  if (userName.trim()) {
    return (
      <div className="flex flex-col items-center mt-20 text-white">
        <h1 className="text-3xl textfont-bold">Bem-vindo, {userName}!</h1>
        <Chat color={userColor} name={userName}></Chat>
        <button
          onClick={() => setUserName("")}
          className="mt-4 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500 cursor-pointer"
        >
          Sair
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex mt-30 items-center flex-col justify-center">
        <div className="bg-[#2A2A3D] gap-5 w-100 justify-center flex flex-col items-center text-center p-6 text-white rounded-lg">
          <h1 className="text-2xl"> TChat </h1>
          <label className="block text-sm font-medium text-white mb-1">
            Nome
          </label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="digite seu nick..."
            className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-200"
          />
          <div>
            <p>Cor de nome:</p>
            <input type="color" name="" id="" onChange={handleColorChange} />
          </div>

          <button
            onClick={() => setUserName(inputvalue)}
            type="button"
            className="px-5 py-2.5 text-sm font-medium text-white bg-slate-600 hover:bg-slate-00 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 cursor-pointer"
          >
            Logar
          </button>
        </div>
      </div>
    );
  }
}

export default App;
