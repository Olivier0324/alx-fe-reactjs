import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("Form Submitted:", { username, email, password });
    // Simulate API call later
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4">User Registration</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}                
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded w-full p-2 mb-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}                   
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded w-full p-2 mb-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}                
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded w-full p-2 mb-3"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
}
