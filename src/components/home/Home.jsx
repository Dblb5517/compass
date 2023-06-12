import './home.scss';
import Info from '../info/Info';
import data from '../../data';
import {useParams} from "react-router-dom";

const Home = () => {
    const param = useParams();
    console.log(param.url,data[0].url);
    return(
        <div>
            {param == {} ? 
            <span>barev</span>
            :
            <div>
            {data.filter((item)=>{
                return item.url == param.url;
            })
            .map((item,i)=>{
                return <Info key={i} data={item}/>
            })
            }
            </div>
            }
        </div>
    )
}

export default Home;