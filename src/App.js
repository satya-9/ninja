import React,{useState,useEffect,} from 'react';
import {Link, BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
  const [first, setfirst] = useState(0)
  const [second, setsecond] = useState(0)
  const [third, setthird] = useState(0)
  const [fourth, setfourth] = useState(0)
  const [fifth, setfifth] = useState(0)
  const firstclick=()=>{
    setfirst(first+1)
  }
  const secondclick=()=>{
    setsecond(second+1)
  }
  const thirdclick=()=>{
    setthird(third+1)
  }
  const fourthclick=()=>{
    setfourth(fourth+1)
  }
  const fifthclick=()=>{
    setfifth(fifth+1)
  }
return(
  <Router>
  <div>
    <div>
    <h1 className="create">My Creations</h1>
    <div>
    <div className="container">
      <iframe className="responsive-iframe" width="100%" src="https://roadoapp.herokuapp.com/"></iframe>
    
    </div>
    <div>
    <a target="_blank" href="https://roadoapp.herokuapp.com/"><button className="goto">Go to Link</button></a>
    </div>
    <div className="upvote">
    <img className="up" onClick={firstclick} src="https://pbs.twimg.com/profile_images/1258514768236654593/BQCWsjIG_400x400.jpg" />
    <br/> <h4>{first}</h4>
</div>
    </div>
    </div>
    <div className="Fav">
    <h1 className="create">My Favourites</h1>
    <div className="favele">
    <div className="rows">
    <div className="container">
      <iframe className="responsive-iframe" width="100%"  src="https://www.ninjacart.in/"></iframe>
    
    </div>
    <div>
    <a target="_blank" href="https://www.ninjacart.in/"><button className="goto">Go to Link</button></a>
    </div>
    <div className="upvote">
    <img className="up" onClick={secondclick} src="https://pbs.twimg.com/profile_images/1258514768236654593/BQCWsjIG_400x400.jpg" />
    <br/> <h4>{second}</h4>
</div>
    </div>
    <div className="rows">
    <div className="container">
      <iframe className="responsive-iframe" width="100%"  src="https://www.the10xacademy.com/"></iframe>
    
    </div>
    <div>
    <a target="_blank" href="https://www.the10xacademy.com/"><button className="goto">Go to Link</button></a>
    </div>
    <div className="upvote">
    <img className="up" onClick={thirdclick} src="https://pbs.twimg.com/profile_images/1258514768236654593/BQCWsjIG_400x400.jpg" />
    <br/> <h4>{third}</h4>
</div>

</div>
    </div>
    <div>

    </div>

    </div>
    <div className="favele">
    <div className="rows">
    <div className="container" >
      <iframe className="responsive-iframe" width="100%"  src="https://angel.co/jobs"></iframe>
    
    </div>
    <div>
    <a target="_blank" href="https://angel.co/jobs"><button className="goto">Go to Link</button></a>
    </div>
    <div className="upvote">
    <img className="up" onClick={fourthclick} src="https://pbs.twimg.com/profile_images/1258514768236654593/BQCWsjIG_400x400.jpg" />
    <br/> <h4>{fourth}</h4>
</div>
    </div>
    <div className="rows">
    <div className="container" >
      <iframe className="responsive-iframe" width="100%"  src="https://www.naukri.com/"></iframe>
    
    </div>
    <div>
    <a target="_blank" href="https://www.naukri.com/"><button className="goto">Go to Link</button></a>
    </div>
    <div className="upvote">
    <img className="up" onClick={fifthclick} src="https://pbs.twimg.com/profile_images/1258514768236654593/BQCWsjIG_400x400.jpg" />
    <br/> <h4>{fifth}</h4>
</div>
    </div>
    <div>

    </div>

    </div>

  </div>
  </Router>

)

}

export default App;
