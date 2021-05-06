import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Libreria
import MUIDataTable from "mui-datatables";

// Componente
import Upload from "../upload/Upload";

// GraphQL
import { useQuery, useMutation } from "@apollo/client";
import SAVE_IMAGE from "../../../../Apollo/mutations/saveImageSlider";
import DELETE_IMAGE from "../../../../Apollo/mutations/deleteImageById";
import GET_ALL_IMAGES from "../../../../Apollo/queries/getImageSlider";

const TableSlider = () => {
  const [deleteImageById] = useMutation(DELETE_IMAGE);
  const [responsive] = useState("vertical");
  const [tableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight] = useState("");
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
  }, [serverRefresh, refetch]);

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
    <StyledTableSlider>
      <Upload
        saveImageSlider={saveImageSlider}
        loading={loading}
        serverRefresh={serverRefresh}
        setServerRefresh={setServerRefresh}
      />
      <MUIDataTable
        className="muiDataTable"
        title={"Slider Images"}
        data={image}
        columns={columns}
        options={options}
      />
    </StyledTableSlider>
  );
};

export default TableSlider;

const StyledTableSlider = styled.div`
  display: flex;

  .muiDataTable {
    width: 45%;
  }
`;
