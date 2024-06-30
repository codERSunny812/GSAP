import { Outlet, createBrowserRouter , Link } from "react-router-dom";
import BasicAnimation from './BasicAnimation';
import TextAnimation from './TextAnimation';
import MoreAnimation from "./MoreAnimation";
import TimeLine from "./TimeLine";


// gsap.registerPlugin(useGSAP);

function App() {


  // const h1Ref = useRef(null);
  // const box1= useRef(null);
  // const box2 = useRef(null);
  // const box3 = useRef(null);

//   useGSAP(() => {



//     //time line in gsap

//     // const tl = gsap.timeline();

//     // tl.to(box1.current,{
//     //   x:1000,
//     //   duration:2,
//     //   y:4,
//     //   backgroundColor:"yellow",
  

//     // });

//     // tl.to(box2.current,{
//     //   x: 1000,
//     //   duration: 2,
//     //   y: 4,
//     //   backgroundColor: "tomato",

//     // });

//     // tl.to(box3.current,{
//     //   x: 1000,
//     //   duration: 2,
//     //   y: 4,
//     //   backgroundColor: "white",
     
//     // });
    

// // for the heading text 
//     // gsap.from("h1",{
//     //   x:20,
//     //   y:133,
//     //   opacity:0.5,
//     //   duration:2,
//     //   stagger:1
//     // })

//     const timeLine = gsap.timeline();

//     timeLine.from('h1',{
//       y:-30,
//       opacity:0,
//       duration:1,
//       delay:0.5
//     })

//     timeLine.from('h2', {
//       y: -30,
//       opacity: 0,
//       duration:0.7,
//       stagger:1
//     })


//     timeLine.from("h4",{
//       y:40,
//       opacity:0,
//       duration:2,
//       stagger:1
//     })


//   },

//   )




  return (
    <>
      <div className="App">


        <h1 className='capitalize  text-center text-2xl mt-2'>gsap learning</h1>

        <div className="topicList">
         <Link to='/topic-1'>
            <h2 className='my-4'>Basic animations of gsap</h2>
         </Link>

          <Link to='/topic-2'>
            <h2 className='my-4'>text animation</h2>
          </Link>
          <Link to='/topic-3'>
            <h2 className='my-4'>Box animation</h2>
          </Link>
          <Link to='/topic-4'>
            <h2 className='my-4'>TimeLine in gsap</h2>
          </Link>
          <Link to='/topic-2'>
            <h2 className='my-4'>text animation</h2>
          </Link>
          <Link to='/topic-2'>
            <h2 className='my-4'>text animation</h2>
          </Link>
          <Link to='/topic-2'>
            <h2 className='my-4'>text animation</h2>
          </Link>


          
        </div>
        

         {/* <span style={{display:"flex",justifyContent:"center",alignItems:"center" , fontSize:"30px" , textTransform:"capitalize"}}>timeline in GSAP</span>

        

        {/* more about time line
         */}

         {/* <div className="part1">

          <h1>logo</h1>
          <div className="part2">
            <h2>home</h2>
            <h2>about</h2>
            <h2>contact us</h2>
            <h2>courses</h2>
          </div>
         </div>

         <div className="text">
          <h4>hello coder's</h4>
         </div> */}



         {/* scrool trigger in gsap  */}

          





      </div>


    </>
  )
}


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/topic-1',
    element:<BasicAnimation/>
  },
  {
    path: '/topic-2',
    element: <TextAnimation/>
  },{
    path:'/topic-3',
    element:<MoreAnimation/>
  },{
    path:"/topic-4",
    element:<TimeLine/>
  }
])

export default router
