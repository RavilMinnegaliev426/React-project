import React from "react";
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { Input } from "@skbkontur/react-ui";
import { VehicleFilter, VehicleType } from "../data/vehicles/contracts";

interface Filter1 {
  filter: VehicleFilter;
  onChange: any;
}
export class Filter extends React.Component<Filter1> {
  render(): React.ReactNode {
    return (
      <>
        <VehicleTypeSelect
          value={this.props.filter.type}
          onChange={this.typeChange}
        ></VehicleTypeSelect>
        <Input
          value={this.props.filter.title}
          onValueChange={this.titleChange}
        ></Input>
      </>
    );
  }

  typeChange = (type: VehicleType | null) => {
    this.props.onChange({ ...this.props.filter, type });
  };
  titleChange = (title: string) => {
    this.props.onChange({ ...this.props.filter, title });
  };
}
