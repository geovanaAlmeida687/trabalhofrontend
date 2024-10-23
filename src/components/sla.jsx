function Header({texto, imagem, preco}){
  return(
    <>
    <h1>{texto}</h1>
    <img src={imagem} width="250"/>
    <h2>{preco}</h2>
    </>   
  );
}
export default Header;