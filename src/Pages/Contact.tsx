import { useEffect, useState } from "react";
import SPForm from "../Components/SPForm";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  const [isContactUsFormSubmited, setIsContactUsFormSubmited] = useState(false);

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
    setIsContactUsFormSubmited(false);
    console.log(data);

    // Simulate form submission success
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    setIsContactUsFormSubmited(true);
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
