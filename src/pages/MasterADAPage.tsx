import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { MasterADADetails } from '../components/MasterADADetails';

export default function MasterADAPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader/>
      
      <main>
        <MasterADADetails />
      </main>

      <Footer />
    </div>
  );
}
