import AnimatedCursor from 'react-animated-cursor'

const Cursor = () => {
    return (
        <div className='Cursor'>
            <AnimatedCursor
                innerSize={8}
                outerSize={40}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: "#a6a6a6",
                }}
                outerStyle={{
                    border: "3px solid #a6a6a6",
                }}
            />
        </div>
    )
}

export default Cursor