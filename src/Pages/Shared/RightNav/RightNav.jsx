import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <h2>Login with</h2>
            <div>
                <Button className='my-2' variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>{' '}
                <Button className='my-2' variant="outline-primary"><FaFacebook></FaFacebook> Login with Google</Button>{' '}
            </div>
            <div>
                <h2>Find us on</h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;