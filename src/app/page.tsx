import Header from "@/components/Header";
import style from "./page.module.scss";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header/>
      <main>
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
        <section className={style.service}>
          <div className={style.content}>
            <div>
              <h2>Meditación grupal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus corrupti odio labore quidem dignissimos quaerat iste
                quas facilis. Dolores accusamus ex sunt nemo deleniti rem
                debitis tenetur, harum laboriosam. Enim?
              </p>
              <button className={style.action}>Ver horarios</button>
            </div>
          </div>
          <div className={style.imgwrapper}>
            <div className={style.img}>
              <Image
                src="/meditacion.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className={style.service}>
          <div className={style.content}>
            <div>
              <h2>Retiros espirituales</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus corrupti odio labore quidem dignissimos quaerat iste
                quas facilis. Dolores accusamus ex sunt nemo deleniti rem
                debitis tenetur, harum laboriosam. Enim?
              </p>
              <button className={style.action}>Reservar espacio</button>
            </div>
          </div>
          <div className={style.imgwrapper}>
            <div className={style.img}>
              <Image
                src="/retiros.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className={style.service}>
          <div className={style.content}>
            <div>
              <h2>Capacitaciones</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus corrupti odio labore quidem dignissimos quaerat iste
                quas facilis. Dolores accusamus ex sunt nemo deleniti rem
                debitis tenetur, harum laboriosam. Enim?
              </p>
              <button className={style.action}>Inscripciones</button>
            </div>
          </div>
          <div className={style.imgwrapper}>
            <div className={style.img}>
              <Image
                src="/class.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
