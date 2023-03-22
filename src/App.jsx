import styles from "./style";
import { Footer, Navbar, Hero, CardsItems, BotDetails } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { feedback } from "./constants";

import DataContext from "./components/FeedbackContext";

const App = () => (
  <DataContext.Provider value={feedback}>
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className={`bg-primary ${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Hero />
                  </div>
                </div>

                <div
                  className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
                >
                  <div className={`${styles.boxWidth}`}>
                    <CardsItems />
                    <Footer />
                  </div>
                </div>
              </>
            }
          />
          <Route path="bot/:botId" element={<BotDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  </DataContext.Provider>
);

export default App;
