"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import theme from "@/app/theme";

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
    if (error) setAlert({ msg: error.message, type: "error" });
    setLoading(false);
    if (data.session) push("/");
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex h-screen w-full">
      <div className="w-full h-screen">
        <div className="flex flex-col md:flex-row shadow-lg overflow-hidden">
          <div className="md:flex md:w-1/2 bg-gray-300 h-screen">
            <div
              className="bg-cover bg-center w-full h-full"
              style={{ backgroundImage: "url('/image-login.png')" }}
            />
          </div>
          <form
            className="md:w-1/2 pt-[150px] px-[15vh] bg-white"
            onSubmit={handleSubmit}
          >
            {alert && <Alert msg={alert.msg} type={alert.type} alert />}

            <div className="flex flex-col mb-8">
              <label
                htmlFor="email"
                className={`block text-[${theme.colors.primary.color}] text-sm font-bold mb-2`}
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
                className={`block text-[${theme.colors.primary.color}] text-sm font-bold mb-2`}
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
                  className={`inline-block align-baseline font-light text-sm text-[${theme.colors.primary.color}] hover:text-[${theme.colors.primary.hover}]`}
                >
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between mt-12">
              <button
                disabled={loading}
                className={`w-full bg-[${theme.colors.primary.color}] hover:bg-[${theme.colors.primary.hover}] text-[${theme.colors.primary.contrastText}] font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline`}
              >
                {loading ? "..." : "ENTRAR"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="antialiased flex min-h-screen flex-col items-center justify-center bg-slate-100">
  //     { && <Alert msg={alert.msg} type={alert.type}alert />}
  //     <div className="shadow-lg rounded-md p-6 border bg-white">
  //       <h1 className="font-semibold mb-2">Login</h1>
  //       {isClient && <form className="flex flex-col gap-4 mt-4">
  //         <div className="flex flex-col gap-1">
  //         <input
  //           type="email"
  //           id="email"
  //           className="px-3 py-2 text-sm text-slate-400 border border-slate-300 rounded outline-none"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           placeholder="Email"
  //         />
  //         </div>

  //         <div className="flex flex-col gap-1">
  //           <input
  //             type="password"
  //             id="password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             className="px-3 py-2 text-sm text-slate-400 border border-slate-300 rounded outline-none"
  //             placeholder="Password"
  //           />
  //         </div>

  //         <hr />

  //         <button
  //           type="button"
  //           className="bg-slate-900 font-semibold rounded py-2 text-white"
  //           onClick={async (e) => {
  //             e.preventDefault();
  //             setLoading(true);
  //             const { data, error } = await supabase.auth.signInWithPassword({
  //               email,
  //               password,
  //             });
  //             if (error) setAlert({ msg: error.message, type: "error" });
  //             setLoading(false);
  //             if (data.session) push("/");
  //           }}
  //           disabled={loading}
  //         >
  //           {loading ? "..." : "Login"}
  //         </button>

  //         <button
  //           type="button"
  //           className="bg-slate-900 font-semibold rounded py-2 text-white"
  //           onClick={async (e) => {
  //             e.preventDefault();
  //             const { error } = await supabase.auth.signUp({
  //               email,
  //               password,
  //             });
  //             if (error) setAlert({ msg: error.message, type: "error" });
  //             else setAlert({ msg: "Check your email!", type: "info" });
  //           }}
  //         >
  //           Register
  //         </button>
  //       </form>}
  //     </div>
  //   </div>
  // );
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
