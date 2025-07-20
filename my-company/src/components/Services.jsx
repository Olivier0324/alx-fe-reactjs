function Services() {
  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#2c3e50' }}>Our Services</h1>
      <ul style={{ 
        listStyle: 'none',
        padding: 0,
        fontSize: '1.1rem'
      }}>
        <li style={{ padding: '8px', borderBottom: '1px solid #eee' }}>Technology Consulting</li>
        <li style={{ padding: '8px', borderBottom: '1px solid #eee' }}>Market Analysis</li>
        <li style={{ padding: '8px', borderBottom: '1px solid #eee' }}>Product Development</li>
        <li style={{ padding: '8px', borderBottom: '1px solid #eee' }}>Digital Marketing</li>
        <li style={{ padding: '8px' }}>Customer Support Solutions</li>
      </ul>
    </div>
  );
}

export default Services;