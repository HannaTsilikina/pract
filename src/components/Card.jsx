function Card(props) {
  return (
    <div className="card">
      <h1 className="name">{props.name}</h1>
      <span className="universe">Вселенная:{props.universe}</span>
      <span>Альтер эго:{props.alterego}</span>
      <span>Вид деятельности:{props.occupation}</span>
      <span>Суперсилы:{props.superpowers}</span>
      <img className="card-img" src={props.url} alt="hero"></img>
      <p>Подробное описание: {props.info} </p>
    </div>
  );
}
export default Card;
