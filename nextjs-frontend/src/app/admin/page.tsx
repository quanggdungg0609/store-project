import ChartComponents from "./components/ChartComponent/ChartComponents"
import InterestComponent from "./components/InterestComponent/InterestComponent"
import SummaryList from "./components/SummaryList/SummaryList"
import PageWrapper from "./components/PageWrapper/PageWrapper"
import TotalOrderComponent from "./components/TotalOrderComponent/TotalOrderComponent"
import TotalUsersComponent from "./components/TotalUsersComponent/TotalUsersComponent"

export default function Admin() {
    return (
      <PageWrapper>
        <main className="flex flex-col p-2 h-full gap-3"
        >
          <section className="w-full h-1/3 flex flex-row gap-3" id="overview-section">
            <InterestComponent/>
            <TotalOrderComponent/>
            <TotalUsersComponent/>
          </section>
          <section className="w-full h-2/3 flex flex-row gap-3">
            <ChartComponents/>
            <SummaryList/>
          </section>
        </main>
      </PageWrapper>
    )
  }
  