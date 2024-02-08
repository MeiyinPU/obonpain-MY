import React from "react";
import Header from "../../composants/Header/Header";
import Footer from "../../composants/Footer/Footer";

export default function DashboardClientPage() {
  return (
    <div>
      <Header />
      <h1>Dashboard client</h1>
      <Footer />

      <section>
        <h2>Ma prochaine livraison</h2>
        <div>
          <div>Jour de livraison</div>
          <div>Nomme</div>
          <div>Jour de livraison</div>
        </div>
      </section>

      <section>
        <h2>Mes prochaines commandes</h2>
        <div></div>
      </section>
    </div>
  );
}
