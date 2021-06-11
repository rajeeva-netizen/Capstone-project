import { Card,Col, Row  } from 'antd';

function profile(){
    return(
        <div>
        <h1>Profile Name</h1>
            <Card title="Personal Info" style={{ width: 1200, marginLeft:'50px', marginTop:'50px'}}>
                <p>Name</p>
                
            </Card>
            <Card title="Previous jobs" style={{ width: 1200, marginLeft:'50px', marginTop:'50px'}}>
                <p>List of jobs</p>
                
            </Card>
            <Card title="Ongoing jobs" style={{ width: 1200, marginLeft:'50px', marginTop:'50px'}}>
                <p>List of jobs</p>
                
            </Card>
        </div>
    )
}

export default profile