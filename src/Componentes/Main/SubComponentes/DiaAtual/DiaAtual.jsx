import "./DiaAtual.css"

const DiaAtual = () => {
    
    const diaAtual = new Date().getDate();
    
    return <div className="diaAtual"> 2-) Dia {diaAtual}</div>
}

export default DiaAtual;