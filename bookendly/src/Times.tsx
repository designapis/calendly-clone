export default function Times({times, startDate}: {
  times: string[];
  startDate: Date;
}) {
  return (
    <div>
      <section>
	<h3 className="text-gray-600" >Choose a time for {startDate.toDateString()}</h3>
	<div>
	  {times.map(v => (
	    <div className="flex flex-col ">
	      <button className="mt-2 bg-blue-600 rounded-md hover:bg-blue-500 px-1.5 py-2 text-white" >{v}</button>
	    </div>
	  ))}
	</div>
      </section>
    </div>
    
  )
  
}
