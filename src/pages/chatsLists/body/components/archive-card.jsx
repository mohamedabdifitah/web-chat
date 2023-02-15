import React from 'react';
import { CustomIcon } from '../../../../components/icons/custom-icons';
const ArchiveCard = () =>{
  return(
    <div class=" archived border-bottom" >

      <div className='archive-card-outline' href={"/new"}>
        <span className="green">
          <CustomIcon name={"archive"}/>
        </span>
          <span style={{top:"-3px"}} dir="auto"  aria-label="" class="chat-title text">Archived</span>

      </div>
    </div>
  )
}
export default ArchiveCard;