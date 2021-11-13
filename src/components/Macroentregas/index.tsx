//esse componente ira precisar de um metodo que ira fazer um post para enviar o valor do progresso
import React, { FormEvent, useEffect, useRef, useState } from "react";
import "./styles.module.scss";
import GraficoPizza from "../graficoPizza";
import GraficoArea from "../graficoArea";
import styles from "./styles.module.scss";

interface MacronEntregaProps {
  deliverables: Array<string>;
  title: string;
  duration: number;
}

const Macroentrega: React.FC<MacronEntregaProps> = ({
  deliverables,
  title,
  duration,
}) => {
  let [conclusion, setConclusion] = useState("0");
  const inputEl = useRef<HTMLInputElement>(null);

  const percetage: string[] = [];

  async function fetchData() {
    //aqui vai o metodo para salvar o valor no banco de dados

    const value = inputEl.current?.value;
    if (value) {
      setConclusion(value);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  //apos salvar o dados faz um metodo get para trazer um array com os valores atualizados

  const arr = [10, 60, 80, 70, 90, 45];

  return (
    <main>
      <div>
        <section>
          <div>
            <h5>MACROENTREGA 1</h5>
            <p>{title}</p>
          </div>
          <div>
            <h5>DURAÇÃO</h5>
            <p>
              {duration}
              <span>meses</span>
            </p>
          </div>
          <div>
            <h5>ENTREGAVEIS</h5>

            {deliverables.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
        </section>
        <aside>
          <div>
            <div>
              <span>% de conclusão</span>
              <h4>{conclusion}%</h4>
            </div>
            <div>
              {conclusion && (
                <GraficoPizza
                  total={+conclusion}
                  conclusion={100 - Number(conclusion)}
                />
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>% de conclusão</span>
            <div>
              <input type="number" ref={inputEl} placeholder="00" required /> %
            </div>

            <button type="submit">Atualizar progresso macroentrega</button>
          </form>
        </aside>
      </div>

      <div className={styles.graphic}>
        <h2>Historico de progresso</h2>
        <div className={styles.area}>
          <GraficoArea value={arr} />
        </div>
      </div>
    </main>
  );
};

export default Macroentrega;
