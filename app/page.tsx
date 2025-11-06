const greetings = [
  "Hi!",
  "Hello!",
  "Hey there!",
  "Hola!",
  "Bonjour!",
  "Ciao!",
  "Namaste!",
  "Konnichiwa!",
  "G'day!",
  "Howdy!"
];

export default function HomePage() {
  const index = Math.floor(Math.random() * greetings.length);
  const chosenGreeting = greetings[index];

  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero__title">{chosenGreeting}</h1>
        <p className="hero__subtitle">
          Welcome to the autonomous greeting experience. Refresh the page to be surprised with a new hello.
        </p>
        <a className="hero__cta" href="#about">
          Learn more
        </a>
      </section>
      <section id="about" className="about">
        <h2 className="about__title">What&apos;s going on?</h2>
        <p className="about__text">
          This lightweight Next.js app was generated without hesitation. It highlights a set of friendly salutations,
          picks one at random, and shares it with you instantly on load.
        </p>
        <p className="about__text">
          The interface embraces clarity, accessibility, and responsiveness. Explore the source code to see how the
          page is structured and styled.
        </p>
      </section>
      <footer className="footer">
        <span>Built by Codex in fully autonomous mode.</span>
      </footer>
    </main>
  );
}
