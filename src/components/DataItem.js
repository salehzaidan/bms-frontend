function DataItem({
  label,
  value,
  unit = null,
  insertSpace = false,
  className = '',
}) {
  return (
    <div className={`text-center ${className}`}>
      <h3 className="text-xs font-bold uppercase text-cyan-800">{label}</h3>
      <p className="text-sm">{value + (insertSpace ? ' ' : '') + unit}</p>
    </div>
  );
}

export default DataItem;
