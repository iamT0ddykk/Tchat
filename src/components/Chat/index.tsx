import { useState } from "react";

type chatProp = {
  name: string;
  color: string;
};

export function Chat({ name, color }: chatProp) {
  const [msg, setMsg] = useState("");
  const [mensagens, setMensagens] = useState<string[]>([]);
  const [time, setTime] = useState<string[]>([]);

  function handleMsg(e: React.ChangeEvent<HTMLInputElement>) {
    setMsg(e.target.value);
  }
  let e: string;
  function handleEnviar() {
    if (!msg.trim()) return;

    setMensagens([...mensagens, msg]);
    setTime([...time, Date.now().toString()]);
    time.map((item) => (e = item));

    setMsg("");
  }

  return (
    <div className="bg-[#2A2A3D] w-4xl p-4 rounded-xl flex flex-col gap-4">
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {mensagens.map((item, index) => (
          <p
            key={index}
            className="bg-slate-800 text-white p-2 rounded-lg text-sm"
          >
            <b style={{ color: color }}>{name}</b> : {item}
            {e}
          </p>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        <input
          className="w-full px-4 py-2 text-sm text-gray-100 bg-slate-800 border border-slate-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          type="text"
          placeholder="digite sua mensagem..."
          value={msg}
          onChange={handleMsg}
        />

        <button
          onClick={handleEnviar}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 cursor-pointer transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
