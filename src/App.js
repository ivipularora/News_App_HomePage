import Cards from './Components/cards/cards';
import Header from './Components/header/header';
import Navbar from './Components/Navbar';

const Categories = [ "Business" , "Entertainment", "General", "Health" , "Science" , "Sports", "Technology"  ]

function App() {
 return(
 <div style={{overflowX: "hidden", padding: "5rem"}}> 
  <Header />
  <div style={{display: "flex", gap: "2rem", background: "#f6f6f6", textDecoration: "none"}}>
  <img src='/TOI.png' />
  {Categories &&   
  Categories.map((Category) => {
        return(
          <>
          <Navbar title={Category} />
          </>
       )}
      )
        }
    </div>    
  {Categories &&   
  Categories.map((Category) => {
        return(
          <>
           <Cards category={Category} />
          </>
       )}
      )
        }
        </div>
 )
}

export default App;
