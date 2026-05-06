import { useState } from "react";
import "./App.css";

function PasswordInput({ password, setPassword, show, setShow }) {
  return (
    <div className="input-container">
      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => {const value = e.target.value.replace(/\s/g, "");
        setPassword(value);
      }}
        placeholder="Escribí tu contraseña"
      />
      <button onClick={() => setShow(!show)}>
        {show ? "🙈" : "👁️"}
      </button>
    </div>
  );
}

function StrengthIndicator({ strength }) {
  const levels = {
    "Poco segura": 30,
    "Segura": 60,
    "Muy segura": 100,
  };

  const colors = {
    "Poco segura": "#ef4444",
    "Segura": "#f59e0b",
    "Muy segura": "#22c55e",
  };

  return (
    <div className="strength">
      <div className="bar">
        <div
          className="fill"
          style={{
            width: levels[strength] + "%",
            background: colors[strength],
          }}
        ></div>
      </div>
      <p style={{ color: colors[strength] }}>{strength}</p>
    </div>
  );
}

function Checklist({ password }) {
  const checks = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  return (
    <ul className="checklist">
      <li className={checks.length ? "ok" : "bad"}>Mínimo 8 caracteres</li>
      <li className={checks.upper ? "ok" : "bad"}>Una mayúscula</li>
      <li className={checks.lower ? "ok" : "bad"}>Una minúscula</li>
      <li className={checks.number ? "ok" : "bad"}>Un número</li>
      <li className={checks.special ? "ok" : "bad"}>Un símbolo</li>
    </ul>
  );
}

function Generator({ setPassword }) {
  const [length, setLength] = useState(10);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);

  const generate = () => {
    
    if (!upper && !lower && !number && !symbol) {
      alert("Seleccioná al menos una opción");
      return;
    }

    if (length < 4 || length > 50) {
      alert("Longitud inválida");
      return;
    }


    let chars = "";
    let required = [];
   
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (number) chars += "0123456789";
    if (symbol) chars += "!@#$%^&*";

    if (!chars) return;

    let pass = "";
    
  
    for (let i = pass.length; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    pass = pass.split("").sort(() => Math.random() - 0.5).join("");

    setPassword(pass);
  };

  return (
    <div className="generator">
      <h3>Generador</h3>
      <input
        type="number"
        value={length}
        onChange={(e) => {
          let val = Number(e.target.value);

          if (val < 4) val = 4;       
          if (val > 50) val = 50;     

          setLength(val);
        }}
        min="4"
      />

      <div className="options">
        <label><input type="checkbox" checked={upper} onChange={() => setUpper(!upper)} /> Mayúsculas</label>
        <label><input type="checkbox" checked={lower} onChange={() => setLower(!lower)} /> Minúsculas</label>
        <label><input type="checkbox" checked={number} onChange={() => setNumber(!number)} /> Números</label>
        <label><input type="checkbox" checked={symbol} onChange={() => setSymbol(!symbol)} /> Símbolos</label>
      </div>

      <button onClick={generate}>Generar</button>
    </div>
  );
}

export default function App() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const evaluar = () => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return "Poco segura";
    if (score <= 4) return "Segura";
    return "Muy segura";
  };

  const copiar = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setMsg("Copiado!");
    setTimeout(() => setMsg(""), 3000);
  };

  return (
    <div className="app">
      <h1>Seguridad de Contraseña</h1>

      <PasswordInput
        password={password}
        setPassword={setPassword}
        show={show}
        setShow={setShow}
      />

      <button onClick={copiar}>Copiar</button>
      {msg && <p className="msg">{msg}</p>}

      <StrengthIndicator strength={evaluar()} />

      <Checklist password={password} />

      <Generator setPassword={setPassword} />
    </div>
  );
}
