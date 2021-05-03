import React, { useEffect, useState } from "react";
import MUIDataTable, { TableFilterList } from "mui-datatables";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";

import DELETE_IMAGE from "../../../../Apollo/mutations/deleteImageById";
import GET_ALL_IMAGES from "../../../../Apollo/queries/getImageSlider";

const TableSlider = () => {  
  
  const [deleteImageById, { loading, error }] = useMutation(DELETE_IMAGE);
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");   
  const[ getImage, { data }] = useLazyQuery(GET_ALL_IMAGES);
 
  useEffect(()=>{
    getImage()   
  },[data])
  console.log ("esto es data")
  console.log(data)

// let dataImage;
  // console.log("DRu: ", data?.getImageSlider);
  // data ? dataImage = data?.getImageSlider : console.log("todavia no hay data")
  // let dataImage =  data?.getImageSlider;
  // console.log("esto es dataImage. ")
  // console.log(dataImage)
  
   let dataImage = data?.getImageslider?.map(  (i) => {
    const name =  i.name.split("/").pop()
    return  {
      type: i.__typename,
      id: i.id,
      name,
      date: i.date
      
      }
    })

    console.log("esto es dataImage. ")
    console.log(dataImage)

  // [{id: 1, name: "PABLO", date: "20/04/2021"},{id: 2, name: "LAU", date: "20/04/2021"}, ];
  // data?.getImageSlider.map(async (img) => {
  //   console.log("img  bbb" +  await img)
  //   let obj = await{
  //     name: img.name,
  //     date: img.date,
  //   }
  //   console.log("obj" + await obj)
  //   return obj
  // });
  //const name = uploadedResponse.url.split("/").pop();

const columns = [
    { name: "__typename",
      label: "Type",
      options: {
       filter: true,
       sort: true,
      }
     },
    {
    name: "id",
    label: "ID",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "name",
    label: "Name",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "date",
    label: "Date",
    options: {
     filter: true,
     sort: false,
    }
   }];


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
        data={data?.getImageSlider}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default TableSlider;
