import { livros } from './dadosUltimosLancamentos'

export function UltimosLancamentos () {
    return (
            <section>
                <h2>Ultimos Lançamentos</h2>
                {livros.map( livros => (
                    <img src = {livros.src}/>
                ))}
            </section>
    )
}

export default UltimosLancamentos