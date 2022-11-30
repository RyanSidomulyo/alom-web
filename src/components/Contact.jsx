import React from "react"
import Common from "./common/Common"

const Contact = () => {
  return (
    <>
      <section className='contact creative'>
        <div className='container'>
          <div className='itemContent'>
            <Common title='contact' />
            <div className='content flex'>
              <div className='contentRight'>
                <img src='./images/home/imgalom.jpg' alt='' />
              </div>
              <div className='contentLeft'>
                <span>
                  <i className='fa fa-map-marker-alt'> </i>
                  Malalayang street, Manado, Indonesia.
                </span>
                <br /> <br />
                <span>
                  <i className='fa fa-envelope'></i>
                  shalomjoan02@gmail.com
                </span>
                <br /> <br />
                <span>
                  <i className='fa fa-phone'></i>
                  +08 9518 8578 20
                </span>
                <form>
                  <input type='text' placeholder=' Your Name' name='' id='' />
                  <input type='text' placeholder=' Your Email' name='' id='' />
                  <input type='text' placeholder=' Whats your INTERSTED in?  ' name='' id='' />
                  <textarea cols='30' rows='10'>
                    YOUR MESSAGE
                  </textarea>
                  <button className='primary-btn'>
                    SUBMIT <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
