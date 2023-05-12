import style from "./style.module.scss";
import Image from "next/image";
export default function Headline() {
  return (
    <section className={style.headline}>
      <div className={style.content}>
        <div>
          <h1>Libera tu mente y encuentra la paz</h1>
          <p>espacio de Meditación</p>
        </div>
      </div>
      <div className={style.image}>
        <Image src="/zen.jpg" alt="" fill style={{ objectFit: "cover" }} />
      </div>
    </section>
  );
}
