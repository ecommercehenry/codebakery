import React, { useEffect, useState } from "react";

import MUIDataTable, { TableFilterList } from "mui-datatables";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Chip from "@material-ui/core/Chip";

import { useMutation, useQuery } from "@apollo/client";
import DELETE_IMAGE from "../../../../Apollo/mutations/deleteImageById";

const TableSlider = () => {
  //let { data } = useQuery(GET_ALL_IMAGES);
  const [deleteImageById, { loading, error }] = useMutation(DELETE_IMAGE);
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

  const columns = ["Name", "Date"];

  let $ID;
  const options = {
    filter: true,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onRowsDelete: (rowsDeleted) => {
      $ID = rowsDeleted.data[0].index + 1;
      deleteImageById({
        variables: {
          imageId: $ID,
        },
      });
      console.log($ID, "were deleted!");
    },
  };

  const data = [
    ["banner1_jncwyo.png", "20/04/2021"],
    ["banner2_pwcyxk.png", "20/04/2021"],
    ["banner1_jncwyo.png", "20/04/2021"],
    ["banner2_pwcyxk.png", "20/04/2021"],
    ["banner1_jncwyo.png", "20/04/2021"],
    ["banner2_pwcyxk.png", "20/04/2021"],
  ];

  return (
    <>
      <FormControl>
        <InputLabel id="demo-simple-select-label">View Height</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tableBodyHeight}
          style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
          onChange={(e) => setTableBodyHeight(e.target.value)}
        >
          <MenuItem value={"400px"}>All</MenuItem>
          <MenuItem value={""}>Less</MenuItem>
        </Select>
      </FormControl>
      <MUIDataTable
        title={"Slider Images"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default TableSlider;
