import Calculator from "@/components/calculator";

export default function Home() {
  return (
    <>
      <main className="p-12">
        <h1 className="text-6xl font-black text-center pb-12">Simple Calculator App</h1>
        <div className="w-fit mx-auto py-6">
          <Calculator />
        </div>
      </main>
    </>
  );
}
