import { useEffect } from "react";
import SPForm from "../Components/SPForm";
import { Col, Container, Row } from "react-bootstrap";

interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  useEffect(() => {
    document.title = "Shashwat | Contact Us";
  }, []);

  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "contact", label: "Contact Number", type: "text" },
    // { name: "age", label: "Age", type: "number" },
    { name: "message", label: "Message", type: "textarea", textareaRows: 5 },
    // {
    //   name: "gender",
    //   label: "Gender",
    //   type: "select",
    //   options: [
    //     { label: "Male", value: "male" },
    //     { label: "Female", value: "female" },
    //     { label: "Other", value: "other" },
    //   ],
    // },

    // { name: 'subscribe', label: 'Subscribe', type: 'checkbox' },
    // {
    //   name: 'contact',
    //   label: 'Contact',
    //   type: 'radio',
    //   options: [
    //     { label: 'Email', value: 'email' },
    //     { label: 'Phone', value: 'phone' },
    //   ],
    // },
  ];

  const handleSubmit = (data: { [key: string]: any }) => {
    console.log(data);
  };

  return (
    <>
      <Container className="contact-us-page">
        <Row className="my-5">
          <Col md={12}>
            <h1 className="text-center">Contact Us</h1>
            <p className="lead text-center">
              We would love to hear from you! Please fill out the form below to
              get in touch.
            </p>
          </Col>
        </Row>
        <SPForm fields={fields} onSubmit={handleSubmit} />
      </Container>
    </>
  );
};

export default Contact;
