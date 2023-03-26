const Enemy = ({enemy, title}) => {
  return (
    <div>
        {enemy.map((stats) => (
        <div className="blog-preview" key={stats.id}>
          <h2>{stats.name}</h2>
          <p>Written by: {stats.LifePoints}</p>
        </div>
      ))}
    </div>
  );
};

export default Enemy;
