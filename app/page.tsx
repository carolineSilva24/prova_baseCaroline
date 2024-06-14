'use client'

import { useRouter } from "@/node_modules/next/navigation";

export default function Home() {
  const router= useRouter()
    return (
      <div className="h-screen bg-gradient-to-r from-blue-400 md:to-red-400">
        <h1 className="text-2xl sm:text-4xl font-light tracking-wide text-center pt-8 pb-10">Bem vindo ao Portal de Receitas</h1>
    
        <div className="flex flex-col items-center ">
          <button 
                  type= "submit"
                  onClick={() => router.push('/recipes')}
                  className="bg-gray-600 font-light text-white px-1 py-1 rounded-lg mt-4 hover:bg-blue-600 items-center">
                    Ver receitas
                  </button>
        </div>
      </div>
    );
}
