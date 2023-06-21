export default function Banner() {
  return (
    <div className="pt-24 px-12 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12  xl:w-9/12 sm:text-center">
        <h1 className="mb-8 text-center text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50 transition-all duration-500">
          <span></span>{" "}
          <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-blue-500 lg:inline">
            Build
          </span>{" "}
          <span>Eat </span>{" "}
          <span className=" w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-blue-500 lg:inline">
            Sleep
          </span>{" "}
          <span>Repeat </span>
        </h1>

        <p className="mt-12 mb-12 text-3xl text-center text-emerald-500">
          Hello and Welcome 🌱&nbsp;
          <span className="whitespace-nowrap">
            I'm <span className="font-bold">Roth</span>
          </span>
        </p>
      </div>
    </div>
  );
}
