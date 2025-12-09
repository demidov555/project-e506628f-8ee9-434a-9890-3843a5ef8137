interface CardProps {
  title: string;
  items: { name: string; price: string }[];
}

function Card({ title, items }: CardProps) {
  return (
    <div className="card">
      <h3 style={{ marginBottom: '12px' }}>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.name} style={{ marginBottom: '6px' }}>
            {item.name} — {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
