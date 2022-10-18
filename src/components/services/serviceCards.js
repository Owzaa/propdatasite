import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupedServices() {
    return (
        <CardGroup className='pt-5 mt-5'>
            <Card>
                <Card.Img variant="top" src="../Assets/CTA1.png" />
                <Card.Body>
                    <Card.Title>
                        <h1 className='text-center text-bold'>
                            <b>Mortgage Calculator</b>
                        </h1>
                    </Card.Title>
                    <Card.Text className='text-center text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src="../Assets/CTA2.png" />
                <Card.Body>
                    <Card.Title>
                        <h1 className='text-center text-bold'>
                            <b>Contact Us</b>
                        </h1>
                    </Card.Title>                    
                    <Card.Text className='text-muted text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card >
                <Card.Img variant="top" src="../Assets/CTA3.png" />
                <Card.Body>
                    <Card.Title>
                        <h1 className='text-center text-bold'>
                            <b>Follow us on
                                Facebook </b>
                        </h1>
                    </Card.Title>                    
                    <Card.Text className='text-center text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardGroup>
    );
}

export default GroupedServices;