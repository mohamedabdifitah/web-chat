import "./badge.css"

const CustomBadge = (props) => {
  const { count , className } = props
  return (
    <span className="badge-count ">
    <span className= {`badge-span ${className}`}>
      {count}
    </span>
  </span>
  )
}
export default CustomBadge;