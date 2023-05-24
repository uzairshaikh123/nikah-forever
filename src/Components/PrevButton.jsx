
  
  export default function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <span
        className={className}
        style={{ ...style,display:"inline-block", background: "red",position:"absolute",right:"10px",borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }