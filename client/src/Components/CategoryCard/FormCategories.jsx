import React from "react";
import MultipleSelect from "./MultipleSelect";
import { useForm } from "react-hook-form";
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Input,
  Row,
  Col,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
const { Option } = Select;
const FormCategories = () => {
  const { register, handleSubmit } = useForm();

  // agregar la mutation pertinente

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      initialValues={{
        "input-number": 3,

        rate: 3.5,
      }}
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <h1>ADD A NEW PRODUCTS</h1>

      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>

      <Form.Item
        {...formItemLayout}
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input your name",
          },
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>

      <Form.Item
        name="categories"
        label="Categories"
        rules={[
          {
            required: true,
            type: "array",
          },
        ]}
      >
        <Select mode="multiple">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Stock">
        <Form.Item name="stock" noStyle>
          <InputNumber min={1} max={10} />
        </Form.Item>
        <span className="ant-form-text">Stock</span>
      </Form.Item>

      <Form.Item label="Price">
        <Form.Item name="price" noStyle>
          <InputNumber min={1} max={10} />
        </Form.Item>
        <span className="ant-form-text">Price</span>
      </Form.Item>

      <Form.Item {...formTailLayout}>
        <Button type="submit">Save Changes</Button>
      </Form.Item>
    </Form>
  );
};

export default FormCategories;
