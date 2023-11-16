import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import SearchCourse from './components/SearchCourse';
import DeleteCourse from './components/DeleteCourse';
import CourseViewall from './components/CourseViewall';

function App() {
  return (
    <div >
     <AddCourse/> 
     <SearchCourse/>
     <DeleteCourse/>
     <CourseViewall/>
       
    </div>
  );
}

export default App;
