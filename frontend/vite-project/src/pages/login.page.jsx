
import { useState } from "react";
import { HandleLogin } from "../jsapi/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        const formdata = {
            username,
            email,
            password
        };

        try {
            const res = await HandleLogin(formdata);

            if (res.success) {
                navigate("/home");
            } else {
                setError(res.message || "Login failed");
            }

        } catch (error) {
            setError(
                error.response?.data?.message ||
                error.message ||
                "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">

            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center gap-4 p-8 rounded-lg shadow-lg"
            >

                <h1 className="text-2xl font-bold">Login</h1>

                <label>Enter username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-emerald-300 text-black p-2 rounded"
                    placeholder="Username"
                    required
                />

                <label>Enter your email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-emerald-300 text-black p-2 rounded"
                    placeholder="Email"
                    required
                />

                <label>Enter your password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-emerald-300 text-black p-2 rounded"
                    placeholder="Password"
                    required
                />

                {error && (
                    <p className="text-red-500 text-sm">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

            </form>
        </div>
    );
};

export default Login;
