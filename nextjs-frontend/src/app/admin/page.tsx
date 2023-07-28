import InterestComponent from "./components/InterestComponent/InterestComponent"
import PageWrapper from "./components/PageWrapper/PageWrapper"
export default function Admin() {
    return (
      <PageWrapper>
        <main className="p-2"
        >
          <section className="w-full h-[200px] p-2">
            <InterestComponent/>
          </section>
        </main>
      </PageWrapper>
    )
  }
  