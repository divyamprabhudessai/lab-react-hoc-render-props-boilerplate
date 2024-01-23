import CommonHOC from "./CommonHOC"

const LikePostHOC = ({LikeHandle,LikeCount})=>{
    return(
        <div>
            <button onClick={LikeHandle}>Like Post {LikeCount}</button>
        </div>
    )
}

export default CommonHOC(LikePostHOC)