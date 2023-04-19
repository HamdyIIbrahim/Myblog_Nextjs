import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Hamdy.jpg"
          alt="profile Image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Hamdy</h1>
      <p>
        I blog about web development - frontend frameworks like React.js or
        Remix.js or Next.js.
      </p>
    </section>
  );
}
export default Hero;
