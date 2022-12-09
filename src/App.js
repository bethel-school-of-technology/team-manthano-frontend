import { VehicleProvider } from './context/VehicleProvider';
import { UserProvider } from './context/UserProvider';
import './public/stylesheets/App.css';


function App() {
  return (
    <UserProvider>
      <VehicleProvider>
        <div>
          <p>This is the framework for the home page.</p>
        </div>
      </VehicleProvider>
    </UserProvider>
  );
}

export default App;
