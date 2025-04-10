"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { push } = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setAlert({ msg: error.message, type: "error" })
      setLoading(false);
    };
    if (data.session) push("/main");
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex h-screen w-full">
      <div className="w-full h-screen">
        <div className="flex flex-col md:flex-row flex-col shadow-lg overflow-hidden">
          <div className="md:flex md:w-1/2 bg-gray-300 md:h-screen h-[200px]">
            <div
              className="bg-cover bg-center w-full h-full"
              style={{ backgroundImage: "url('/image-login.png')" }}
            />
          </div>
          <form
            className="md:w-1/2 h-screen pt-[150px] md:px-[15vh] px-[5vh] bg-white"
            onSubmit={handleSubmit}
          >
            {alert && <Alert msg={alert.msg} type={alert.type} alert />}

            <div className="flex flex-col mb-8">
              <label
                htmlFor="email"
                className={`block text-[#E0783E] text-sm font-bold mb-2`}
              >
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="exemplo@email.com"
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className={`block text-[#E0783E] text-sm font-bold mb-2`}
              >
                SENHA
              </label>
              <input
                id="password"
                type="password"
                value={password}
                placeholder="Digite sua senha"
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="w-full flex justify-end">
                <a
                  href="#"
                  className={`inline-block align-baseline font-light text-sm text-[#E0783E] hover:text-[#c13f0b]`}
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between mt-12">
              <button
                disabled={loading}
                className={`w-full bg-[#E0783E] hover:bg-[#c13f0b] text-[#fff] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline`}
              >
                {loading ? "..." : "ENTRAR"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

const Alert = ({ type, msg }) => {
  let style = "";

  switch (type) {
    case "info":
    default:
      style = "bg-blue-100 border-blue-300 text-blue-600";
      break;
    case "error":
      style = "bg-red-100 border-red-300 text-red-600";
      break;
  }

  return (
    <div
      className={`text-xs py-2 px-2 flex gap-2 mb-2 w-72 border rounded-md ${style}`}
    >
      <strong>{type}: </strong>
      <span>{msg}</span>
    </div>
  );
};
