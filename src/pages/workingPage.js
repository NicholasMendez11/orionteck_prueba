import Lottie from "lottie-react";
import Progress from "../../public/assets/progress.json";
export default function WorkingPage() {
  return (
   <div className="md:ml-40">
    <h1 className="text-2xl">Let&apos;s build it together </h1>
    <p>I am willing to improve, collaborate and participate.</p>
    <div className="text-2xl">

    <Lottie animationData={Progress} loop={true} style={{height:400}} />
    </div>
    <p className="animate-pulse text-right m-2">Thanks for the opportunity to participate !</p>
   </div>
  )
}
