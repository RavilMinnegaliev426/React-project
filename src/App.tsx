import React, { useState, useEffect } from "react";
import { Vehicle, VehicleFilter } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";
import { VehicleTypeSelect } from "./components/VehicleTypeSelect";

const initialFilter: VehicleFilter = {
  title: "",
  type: null,
};

export default function App() {
  const [filter, setFilter] = useState(initialFilter);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const data = VehicleApi.search(filter);
    setVehicles(data);
  }, [filter]);

  return (
    <>
      <Filter filter={filter} onChange={setFilter} />
      <Table vehicles={vehicles} />
    </>
  );
}
