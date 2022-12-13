export default function Overlay() {
  return (
    <div className="z-0 sm:absolute sm:z-20">
      <div className="bg-black">
        <main>
          <div className="min-h-screen flex items-center justify-center">
            <img src='/images/under_construction.svg' alt="under_construction"/>
          </div>
        </main>
      </div>
    </div>
  )
}