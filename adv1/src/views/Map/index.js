import React, {Component} from 'react'



export default class Map extends Component {

    constructor(){
        super()

        console.log("constructor....")
       
    }

    componentDidMount() {

        const daum = window.daum

        const el = document.getElementById('map');
        let map = new daum.maps.Map(el, {
            center: new daum.maps.LatLng(33.450701, 126.570667),
        });

        daum.maps.event.addListener(map, 'click', function(mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;
    
            var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';
    
            alert(message)
    
        });
    }


    render() {
        return (
            <div>
                <div id="map" style={style}></div>
            </div>            
        )
    }
}

const style = {
    width:"100%",
    height:"350px"
}