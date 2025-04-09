export default function calculator() {
  return (
    <>
      <input
        type="text"
        name="calculator"
        id="calculator"
        className="bg-gray-600 text-4xl p-2 rounded-2xl"
      />
      <div className="flex justify-evenly py-6">
        <button type="button" className="px-4 py-1 bg-orange-300 text-4xl text-black">
          +
        </button>
        <button type="button" className="px-4 py-1 bg-orange-300 text-4xl text-black">
          -
        </button>
        <button type="button" className="px-4 py-1 bg-orange-300 text-4xl text-black">
          *
        </button>
        <button type="button" className="px-4 py-1 bg-orange-300 text-4xl text-black">
          /
        </button>
      </div>
      <div className="flex justify-evenly py-6 gap-4">
        <button type="button" className="px-4 py-1 bg-orange-600 text-xl rounded-full w-full">Calculate</button>
        <button type="reset" className="px-4 py-1 bg-red-600 text-xl rounded-full w-full">Reset</button>
      </div>
    </>
  );
}
