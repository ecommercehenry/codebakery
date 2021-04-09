import React from "react";
import "./FormCategories.css";
import { useForm } from "react-hook-form";
import { Form, Select, InputNumber, Button, Upload, Input } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
const { Option } = Select;

//////////////////////////////////////////////////////////
// Datos hardcodeados para el select
const categories = [];

for (let i = 10; i < 36; i++) {
  categories.push(
    <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
  );
}
//////////////////////////////////////////////////////////

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

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      name="validate_form"
      {...formItemLayout}
      initialValues={{
        "input-number": 3,
        rate: 3.5,
      }}
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="create-category-conteiner"
    >
      <div className="onboard-card">
        <Upload
          className="upload-image"
          name="logo"
          action="/upload.do"
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
        <div className="create-inputs-conteiner">
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
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              /*onChange={handleChange} */
            >
              {categories}
            </Select>
          </Form.Item>
        </div>

        <div className="inputs-numeric-conteiner">
          <Form.Item label="Stock">
            <Form.Item name="stock" noStyle>
              <InputNumber placeholder="Stock" min={1} />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Price">
            <Form.Item name="price" noStyle>
              <InputNumber placeholder="Price" min={1} />
            </Form.Item>
          </Form.Item>
        </div>

        <div className="button-create-conteiner">
          <Form.Item {...tailLayout}>
            <Button type="submit">Save Changes</Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default FormCategories;

/**
 * <Form
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
 */
