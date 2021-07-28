import MapLabel from './MapLabel';

const Map = () => {
    return (
        <div className="map">
            <img src="/map.png" alt="World Map" className="map__image"/>
            <MapLabel
                label="Helsinki"
                position={{
                    left: '53%',
                    top: '14%'
                }}
                delay={75} />
            <MapLabel
                label="London"
                position={{
                    left: '44.8%',
                    top: '20.5%'
                }}
                delay={150} />
            <MapLabel
                label="Paris"
                position={{
                    left: '46%',
                    top: '26.5%'
                }}
                delay={225} />
            <MapLabel
                label="Montreal"
                position={{
                    left: '17%',
                    top: '27%'
                }}
                delay={300} />
            
            <MapLabel
                label="New York"
                position={{
                    left: '20%',
                    top: '34%'
                }}
                delay={375} />

            <MapLabel
                flip={true}
                label="L.A."
                position={{
                    left: '-8%',
                    top: '36%'
                }}
                delay={450} />
            
            <MapLabel
                label="Miami"
                position={{
                    left: '19%',
                    top: '43%'
                }}
                delay={525} />

            <MapLabel
                flip={true}
                label="Singapore"
                position={{
                    left: '61.5%',
                    top: '62%'
                }}
                delay={600} />  

            <MapLabel
                label="Sydney"
                position={{
                    right: '-7%',
                    top: '77%'
                }}
                delay={675} />
        </div>
    );
}
 
export default Map;