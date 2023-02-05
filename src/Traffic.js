import React from "react";

function Traffic({
    avgSpeed,
    conzoneName,
    laneType,
    collectDate
}){
    return(
        <div className="traffic">
            <h3>버스전용차로구간 방향별 일별 1시간 구간통행속도</h3>
            <div className="speed">평균속도: {avgSpeed}</div>
            <div className="conzoneName">콘존명: {conzoneName}</div>
            <div className="type">상세코드명: {laneType}</div>
            <div className="date">집계일자: {collectDate}</div>
        </div>
    )
}

export default Traffic;