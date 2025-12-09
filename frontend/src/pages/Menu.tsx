import Card from '../components/Card';

function Menu() {
  const coffee = [
    { name: 'Эспрессо', price: '150 ₽' },
    { name: 'Капучино', price: '220 ₽' },
    { name: 'Латте', price: '230 ₽' },
  ];

  const desserts = [
    { name: 'Чизкейк', price: '300 ₽' },
    { name: 'Круассан', price: '180 ₽' },
    { name: 'Тирамису', price: '320 ₽' },
  ];

  const drinks = [
    { name: 'Чай зелёный', price: '140 ₽' },
    { name: 'Смузи ягодный', price: '250 ₽' },
    { name: 'Лимонад', price: '200 ₽' },
  ];

  return (
    <section>
      <h2 style={{ textAlign: 'center', paddingTop: '40px' }}>Наше меню</h2>
      <div className="card-grid">
        <Card title="Кофе" items={coffee} />
        <Card title="Десерты" items={desserts} />
        <Card title="Напитки" items={drinks} />
      </div>
    </section>
  );
}

export default Menu;
