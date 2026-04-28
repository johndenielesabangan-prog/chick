/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedMenu } from './components/FeaturedMenu';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OnlineOrdering } from './components/OnlineOrdering';
import { Rewards } from './components/Rewards';
import { Testimonials } from './components/Testimonials';
import { LocationFinder } from './components/LocationFinder';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeaturedMenu />
        <WhyChooseUs />
        <OnlineOrdering />
        <Rewards />
        <Testimonials />
        <LocationFinder />
        <About />
      </main>
      <Footer />
    </div>
  );
}
