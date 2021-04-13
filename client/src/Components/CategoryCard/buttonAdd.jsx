import React from "react";

const ButtonAdd = () => {
  return (
    <div>
      <div className="button-create-conteiner">
        <Form.Item {...tailLayout}>
          <Button type="submit">Save Changes</Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default ButtonAdd;
