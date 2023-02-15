import logo from './logo.svg';
import './App.scss';
import NavigationBar from './navigation';
import {Routes, Route} from "react-router-dom";


function App() {
	return (
    	<div className="App">
        <NavigationBar />
      		<Routes>
           <Route 
            path ="/Test1" 
            element={<div> test1 </div>}
            />
            <Route exact path = "/"
            
            />
      		</Routes>
      		
     	</div>
  	)
};

export default App;


