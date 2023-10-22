import React from 'react'
import CabHead from '../components/CabHead'
import Cab1 from './Cab1'
import CabCard from './CabCard'
import CabMessage from './CabMessage'
import CabPay from './CabPay'
import CabPayment from './CabPayment'
import CabGame from './CabGame'
import CabWin from './CabWin'
import CabPick from './CabPick'
import CabContract from './CabContract'

const Cabinet = () => {
    return (
        <>
            <div className="Cabinet">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <CabHead />
                        </div>
                        <div className="col-9">
                            {/* <Cab1 /> */}
                            {/* <CabCard /> */}
                            {/* <CabMessage /> */}
                            {/* <CabPay /> */}
                            {/* <CabPayment /> */}
                            {/* <CabGame /> */}
                            {/* <CabWin /> */}
                            <CabPick />
                            {/* <CabContract /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cabinet