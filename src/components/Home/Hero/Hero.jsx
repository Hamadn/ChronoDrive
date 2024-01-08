import logo from "../../../assets/McLaren-Background.jpg";
import Container from "../../container/Container";
import Button from "../../Button";
export default function Hero() {
  return (
    <div className="relative py-16 font-[Montserrat] min-h-[100vh] flex flex-col justify-start">
      <div className="absolute inset-0 flex place-items-center flex-col">
        <img
          src={logo}
          alt="Background Image"
          className="w-full h-full object-cover"
        />
      </div>
      <Container>
        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white mt-28">
          <h1 className="text-4xl md:text-[70px] font-extrabold leading-tight mb-6">
            Welcome to <span className="text-red-700">CHRONODRIVE</span> Car
            Dealership
          </h1>
          <div className="flex flex-col">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="flex flex-col">
                  <select
                    id="status"
                    className="w-full text-xl font-bold rounded border-2 border-red-700 text-black h-14 pl-5 pr-10 bg-white focus:outline-none appearance-none"
                  >
                    <option>All Makes</option>
                    <option>Ferrari</option>
                    <option>Lamborghini</option>
                    <option>McLaren</option>
                    <option>Nissan</option>
                    <option>Tesla</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    id="status1"
                    className="text-xl font-bold rounded border-2 border-red-700 text-black h-14 w-full pl-5 pr-10 bg-white focus:outline-none appearance-none"
                  >
                    <option>All Models</option>
                    <option>Portofino</option>
                    <option>GT-R</option>
                    <option>S5</option>
                    <option>720S</option>
                    <option>Rogue</option>
                    <option>Model X</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    id="status2"
                    className="text-xl font-bold rounded border-2 border-red-700 text-black h-14 w-full pl-5 pr-10 bg-white focus:outline-none appearance-none"
                  >
                    <option>All Years</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    id="status3"
                    className="text-xl font-bold rounded border-2 border-red-700 text-black h-14 w-full pl-5 pr-10 bg-white focus:outline-none appearance-none"
                  >
                    <option>All Engines</option>
                    <option>V12</option>
                    <option>V10</option>
                    <option>V8</option>
                    <option>V6</option>
                    <option>V4</option>
                    <option>V3</option>
                    <option>Electric</option>
                  </select>
                </div>
              </div>
              <div className="grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6">
                <Button className="flex place-content-center px-1 py-2 rounded-lg bg-red-700 hover:bg-red-900 font-bold shadow-lg shadow-red-200 transition ease-in-out duration-200 translate-10 w-full">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
