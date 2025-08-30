function FormatoNumero(numero) {
  const numeroFormateado = numero.toLocaleString('en-US');

  return (
    <>
      {numeroFormateado}
    </>
  );
}

export default FormatoNumero;