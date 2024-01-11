import React from 'react'
import styles from '../style/styles'
function EventCard() {
  return (
    <div className={`w-full md:flex lg:flex bg-white rounded-lg block`}>
<div className="w-full lg:-w[50%] m-auto">
        <img src=" https://t3.ftcdn.net/jpg/04/87/59/10/240_F_487591053_1gMK8oVwGaygolMPDTpVTtPYJhKCpTQQ.jpg" alt="" />
      </div>
<div className="w-full lg:[w-50%] flex flex-col justify-center">
<h2 className={`${styles.productTitle}`}>Mac book m1 </h2>
        <p className='text-[10px] font-[200]'>Apple’s newest Macs don’t come with Intel processors. Instead, they use the brand-new Apple M1 chip, a powerful replacement for the many generations of Intel CPUs that have powered Apple computers since 2006.

The M1 is the first appearance of the new paradigm that Apple has dubbed Apple Silicon. The new Macs available with the M1 include the MacBook Air, the 13-inch MacBook Pro, the Mac mini, and the new 24-inch iMac. The newest iPad Pro also uses the M1.
        </p>
        <div className=" flex">

        <h3 className={`${styles.price}`}>₹ 80000</h3>
        <h3 className={`font-[400] text-[17px] text-[#68d284]`}>₹ 75000</h3>
        </div>
</div>
    </div>
  )
}

export default EventCard