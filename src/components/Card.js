function Card({ title, children }) {
  return (
    <div className="rounded shadow">
      <h2 className="bg-teal-100 px-4 py-2 font-medium">{title}</h2>
      <div className="flex flex-col items-center gap-4 p-8">{children}</div>
    </div>
  );
}

export default Card;
