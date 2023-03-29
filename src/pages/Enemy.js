const Enemy = ({ enemy }) => {
  return (
    <div>
      <div className="blog-preview" key={enemy.id}>
        <h2>{enemy.name}</h2>
        <p>{enemy.LifePoints}</p>
      </div>
    </div>
  );
};

export default Enemy;
