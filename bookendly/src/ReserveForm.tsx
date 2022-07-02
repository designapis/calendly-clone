export default function ReserveForm({startDate, startTime}: {
  startDate: Date;
  startTime: string;
}) {
  return (
    <div>
      <section>
	<h3 className="text-gray-600" >Confirm your slot for {startDate.toString()} on {startTime}</h3>
	<form>
	  <input name="" type="text" placeholder="Email"/>
	  <input name="" type="text" placeholder="Full name"/>
	  <button className="bg-blue-600 hover:bg-blue-500 px-2.5 py-1.5 text-white" >Confirm</button>
	</form>
      </section>
    </div>
    
  )
  
}
