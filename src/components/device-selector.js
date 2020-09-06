import React from 'react';
import monitor from '../../static/img/icons/monitor.svg'
import smartphone from '../../static/img/icons/smartphone.svg'

const DeviceSelector = () => {
	return (
        <div className="d-flex">
            <div className="device-type">
                <a className="device-selector-itme">
                    <img src={monitor} width={64}/>
                    <h6>Computer</h6>
                </a>
            </div>
            <div className="device-type">
                <a className="device-selector-item">
                    <img src={smartphone} width={64}/>
                    <h6>Smartphone</h6>
                </a>
            </div>
        </div>
    );
};

export default DeviceSelector;
