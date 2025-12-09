import { FaInstagram, FaVk } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <p>г. Москва, ул. Пушкина, 10</p>
      <p>+7 (999) 123-45-67</p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#ffffff" />
        </a>
        <a href="https://vk.com" aria-label="VK" target="_blank" rel="noopener noreferrer">
          <FaVk size={24} color="#ffffff" />
        </a>
      </div>
      <p>© 2025 Уют</p>
    </footer>
  );
}

export default Footer;
