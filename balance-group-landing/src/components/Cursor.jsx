import AnimatedCursor from 'react-animated-cursor'

const Cursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "3px solid #eee",
        }}
      />
    </>
  )
}

export default Cursor
