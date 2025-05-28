// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      background: '#f8fafc'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1e293b' }}>Bienvenido a Hubdeseguros</h1>
      <p style={{ fontSize: '1.2rem', color: '#334155', marginBottom: '2rem' }}>
        Esta es la pantalla de inicio. Usa el menú para navegar al dashboard o a otras secciones.
      </p>
      <a href="/v1/dashboard" style={{
        padding: '0.8rem 2rem',
        background: '#2563eb',
        color: '#fff',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Ir al Dashboard
      </a>
    </div>
  );
};

export default Index;
