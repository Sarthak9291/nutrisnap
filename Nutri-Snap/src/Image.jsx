import React, { useState } from 'react';

function Image(){
    return(<> <h1>This is image</h1>
    <div className='photo'>
      <input type="file" accept="image/*" capture="environment" />
    </div>
     

    
    </>
    )
}



export default Image;