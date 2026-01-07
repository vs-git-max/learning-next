//server component by default
//fetch data inside a server component
//access backend resources directly
//not exposed to the client side

//YOU CANNOT ->
//use hooks
//add events

//all components will be server by default

function Home() {
  return (
    <div className="">
      <h1 className="">This is the Home Page at Root Route</h1>
    </div>
  );
}

export default Home;
