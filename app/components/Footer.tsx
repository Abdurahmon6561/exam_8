export default function Footer() {
  return (
  <div>
      <div className="flex justify-around mt-[120px] mb-6">
      <div>
        <h1 className="text-2xl font-bold p-4">Furniro</h1>
        <p className="text-base opacity-55 p-4">
          400 University Drive Suite 200 Coral Gables, <br />
          FL 33134 USA
        </p>
      </div>
      <div>
        <h2 className="text-base opacity-55 p-2">Links</h2>
        <ul>
          <li className="p-2 cursor-pointer">Home</li>
          <li className="p-2 cursor-pointer">Shop</li>
          <li className="p-2 cursor-pointer">About</li>
          <li className="p-2 cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        <h2 className="text-base opacity-55 p-2">Help</h2>
        <ul>
          <li className="p-2 cursor-pointer">Payment Options</li>
          <li className="p-2 cursor-pointer">Returns</li>
          <li className="p-2 cursor-pointer">Privacy Policies</li>
        </ul>
      </div>
      <div>
        <h2 className="text-base opacity-55 p-2">Newsletter</h2>
        <input type="email" placeholder="Enter Your Email Address" className=" outline-none p-2" />
        <button className=" p-2 underline underline-offset-8 ">SUBSCRIBE</button>
      </div>
    </div>
    <hr />
      <p className=" p-4 ml-14">2023 furino. All rights reverved</p>
  </div>

  );
}
