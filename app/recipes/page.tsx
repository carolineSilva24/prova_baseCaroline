import listaReceitas from "@/recipes.json" 
import Image from 'next/image'


export default function Recipes(){
    return (
      <div className="h-screen bg-gradient-to-r from-blue-400 md:to-red-400">
        <h1 className="text-2xl sm:text-4xl font-light tracking-wide text-center pt-8 pb-10">
           Página de receitas 
        </h1>
        <p className="text-center mt-3 mb-10 font-light">
            Segue algumas receitas para você poder aprender: 
        </p>
        <div className="flex flex-col items-center mb-10 text-center bg-gradient-to-r from-blue-400 md:to-red-400 font-light text-2x1">
            <ul>
                <li className="mb-10">
                 {listaReceitas[0].name}
                    <Image
                        src={listaReceitas[0].image}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                </li>

                <li className="mt-10">
                    {listaReceitas[1].name}
                    
                </li>
                <Image
                    src={listaReceitas[1].image}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />

                <li className="mt-10">
                    {listaReceitas[2].name}
                    
                </li>
                <Image
                    src={listaReceitas[2].image}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />
    
                <li className="mt-10">
                    {listaReceitas[3].name}
                    
                </li>
                <Image
                    src={listaReceitas[3].image}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />

                <li className="mt-10">
                    {listaReceitas[4].name}
                    
                </li>
                <Image
                    src={listaReceitas[4].image}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />

                <li className="mt-10">
                    {listaReceitas[5].name}
                    
                </li>
                <Image
                    src={listaReceitas[5].image}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />

                <li className="mt-10">
                    {listaReceitas[6].name}
                    
                </li>
                <Image
                    src={listaReceitas[6].image}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />

                <li className="mt-10">
                    {listaReceitas[7].name}
                    
                </li>
                <Image
                    src={listaReceitas[7].image}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />

                <li className="mt-10">
                    {listaReceitas[8].name}
                    
                </li>
                <Image
                    src={listaReceitas[8].image}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />

                <li className="mt-10">
                    {listaReceitas[9].name}
                    
                </li>
                <Image
                    src={listaReceitas[9].image}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    />

            </ul>
        </div>
        
      </div>
    )
}