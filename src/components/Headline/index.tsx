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
      <div className={style.imgwrap}>
        <Image src="/zen.jpg" alt="" fill style={{ objectFit: "cover"}} className={style.img} />
      </div>
    </section>
  );
}
