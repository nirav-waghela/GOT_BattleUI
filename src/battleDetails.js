import React from 'react'
import { Card, Col, Row } from 'antd';

const BattleDetails = (props) => {
    const data = props.details[0]
    console.log(data)
    return(
        <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={12}>
                <Card title={data.name} bordered={true}>
                    <div>
                        <div className='container'>
                            <div>Attacker King :</div>
                            <div>{data.attacker_king}</div>
                        </div>
                        <div className='container'>
                            <div>Attacker Commander : </div>
                            <div>{data.attacker_commander}</div>
                        </div>
                        <div className='container'>
                            <div>The Attackers were :</div>
                            {data.attacker_1.length ? <div>{data.attacker_1}</div> : ""}
                            {data.attacker_2.length ? <div>{data.attacker_2}</div> : ""}
                            {data.attacker_3.length ? <div>{data.attacker_3}</div> : ""}
                            {data.attacker_4.length ? <div>{data.attacker_4}</div> : ""}
                        </div>
                        <div className='container'>
                            <div>The Attackers size :</div>
                            <div>{data.attacker_size}</div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col span={12}>
                <Card title={data.name} bordered={false}>
                    <div>
                        <div className='container'>
                            <div>Defender King : </div>
                            <div>{data.defender_king} </div>
                        </div>
                        {data.defender_commander ? <div className='container'>
                            <div>Defender Commander : </div>
                            <div>{data.defender_commander}</div>
                        </div > : " No Defender's commander"}
                        <div className='container'>
                            <div>The Defenders were :</div>
                            {data.defender_1.length ? <div>{data.defender_1}</div> : ""}
                            {data.defender_2.length ? <div>{data.defender_2}</div> : ""}
                            {data.defender_3.length ? <div>{data.defender_3}</div> : ""}
                            {data.defender_4.length ? <div>{data.defender_4}</div> : ""}
                        </div>
                        <div className='container'>
                            <div>The Defenders size :</div>
                            <div>{data.defender_size}</div>
                        </div>
                    </div>
                </Card>
            </Col>
            </Row>
        </div>
        ) 
}

export default BattleDetails