import AvatarItem from './AvatarItem';

const Avatars = (props) => {
    return (
        <ul className={`avatars${props.small ? ' avatars--small' : ''}`}>
			<AvatarItem
                name="Kweebec"
                image="/avatars/kweebec.png"
                specs={{ram: '1GB', vcpu: 1, playerCap: 10}}
                price="$1.99"
                animation={props.animation}
                delay={100}
                handleAvatarSwitch={props.handleAvatarSwitch ? props.handleAvatarSwitch : null} />
            <AvatarItem
                name="Tessa"
                image="/avatars/tessa.png"
                specs={{ram: '2GB', vcpu: 1, playerCap: 20}}
                price="$3.99"
                animation={props.animation}
                delay={200}
                handleAvatarSwitch={props.handleAvatarSwitch ? props.handleAvatarSwitch : null} />
            <AvatarItem
                name="Kyros"
                image="/avatars/kyros.png"
                specs={{ram: '4GB', vcpu: 2, playerCap: 30}}
                price="$7.99"
                animation={props.animation}
                delay={300}
                handleAvatarSwitch={props.handleAvatarSwitch ? props.handleAvatarSwitch : null} />
            <AvatarItem
                name="Gaia"
                image="/avatars/gaia.png"
                specs={{ram: '6GB', vcpu: 4, playerCap: 50 }}
                price="$11.99"
                animation={props.animation}
                delay={400}
                handleAvatarSwitch={props.handleAvatarSwitch ? props.handleAvatarSwitch : null} />
            <AvatarItem
                name="Varyn"
                image="/avatars/varyn.png"
                specs={{ram: '8GB', vcpu: 6, playerCap: 70}}
                price="$15.99"
                animation={props.animation}
                delay={500}
                handleAvatarSwitch={props.handleAvatarSwitch ? props.handleAvatarSwitch : null} />
        </ul>
    );
}
 
export default Avatars;