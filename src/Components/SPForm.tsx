import * as React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

type FieldType = "text" | "number" | "select" | "checkbox" | "radio";

interface Option {
  label: string;
  value: string;
}

interface Field {
  name: string;
  label: string;
  type: string;
  textareaRows?: number;
  options?: Option[]; // For select and radio types
}

interface ISPFormProps {
  fields: Field[];
  onSubmit: (data: { [key: string]: any }) => void;
  isButtonDisabled: any;
  onChange: (data: { [key: string]: any }) => void;
}

const SPForm: React.FunctionComponent<ISPFormProps> = ({
  fields,
  onSubmit,
  isButtonDisabled,
  onChange,
}) => {
  const [formData, setFormData] = React.useState<{ [key: string]: any }>({});

  React.useEffect(() => {
    onChange(formData);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    //onChange(formData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Form.Group
          as={Row}
          controlId={field.name}
          key={field.name}
          className="mt-2 justify-content-center"
        >
          <Form.Label column sm="2">
            {field.label}
          </Form.Label>
          <Col sm="6">
            {field.type === "text" && (
              <Form.Control
                type="text"
                name={field.name}
                value={formData[field.name] || ""}
                placeholder={"Enter your " + field.name}
                onChange={(e: any) => {
                  handleChange(e);
                }}
              />
            )}
            {field.type === "number" && (
              <Form.Control
                type="number"
                name={field.name}
                value={formData[field.name] || ""}
                placeholder={"Enter your " + field.name}
                onChange={(e: any) => {
                  handleChange(e);
                }}
              />
            )}
            {field.type === "textarea" && (
              <Form.Control
                //type="textarea"
                name={field.name}
                value={formData[field.name] || ""}
                placeholder={"Enter your " + field.name}
                onChange={(e: any) => {
                  handleChange(e);
                }}
                as="textarea"
                rows={field.textareaRows}
              />
            )}
            {field.type === "select" && (
              <Form.Control
                as="select"
                name={field.name}
                value={formData[field.name] || ""}
                placeholder={"Enter your " + field.name}
                onChange={(e: any) => {
                  handleChange(e);
                }}
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>
            )}
            {field.type === "checkbox" && (
              <Form.Check
                type="checkbox"
                name={field.name}
                checked={formData[field.name] || false}
                placeholder={"Enter your " + field.name}
                onChange={(e: any) => {
                  handleChange(e);
                }}
                label={field.label}
              />
            )}
            {/* {field.type === "radio" &&
            field.options?.map((option) => (
              <Form.Check
                type="radio"
                name={field.name}
                value={option.value}
                checked={formData[field.name] === option.value}
                onChange={handleChange}
                label={option.label}
                key={option.value}
              />
            ))} */}
          </Col>
        </Form.Group>
      ))}
      <div className="d-flex justify-content-center">
        <Button className="mt-3" type="submit" disabled={isButtonDisabled}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default SPForm;
