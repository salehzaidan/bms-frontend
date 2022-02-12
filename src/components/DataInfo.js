import DataItem from './DataItem';

function DataInfo({ label, min, average, max, unit, insertSpace }) {
  return (
    <div>
      <h2 className="text-center font-semibold text-cyan-600">{label}</h2>
      <div className="mt-1 grid grid-cols-3 gap-4">
        <DataItem
          label="Min"
          value={min}
          unit={unit}
          insertSpace={insertSpace}
        />
        <DataItem
          label="Average"
          value={average}
          unit={unit}
          insertSpace={insertSpace}
        />
        <DataItem
          label="Max"
          value={max}
          unit={unit}
          insertSpace={insertSpace}
        />
      </div>
    </div>
  );
}

export default DataInfo;
