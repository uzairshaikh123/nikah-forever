export default function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <span
        className={className}
        style={{ ...style,display:"inline", background: "red" ,borderRadius:"50%"}}
        onClick={onClick}
        />
    
    );
  }