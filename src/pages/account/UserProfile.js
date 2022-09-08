import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";

export default function UserProfile() {
    return (
        <Row>
            <Col xl={7}>
                <div className='box-2 p-lg-4'>
                    <div className='d-flex align-items-center d-lg-none mb-3 mb-sm-4'>
                        <Link to="/account" className="btn-4 fs-11 px-2 px-sm-3">
                            <VscArrowLeft className='fs-12'/>
                        </Link>
                        <h1 className='inner mb-0 ms-2 ms-sm-4'>Личные данные</h1>
                    </div>
                    
                    
                </div>
            </Col>
            <Col className='d-none d-xl-block' xl={5}>
                <aside className='mb-4'></aside>
                <aside className='mb-4'></aside>
            </Col>
        </Row>
    )
}