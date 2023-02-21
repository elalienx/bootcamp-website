// Project files
import iCandidate from "interfaces/iCandidate";

interface iProps {
  item: iCandidate;
}

export default function Blockquote({ item }: iProps) {
  const { pronoun, quote_text, quote_author } = item;

  return (
    <section className="blockquote">
      <div className="container">
        <h2>What makes {pronoun} stand out?</h2>
        <p>"{quote_text}"</p>
        <span className="quote-author">- {quote_author}</span>
      </div>
    </section>
  );
}
