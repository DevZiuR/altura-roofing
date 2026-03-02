import ScrollVelocity from './ScrollVelocity';

const EmergencyCall = () => {
    return (
        <ScrollVelocity
            texts={['NEED ROOFING HELP?', 'CALL (469) 785-3148']}
            velocity={80}
            className="text-white font-montserrat"
        />
    );
};

export default EmergencyCall;
