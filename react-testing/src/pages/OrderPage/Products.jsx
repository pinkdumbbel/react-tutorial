function Products({ name, imagePath }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:8080/${imagePath}`}
        alt={`${name} product`}
      />
      <form>
        <label style={{ textAlign: 'right' }}>{name}</label>
        <input
          style={{ marginLeft: 7 }}
          type="number"
          min="0"
          defaultValue={0}
        />
      </form>
    </div>
  );
}

export default Products;
