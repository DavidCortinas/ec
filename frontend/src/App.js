import './css/App.css';
import { HeroHeader } from './components/HeroHeader';
import { MonthlyCalendar } from './components/MonthlyCalendar';
import { Events } from './components/Events';


function App() {
  return (
    <div className="App">
        <HeroHeader />
        <MonthlyCalendar />
        <Events />
    </div>
  );
}

export default App;
