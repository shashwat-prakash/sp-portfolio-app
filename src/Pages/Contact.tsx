import { useEffect, useState } from "react";
import SPForm from "../Components/SPForm";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";

interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  const [isContactUsFormSubmited, setIsContactUsFormSubmited] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contact: "",
  });

  useEffect(() => {
    document.title = "Shashwat | Contact Us";
  }, []);

  useEffect(() => {
    const { name, email, contact, message } = formData;
    if (name && email && contact && message) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formData]);

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

    // const { name, email, contact, message } = data;

    // setFormData({
    //   name: name,
    //   email: email,
    //   contact: contact,
    //   message: message,
    // });

    // const reqBody = {
    //   Name: data.name,
    //   ContactNum: data.contact,
    //   Email: data.email,
    //   Message: data.message,
    // };
    // const response = await fetch(
    //   "http://localhost:5108/controller/submit-form",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(reqBody),
    //   }
    // );
    // if (response.ok) {
    //   setFormData({
    //     name: "",
    //     email: "",
    //     message: "",
    //     contact: "",
    //   });
    //   console.log("Blog post created");
    // }

    setFormData({
      name: "",
      email: "",
      message: "",
      contact: "",
    });

    // Simulate form submission success
    toast.success(
      "Submission complete! We appreciate you reaching out. Expect a response from us shortly.",
      {
        position: "top-right",
        autoClose: 3000,
      }
    );

    setIsContactUsFormSubmited(true);
  };

  const handleChange = (data: { [key: string]: any }) => {
    const { name, email, contact, message } = data;

    setFormData({
      name: name,
      email: email,
      contact: contact,
      message: message,
    });
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
        <SPForm
          fields={fields}
          onSubmit={handleSubmit}
          isButtonDisabled={isButtonDisabled}
          onChange={handleChange}
        />
      </Container>
    </>
  );
};

export default Contact;
