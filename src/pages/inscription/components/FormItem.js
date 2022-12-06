import { Form } from "react-bootstrap";
import { useState } from "react";
import { pays } from "../pays";

export const FormItem = ({ item, onChange, answer }) => {
  const [currentValue, setCurrentValue] = useState(answer || null);

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  };

  switch (item.type) {
    case "text":
      return (
        <>
          <Form.Label htmlFor="pseudo">{item.label}</Form.Label>
          <Form.Control
            type="text"
            placeholder={item.placeholder}
            id="pseudo"
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );
      break;
    case "email":
      return (
        <>
          <Form.Label htmlFor="mail">{item.label}</Form.Label>
          <Form.Control
            type="email"
            placeholder={item.placeholder}
            id="mail"
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );
      break;
    case "password":
      return (
        <>
          <Form.Label htmlFor="inputPassword5">{item.label}</Form.Label>
          <Form.Control
            type="password"
            placeholder={item.placeholder}
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => onChange(e.target.value, item.value)}
          />
        </>
      );
      break;

    case "information":
      return <p>{item.label}</p>;
    case "select":
      return (
        <div className="mt-2">
          <Form.Select
            placeholder={item.placeholder}
            aria-label={item.label}
            onChange={(e) => onChange(e.target.value, item.value)}
          >
            <option>{item.placeholder}</option>
            {pays.map((opt) => {
              return (
                <>
                  <option key={opt.id} name={opt}>
                    {opt.name}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </div>
      );

      return <></>;
  }
};
