import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function App() {
  const [theme, setTheme] = useState('light');
  const [weight, setWeight] = useState<number | undefined>();
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    // Modify the <html> attributes
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const calDailyAdequateIntake = () => {
    setResult(weight! * 2.2 * 30 / 2);
  }

  return (
    <Container className="p-3">
      <Card className="p-5 mb-4 rounded-3" body style={{ height: "350px" }}>
        <div className="d-flex flex-column h-100">
          <div className="mb-auto">
            <h1 className="text-center">ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <h1 className="text-center">{result ? `${Math.round(result)} มล.` : ""}</h1>
          </div>
          <Form className="d-flex flex-column row-gap-2">
            <div>
              <Form.Control className="mx-auto" 
                            type="number" 
                            min={0} 
                            placeholder="น้ำหนักของคุณ (กิโลกรัม)" 
                            style={{ width: "fit-content" }}
                            onChange={(e) => setWeight(+e.target.value)}/>
            </div>
            <Button className="d-block mx-auto" variant="primary" type="submit" onClick={() => calDailyAdequateIntake()}>
              คำนวณ
            </Button>
          </Form>
          <Dropdown className="position-absolute bottom-0 end-0 mb-3 me-3">
            <Dropdown.Toggle variant="secondary">
              { theme === 'light' ? <i className="bi bi-sun-fill"/> : null}
              { theme === 'dark' ? <i className="bi bi-moon-stars-fill"/> : null}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setTheme('light')}><i className="bi bi-sun-fill me-2 opacity-50"/>Light</Dropdown.Item>
              <Dropdown.Item onClick={() => setTheme('dark')}><i className="bi bi-moon-stars-fill me-2 opacity-50"/>Dark</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card>
    </Container>
  )
}

export default App
