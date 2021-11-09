import React, { FormEvent, useEffect, useRef, useState } from "react";
import "./styles.module.scss";
import GraficoPizza from "../graficoPizza";
import GraficoArea from "../graficoArea";
import styles from "./styles.module.scss";
import { v4 as uuid } from "uuid";

interface MacronEntregaProps {
  deliverables: Array<string>;
  title: string;
  duration: number;
}

interface DataProps {
  id: string;
  value: string | undefined;
  date: Date;
}

const Macroentrega: React.FC<MacronEntregaProps> = ({
  deliverables,
  title,
  duration,
}) => {
  let [conclusion, setConclusion] = useState(localStorage.getItem("mykey"));
  const inputEl = useRef<HTMLInputElement>(null);

  const percetageDate: DataProps[] = [];

  async function fetchData() {
    const storage = localStorage.getItem("mykey");
    setConclusion(storage);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const value = inputEl.current?.value;

    if (value) {
      localStorage.setItem("mykey", value.toString());

      fetchData();
    }

    const obj = {
      id: uuid(),
      value: value,
      date: new Date(),
    };

    const dataProgress = localStorage.getItem("progress");
    percetageDate.push(obj);

    localStorage.setItem("progress", JSON.stringify(percetageDate));
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          <GraficoArea progress={} />
        </div>
      </div>
    </main>
  );
};

export default Macroentrega;
