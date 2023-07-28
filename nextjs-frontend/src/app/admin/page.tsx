import InterestComponent from "./components/InterestComponent/InterestComponent"
import PageWrapper from "./components/PageWrapper/PageWrapper"
import TotalOrderComponent from "./components/TotalOrderComponent/TotalOrderComponent"
import TotalUsersComponent from "./components/TotalUsersComponent/TotalUsersComponent"

export default function Admin() {
    return (
      <PageWrapper>
        <main className="p-2"
        >
          <section className="w-full h-[200px] p-2 flex flex-row gap-3">
            <InterestComponent/>
            <TotalOrderComponent/>
            <TotalUsersComponent/>

          </section>
        </main>
      </PageWrapper>
    )
  }
  