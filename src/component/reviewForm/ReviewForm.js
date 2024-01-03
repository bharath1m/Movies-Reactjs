import { Button } from 'react-bootstrap/Button';

const ReviewForm = ({handleSubmit, revText, labelText, defaultvalue}) => {
  return (
    <Form>
        <Form.Group className="mb-3" contrillId="exampleForm.ControlTextreal">
            <Form.Label></Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultvalue={defaultvalue}/>
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>submit</Button>
    </Form>
  )
}

export default ReviewForm
