import axios from "axios";
import React from "react";
import Traffic from "./Traffic";
class App extends React.Component {
  state = {
    isLoading: true,
    data:[],
  }

getTraffic() {
  const url = `http://data.ex.co.kr/openapi/buslane/speedDirection?key=5931477321&type=json&collectDate=20230204&collectHour=10&numOfRows=10&pageNo=1`;
  console.log(url);
  axios.get(url).then((Response)=>{
    const data = Response.data.list;
    console.log(data);

    this.setState({
      isLoading:false,
      data:data
    })
  })
}
componentDidMount(){
  this.getTraffic();
}
render(){
  const {isLoading, data} = this.state;

  return(
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading..</span>
        </div>
      ):(
        <div className="trafficInfo">
          {data.map((d,cnt)=>{
            return(<Traffic
              avgSpeed={data[cnt].avgSpeed}
              conzoneName={data[cnt].conzoneName}
              laneType={data[cnt].laneType}
              collectDate={data[cnt].collectDate}/>)
          })}
        </div>
      )}
    </section>
  )
}
}
export default App;
