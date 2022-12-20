import Accordion from 'react-bootstrap/Accordion';

function Picture(props) {
  return (<>
            <div className='left_wrap'>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>전체보기</Accordion.Header>
                  <Accordion.Body>
                    <a href='/totalMenu'>전체보기</a>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>보울도시락</Accordion.Header>
                  <Accordion.Body>
                    <a href='/mayoMenu'>마요</a>
                  </Accordion.Body>
                  <Accordion.Body>
                    <a href='/careMenu'>카레</a>
                  </Accordion.Body>
                  <Accordion.Body>
                    <a href='/pastaMenu'>파스타</a>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>프리미엄·고메이</Accordion.Header>
                  <Accordion.Body>
                    <a href='/premiumMenu'>프리미엄</a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div> 
  </>);
}

export default Picture;