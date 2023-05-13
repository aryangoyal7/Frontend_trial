import {useState} from 'react'

import css from './DownloadAppUtil.module.css'

import ZomatoDownloadApp from '/images/ZomatoDownloadApp.png'

import DownloadAppModal from '../../../Modals/DownloadAppModal/DownloadAppModal'

function DownloadAppUtil() {
  let [modal, setModal] = useState(false)
  return <> 
    <div className={css.outerDiv} onClick={() => setModal(true)}>
      <div className={css.left}>
          <div className={css.txt}>Mobile app coming soon!</div>
          
      </div>
      <div className={css.right}>
          <img src={ZomatoDownloadApp} alt="Download app image"  className={css.img} />
      </div>
    </div>
    {modal ? <DownloadAppModal setModal={setModal} /> : ""}
  </>
}

export default DownloadAppUtil