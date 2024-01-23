import CommonHOC from "./CommonHOC"

const LikeImageHOC = ({LikeHandle,LikeCount})=>{
    return(
        <div>
            <button onClick={LikeHandle}>Like Image {LikeCount}</button>
        </div>
    )
}

export default CommonHOC(LikeImageHOC)