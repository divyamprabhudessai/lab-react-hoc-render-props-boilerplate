import React, { useState } from "react";

// (commonhoc function returns logic 
// which inturn is a method that enhances the wrappedHOC component and returns it.)

function CommonHOC(WrappedHOC) {
    const Logic = () =>
    
    {const [like,setLike] = useState(0);

    const handleLike = () => {
        // setlike is a func
        setLike((prevState) => prevState+1 );
    }

    return(
        <WrappedHOC LikeHandle={handleLike} LikeCount = {like} />
    )
    }

    return Logic
   
}

export default CommonHOC