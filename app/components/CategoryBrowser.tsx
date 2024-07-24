import FetchCategories from "./FetchCategories"

export default function Page() {
  return (
    <div>
      <div className="mt-8 text-center align-middle p-5">
        <h1 className=" text-4xl font-bold">Browse The Range</h1>
        <p className=" opacity-55 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <FetchCategories/>
    </div>
  );
}
