export default function Inputs_chechout() {
    return <div>
          <div className=" flex justify-around w-[608px]">
            <div>
            <label htmlFor="First" className="cursor-pointer font-medium">First Name</label><br /><br />
            <input type="text" id="First" className="w-[200px] h-[75px] p-2 border-2 border-black rounded-lg" />
            </div>
          <div>
          <label htmlFor="Last" className="cursor-pointer font-medium">Last Name</label><br /><br />

          <input type="text" id="Last" className="w-[200px] h-[75px] p-2 border-2 border-black rounded-lg" />
          </div>
        </div>
      <div className="mt-[40px] ml-[50px]">
      <label htmlFor="Company" className="font-semibold">Company Name (Optional)</label><br />
      <input type="text" id="Company" className="w-[500px] h-[75px] p-2 border-2 border-black rounded-lg"/>
      </div>
      <div className="mt-[40px] ml-[50px]">
      <label htmlFor="Country / Region" className="font-semibold">Country / Region / Region</label><br />
      <input type="text" id="Country / Region" className="w-[500px] h-[75px] p-2 border-2 border-black rounded-lg" placeholder="Sri Lanka"/>
      </div>
      <div className="mt-[40px] ml-[50px]">
      <label htmlFor="Street" className="font-semibold">Street address</label><br />
      <input type="text" id="Street" className="w-[500px] h-[75px] p-2 border-2 border-black rounded-lg"/>
      </div>
      <div className="mt-[40px] ml-[50px]">
      <label htmlFor="Town" className="font-semibold">Town / City</label><br />
      <input type="text" id="Town" className="w-[500px] h-[75px] p-2 border-2 border-black rounded-lg"/>
      </div>
      <div className="mt-[40px] ml-[50px]">
      <label htmlFor="Province" className="font-semibold">Province</label><br />
      <input type="text" id="Province" className="w-[500px] h-[75px] p-2 border-2 border-black rounded-lg" placeholder="Western Province"/>
      </div>
      <div className="mt-[40px] ml-[50px]">
      <label htmlFor="ZIP" className="font-semibold">ZIP code</label><br />
      <input type="number" id="ZIP" className="w-[500px] h-[75px] p-2 border-2 border-black rounded-lg"/>
      </div>
      <div className="mt-[40px] ml-[50px]">
      <label htmlFor="Phone" className="font-semibold">Phone</label><br />
      <input type="number" id="Phone" className="w-[500px] h-[75px] p-2 border-2 border-black rounded-lg"/>
      </div>
      <div className="mt-[40px] ml-[50px]">
      <label htmlFor="Email" className="font-semibold">Email address</label><br />
      <input type="email" id="Email" className="w-[500px] h-[75px] p-2 border-2 border-black rounded-lg"/>
      </div>
      <div className="mt-[40px] mb-[130px] ml-[50px]">
      <input type="text" className="w-[500px] h-[75px] p-2 border-2 border-black rounded-lg" placeholder="Additional information"/>
      </div>
    </div>
}