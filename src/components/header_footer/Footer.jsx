
const Footer = (props) => {
  return (
    <div className="footer" >
      <p className='text-center pt-3'>© 2020 Study Buddy</p>
      <p className='float-end'>{props.type}</p>
    </div>
  )
}

export default Footer