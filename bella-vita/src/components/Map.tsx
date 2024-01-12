const Map = () => {
    return (
        <div className={'Map mt-5'}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="secondaryText">Manzil</div>

                        <div className="mainText">Узбекистан,
                            Ташкент,
                            Учтепинский район
                            Улица курилиш
                            44а</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="map">

                            <iframe className='w-100' title='Location'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.8789586676744!2d69.1510357!3d41.2679713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae899118f884b3%3A0xe3c0211a17214446!2sBella%20Vita%20Wedding!5e0!3m2!1sen!2s!4v1705065019750!5m2!1sen!2s"
                                    loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;