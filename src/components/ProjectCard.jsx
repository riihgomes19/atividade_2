
export default function ProjectCard({ projeto }) {
  const handleClick = () => {
    alert(`Você clicou em projetos de ${projeto.nome}`);
  };

  return (
    <div className="card">
      <img src={projeto.imagem} alt={projeto.nome} />
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
      <button onClick={handleClick}>Ver mais</button>
    </div>
  );
}
