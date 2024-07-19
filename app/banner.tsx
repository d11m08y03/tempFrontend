import styles from './bubble.module.css'; // Import the CSS module

interface BubbleTextProps {
  text: string;
}

const BubbleText: React.FC<BubbleTextProps> = ({ text }) => {
  return (
    <span className="text-3xl sm:text-5xl font-extrabold">
      {text.split("").map((child: string, idx: number) => (
        <span
          className={styles.hoverText}
          key={idx}
          style={{ '--animation-order': idx } as React.CSSProperties}
        >
          {child}
        </span>
      ))}
    </span>
  );
};

export default function Banner() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="mx-auto mb-8 w-40 h-40"
          />
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Donate
            <strong className="font-extrabold text-red-700 sm:block">
              <BubbleText text=" Blood " />
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/auth/register"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/faq"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
