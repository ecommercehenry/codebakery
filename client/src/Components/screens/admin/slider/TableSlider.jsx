import React, { useEffect, useState } from "react";

// Libreria
import MUIDataTable from "mui-datatables";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// Componente
import Upload from "../upload/Upload";

// GraphQL
import { useQuery, useMutation } from "@apollo/client";
import SAVE_IMAGE from "../../../../Apollo/mutations/saveImageSlider";
import DELETE_IMAGE from "../../../../Apollo/mutations/deleteImageById";
import GET_ALL_IMAGES from "../../../../Apollo/queries/getImageSlider";

const TableSlider = () => {
  const [deleteImageById, { error }] = useMutation(DELETE_IMAGE);
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  // Almaceno la URL
  const [image, setImage] = useState();
  const [serverRefresh, setServerRefresh] = useState(false);

  const { data, refetch } = useQuery(GET_ALL_IMAGES);
  const [saveImageSlider, { loading }] = useMutation(SAVE_IMAGE);

  useEffect(() => {
    setImage(
      data?.getImageSlider.map((i) => {
        const name = i.name.split("/").pop();
        return {
          type: i.__typename,
          id: i.id,
          name,
          date: i.date,
        };
      })
    );
  }, [data]);

  useEffect(() => {
    if (serverRefresh) {
      refetch();
      setServerRefresh(false);
    }
  }, [serverRefresh]);

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "date",
      label: "Date",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  let $ID;
  const options = {
    filter: true,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onRowsDelete: (rowsDeleted, dataRows) => {
      let je = dataRows.map((d) => d[0]);

      $ID = image.filter((f) => {
        return !je.includes(f.id);
      })[0].id;

      deleteImageById({
        variables: {
          imageId: $ID,
        },
      });
      setServerRefresh(true);
      console.log($ID, "were deleted!");
    },
  };

  return (
    <>
      <Upload
        saveImageSlider={saveImageSlider}
        loading={loading}
        serverRefresh={serverRefresh}
        setServerRefresh={setServerRefresh}
      />
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
        data={image}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default TableSlider;
