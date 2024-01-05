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
                    backgroundColor: "#8B8B8B   ",
                }}
                outerStyle={{
                    border: "3px solid #8B8B8B",
                }}
            />
        </div>
    )
}

export default Cursor