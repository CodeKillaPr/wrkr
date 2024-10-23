function MyNameIs() {
  return (
    <div className="md:w-72 md:h-52 xs:w-[15rem] xs:h-[10rem] bg-white border-4 border-amber-400/40 rounded-2xl p-4 rotate-[-15deg] shadow-[-8px_10px_40px_rgba(0,0,0,0.5)]">
      <div className="absolute flex bg-red-600 w-full h-[5rem] right-0 left-0 top-0 rounded-t-xl justify-center items-center">
        <header className="flex flex-col justify-center items-center h-full text-white">
          <h1 className="font-bold md:text-[2.5rem] xs:text-[1.9rem]">HELLO</h1>
          <h3 className="font-bold text-[1rem] mb-2">my name is</h3>
        </header>
      </div>
      <div className="flex justify-center items-center h-full md:mt-7 xs:mt-8">
        <main>
          <h1 className="md:text-4xl xs:text-lg font-bold">WRKR</h1>
        </main>
      </div>

      <div className="absolute felx bg-red-600 w-full h-[1rem] bottom-0 right-0 rounded-b-xl">
        <footer></footer>
      </div>
    </div>
  );
}
export default MyNameIs;
