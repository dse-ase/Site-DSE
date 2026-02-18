import { SimpleHeader } from '../components/SimpleHeader';
import { Footer } from '../components/Footer';
import { MasterASDSDetails } from '../components/MasterASDSDetails';

export default function MasterPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SimpleHeader showContent={true} />
      
      <main>
        <MasterASDSDetails />
      </main>

      <Footer />
    </div>
  );
}
