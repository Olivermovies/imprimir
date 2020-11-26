import {useState} from 'react';
function Home(){
return(
     <div>Home9
     <Contador/>
     </div>)}
function Contador(){
    const [contador,setContador] = useState(1);
    function adincionarContador(){
        setContador(contador + 1); 

    }
return (
    <div>
        <div>{contador}</div>
    <button onClick={adicionarContador}>adicionar</button>
    </div>
        )
}
export default Home