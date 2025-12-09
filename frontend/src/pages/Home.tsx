function Home() {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=60)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(2px)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  const overlayStyle: React.CSSProperties = {
    position: 'relative',
    height: 'calc(100vh - 160px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '48px',
    textAlign: 'center',
    textShadow: '0 2px 6px rgba(0,0,0,0.5)',
  };

  return (
    <section style={{ position: 'relative' }}>
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}>
        <h1 style={headingStyle}>Добро пожаловать в Уют</h1>
      </div>
    </section>
  );
}

export default Home;
