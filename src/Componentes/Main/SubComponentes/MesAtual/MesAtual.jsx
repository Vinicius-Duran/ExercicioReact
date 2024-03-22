import "./MesAtual.css"

const MesAtual = () => {

    const mesAtual = new Date().getMonth();

    return <div className="mesatual"> 3-) {mesAtual +1}</div>
}

export default MesAtual;