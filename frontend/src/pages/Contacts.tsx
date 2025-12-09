function Contacts() {
  return (
    <section style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2>Контакты</h2>
      <p style={{ marginTop: '16px' }}>г. Москва, ул. Пушкина, 10</p>
      <p>+7 (999) 123-45-67</p>
      <p style={{ marginTop: '16px' }}>
        Пишите нам в соцсетях:
        <br />
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>VK</a>
      </p>
    </section>
  );
}

export default Contacts;
