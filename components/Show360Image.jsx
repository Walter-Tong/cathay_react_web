import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

function Show360Image({path}) {

    return (
        <div>
            <Scene>
                <Entity>
                    <Entity primitive="a-sky" src={path} />
                </Entity>
            </Scene>
        </div>
    )
}

export default Show360Image